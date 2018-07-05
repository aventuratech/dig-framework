import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import DigClient from "./DigClient";

//todo make this configurable through .env
const digBase = "/dig";


/**
 * DigClientFirebase provides a restful interface for the Firebase Firestore document database
 *
 */
class DigClientFirebase extends DigClient{
  getOptions = (options) => {
    const defaultOptions = {
      basePath: '',
      limit: 100,
      responseType: 'array'
    }
    return Object.assign(defaultOptions, options);
  }

  getClient(){
    const firebaseConfig = this.appSettings.firebase;
    if(! firebaseConfig) throw 'Firebase is not configured.';

    if (!firebase.apps.length) {
      const app = firebase.initializeApp(firebaseConfig);
      app.firestore().settings({ timestampsInSnapshots: true });
    }

    return firebase.app();
  }

  /**
   * Get a document or collection
   *
   * @example DigClientFirebase.get('pages') fetch all pages
   * @example DigClientFirebase.get('pages', {where: [{featured, "==", true}], limit: 10}) fetch 10 featured pages
   * @example DigClientFirebase.get('pages/id') fetch a specific page
   *
   * @params options.where array
   * @param options.responseType string (array|snapshot|live)
   *
   */
  get = (path, options = {}) => {
    options = this.getOptions(options);
    // todo support nested collections
    const pathParts = path.split('/').filter(part => part !== '');
    const isDoc = pathParts.length % 2 === 0;
    return new Promise((resolve, reject) => {
      if(isDoc) {
        this.getClient().firestore().doc(path).get().then(doc => {
          if(doc.exists) {
            resolve(doc.data());
          } else {
            reject('Doc not found: ' + path);
          }
          return;
        });
      } else {
        const collection = this.getClient().firestore().collection(path);
        let query = collection.limit(options.limit);
        if(options.where) {
          options.where.map(where => {
            query = query.where(where);
            return where;
          });
        }
        if(options.orderBy) {
          options.orderBy.map(orderBy => {
            query = query.where(orderBy);
            return orderBy;
          });
        }
        query.get().then(snapshot => {
          const returnArr = [];

          snapshot.forEach(doc => {
            returnArr.push(Object.assign(doc.data(), { fs_id: doc.id }));
          });

          resolve(returnArr);
        }, err => reject(err));
      }
      // this.getClient().firestore().collection(path).add(data).then(doc => {
      //   resolve(doc.id);
      // });
    })
  }

  /**
   * Create a new document
   *
   * @param path string
   * @param data object
   * @param options
   */
  post = (path, data, options = {}) => {
    options = this.getOptions(options);
    return new Promise((resolve, reject) => {
      this.getClient().firestore().collection(options.basePath + path).add(data).then(doc => {
        resolve(doc.id);
      }, err => reject(err));
    })
  }

  /**
   * Replace an existing document
   *
   * @param path
   * @param data
   * @param options
   */
  put = (path, data, options = {}) => {
    options = this.getOptions(options);
    return new Promise((resolve, reject) => {
      this.getClient().firestore().doc(options.basePath + path).set(data).then(doc => {
        resolve(doc);
      }, err => reject(err));
    })
  }

  /**
   * Update an existing document
   *
   * @param path
   * @param data
   * @param options
   */
  patch = (path, data, options = {}) => {
    options = this.getOptions(options);
    return new Promise((resolve, reject) => {
      this.getClient().firestore().doc(options.basePath + path).set(data, {merge: true}).then(doc => {
        resolve(doc);
      }, err => reject(err));
    })
  }

  /**
   * Delete a document
   *
   */
  delete = (path, options = {}) => {
    options = this.getOptions(options);

  }

  /**
   * Fetch the current firebase api instance
   */
  firebase = () => {
    return this.firebaseApp;
  }

}

export default DigClientFirebase;




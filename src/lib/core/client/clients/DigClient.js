export default class DigClient {

  constructor(appSettings) {
    this.appSettings = appSettings;
  }

  get = () => {
    throw 'Get method not implemented in this client';
  }
  post = () => {
    throw 'Post method not implemented in this client';
  }
  put = () => {
    throw 'Put method not implemented in this client';
  }
  patch = () => {
    throw 'Patch method not implemented in this client';
  }
  delete = () => {
    throw 'Delete method not implemented in this client';
  }
}
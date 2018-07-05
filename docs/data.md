Data Access
-----------

All of the data access is directed through DigClient. These clients follow a straightforward REST interface, exposing
all of the standard REST verbs.

```javascript
const firebase = digClient.get('firebase');

// get the posts collection
const options = {};

// fetch all posts
firebase.get('/posts', options).then(posts => {}); 

// fetch a specific post
firebase.get('/posts/id', options).then(post => {}); 

// create a post
firebase.post('/posts', {...postData}, options).then(postId => {}); 

// update a post
firebase.patch('/posts', {...newData}, options).then(postId => {}); 

// replace a post
firebase.put('/posts', {...postData}, options).then(postId => {}); 

// delete a post
firebase.delete('/posts', {...postData}, options).then(result => {}); 
```
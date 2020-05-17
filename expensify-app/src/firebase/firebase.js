// takes all the exported variables and create a new object variable
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAR9JmI8PY7MFmUgAu189F8n7KxOLR_FQE",
    authDomain: "expensify-4df95.firebaseapp.com",
    databaseURL: "https://expensify-4df95.firebaseio.com",
    projectId: "expensify-4df95",
    storageBucket: "expensify-4df95.appspot.com",
    messagingSenderId: "1026883915031",
    appId: "1:1026883915031:web:d72fc11d3bfa56aed1bb52"
  };

  firebase.initializeApp(firebaseConfig);

  // sets the database
  const database = firebase.database();


  export { firebase, database as default };

  //ref() gives a ref for a part of a DB (equivalent to mongo collections and SQL tables); 
  // we can use it with no arguments or with the path for the location in DB
  // set() completely overrides the existent value and replaces by the new value
/*   database.ref().set({
      name: 'Mariana Costa',
      age: 33,
      isDev: true,
      stressLevel: 3,
      job: {
          title: 'Dev',
          company: 'Google'
      },
      location: {
          city: 'Porto',
          country:'Portugal'
      }
  }).then(() => {
      console.log('Data is saved!')
  }).catch(e => {
      console.log('This failed', e)
  });  */


/* database.ref('age').set(32);

database.ref('location/city').set('Gaia');

// Both ways are allowed to remove data
/* database.ref('isDev').remove();
database.ref('isDev').set(null);
 */

// only updates at root level, do not update nested objects (ex location), only if using location/city
/* database.ref().update({
    stressLevel: 9,
    'job/company': 'amazon',
    'location/city': 'Atlanta'
}); */

// once() returns a promise that resolves to all the data using a ref. Allow to fetch data only once
/* database.ref('location/city').once('value').then((snapshot) => {
    const val = snapshot.val();
    console.log(val)
}); */

// on() sets a subscription, allows to listen the event; fetches data every time it changes
/* const onChangeValue = database.ref().on('value', (snapshot => {
    console.log(snapshot.val())
}));

// to unsubscribe 
database.ref().off(onChangeValue); */


/* database.ref('expenses').push({
    description: 'GAs',
    note: 'December',
    amount: 8325,
    createdAt: 700
});
 */
/* database.ref('expenses').once('value').then(snapshot => {
    const expenses = [];
    snapshot.forEach(childSnapshot => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot
        });
    });

    console.log(expenses);
});*/


//We can subscribe different events
/* database.ref('expense').on('value', snapshot => {
    const expenses = [];
    snapshot.forEach(childSnapshot => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot
        });
    });

    console.log(expenses);
});  */

// fires every time a child is removed 
/* database.ref('expense').on('child_remove', snapshot => {
    console.log(snapshot.key, snapshot.val());
}); 
 */
// fires every time a child is changed
/* database.ref('expense').on('child_changed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});  */


// fires , once for each child in the listevery time a child is added
/* database.ref('expense').on('child_added', snapshot => {
    console.log(snapshot.key, snapshot.val());
}); 
 */
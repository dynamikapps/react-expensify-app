import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyA-vU3cXgcmdVPr8-wh8TUlUR-bkcPg-AE",
  authDomain: "expensify-bee30.firebaseapp.com",
  databaseURL: "https://expensify-bee30.firebaseio.com",
  projectId: "expensify-bee30",
  storageBucket: "expensify-bee30.appspot.com",
  messagingSenderId: "330904318230"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// ------ Add Data
// database
//   .ref()
//   .set({
//     name: "Andrew Mead",
//     age: 26,
//     isSingle: false,
//     location: {
//       city: "Orlando",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("Failed", e);
//   });

// ------ Remove data 1
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch(e => {
//     console.log("Failed not removed", e);
//   });

// ------ Remove data 2
// database.ref("isSingle").set(null);

// ------- Set specific data by ref
// database.ref("age").set(29);
// database.ref("location/city").set("New York");
// database.ref("attribute").set({
//   height: 70,
//   weight: 180
// });

// ------- Update field correctly
// database.ref().update({
//   name: "Andy M",
//   age: 26,
//   job: "Dev",
//   isSingle: null
// });

// database.ref().update({
//   "location/city": "Tampa",
//   job: "Owner"
// });

// ------ Get data ONCE ------------
// ref location
// ref location/city
// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   })
//   .catch(e => {
//     console.log("Failed", e);
//   });

// ------ Get data WHEN CHANGES Subscribe ------------
// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Failed", e);
//   }
// );

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// setTimeout(() => {
//   database.ref("isSingle").set(false);
// }, 3500);

// ------ UnSubscribe ------------
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// ------ Array PUSH ------------
// database.ref('notes/id').push({
//   title: "To DO",
//   body: "Money Team"
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
// })

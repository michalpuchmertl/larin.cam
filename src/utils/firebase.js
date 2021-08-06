import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCDN0Hii6Mznt2Y_DaRprMWVn7kwR9-xlY',
  authDomain: 'larincam.firebaseapp.com',
  projectId: 'larincam',
  storageBucket: 'larincam.appspot.com',
  messagingSenderId: '70794209044',
  appId: '1:70794209044:web:1f0ccefcdfb498f5fcc401',
};
// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}

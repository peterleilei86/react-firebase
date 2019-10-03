import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDI48YMUf3xjwAVbnQTt_r_i8wuqFgjia4',
  authDomain: 'react-firebase-75b10.firebaseapp.com',
  databaseURL: 'https://react-firebase-75b10.firebaseio.com',
  projectId: 'react-firebase-75b10',
  storageBucket: 'react-firebase-75b10.appspot.com',
  messagingSenderId: '131302087178',
  appId: '1:131302087178:web:31a27700d88799c040ddf3',
  measurementId: 'G-5VGZK3XBRS'
}

const app = firebase.initializeApp(config)

export default app

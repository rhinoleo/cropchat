
import firebase from 'firebase'

var config = {
 apiKey: 'AIzaSyARUD4-y15-RPyiIK9gARlafQM7JVDS_Zs',
 authDomain: 'cropchat-e78fd.firebaseapp.com',
 databaseURL: 'https://cropchat-e78fd.firebaseio.com',
 storageBucket: 'cropchat-e78fd.appspot.com',
 messagingSenderId: '491832089488'
}

firebase.initializeApp(config)

export default {
 database: firebase.database()
}
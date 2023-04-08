import './App.css';
import TodoMain from './components/TodoMain';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgFsamlsAdZm-ph87dlN_O0A_2rRrVW-s",
  authDomain: "todolist-b28fa.firebaseapp.com",
  projectId: "todolist-b28fa",
  storageBucket: "todolist-b28fa.appspot.com",
  messagingSenderId: "565057544607",
  appId: "1:565057544607:web:a05f713e7ca502ba6cddaa",
  measurementId: "G-C3RTD79N6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

  return (
    <>
      <TodoMain app={app} />
    </>
  );
}

export default App;


import './App.css';
import TodoMain from './components/TodoMain';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNea-WbZikFnIYES6992v6a9GzgQgAs5o",
  authDomain: "todolist-b7a83.firebaseapp.com",
  projectId: "todolist-b7a83",
  storageBucket: "todolist-b7a83.appspot.com",
  messagingSenderId: "633037246349",
  appId: "1:633037246349:web:8a8e472e1dc3e7042137c4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <TodoMain />
    </>
  );
}

export default App;


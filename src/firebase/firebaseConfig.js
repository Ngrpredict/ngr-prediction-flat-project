import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDmTxzjyEUr2lfhvW7m42S8jwh0kbdXzD0",
  authDomain: "ngr-predictions-86fcc.firebaseapp.com",
  projectId: "ngr-predictions-86fcc",
  storageBucket: "ngr-predictions-86fcc.appspot.com", // this is correct now
  messagingSenderId: "882774317247",
  appId: "1:882774317247:web:e5c0a9400dfeec2f8f8e0a"
};

export const app = initializeApp(firebaseConfig);

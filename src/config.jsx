
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



export const firebaseConfig = {
  apiKey: "AIzaSyCmh5_n_CtUffRye0BsKPr8iUbm4NeUdS0",
  authDomain: "axolo-expreso.firebaseapp.com",
  projectId: "axolo-expreso",
  storageBucket: "axolo-expreso.appspot.com",
  messagingSenderId: "458101163157",
  appId: "1:458101163157:web:53ae02b0f9a8398584079c",
  measurementId: "G-ESGW4DF4P6"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


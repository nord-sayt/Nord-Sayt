import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// 🟢 ثبت‌نام
export function register(email, pass){
  return createUserWithEmailAndPassword(auth, email, pass);
}

// 🔵 ورود
export function login(email, pass){
  return signInWithEmailAndPassword(auth, email, pass);
}

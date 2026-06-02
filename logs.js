import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

// 📌 ثبت فعالیت
export function addLog(user, action){
  return addDoc(collection(db,"logs"),{
    user,
    action,
    time:new Date().toISOString()
  });
}

import { db } from "./firebase.js";
import { collection, addDoc, onSnapshot, updateDoc, doc } from "firebase/firestore";

// 📩 ارسال تیکت
export async function sendTicket(user, msg){
  await addDoc(collection(db,"tickets"),{
    user,
    msg,
    reply:"",
    status:"open",
    time:Date.now()
  });
}

// 👀 دریافت زنده تیکت‌ها
export function listenTickets(callback){
  onSnapshot(collection(db,"tickets"), snap=>{
    const data = snap.docs.map(d=>({id:d.id,...d.data()}));
    callback(data);
  });
}

// 💬 پاسخ ادمین
export async function replyTicket(id, text){
  await updateDoc(doc(db,"tickets",id),{
    reply:text,
    status:"answered"
  });
}

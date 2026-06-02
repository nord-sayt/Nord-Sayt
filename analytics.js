import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

// 📊 گرفتن آمار
export async function getStats(){

const logsSnap = await getDocs(collection(db,"logs"));

let total = logsSnap.size;

let users = new Set();

logsSnap.forEach(doc=>{
  users.add(doc.data().user);
});

return {
  totalActions: total,
  activeUsers: users.size
};

}

import { sendTicket, listenTickets, replyTicket } from "./tickets.js";
import { addLog } from "./logs.js";
import { getStats } from "./analytics.js";

let app = document.getElementById("app");

let user = prompt("Username:");
addLog(user,"LOGIN");

// 👑 roles
const admins = ["mohammadamin","admin1","admin2","admin3","admin4","admin5"];

window.show = function(page){

// HOME
if(page=="home"){
app.innerHTML=`
<div class="card">
<h1>🔥 NORD GOD PANEL</h1>
<p>User: ${user}</p>
</div>`;
}

// SUPPORT
if(page=="support"){
app.innerHTML=`
<div class="card">
<h2>پشتیبانی</h2>
<textarea id="msg"></textarea>
<button onclick="send()">ارسال</button>
</div>`;
}

// ADMIN
if(page=="admin"){

if(!admins.includes(user)){
app.innerHTML="⛔ Access Denied";
return;
}

listenTickets(tickets=>{
app.innerHTML=`
<div class="card">
<h2>ADMIN PANEL</h2>

${tickets.map(t=>`
<div class="card">
<p>${t.user}</p>
<p>${t.msg}</p>
<p>Reply: ${t.reply}</p>

<input id="r_${t.id}">
<button onclick="reply('${t.id}')">پاسخ</button>
</div>
`).join("")}

</div>`;
});

}

}

// 📩 send ticket
window.send = async function(){
let msg = document.getElementById("msg").value;
await sendTicket(user,msg);
addLog(user,"SEND_TICKET");
alert("sent");
}

// 💬 reply
window.reply = async function(id){
let text = document.getElementById("r_"+id).value;
await replyTicket(id,text);
}

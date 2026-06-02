// ---------------- USER ----------------
function register(){
  let u = user.value;
  let p = pass.value;

  localStorage.setItem("u_"+u,p);
  alert("ثبت شد");
}

function login(){
  let u = user.value;
  let p = pass.value;

  if(localStorage.getItem("u_"+u)===p){
    localStorage.setItem("login",u);
    location.reload();
  }else alert("اشتباه");
}

function logout(){
  localStorage.removeItem("login");
  location.reload();
}

// ---------------- SUPPORT ----------------
function sendTicket(){
  let msg = document.getElementById("msg").value;

  let data = JSON.parse(localStorage.getItem("tickets")||"[]");

  data.push({
    user: localStorage.getItem("login"),
    msg: msg,
    reply:"در انتظار پاسخ"
  });

  localStorage.setItem("tickets",JSON.stringify(data));
  alert("ارسال شد");
}

// ---------------- ADMIN REPLY ----------------
function reply(i){
  let data = JSON.parse(localStorage.getItem("tickets"));

  let r = document.getElementById("r"+i).value;

  data[i].reply = r;

  localStorage.setItem("tickets",JSON.stringify(data));
  location.reload();
}

// ---------------- ADD DOWNLOAD ----------------
function addFile(){
  let f = document.getElementById("file").value;
  let d = document.getElementById("desc").value;

  let files = JSON.parse(localStorage.getItem("files")||"[]");

  files.push({file:f,desc:d});

  localStorage.setItem("files",JSON.stringify(files));
  location.reload();
}

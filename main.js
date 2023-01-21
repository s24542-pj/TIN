
function Loginsave(){
  var login = document.getElementById("login");
  var password = document.getElementById("password");
  localStorage.setItem("login", login.value);
  localStorage.setItem("password", password.value);

  window.open("author2.html","_self");

}

function Loginifitis(){

  if(localStorage.getItem("login") === null){
      window.open("author.html","_self");
  }else{
      window.open("author2.html","_self");
      window.onload = Displaypost;
  }
}

function Clear(){
  localStorage.removeItem("login");
  window.open("author.html","_self");
}
function username(){
  var p = document.createElement('p');
  p.classList.add('username')
  p.innerHTML = " Welcome: "+ "<b>"+localStorage.getItem("login")+"</b>";

  document.getElementById("usernameblock").appendChild(p);
}

function Getdata(){
  var title = document.getElementById("title");
  var inside = document.getElementById("inside");
  var ulogin = localStorage.getItem("login");

  const post = {
    postlogin : ulogin,
    posttitle : title.value,
    postinside : inside.value
  }
  for (let i = 0; i < 9; i++){
    if (localStorage.getItem(i) === null){
      window.localStorage.setItem(i,JSON.stringify(post))
      break;
    } else {
      continue;
    }
  }
  window.open("author2.html","_self");
}
function Edittxt(){
  var etitle = document.getElementById("title");
  var einside = document.getElementById("inside");
}

function Displaypost() {

  for (let i = 0; i < 9; i++){
    if (localStorage.getItem(i) == null){
      continue;
    } else {
      let log = localStorage.getItem(i);
      let logg = JSON.parse(log);
      var pos = document.createElement('div');
      pos.className = 'row';
      

      pos.innerHTML =`
        <h2>`+ logg.posttitle +`</h2>
        <div class="editt">
          
        </div>
        <p class="text">`+ logg.postinside +`</p>
        <div class="editt">
          
        </div>
        <div class="postflex">
          <p class="loginparagraph">Created by:<b>`+ logg.postlogin +`</b></p>
          <button id="edit" onclick="Edittxt()">EDIT</button>
          <button id="click" onclick="Removepost(`+i+`)">DELETE POST</button>
        </div>
        
      `
      ;
      if(localStorage.getItem("login")==logg.postlogin){
        document.getElementsByClassName('postbox')[0].appendChild(pos);
      } else {
        continue;
      }
    }
  }
}

function Removepost(input){
  localStorage.removeItem(input);
  window.open("author2.html","_self");
}

function Removeallpost(){
  for (let i = 0; i < 9; i++){
    if (localStorage.getItem(i) == null){
      continue;
    } else {
      localStorage.removeItem(i);
      window.open("author2.html","_self");
    }
  }
}

function Displayallposts(){
  for (let i = 0; i < 9; i++){
    if (localStorage.getItem(i) == null){
      continue;
    } else {
      let log = localStorage.getItem(i);
      let logg = JSON.parse(log);
      var pos = document.createElement('div');
      pos.className = 'rowp';

      pos.innerHTML =`
        <h2>`+ logg.posttitle +`</h2>
        <p class="text">`+ logg.postinside +`</p>
        <div class="postflex">
          <p class="loginparagraph">Created by:<b>`+ logg.postlogin +`</b></p>
        </div>
        
      `
      ;
      document.getElementsByClassName('postspace')[0].appendChild(pos);
    }
  }
}
function Displayallpostsmain(){
  for (let i = 0; i < 9; i++){
    if (localStorage.getItem(i) == null){
      continue;
    } else {
      let log = localStorage.getItem(i);
      let logg = JSON.parse(log);
      var pos = document.createElement('div');
      pos.className = 'rowm';

      pos.innerHTML =`
        <h2 class="t">`+ logg.posttitle +`</h2>
        <p class="text">`+ logg.postinside +`</p>
        <div class="postflex">
          <p class="loginparagraph">Created by:<b>`+ logg.postlogin +`</b></p>
        </div>
        
      `
      ;
      document.getElementsByClassName('thisposts')[0].appendChild(pos);
    }
  }
}
const loginForm = document.getElementById("loginForm");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const greetingTitle = greeting.querySelector("h1");
const greetingBtn = greeting.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";
const userName_KEY = "userName"

//event 는 argument 가 됨 정보를 다가져와.
function onLoginSubmit(event){
    event.preventDefault();
    // preventDefault 브라우저 기본동작 막아줌.
    // submit 발생시 브라우저 재시작되는걸 막아주는 셈
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(userName_KEY, userName);
    console.log(userName);
    paintGreetings(userName);
}

function paintGreetings(userName){
    greetingTitle.innerText = `환영합니다 ${userName}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const saveUserName  = localStorage.getItem(userName_KEY);
if(saveUserName === null || saveUserName ===''){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(saveUserName);
}
greetingBtn.addEventListener('click',ChangeBtn);

function ChangeBtn(){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(userName_KEY);
    onLoginSubmit();
}
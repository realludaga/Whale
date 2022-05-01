const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");

const onLoginSubmit = (event) => {
   event.preventDefault();
   const userName = loginInput.value;

   console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit)

// preventDefault() =>  기본동작을 막아줌
// addEventListener => 이벤트를 매개변수로 함수를 실행한다


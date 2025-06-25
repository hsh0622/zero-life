document.getElementById("signIn").addEventListener("click", function () {
  //로그인 버튼 클릭 시
  document.querySelector(".signInBackground").classList.add("show"); //로그인 창을 보여줌
});

document
  .querySelector(".signInBackground .closeButton")
  .addEventListener("click", function (event) {
    //로그인 창 닫기 버튼 (X) 클릭 시
    event.preventDefault(); //새로고침을 막아줌
    document.querySelector(".signInBackground").classList.remove("show"); //로그인 창을 숨김
  });

document.getElementById("toSignUp").addEventListener("click", function () {
  // "계정이 없으신가요?" 클릭 시 -> 회원가입 창으로 전환
  document.querySelector(".signInBackground").classList.remove("show"); // 로그인 창을 숨김
  document.querySelector(".signUpBackground").classList.add("show"); // 회원가입 창을 보여줌
});

document.getElementById("signUp").addEventListener("click", function () {
  // 회원가입 버튼 클릭 시
  document.querySelector(".signUpBackground").classList.add("show"); // 회원가입 창을 보여줌
});

document
  .querySelector(".signUpBackground .closeButton")
  .addEventListener("click", function (event) {
    // 회원가입 창 닫기 버튼 (X) 클릭 시
    event.preventDefault(); //새로고침을 막아줌
    document.querySelector(".signUpBackground").classList.remove("show"); // 회원가입 창을 숨김
  });

document.getElementById("toSignIn").addEventListener("click", function () {
  // "계정이 있으신가요?" 클릭 시 -> 로그인 창으로 전환
  document.querySelector(".signUpBackground").classList.remove("show"); // 회원가입 창을 숨김
  document.querySelector(".signInBackground").classList.add("show"); // 로그인 창을 보여줌
});

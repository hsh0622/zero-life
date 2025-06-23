// 로그인 버튼 클릭 시 로그인 창 열기
document.getElementById("signIn").addEventListener("click", function () {
  document.querySelector(".signInBackground").classList.add("show");
});

// 로그인 창 닫기 버튼 (X) 클릭 시
document
  .querySelector(".signInBackground .closeButton")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".signInBackground").classList.remove("show");
  });

// "계정이 없으신가요?" 클릭 시 → 회원가입 창으로 전환
document.getElementById("toSignUp").addEventListener("click", function () {
  document.querySelector(".signInBackground").classList.remove("show");
  document.querySelector(".signUpBackground").classList.add("show");
});

// 회원가입 버튼 클릭 시 회원가입 창 열기
document.getElementById("signUp").addEventListener("click", function () {
  document.querySelector(".signUpBackground").classList.add("show");
});

// 회원가입 창 닫기 버튼 (X) 클릭 시
document
  .querySelector(".signUpBackground .closeButton")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".signUpBackground").classList.remove("show");
  });

// "계정이 있으신가요?" 클릭 시 → 로그인 창으로 전환
document.getElementById("toSignIn").addEventListener("click", function () {
  document.querySelector(".signUpBackground").classList.remove("show");
  document.querySelector(".signInBackground").classList.add("show");
});

const b_left = window.screenX;
const b_top = window.screenY;

const p_left = b_left + 100;
const p_top = b_top + 100;

function openPopup() {
  let newWin = window.open(
    "../html/popup.html",
    "notice",
    `width=500, height=400, left=${p_left}, top=${p_top}`
  );
  if (newWin == null) {
    alert("팝업이 차단돼있습니다.");
  }
}

const onClickAbout = () => {
  const iframe = document.getElementById("contentFrame");
  iframe.src = "../html/about.html";
  iframe.style.display = "block";
  const image = document.getElementById("backgroundImg");
  image.style.display = "none";
  const imageText = document.getElementById("backgroundSpan");
  imageText.style.display = "none";
};

const onClickWay = () => {
  const iframe = document.getElementById("contentFrame");
  iframe.src = "../html/way.html";
  iframe.style.display = "block";
  const image = document.getElementById("backgroundImg");
  image.style.display = "none";
  const imageText = document.getElementById("backgroundSpan");
  imageText.style.display = "none";
};

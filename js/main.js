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

// 현재 브라우저 창의 X좌표(화면 왼쪽에서부터의 거리)를 가져옴
const b_left = window.screenX;

// 현재 브라우저 창의 Y좌표(화면 위쪽에서부터의 거리)를 가져옴
const b_top = window.screenY;

// 팝업 창의 X좌표: 현재 브라우저 위치보다 100px 오른쪽에 열도록 설정
const p_left = b_left + 100;

// 팝업 창의 Y좌표: 현재 브라우저 위치보다 100px 아래쪽에 열도록 설정
const p_top = b_top + 100;

function openPopup() {
  // 팝업 창을 여는 함수
  let newWin = window.open(
    // 새 창(popup.html)을 열고 크기와 위치를 지정함
    "../html/popup.html", // popup.html 파일 경로
    "notice", // 창 이름을 notice로 설정
    `width=500, height=400, left=${p_left}, top=${p_top}` // 창 크기 및 위치
  );

  if (newWin == null) {
    // 팝업이 차단된 경우 경고창 띄우기
    alert("팝업이 차단돼있습니다.");
  }
}

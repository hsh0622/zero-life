const onClickAbout = () => {
  //제로웨이스트란? 메뉴를 클릭했을 때 실행되는 함수
  const iframe = document.getElementById("contentFrame"); //iframe 요소를 가져옴
  iframe.src = "../html/about.html"; //iframe의 src 속성을 about.html로 변경
  iframe.style.display = "block"; //iframe을 보이도록 설정
  const image = document.getElementById("backgroundImg"); //배경 이미지 요소를 가져옴
  image.style.display = "none"; //배경 이미지를 숨김
  const imageText = document.getElementById("backgroundSpan"); //배경 이미지 텍스트 요소를 가져옴
  imageText.style.display = "none"; //배경 이미지 텍스트를 숨김
};

const onClickWay = () => {
  //제로웨이스트 실천 방법 메뉴를 클릭했을 때 실행되는 함수
  const iframe = document.getElementById("contentFrame"); //iframe 요소를 가져옴
  iframe.src = "../html/way.html"; //iframe의 src 속성을 way.html로 변경
  iframe.style.display = "block"; //iframe을 보이도록 설정
  const image = document.getElementById("backgroundImg"); //배경 이미지 요소를 가져옴
  image.style.display = "none"; //배경 이미지를 숨김
  const imageText = document.getElementById("backgroundSpan"); //배경 이미지 텍스트 요소를 가져옴
  imageText.style.display = "none"; //배경 이미지 텍스트를 숨김
};

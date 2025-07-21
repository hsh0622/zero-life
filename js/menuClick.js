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

const onClickRecommend = () => {
  // 제품추천 메뉴 클릭 시
  const iframe = document.getElementById("contentFrame");
  iframe.src = "../html/recommend.html";
  iframe.style.display = "block";

  const image = document.getElementById("backgroundImg");
  image.style.display = "none";

  const imageText = document.getElementById("backgroundSpan");
  imageText.style.display = "none";
};

const onClickCommunity = () => {
  // 커뮤니티 메뉴 클릭 시
  const iframe = document.getElementById("contentFrame");
  iframe.src = "../html/community.html";
  iframe.style.display = "block";

  const image = document.getElementById("backgroundImg");
  image.style.display = "none";

  const imageText = document.getElementById("backgroundSpan");
  imageText.style.display = "none";
};

const onClickNews = () => {
  // 캠페인&뉴스 메뉴 클릭 시
  const iframe = document.getElementById("contentFrame");
  iframe.src = "../html/news.html";
  iframe.style.display = "block";

  const image = document.getElementById("backgroundImg");
  image.style.display = "none";

  const imageText = document.getElementById("backgroundSpan");
  imageText.style.display = "none";
};

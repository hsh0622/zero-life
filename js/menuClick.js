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

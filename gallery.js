function upDate(previewPic) {
  document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;

  document.getElementById('image').innerText = previewPic.alt;

  console.log('Alt:', previewPic.alt);
  console.log('Source:', previewPic.src);
}

function unDo() {
  document.getElementById('image').style.backgroundImage = "url('')";

  document.getElementById('image').innerText = "Hover over an image below to display here.";
}

window.onload = function() {
  console.log('Page loaded successfully.');
  addTabFocusAttribute();
};

function addTabFocusAttribute() {
  const images = document.querySelectorAll('.preview');
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0');
    console.log('Tabindex added for image', i + 1);
  }
}
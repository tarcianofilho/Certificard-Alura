var slideIndex = 1;
var codeIndex = 0;
var code = document.getElementById("code");
showDivs(slideIndex);
showCode(codeIndex);

function mudaTema() {
  document.body.classList.toggle("dark");
  showCode(codeIndex);
}

function plusDivs(n) {
  showDivs((slideIndex += n));
  showCode((codeIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
  showCode((codeIndex = n));
}

function showCode(m) {
  var dataSlugHash = [
    "zYPXELK",
    "gOXJemq",
    "MWOMOoa",
    "JjMPBJG",
    "YzYXzvw",
    "mdpegeE"
  ];
  if (document.body.classList.contains("dark")) {
    var dataThemeId = "dark";
  } else {
    var dataThemeId = "light";
  }
  var codePen = `<div class="cp_embed_wrapper"><iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/TarcianoFilho/embed/${dataSlugHash[m]}?height=300&amp;theme-id=${dataThemeId}&amp;default-tab=html%2Cresult&amp;slug-hash=${dataSlugHash[m]}&amp;user=TarcianoFilho&amp;name=cp_embed_1" style="width: 100%; overflow:hidden; display:block;" title="CodePen Embed" loading="lazy" id="cp_embed_${dataSlugHash[m]}"></iframe></div>`;
  code.innerHTML = codePen;
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var ant = document.getElementById("button1");
  var prox = document.getElementById("button2");
  if (n >= x.length) {
    prox.disabled = true;
  } else if (n <= 1) {
    ant.disabled = true;
  } else {
    prox.disabled = false;
    ant.disabled = false;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
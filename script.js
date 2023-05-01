let qr_texte = document.querySelector(".qr_t");
function generator() {
  let qrcode = document.querySelector(".qr_c");
  qrcode.style.display = "flex";
  // pour reset le contenu de la div
  qrcode.innerHTML = "";
  new QRCode(qrcode, qr_texte.value);

  // Pour effacer le contenu de notre champs input

  qr_texte.value = "";
}

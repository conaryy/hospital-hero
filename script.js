let score = 0;

function chooseAction(action) {
  const result = document.getElementById("result");
  if (action === "sanitize") {
    score += 10;
    result.textContent = "Benar! Kamu menjaga kebersihan tangan. 👍";
  } else {
    score -= 5;
    result.textContent = "Salah! Selalu cuci tangan sebelum menyentuh pasien. 😷";
  }
  document.getElementById("score").textContent = `Health Score: ${score}`;
}

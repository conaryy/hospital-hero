let score = 0;

const questions = [
  {
    question: "Ada pasien baru datang. Apa yang kamu lakukan?",
    choices: [
      { text: "🧼 Cuci tangan", effect: 10, feedback: "Benar! Cuci tangan penting untuk mencegah infeksi. 👍" },
      { text: "🛏️ Bantu pasien ke ruang tunggu", effect: 8, feedback: "Bagus! Pasien harus diarahkan dengan baik. ✅" },
      { text: "📋 Periksa surat rujukan", effect: 6, feedback: "Tepat! Administrasi penting untuk proses selanjutnya. 📄" },
      { text: "🙈 Abaikan", effect: -10, feedback: "Salah! Mengabaikan pasien bisa membahayakan. 🚫" }
    ]
  },
  {
    question: "Kamu melihat tumpukan sampah medis di lorong. Apa yang kamu lakukan?",
    choices: [
      { text: "🧤 Ambil dengan tangan kosong", effect: -10, feedback: "Berbahaya! Jangan menyentuh langsung tanpa alat pelindung." },
      { text: "🚮 Laporkan ke petugas kebersihan", effect: 8, feedback: "Bagus, biarkan profesional yang menanganinya." },
      { text: "👃 Hirup aromanya", effect: -5, feedback: "Ini tidak aman dan tidak profesional." },
      { text: "📷 Foto dan laporkan ke atasan", effect: 6, feedback: "Langkah bagus, laporan resmi bisa bantu penyelesaian." }
    ]
  },
  {
    question: "Seorang pasien batuk-batuk tanpa masker. Apa tindakan terbaik?",
    choices: [
      { text: "😷 Berikan masker", effect: 10, feedback: "Tindakan tepat untuk mencegah penyebaran penyakit." },
      { text: "🧍 Biarkan saja", effect: -10, feedback: "Salah! Harus segera diberi masker." },
      { text: "🏃 Menjauh saja", effect: -5, feedback: "Kurang bertanggung jawab, kamu bisa bantu pasien." },
      { text: "🚑 Panggil ambulans", effect: -2, feedback: "Tidak perlu ambulans untuk batuk biasa." }
    ]
  },
  {
    question: "Perawat lupa mencuci tangan sebelum merawat pasien. Apa kamu lakukan?",
    choices: [
      { text: "👀 Diam saja", effect: -8, feedback: "Kebersihan tangan penting! Harus diingatkan." },
      { text: "✋ Ingatkan dengan sopan", effect: 10, feedback: "Tindakan tepat, menjaga standar kesehatan bersama." },
      { text: "🙈 Abaikan karena bukan urusanmu", effect: -5, feedback: "Salah. Keselamatan pasien adalah tanggung jawab semua orang." },
      { text: "📞 Laporkan ke kepala ruangan", effect: 6, feedback: "Langkah yang bisa dipertimbangkan bila berulang." }
    ]
  },
  {
    question: "Ada pasien pingsan di ruang tunggu. Apa yang kamu lakukan?",
    choices: [
      { text: "🚨 Panggil bantuan medis", effect: 10, feedback: "Tepat! Tanggap darurat adalah prioritas." },
      { text: "☕ Beri kopi", effect: -5, feedback: "Tidak tepat, kamu bukan dokter." },
      { text: "📱 Rekam dan unggah", effect: -10, feedback: "Sangat tidak etis dan tidak profesional." },
      { text: "💬 Teriak “bangun!”", effect: -8, feedback: "Ini bukan cara penanganan medis." }
    ]
  }
];

function loadRandomQuestion() {
  const container = document.querySelector(".action");
  const result = document.getElementById("result");
  result.textContent = "";

  const randomIndex = Math.floor(Math.random() * questions.length);
  const q = questions[randomIndex];

  let html = `<p>${q.question}</p>`;
  q.choices.forEach((choice, idx) => {
    html += `<button onclick="handleAnswer(${randomIndex}, ${idx})">${choice.text}</button>`;
  });

  container.innerHTML = html;
}

function handleAnswer(qIndex, choiceIndex) {
  const result = document.getElementById("result");
  const choice = questions[qIndex].choices[choiceIndex];
  score += choice.effect;
  result.textContent = choice.feedback;
  document.getElementById("score").textContent = `Health Score: ${score}`;

  // Setelah beberapa detik, tampilkan pertanyaan baru
  setTimeout(loadRandomQuestion, 2500);
}

// Load pertama kali
window.onload = loadRandomQuestion;

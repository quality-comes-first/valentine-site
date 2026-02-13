const questions = [
  {
    question: "1️⃣ What was our anniversary date?",
    options: ["March 14 2017", "January 1 2015", "Don’t know 😅"],
    reveal: "Just kidding 😘✨ <span class='special-date'>APRIL 23, 2016</span> ✨"
  },
  {
    question: "2️⃣ Who proposed first? 😏",
    options: ["Sandhini S.", "Sandhini Sai", "Sandhini"],
    reveal: "Don’t get angry 😅 I’m the one who proposed you first 💘"
  },
  {
    question: "3️⃣ Our love story is like which movie genre?",
    options: ["Comedy 😂", "Drama 🎭", "Fairytale ✨"],
    reveal: "It’s comedy, drama and fairytale… But mostly OURS 💖"
  },
  {
    question: "4️⃣ What is my biggest weakness?",
    options: ["Chocolate 🍫", "Sleep 😴", "You 💘"],
    special: true
  },
  {
    question: "5️⃣ Do you know what you mean to me?",
    options: ["Just someone special", "My favorite person", "My forever ❤️"],
    reveal: "You are my home. My safe place. My always. My forever. ❤️"
  }
];

let current = 0;

function startTrivia() {
  document.getElementById("welcomeCard").classList.add("hidden");
  document.getElementById("questionCard").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[current];
  document.getElementById("questionText").innerText = q.question;
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => handleAnswer(option);
    container.appendChild(btn);
  });
}

function handleAnswer(option) {
  const q = questions[current];

  document.getElementById("questionCard").classList.add("hidden");
  document.getElementById("revealCard").classList.remove("hidden");

  if (q.special) {
    if (option === "You 💘") {
      document.getElementById("revealText").innerText =
        "Correct. I lose every argument because of you ❤️";
    } else {
      document.getElementById("revealText").innerText =
        "Wrong answer 😏 It has always been YOU.";
    }
  } else {
    document.getElementById("revealText").innerHTML = q.reveal;

  }
}

function nextQuestion() {
  current++;
  document.getElementById("revealCard").classList.add("hidden");

  if (current < questions.length) {
    document.getElementById("questionCard").classList.remove("hidden");
    loadQuestion();
  } else {
    document.getElementById("finalSection").classList.remove("hidden");
  }
}

function openEnvelope() {
  document.querySelector(".envelope").classList.add("open");
  document.getElementById("loveSong").play();
}

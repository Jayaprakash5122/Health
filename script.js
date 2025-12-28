function showSection(id) {
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
    
  document.getElementById("nav").classList.remove("show");
}
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}
function calculateProtein() {
  const w = document.getElementById("weight").value;
  const f = document.getElementById("activity").value;
  const r = document.getElementById("result");
  if (w <= 0 || f == 0) {
    r.innerHTML = "Enter valid details";
    return;
  }
  r.innerHTML = "Daily Protein Needed: " + (w * f).toFixed(1) + " g";
}

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});

function signIn() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const main = document.getElementById("errorMsg");

  // Null check (prevents error)
  if (!username || !password) {
    console.error("Input elements not found");
    return;
  }

  const userValue = username.value.trim();
  const passValue = password.value.trim();

  if (userValue === "" || passValue === "") {
    main.innerHTML = "Please enter username and password";
    return;
  }
  window.location.href = "index.html";
}

function searchFood() {
  const input = document.getElementById("foodSearch").value.toLowerCase();
  const cards = document.querySelectorAll(".food-card");

  cards.forEach((card) => {
    const name = card.querySelector(".food-name").textContent.toLowerCase();
    const protein = card.querySelector(".food-protein").textContent;

    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

 
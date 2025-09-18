// Theme Switcher + Form Validation
document.addEventListener("DOMContentLoaded", () => {
  // Theme switcher
  const themeSwitcher = document.getElementById("themeSwitcher");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.className = savedTheme;
    themeSwitcher.value = savedTheme;
  }
  themeSwitcher?.addEventListener("change", () => {
    body.className = themeSwitcher.value;
    localStorage.setItem("theme", themeSwitcher.value);
  });

  // Form validation
  const form = document.getElementById("blogForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      let valid = true;
      ["title","snippet","body"].forEach(id => {
        const input = document.getElementById(id);
        const error = document.getElementById("error-" + id);
        if (!input.value.trim()) {
          error.textContent = id.charAt(0).toUpperCase() + id.slice(1) + " is required";
          input.classList.add("invalid");
          valid = false;
        } else {
          error.textContent = "";
          input.classList.remove("invalid");
        }
      });
      if (!valid) e.preventDefault();
    });
  }
});

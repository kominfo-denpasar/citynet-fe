import './style.css';

document.addEventListener("DOMContentLoaded", async () => {
  const navbarContainer = document.getElementById("navbar-index");

  try {
    const response = await fetch("/layout/navbar-index.html", { cache: "no-store" });
    const html = await response.text();
    navbarContainer.innerHTML = html;

    initNavbar();
  } catch (error) {
    console.error("Gagal memuat navbar:", error);
  }
});

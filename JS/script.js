// Settings students can tweak
const SCROLL_THRESHOLD = 70;   // px before navbar turns solid
const LOADER_FADE_MS   = 250;  // loader fade-out time in ms (shortened)

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Loader fade out
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (!pre) return;
  pre.classList.add("fade-out");
  setTimeout(() => { pre.style.display = "none"; }, LOADER_FADE_MS);
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");
function handleScroll(){
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > SCROLL_THRESHOLD);
}
handleScroll();
window.addEventListener("scroll", handleScroll, { passive: true });

// Optional basic validation feedback (kept minimal; can be removed)
document.getElementById("contactForm")?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const form = e.target;
  if (form.checkValidity()) {
    alert("Thanks! (demo)");
    form.reset();
  } else {
    form.classList.add("was-validated");
  }
});

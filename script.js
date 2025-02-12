document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

let themeBtn = document.getElementById("toggle-theme");

themeBtn.addEventListener("click", () => {  
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {  
    localStorage.setItem("theme", "light");
  }
});

// localStorage.removeItem('theme')
function toggleMenu(state) {
  let sidebar = document.getElementById("sidebar");
  let openBtn = document.getElementById("open-btn");
  let closeBtn = document.getElementById("close-btn");

  if (state === "open") {
    document.body.style.overflowY = "hidden";
    sidebar.classList.remove("hidden");
    sidebar.classList.add("flex");
    openBtn.classList.remove("animate-rotate-right");
    closeBtn.classList.remove("animate-rotate-right");
    openBtn.classList.add("animate-rotate-left");
    closeBtn.classList.add("animate-rotate-left");
    sidebar.classList.add("animate-slide-in");
  } else {
    document.body.style.overflowY = "";
    sidebar.classList.add("animate-slide-out");
    openBtn.classList.remove("animate-rotate-left");
    closeBtn.classList.remove("animate-rotate-left");
    setTimeout(() => {
      openBtn.classList.add("animate-rotate-right");
      closeBtn.classList.add("animate-rotate-right");
      sidebar.classList.add("hidden");
      sidebar.classList.remove("flex");
      sidebar.classList.remove("animate-slide-out");
    }, 300);
  }
}

const scrollers = document.querySelectorAll(".scroller");

addAnimation();

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

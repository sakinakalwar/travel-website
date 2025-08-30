// Navbar toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector("nav ul");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
// GSAP Hero Animation
gsap.from(".hero-content h1", {
  duration: 1,
  y: -100,     // upar se niche move
  opacity: 0,
  ease: "power4.out"
});

gsap.from(".hero-content p", {
  duration: 1,
  y: 100,     // niche se upar move
  opacity: 0,
//   delay: 0.5,
  ease: "power4.out"
});

gsap.from(".hero-content button", {
  duration: 1,
  scale: 0,
  opacity: 0,
  delay: 1,
  ease: "back.out(1.7)"
});
const counters = document.querySelectorAll('.counter');
const speed = 50; // speed of animation

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target.toLocaleString(); // add commas (73,000)
    }
  };

  updateCount();
});


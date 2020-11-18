// Rotate nav and name containers on nav clicks
export const navClickHandler = (selectedEl) => {
  // If Nav item was clicked, change selectedEl to e.target
  if (selectedEl.target) {
    selectedEl = selectedEl.target;
  }
  const container = selectedEl.parentElement;
  // Unrotate rotated navs
  for (let child of container.children) {
    child.classList.remove("selectedLink");
  }
  // Handle Home button click - return to original position
  if (selectedEl.innerText === "Home") {
    container.classList.remove("rotatedRight");
    container.parentElement.children[0].classList.remove("rotatedLeft");
    container.parentElement.children[0].children[1].classList.remove(
      "centered"
    );
    return;
  }
  // Handle Nav clicks - rotate to side
  container.classList.add("rotatedRight");
  selectedEl.classList.add("selectedLink");
  container.parentElement.children[0].classList.add("rotatedLeft");
  container.parentElement.children[0].children[1].classList.add("centered");
};

// Rotate nav on scroll location
export const navScrollHandler = (topBound) => {
  if (topBound < -2000) {
    navClickHandler(document.getElementById("contact-nav"));
  } else if (topBound < -1100) {
    navClickHandler(document.getElementById("projects-nav"));
  } else if (topBound < -150) {
    navClickHandler(document.getElementById("about-nav"));
  } else {
    navClickHandler(document.getElementById("home-nav"));
  }
};

export const parallax = (e) => {
  document.querySelectorAll(".blob").forEach((item) => {
    const dataValue = item.getAttribute("data-value");
    const x = (e.clientX * dataValue) / 170;
    const y = (e.clientY * dataValue) / 170;

    item.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

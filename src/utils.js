// Rotate nav and name containers on nav clicks
export const navRotation = (selectedEl) => {
  // If Nav item was clicked, change selectedEl to e.target
  if (selectedEl.target) {
    selectedEl = selectedEl.target;
  }
  const navContainer = selectedEl.parentElement;
  const nameDiv = navContainer.parentElement.children[0];
  // Unrotate rotated navs
  for (let child of navContainer.children) {
    child.classList.remove("selectedLink");
  }
  // Handle Home button click - return to original position
  if (selectedEl.innerText === "Home") {
    navContainer.classList.remove("rotatedRight");
    nameDiv.classList.remove("rotatedLeft");
    nameDiv.children[1].classList.remove("centered");
    navContainer.children[0].style.transform = "rotate(180deg)";
    return;
  }

  // Handle Nav clicks - rotate to side
  navContainer.classList.add("rotatedRight");
  selectedEl.classList.add("selectedLink");
  navContainer.children[0].style.transform = "rotate(90deg)";
  nameDiv.classList.add("rotatedLeft");
  nameDiv.children[1].classList.add("centered");
};

export const moveDown = (arrowRef) => {
  arrowRef.classList.add("lowered-arrow");
};
export const moveUp = (arrowRef) => {
  arrowRef.classList.remove("lowered-arrow");
};

// Parallax animation
export const parallax = (e) => {
  document.querySelectorAll(".blob").forEach((item) => {
    const dataValue = item.getAttribute("data-value");
    const x = (e.clientX * dataValue) / 150;
    const y = (e.clientY * dataValue) / 150;
    item.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

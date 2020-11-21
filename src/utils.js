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
    navContainer.children[0].style.color = "transparent";
    // Reset font styles
    nameDiv.children[0].style.color = "transparent";
    nameDiv.children[1].style.borderBottom = "none";
    nameDiv.children[2].style.color = "transparent";
    return;
  }

  // Handle Nav clicks - rotate to side
  navContainer.classList.add("rotatedRight");
  selectedEl.classList.add("selectedLink");
  navContainer.children[0].style.transform = "rotate(90deg)";
  navContainer.children[0].style.color = "black";
  nameDiv.classList.add("rotatedLeft");
  nameDiv.children[1].classList.add("centered");
  // Adjust font styles
  nameDiv.children[0].style.color = "black";
  nameDiv.children[1].style.borderBottom = "3px solid rgba(0, 0, 0, 0.687)";
  nameDiv.children[2].style.color = "black";
};

// Parallax animation
export const parallax = (e) => {
  document.querySelectorAll(".blob").forEach((item) => {
    const dataValue = item.getAttribute("data-value");
    const x = (e.clientX * dataValue) / 230;
    const y = (e.clientY * dataValue) / 230;
    // const x = e.clientX * dataValue * 0.01;
    // const y = e.clientY * dataValue * 0.01;

    item.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

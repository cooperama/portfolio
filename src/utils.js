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
    navContainer.children[0].style.transform = "rotate(180deg)";

    nameDiv.classList.remove("rotatedLeft");
    nameDiv.children[1].classList.remove("centered");
    return;
  }

  // Handle Nav clicks - rotate to side
  navContainer.classList.add("rotatedRight");
  navContainer.children[0].style.transform = "rotate(90deg)";
  selectedEl.classList.add("selectedLink");

  nameDiv.classList.add("rotatedLeft");
  nameDiv.children[1].classList.add("centered");
};

export const moveDown = (arrowRef) => {
  arrowRef.classList.add("lowered-arrow");
};
export const moveUp = (arrowRef) => {
  arrowRef.classList.remove("lowered-arrow");
};

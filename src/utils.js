// Rotate nav and name containers on nav clicks
export const navRotation = (selectedEl) => {
  // If Nav item was clicked, change selectedEl to e.target
  if (selectedEl.target) {
    selectedEl = selectedEl.target;
  }
  const navContainer = selectedEl.parentElement;
  const nameDiv = navContainer.parentElement.children[0];
  const nameSpan = nameDiv.children[1];
  console.log(nameSpan);
  // Unrotate rotated navs
  for (let child of navContainer.children) {
    child.classList.remove("selectedLink");
  }
  // Handle Home button click - return to original position
  if (selectedEl.innerText === "Home") {
    navContainer.classList.remove("rotatedRight");

    nameDiv.classList.remove("rotatedLeft");
    nameDiv.children[1].classList.remove("centered");
    nameSpan.classList.remove("underline");
    return;
  }

  // Handle Nav clicks - rotate to side
  navContainer.classList.add("rotatedRight");
  selectedEl.classList.add("selectedLink");

  nameDiv.classList.add("rotatedLeft");
  nameDiv.children[1].classList.add("centered");
  nameSpan.classList.add("underline");
};

export const moveDown = (arrowRef) => {
  arrowRef.classList.add("lowered-arrow");
};
export const moveUp = (arrowRef) => {
  arrowRef.classList.remove("lowered-arrow");
};

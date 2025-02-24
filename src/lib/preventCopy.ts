export const preventCopyPaste = () => {
  // Prevent text selection
  document.body.style.userSelect = "none";
  document.body.style.webkitUserSelect = "none";
  document.body.style.msUserSelect = "none";
  document.body.style.mozUserSelect = "none";

  // Prevent right click
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // Prevent copy
  document.addEventListener("copy", (e) => e.preventDefault());

  // Prevent cut
  document.addEventListener("cut", (e) => e.preventDefault());

  // Prevent paste
  document.addEventListener("paste", (e) => e.preventDefault());

  // Prevent drag start (for images)
  document.addEventListener("dragstart", (e) => e.preventDefault());
};

const panels = document.querySelectorAll(".panels .panel");

function toggleOpen(e) {
    this.classList.toggle("open");
}

panels.forEach(panel => {
    panel.addEventListener("click", toggleOpen);
});

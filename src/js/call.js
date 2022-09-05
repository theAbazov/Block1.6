const call = document.getElementById("call");
const callOpen = document.querySelectorAll("#call-open");
const callClose = document.querySelectorAll("#call-close");
const body = document.body;

callOpen.forEach((open) => {
  open.addEventListener("click", () => {
    call.classList.add("call-show");
    body.classList.add("stop-scroll");
    overlay.style.display = "block";
    // =============
    burger.classList.remove("burger-show");
    feedback.classList.remove("feedback-show");
  });
});

callClose.forEach((close) => {
  close.addEventListener("click", () => {
    call.classList.remove("call-show");
    body.classList.remove("stop-scroll");
    overlay.style.display = "none";
  });
});

overlay.addEventListener("click", () => {
  call.classList.remove("call-show");
  body.classList.remove("stop-scroll");
  overlay.style.display = "none";
});

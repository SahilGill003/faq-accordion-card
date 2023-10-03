const questions = document.querySelectorAll(".question");

const resetAccordions = (rem) => {
  questions.forEach((q, i) => {
    if (rem !== i) q.dataset.hidden = "true";
  });
};

questions.forEach((q, i) => {
  q.addEventListener("click", () => {
    let val = q.dataset.hidden;
    if (val === "true") {
      q.dataset.hidden = "false";
      resetAccordions(i);
    } else {
      q.dataset.hidden = "true";
      resetAccordions(i);
    }
  });
});

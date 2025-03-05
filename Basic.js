document.querySelectorAll('.option input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    document.querySelectorAll(".option").forEach((option) => {
      option.classList.remove("expanded");
    });
    this.closest(".option").classList.add("expanded");
    
    document.querySelectorAll(".select-container").forEach((container) => {
      container.classList.remove("show");
    });

    const optionId = this.closest(".option").id;
    const selectContainer = document.getElementById(
      `select-container${optionId.charAt(optionId.length - 1)}`
    );
    selectContainer.classList.add("show");
  });
});

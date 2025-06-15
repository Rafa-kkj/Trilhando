function selectOption(element) {
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));
    element.classList.add("selected");
}
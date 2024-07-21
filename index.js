document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("shopNowBtn");
  const colorList = document.getElementById("colorList");

  button.addEventListener("click", changeBackgroundColor);

  function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    addToColorHistory(randomColor);
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function addToColorHistory(color) {
    const colorItem = document.createElement("li");
    colorItem.textContent = color;
    colorItem.style.backgroundColor = color;
    colorList.appendChild(colorItem);
  }
});

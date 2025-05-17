let buttons = document.createElement("button");
buttons.classList.add("btn");
buttons.textContent = "Choise size for grid!"
document.body.appendChild(buttons);

buttons.addEventListener("click", () => {
  makeGrid(prompt());
});


function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let colors = "#";

  for(let m = 0; m < 6; m++) {
    colors += letters[(Math.floor(Math.random() * letters.length))];

  }
  return colors;
}

function makeGrid(size) {
  let screen = document.querySelector(".conteiner");
  for(let i = 0; i < size; i++){
    let columns = document.createElement("div");
    columns.classList.add("columns");
    for(let j = 0; j < size; j++){
      let row = document.createElement("div");
      row.classList.add("row");

      row.addEventListener("mouseover", () => {
        row.style.background = getRandomColor();
      });


      columns.appendChild(row);
    }
    screen.appendChild(columns);
  }  
}

let gridContainer = document.querySelector(".grid");

paint();

function paint() {
  createCells();
  clickEvents();
}

function clickEvents() {
  let cells = document.querySelectorAll(".content");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.style.backgroundColor = "red";
    });
  });

  let clearBtn = document.querySelector("#clearBtn");
  clearBtn.addEventListener("click", () => {
    clear();
  });
}

function clear() {
  let cells = document.querySelectorAll(".content");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "transparent";
  });
}


function createCells() {
  for (let i = 1; i <= 256; i++) {
    let cells = document.createElement("div");
    cells.classList.add("content");
    gridContainer.appendChild(cells);
  }
}

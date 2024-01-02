document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    for (var i = 0; i < 6; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < 6; j++) {
            var cell = row.insertCell(j);
            cell.textContent = i * 6 + j + 1;

            if (i * 6 + j + 1 === 4) {
                cell.addEventListener("click", function () {
                    openColorPicker(this);
                });

                cell.addEventListener("dblclick", function () {
                    changeDiagonalColor(this);
                });
            }
        }
    }

    function openColorPicker(cell) {
        var colorInput = document.getElementById("color-input");

        colorInput.style.top = cell.offsetTop + "px";
        colorInput.style.left = cell.offsetLeft + "px";

        colorInput.addEventListener("input", function () {
            changeColor(cell, this.value);
        });
        colorInput.focus();
        colorInput.click();

        document.addEventListener("click", function (event) {
            if (event.target !== colorInput) {
                colorInput.style.opacity = "0";
            }
        });
    }

    function changeColor(element, color) {
        element.style.backgroundColor = color;
    }

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeDiagonalColor() {
        var cells = table.getElementsByTagName('td');
        var color = getRandomColor();

        for (var i = 0; i < 6; i++) {
            var diagonalCell = cells[i * 6 + i];
            diagonalCell.style.backgroundColor = color;
        }
    }
});

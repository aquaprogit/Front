document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    for (var i = 0; i < 6; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < 6; j++) {
            var cell = row.insertCell(j);
            cell.textContent = i * 6 + j + 1;

            if (i * 6 + j + 1 === 4) {
                cell.addEventListener("click", function () {
                    var colorPalette = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#FF33FF"];
                    changeColor(this, colorPalette[Math.floor(Math.random() * 6)]);
                });

                cell.addEventListener("dblclick", function () {
                    changeDiagonalColor(this);
                });
            }
        }
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
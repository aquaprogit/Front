document.addEventListener("DOMContentLoaded", function () {
    var fifthElement = document.getElementById("fifth-element");
    var sixthElement = document.querySelector("#sixth-element");

    function changeColors(element) {
        var backgroundColor = getRandomColor();
        var textColor = getRandomColor();

        element.style.backgroundColor = backgroundColor;
        element.style.color = textColor;
    }

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function addClickEvent(element) {
        element.addEventListener("click", function () {
            changeColors(element);
        });
    }

    addClickEvent(fifthElement);
    addClickEvent(sixthElement);


    var image = document.querySelector("img");

    document.getElementById("addImageBtn").addEventListener("click", function () {
        image.style.display = "unset";

    });

    document.getElementById("enlargeBtn").addEventListener("click", function () {
        var currentWidth = parseInt(image.style.width) || 100;
        image.style.width = currentWidth + 10 + "px";
    });

    document.getElementById("reduceBtn").addEventListener("click", function () {
        var currentWidth = parseInt(image.style.width) || 100;
        if (currentWidth > 10) {
            image.style.width = currentWidth - 10 + "px";
        }
    });

    document.getElementById("deleteBtn").addEventListener("click", function () {
        image.style.display = "none";
    });
});

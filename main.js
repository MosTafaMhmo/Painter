var container = document.getElementsByClassName("container")[0];
var cell = document.getElementsByClassName("cell")[0];
var color = document.getElementById("color");
var size = document.getElementById("size");
var pen = document.getElementById("pen");
var eraser = document.getElementById("eraser");
var shape = document.getElementsByClassName("shape")[0];
var Rect = document.getElementById("rect");
var Circle = document.getElementById("circle");
var body = document.getElementsByTagName("body")[0];
var currentcolor = "black";

for (var i = 0; i < 5000; i++) {
    var newcell = cell.cloneNode(true);
    container.appendChild(newcell);
}

var draw = false;
var eras = false;
var rect = false;
var cir = false;
var action = "";
function changecolor() {
    currentcolor = color.value;
}
color.onchange = changecolor;


function pendraw() {
    action = "pen"
    if (action === "pen") {
        container.onmousedown = function (e) {
            draw = true;
        };
        container.onmousemove = function (e) {
            if (draw == true) {
                var element = e.target;
                element.style.backgroundColor = currentcolor;
            }
        };
        container.onmouseup = function (e) {
            draw = false;
        };
    }
    else { }

}
pendraw();
function erase() {
    action = "er";
    if (action === "er") {
        container.onmousedown = function (e) {
            eras = true;
        };
        container.onmousemove = function (e) {
            var element = e.target;
            if ((eras == true) && (element.classList.contains("cell"))) {

                element.style.backgroundColor = "white";
            } else if ((eras == true) && ((element.classList.contains("rectangle")) || ((element.classList.contains("circle"))))) {
                element.remove();
            }
        };
        container.onmouseup = function (e) {
            eras = false;
        };
    }
    else { }
}


// function drawrect() {
//     action = "ractangle";
//     var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
//     if (action == "rectangle") {
//         container.addEventListener("mousedown", function (e) {
//             rect = true;
//             x1 = e.x;
//             y1 = e.y;
//             console.log(x1, y1);
//         });
//         container.addEventListener("mousemove", function (e) {
//             if (rect == true) {
//                 x2 = e.x;
//                 y2 = e.y;
//                 var element = shape.cloneNode(true);
//                 element.style.top = x1;
//                 element.style.left = y1;
//                 element.style.width = (x2 - x1) + "px";
//                 element.style.height = (y2 - y1) + "px";
//                 element.classList.add("rectangle");
//                 body.appendChild(element);
//                 // element.style.backgroundColor = currentcolor;
//             }
//         });
//         container.addEventListener("mouseup", function (e) {
//             rect = false;
//         });
//     }

// }
function drect(ev) {
    action = "rectangle";
    var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    var element;
    if (action === "rectangle") {
        container.onmousedown = function (e) {
            rect = true;
            x1 = e.x;
            y1 = e.y;
            // console.log(x1, y1);
            element = document.createElement("div");
            shape.before(element);
            element.classList.add("rectangle");
            element.style.top = (y1 - 150) + "px";
            element.style.left = x1 + "px";
            // console.log(element.style.top);
        };
        container.onmousemove = function (e) {
            if (rect == true) {
                x2 = e.x;
                y2 = e.y;
                element.style.width = (x2 - x1) + "px";
                element.style.height = (y2 - y1) + "px";
                // console.log(element.style.width, element.style.width)
                element.style.borderColor = currentcolor;
            }
        };
        container.onmouseup = function () {
            rect = false;
        };
    }

};
function dcircle(ev) {
    action = "circle";
    var x1 = 0, x2 = 0, y1 = 0, y2 = 0;
    var element;
    if (action == "circle") {
        container.onmousedown = function (e) {
            cir = true;
            x1 = e.x;
            y1 = e.y;
            element = document.createElement("div");
            shape.before(element);
            element.classList.add("rectangle");
            element.style.borderRadius = "50%";
            element.style.top = (y1 - 150) + "px";
            element.style.left = x1 + "px";
            // console.log(element.style.top);
        };
        container.onmousemove = function (e) {
            if (cir == true) {
                x2 = e.x;
                y2 = e.y;
                element.style.width = (x2 - x1) + "px";
                element.style.height = (y2 - y1) + "px";
                // console.log(element.style.width, element.style.width)
                element.style.borderColor = currentcolor;
            }
        };
        container.onmouseup = function () {
            cir = false;
        };
    }
};
pen.onclick = pendraw;
eraser.onclick = erase;
Rect.onclick = drect;
Circle.onclick = dcircle;
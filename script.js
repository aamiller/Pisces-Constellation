'use strict';
let points = [
    { x: 1.97, y: .82, t: 0 }, //( 1.97, .82)
    { x: 2.47, y: 1.92, t: 0 }, // (2.47, 1.92)
    { x: 3.18, y: 3.05, t: 0 }, // (3.18, 3.05)
    { x: 3.53, y: 3.74, t: 0 }, // (3.53, 3.74)
    { x: 4.13, y: 4.6, t: 0 }, // (4.13, 4.6)
    { x: 3.76, y: 5.3, t: 0 }, // (3.76, 5.3)
    { x: 4.15, y: 5.64, t: 0 }, // (4.15, 5.64)
    { x: 2.9, y: 1.27, t: 0 }, // (2.9, 1.27)
    { x: 3.48, y: 1.3, t: 0 }, // (3.48, 1.3)
    { x: 4.11, y: 1.6, t: 0 }, // (4.11, 1.6)
    { x: 4.61, y: 1.73, t: 0 }, // (4.61, 1.73)
    { x: 5.21, y: 1.55, t: 0 }, // (5.21, 1.55)
    { x: 7.2, y: 1.73, t: 0 }, // (7.2, 1.73)
    { x: 8.1, y: 1.52, t: 0 }, // (8.1, 1.52)
    { x: 8.67, y: 1.68, t: 0 }, // (8.67, 1.68)
    { x: 9.16, y: 1.5, t: 0 }, // (9.16, 1.5)
    { x: 9.3, y: 1.09, t: 0 }, // (9.3, 1.09)
    { x: 8.88, y: 0.67, t: 0 }, // (8.88, 0.67)
    { x: 8.17, y: 0.67, t: 0 } // (8.17, 0.67)
]

var pointDivs = [];
let opacities = [.8, .7, .6, .5, .4, .3, .2, .1];
let holder = document.getElementById("pointsHolder");

for (var i in points) {
    var x = (points[i].x * 80).toString();
    var y = (points[i].y * 80).toString();
    var element = document.createElement("div");

    if (points[i].t == 0) {
        element.className = "minor";
    } else {
        element.className = "major";
    }

    element.setAttribute("style", "left: " + x + "; bottom: " + y + ";");
    holder.appendChild(element);

    pointDivs.push(element);
}

for (var i in pointDivs) {
    if (Math.random() > .90) {
        console.log("yay");
        pointDivs[i].style.background = "yellow";
    }

    if (Math.random() > .95) {
        pointDivs[i].style.background = "pink";
    }

    if (Math.random() > .95) {
        pointDivs[i].style.background = "lightblue";
    }


    if (Math.random() > .40) {
        (function (i) {
            setInterval(function () { pointDivs[i].style.opacity = opacities[Math.floor(Math.random() * 8)]; },
                350 + (Math.random() * 100));
        })(i);
    }
}


//     (1.97, .82)
//     (2.47, 1.92)
//     (3.18, 3.05)
//     (3.53, 3.74)
//     (4.13, 4.6)
//     (3.76, 5.3)
//     (4.15, 5.64)
//     (2.9, 1.27)
//     (3.48, 1.3)
//     (4.11, 1.6)
//     (4.61, 1.73)
//     (5.21, 1.55)
//     (7.2, 1.73)
//     (8.1, 1.52)
//     (8.67, 1.68)
//     (9.16, 1.5)
//     (9.3, 1.09)
//     (8.88, 0.67)
//     (8.17, 0.67)
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight * 0.8;
//
// var detectCollision = require('./detectCollision.js');
// var player = require('./player.js');
// var scene = require('./scene.js');
// var Box = require('./box.js');
 //var box1 = new Box(100, 100, 2, 300, 300);
// var boxes = [];
// var GAME_STATE = "runnig";
//
//
// boxes.push(box1);
// setInterval(function() {
//   var boxChange = new Box(100, 80, 5, window.innerWidth, 550);
//   boxes.push(boxChange);
// }, 5000);
//
//
//
//
// function generateBox(){
//     boxes.push(new Box(100, 100, 10, window.innerWidth, canvas.height - 180));
//     if (GAME_STATE === 'runnig')
//     setTimeout(generateBox,Math.floor(Math.random()*3)*1000);
// }
// generateBox();
//
//
//
//
// function gameLoop() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     player.update();
//     boxes.forEach(function(box1) {
//         box1.update();
//         var thereWasACollision = detectCollision(player,box1);
//         if (detectCollision){
//             GAME_STATE = 'dead';
//         }
//
//     });
//     boxes.forEach(function(box1) {
//         box1.render(ctx);
//     });
//
//     //render de todo
//     scene.render(ctx, canvas);
//     player.render(ctx);
//
//
//     // boxes.render(ctx);
//
//         window.requestAnimationFrame(gameLoop);
//
//     }
//
//
// gameLoop();


window.onload = function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.8;
    var GAME_STATE = "running";

};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;
var GAME_STATE = "running";

var detectCollision = require('./detectCollision'); //////////////////
var player = require('./player.js');
var scene = require('./scene.js');
var Box = require('./Box.js');
 var box1 = new Box(100, 100, 2, 300, 300);
var boxes = []; /////////////////////for repeat image

setInterval(function() { ///////////////repet image para saltarla
    boxes.push(new Box(100, 100, 15, window.innerWidth, canvas.height - 180)); //////////////
}, 1000); ///////////////////

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //update de todo
    player.update();
    boxes.forEach(function(box) { //////////////////////////repet image
        box.update();
        var thereWasACollisions = detectCollision(player, box) ///////para collisions para choque y pierde
        if (thereWasACollisions) { //////
            GAME_STATE = "dead"; //////
        }
    });
    //render de todo
    scene.render(ctx, canvas);
    player.render(ctx);

    boxes.forEach(function(box) { /////////////////////// repeat image
        box.render(ctx);
    });
    if (GAME_STATE === "running") { //////////// collisions para que choque
        window.requestAnimationFrame(gameLoop);
    } else { ///al dar click
        drawGameOver(ctx, canvas);
    }

}

gameLoop();

function drawGameOver(ctx, canvas) { //////////////// ubdate al dar click
    ctx.font = "30px Verdana";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!!", canvas.width / 2, canvas.height / 2);
    document.getElementById('canvas').onclick = function() {
        location.reload();
    }
}

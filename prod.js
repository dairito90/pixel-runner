(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class Box{
//     constructor(height,width,speed,y,x){
//         this.x = x;
//         this.y = y;
//         this.height = height;
//         this.width = width;
//         this.speed = speed;
//     }
//     update(){
//         this.x = this.y - this.speed;
//     }
//     render(ctx){
//         ctx.fillRect(this.x,this.y,this.width,this.height);
//     }
// }
//
// module.exports = Box;

var Box = function () {
  function Box(height, width, spd, x, y) {
    _classCallCheck(this, Box);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.spd = spd;
  }

  _createClass(Box, [{
    key: "update",
    value: function update() {
      this.x -= this.spd;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Box;
}();

module.exports = Box;

},{}],2:[function(require,module,exports){
"use strict";

// module.exports = function(player,thing2){
//     var px = player.x + 21;
//     var py = player.y + 35;
//     var x0 = thing2.x;
//     var x1 = thing2.x + thing2.width;
//     var y0 = thing2.y;
//     var y2 = thing2.y + thing2.height;
//
//     if (px > x0 && px < x1 && py > y0 &&py < y2 ) return true;
//     px = player.x - 45;
//
//     if (px > x0 && px < x1 && py > y0 &&py < y2 ) return true;
//     px = player.y - 35;
//
//     if (px > x0 && px < x1 && py > y0 &&py < y2 ) return true;
//     px = player.x + 21;
//
//     if (px > x0 && px < x1 && py > y0 &&py < y2 ) return true;
//     return false;
//
// }


module.exports = function (player, thing2) {
  var px = player.x + 21;
  var py = player.y + 35;
  var x0 = thing2.x;
  var x1 = thing2.x + thing2.width;
  var y0 = thing2.y;
  var y2 = thing2.y + thing2.height;
  if (px > x0 && px < x1 && py > y0 && py < y2) return true;
  px = player.x - 45;
  if (px > x0 && px < x1 && py > y0 && py < y2) return true;
  py = player.y - 35;
  if (px > x0 && px < x1 && py > y0 && py < y2) return true;
  px = player.x + 21;
  if (px > x0 && px < x1 && py > y0 && py < y2) return true;
  return false;
};

},{}],3:[function(require,module,exports){
"use strict";

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

setInterval(function () {
    ///////////////repet image para saltarla
    boxes.push(new Box(100, 100, 15, window.innerWidth, canvas.height - 180)); //////////////
}, 1000); ///////////////////

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //update de todo
    player.update();
    boxes.forEach(function (box) {
        //////////////////////////repet image
        box.update();
        var thereWasACollisions = detectCollision(player, box); ///////para collisions para choque y pierde
        if (thereWasACollisions) {
            //////
            GAME_STATE = "dead"; //////
        }
    });
    //render de todo
    scene.render(ctx, canvas);
    player.render(ctx);

    boxes.forEach(function (box) {
        /////////////////////// repeat image
        box.render(ctx);
    });
    if (GAME_STATE === "running") {
        //////////// collisions para que choque
        window.requestAnimationFrame(gameLoop);
    } else {
        ///al dar click
        drawGameOver(ctx, canvas);
    }
}

gameLoop();

function drawGameOver(ctx, canvas) {
    //////////////// ubdate al dar click
    ctx.font = "30px Verdana";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!!", canvas.width / 2, canvas.height / 2);
    document.getElementById('canvas').onclick = function () {
        location.reload();
    };
}

},{"./Box.js":1,"./detectCollision":2,"./player.js":4,"./scene.js":5}],4:[function(require,module,exports){
"use strict";

// var f1 = document.getElementById("f1");
// var f2 = document.getElementById("f2");
// var f3 = document.getElementById("f3");
// var f4 = document.getElementById("f4");
// document.addEventListener("keydown", function(ev){
//   if (ev.keyCode === 32 && player.velY > 5){
//     if (!player.doubleJumping){
//       player.velY = -10;
//       if (player.y < window.innerHeight * 0.5 ) player.doubleJumping = true;
//     }
//   }
// });
//
// var player = {
//   x: 50,
//   y: window.innerHeight * 0.5 + 50,
//   velY: 10,
//   sprite: f1,
//   numUpdates: 0,
//   doubleJumping: false,
//   nextSprite: function(){
//     if (this.sprite === f1) this.sprite = f2;
//     else if (this.sprite === f2) this.sprite = f3;
//     else if (this.sprite === f3) this.sprite = f4;
//     else this.sprite = f1;
//   },
//   update: function(){
//     this.numUpdates++;
//     if (this.numUpdates > 5){
//       this.numUpdates = 0;
//       this.nextSprite();
//     }
//     this.y += this.velY;
//     if (this.y >= window.innerHeight * 0.5 + 50){
//       this.y = window.innerHeight * 0.5 + 50;
//       this.doubleJumping = false;
//     }
//     if (this.velY < 10){
//       this.velY += 0.4;
//     }
//   },
//   render: function(ctx){
//     ctx.drawImage(this.sprite, this.x-50, this.y-50, 100, 100);
//   }
// };
//
// module.exports = player;


var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
document.addEventListener("keydown", function (ev) {
    if (ev.keyCode === 32 && player.velY > 5) {
        if (!player.doubleJumping) {
            player.velY = -10;
            if (player.y < window.innerHeight * 0.5) player.doubleJumping = true;
        }
    }
});

var player = {
    x: 100, ////change 50 for 100 collisions
    y: window.innerHeight * 0.5 + 50, ///change    +50
    velY: 10,
    sprite: f1,
    numUpdates: 0,
    doubleJumping: false,
    nextSprite: function nextSprite() {
        if (this.sprite === f1) this.sprite = f2;else if (this.sprite === f2) this.sprite = f3;else if (this.sprite === f3) this.sprite = f4;else this.sprite = f1;
    },
    update: function update() {
        this.numUpdates++;
        if (this.numUpdates > 5) {
            this.numUpdates = 0;
            this.nextSprite();
        }
        this.y += this.velY;
        if (this.y >= window.innerHeight * 0.5 + 50) {
            ////change                +50
            this.y = window.innerHeight * 0.5 + 50;
            this.doubleJumping = false;
        }
        if (this.velY < 10) {
            this.velY += 0.4;
        }
    },
    render: function render(ctx) {
        ctx.drawImage(this.sprite, this.x - 50, this.y - 50, 100, 100); ///////////change -50 for collisions
    }
};

module.exports = player;

},{}],5:[function(require,module,exports){
'use strict';

var sky = document.getElementById('sky');

module.exports = {
  update: function update() {},
  render: function render(ctx, canvas) {
    for (var i = 0; i <= canvas.width; i += 10) {
      ctx.drawImage(sky, i, 0, 10, window.innerHeight * 0.5 + 100);
    }
    ctx.fillRect(0, window.innerHeight * 0.5 + 100, canvas.width, canvas.height * 0.5);
  }
};

},{}]},{},[3]);

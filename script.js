CONST_SPEED = 15;
STARTER_MONEY = 10000;
let screen_height = window.innerHeight;
let screen_width = window.innerWidth;
let gasRoad, EVroad;
let electricCar, gasCar;
function preload() {
  road = loadImage("./images/road.jpg");
}

function setup() {
  createCanvas(screen_width - 10, screen_height - 20);
  gasRoad = drawingRoad(screen_width / 6.5, 0);
  EVroad = drawingRoad((screen_width * 1.95) / 3, 0);
  electricCar = new Car(width / 4, height / 2, "electric");
  gasCar = new Car((3 * width) / 4, height / 2, "gas");
}

function draw() {
  background(225);
  //   let streetgas = new Road(screen_width / 6.5, 0);
  //   streetgas.show();
  for (let i = 0; i < gasRoad.length; i++) {
    gasRoad[i].show();
    EVroad[i].show();
  }

  electricCar.show();
  gasCar.show();
  line(screen_width / 2, 0, screen_width / 2, screen_height);
  gasCar.move(gasRoad);
  if (keyIsDown(UP_ARROW)) {
    electricCar.move(EVroad);
    console.log("bruh");
  }
}

function drawingRoad(x, y) {
  roads = [];
  let road = new Road(x, -screen_height);
  let road2 = new Road(x, y);
  let road3 = new Road(x, screen_height);
  roads.push(road);
  roads.push(road2);
  roads.push(road3);
  return roads;
}

function Car(x, y, type) {
  this.x = x;
  this.y = y;
  this.fuel = 100;
  this.speed = CONST_SPEED;
  this.money = STARTER_MONEY;
  this.type = type;

  this.show = function () {
    rectMode(CENTER);
    rect(this.x, this.y, 50, 75);
  };
  this.move = function (roads) {
    for (let i = 0; i < roads.length; i++) {
      roads[i].y += this.speed;
      if (roads[i].y > screen_height) {
        roads[i].y = -screen_height + 25;
      }
    }
  };
}

function GasStation(x, y, cost) {
  this.x = x;
  this.y = y;
  this.cost = cost;

  this.fueling = function (car) {
    // FUELS UP CAR, CHECKS IF ITS GAS
  };
}

function ChargingStation(x, y, cost) {
  this.x = x;
  this.y = y;
  this.cost = cost;

  this.fueling = function (car) {
    // FUELS UP CAR, CHECKS IF ITS ELECTRIC
  };
}

function Road(x, y) {
  this.x = x;
  this.y = y;

  this.show = function () {
    image(road, this.x, this.y, 365, screen_height);
  };
}



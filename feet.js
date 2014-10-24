$(function() {
  var TOTAL_HEIGHT = 760;
  var TOTAL_WIDTH = 600;
  var FOOT_SIZE = 75;

  var VERTICAL_SPACE = TOTAL_HEIGHT / 4; // 190
  var START_Y = VERTICAL_SPACE * 3;
  var END_Y = TOTAL_HEIGHT;

  var images = [
    'boots.jpg',
    'candy.jpg',
    'cow.jpg',
    'dog.jpg',
    'female.jpg',
    'flops.jpg',
    'horse.jpg',
    'kimodo.jpg',
    'kiss.jpg',
    'machine.jpg',
    'male.jpg',
    'military.jpg',
    'penguin.jpg',
    'pig.jpg',
    'robot.png',
    'tapdance.jpg',
    'therapy.jpg'
  ];

  for (var i = 0; i < images.length; i++) {
    var source = 'images/' + images[i];

    images[i] = new Image(TOTAL_WIDTH, VERTICAL_SPACE);
    images[i].src = source;
  }

  var feet = [
    'foot.jpg',
    'cleat.jpg',
    'dirtyfoot.jpg',
    'birkenstock.jpg',
    'etnies.jpg',
    'lebron.jpg',
    'redfoot.jpg',
    'yellowflop.jpg'
  ];

  for (var i = 0; i < feet.length; i++) {
    var source = 'images/' + feet[i];

    feet[i] = new Image(FOOT_SIZE, FOOT_SIZE);
    feet[i].src = source;
  }

  var foot1 = movingFoot(feet[0]);
  var foot2 = movingFoot(feet[1]);

  var sounds = [
    'media/tap.mp3',
    'media/slime.mp3'
  ];

  for (var i = 0; i < sounds.length; i++) {
    sounds[i] = new Audio(sounds[i]);
    sounds[i].loop = true;
  }

  var transfoot = new Image(TOTAL_WIDTH, VERTICAL_SPACE);
  transfoot.src = 'images/bigfoot.png';

  var opacity = 0.0;
  var fadingIn = true;

  var canvas = document.querySelector('#corpse');
  var context = canvas.getContext('2d');

  flashFeet();
  funkSounds();

  function flashFeet() {
    clearFootZone();
    drawRandomImageInFootZone();
    drawTransparentFoot();
    drawTwoFeet();

    moveFoot(foot1);
    moveFoot(foot2);

    var minTime = 20;
    var maxTime = 140;
    var timeout = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
    setTimeout(flashFeet, timeout);
  }

  function funkSounds() {
    sounds[0].play();

    var timeout1 = Math.floor(Math.random() * (12000 - 3000)) + 3000;
    setTimeout(function() {
      sounds[0].volume = 0.4;
      sounds[1].play();

      var timeout2 = Math.floor(Math.random() * (13000 - 5000)) + 5000;
      setTimeout(function() {
        sounds[0].volume = 1.0;
        sounds[0].pause();

        var timeout3 = Math.floor(Math.random() * (8600 - 2000)) + 2000;
        setTimeout(function() {
          sounds[1].pause();

          setTimeout(funkSounds, 1000);
        }, timeout3);
      }, timeout2);

    }, timeout1);
  }

  function clearFootZone() {
    context.clearRect(0, START_Y, TOTAL_WIDTH, END_Y);
  }

  function drawTransparentFoot() {
    var opdelta = Math.random() * 0.1;

    if (fadingIn) {
      opacity += opdelta;
      if (opacity >= 1) {
        fadingIn = false;
      }
    } else {
      opacity -= opdelta;
      if (opacity <= 0) {
        fadingIn = true;
      }
    }

    context.save();

    context.globalAlpha = opacity;
    context.drawImage(transfoot, 0, START_Y, TOTAL_WIDTH, VERTICAL_SPACE);

    context.restore();
  }

  function drawRandomImageInFootZone() {
    var image = choice(images);
    context.drawImage(image, 0, START_Y, TOTAL_WIDTH, VERTICAL_SPACE);
  }

  function choice(items) {
    return items[Math.floor(Math.random()*items.length)];
  }

  function movingFoot(image) {
    var foot = {};

    foot.image = image;

    foot.x = xInBounds();
    foot.y = yInBounds();
    foot.degrees = 0;

    return foot;
  }

  function moveFoot(foot) {
    var x, y;

    var loopCount = 0;
    do {
      x = foot.x + randomPosisitionalDelta();
      y = foot.y + randomPosisitionalDelta();
      loopCount++;
    } while ((!xIsValid(x) || !yIsValid(y)) && loopCount < 10);

    if (loopCount < 10) {
      foot.x = x;
      foot.y = y;
    } else {
      foot.x = TOTAL_WIDTH / 2;
      foot.y = START_Y + (END_Y - START_Y) / 2;
    }

    foot.degrees += footDegreesDelta();
  }

  function drawTwoFeet() {
    if (Math.random() > 0.94) {
      foot1.image = choice(feet);
    }

    if (Math.random() > 0.94) {
      do {
        foot2.image = choice(feet);
      } while (foot2.image.src == foot1.image.src);
    }

    drawFoot(foot1);
    drawFoot(foot2);
  }

  function drawFoot(foot) {
    context.save();

    context.shadowColor = randomColor();
    context.shadowBlur = Math.random() * 16 + 2;
    context.shadowOffsetX = 4;
    context.shadowOffsetY = 4;

    var size = FOOT_SIZE + footSizeDelta();
    var halfSize = size / 2;

    context.translate(foot.x, foot.y);

    context.translate(halfSize, halfSize);

    context.rotate(foot.degrees * Math.PI / 180);

    context.drawImage(foot.image, -halfSize, -halfSize, size, size);

    context.restore();
  }

  function xInBounds() {
    return Math.floor(Math.random() * TOTAL_WIDTH - FOOT_SIZE * 2) + FOOT_SIZE;
  }

  function yInBounds() {
    return Math.floor(Math.random() * VERTICAL_SPACE - FOOT_SIZE * 2) + START_Y + FOOT_SIZE;
  }

  function randomPosisitionalDelta() {
    return (Math.random() - 0.5) * 10;
  }

  function footSizeDelta() {
    return (Math.random() - 0.5) * 30;
  }

  function footDegreesDelta() {
    return (Math.random() - 0.5) * 30;
  }

  function xIsValid(x) {
    return (x >= 0 && x <= TOTAL_WIDTH);
  }

  function yIsValid(y) {
    return (y >= START_Y && y <= END_Y - FOOT_SIZE / 3);
  }

  function randomColor() {
    // lol so dumb that this exists
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
});

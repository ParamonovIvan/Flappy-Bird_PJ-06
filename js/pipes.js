import Canvas from "./canvas.js";
import Config from "./config.js";
import GameReset from "./gameReset.js";

export default class Pipes {
  constructor () {
    this.canvas = new Canvas();
    this.config = new Config();
    this.gameReset = new GameReset();

    this.pipesArray = [];

    this.pipeTop = {sX: 553, sY: 0};
    this.pipeBottom = {sX: 502, sY: 0};
    this.pipeWidth = 52;
    this.pipeHeight = 400;

    this.maxYPos = -155;
    this.distance = this.pipeWidth * 3.5;
    this.isCounted = false;

    this.btnStart = document.querySelector('.start__button');
    this.gameOverWrapper = document.querySelector('.game-over__wrapper');
  };

  draw() {
    this.pipesArray.forEach(pos => {
      this.topYPos = pos.y;
      this.bottomYPos = pos.y + this.pipeHeight + this.config.pipeGap;

      this.canvas.context.drawImage(this.canvas.spriteSheet, this.pipeTop.sX, this.pipeTop.sY, this.pipeWidth, this.pipeHeight, pos.x, this.topYPos, this.pipeWidth, this.pipeHeight);
      this.canvas.context.drawImage(this.canvas.spriteSheet, this.pipeBottom.sX, this.pipeBottom.sY, this.pipeWidth, this.pipeHeight, pos.x, this.bottomYPos, this.pipeWidth, this.pipeHeight);
    });

    this.config.index += 0.3;
    this.foregroundX = -(Math.floor(this.config.index * this.config.speedBackground) % this.canvas.element.width);

    this.canvas.context.drawImage(this.canvas.spriteSheet, this.canvas.foreground.sX, this.canvas.foreground.sY, this.canvas.foreground.width, this.canvas.foreground.height, this.foregroundX, this.canvas.foreground.y, this.canvas.element.width, this.canvas.foreground.height);
    this.canvas.context.drawImage(this.canvas.spriteSheet, this.canvas.foreground.sX, this.canvas.foreground.sY, this.canvas.foreground.width, this.canvas.foreground.height, this.foregroundX + this.canvas.element.width, this.canvas.foreground.y, this.canvas.element.width, this.canvas.foreground.height);
  };

  updata(bird, gameLoop, gameOver, score, medal) {
    if (this.pipesArray.length === 0 || this.canvas.element.width - this.pipesArray[this.pipesArray.length - 1].x >= this.distance) {
      this.pipesArray.push({
        x: this.canvas.element.width,
        y: this.maxYPos * (Math.random() + 1),
        isCounted: false
      });
    };

    this.pipesArray.forEach(pos => {
      pos.x -= this.config.speedBackground;

      this.middleOfPipes = pos.x + this.pipeWidth / 2;
      if (this.middleOfPipes < bird.birdPosition.x && !pos.isCounted) {
        if (pos.x < -this.pipeWidth) {
          this.pipesArray.shift();
        }

        score.increaseScore();
        pos.isCounted = true;

        if (score._score % 10 === 0) {
          this.config.speedBackground += 0.2;

          score.audioPoint10.play();        
        } else {
	  score.audioPoint.play();
	}

	 if ((score._score % 10 === 0) && (this.config.pipeGap !=70)) {
	  this.config.pipeGap -= 5;
        }
      };

      this.bottomPipeYPos = pos.y + this.pipeHeight + this.config.pipeGap;

      if ((bird.birdPosition.x + bird.birdRadius > pos.x && bird.birdPosition.x - bird.birdRadius < pos.x + this.pipeWidth && bird.birdPosition.y + bird.birdRadius > pos.y && bird.birdPosition.y - bird.birdRadius < pos.y + this.pipeHeight) ||
      (bird.birdPosition.x + bird.birdRadius > pos.x && bird.birdPosition.x - bird.birdRadius < pos.x + this.pipeWidth && bird.birdPosition.y + bird.birdRadius > this.bottomPipeYPos && bird.birdPosition.y - bird.birdRadius < this.bottomPipeYPos + this.pipeHeight) || bird.birdPosition.y + bird.birdSize[1] / 2 >= this.canvas.element.height - this.canvas.foreground.height) {
        bird.birdPosition.y = 350;
        gameLoop.cancelAnimation();

        document.addEventListener('click', () => {
          bird.audioWingFlapBird.pause();
        });

        document.addEventListener('touchstart', () => {
          bird.audioWingFlapBird.pause();
        });

        bird.audioDeathBird.play();

        score.bestScoreRecord();
        gameOver.draw(score._score, score._bestScore, medal);
        score._score = '';

        this.gameOverWrapper.classList.add('active');
        if (document.documentElement.clientWidth > 1080) {
          this.btnStart.addEventListener('click', this.gameReset.restart);
        } else {
          this.btnStart.addEventListener('touchstart', this.gameReset.restart);
        }

        document.addEventListener('keydown', (event) => {
          if (event.keyCode === 38) {
            this.gameReset.restart();
          }
        });
      }
    });
  }
}
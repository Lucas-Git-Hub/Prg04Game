import { Monkey } from "./monkey.js";
import { Hole } from "./hole.js";
import { Score } from "./score.js";
import { Healthbar } from "./healthbar.js";
import { GameOverScreen } from "./gameover.js";
export class Game {
    constructor() {
        this.holes = [];
        this.healthbar = [];
        this.hit = false;
        this.heartLocation = 2;
        this.gameOver = [];
        this.gameOverCheck = false;
        console.log("Game was created");
        this.score = new Score("p");
        for (let i = 0; i < 3; i++) {
            this.healthbar.push(new Healthbar("Fullheart", i));
        }
        for (let i = 0; i < 3; i++) {
            this.holes.push(new Hole("hole", 400, i));
        }
        for (let i = 0; i < 3; i++) {
            this.holes.push(new Hole("hole", 600, i));
        }
        this.monkey = new Monkey("monkeyUp", 0, 0);
        this.gameLoop();
    }
    gameLoop() {
        if (this.heartLocation < 0) {
            if (this.gameOverCheck == false) {
                console.log("Game over");
                this.monkey.remove();
                for (let i = 0; i < this.holes.length; i++) {
                    this.holes[i].remove();
                }
                for (let i = 0; i < this.healthbar.length; i++) {
                    this.healthbar[i].remove();
                }
                this.gameOver.push(new GameOverScreen("gameover"));
                this.gameOver.push(new GameOverScreen("p"));
                this.gameOver[1].setFinalScore(this.score.getScore());
                this.score.remove();
            }
            this.gameOverCheck = true;
            this.gameOver[1].update();
        }
        this.monkey.update();
        for (let i = 0; i < this.holes.length; i++) {
            this.holes[i].update();
            this.hit = this.checkCollision(this.holes[i].getRectangle(), this.monkey.getRectangle());
            if (this.hit == true && this.monkey.hammerState == false && this.holes[i].enemy == true) {
                this.holes[i].enemy = false;
                this.score.scorecounter += 1;
            }
            if (this.holes[i].enemyTimer <= 0) {
                if (this.heartLocation >= 0) {
                    this.healthbar[this.heartLocation].damage();
                    this.heartLocation -= 1;
                }
            }
        }
        this.score.update();
        for (let i = 0; i < this.healthbar.length; i++) {
            this.healthbar[i].update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map
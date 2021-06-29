import { Monkey } from "./monkey.js"
import { Hole } from "./hole.js"
import { Score } from "./score.js"
import { Healthbar } from "./healthbar.js"
import { GameOverScreen } from "./gameover.js"

export class Game{

    private monkey : Monkey
    private holes : Hole[] = []
    private score : Score
    private healthbar : Healthbar[] = []
    private hit : boolean = false;
    private heartLocation : number = 2;
    private gameOver : GameOverScreen[] = []
    private gameOverCheck : boolean = false;

    constructor() {
        console.log("Game was created");
        
        //Make scorecounter
        this.score = new Score("p");

        //Make Healtbar
        for (let i = 0; i < 3; i++){
            this.healthbar.push(new Healthbar("Fullheart",i))
        }

        //Make higher row of holes
        for (let i = 0; i < 3; i++){
            this.holes.push(new Hole("hole",400,i))
        }

        //Make lower row of holes
        for (let i = 0; i < 3; i++){
            this.holes.push(new Hole("hole",600,i))
        }

        //Make monkey
        this.monkey = new Monkey("monkeyUp",0,0);

        this.gameLoop();
    }

    private gameLoop() : void {
        //Check if there are any hearts left otherwise remove entity's and send to game over screen
        if(this.heartLocation < 0){
            if(this.gameOverCheck == false){
                console.log("Game over");   
                this.monkey.remove();
                for(let i = 0; i < this.holes.length; i++){
                this.holes[i].remove();
                }
                for(let i = 0; i < this.healthbar.length; i++){
                this.healthbar[i].remove();
                }
                this.gameOver.push(new GameOverScreen("gameover"));
                this.gameOver.push(new GameOverScreen("p"))
                this.gameOver[1].setFinalScore(this.score.getScore());
                this.score.remove()
            }
            this.gameOverCheck = true;
            this.gameOver[1].update()
        }
        //update monkey
        this.monkey.update();

        //update holes
        for(let i = 0; i < this.holes.length; i++){
            this.holes[i].update();
            // check collision between monkey and hole and if the hammer is up or down
            this.hit = this.checkCollision(this.holes[i].getRectangle(),this.monkey.getRectangle());
            if(this.hit == true && this.monkey.hammerState == false && this.holes[i].enemy == true){
                this.holes[i].enemy = false;
                this.score.scorecounter += 1;
            }

            if (this.holes[i].enemyTimer <= 0){
                //Deal damage to player from right to left heart containter
                if(this.heartLocation >= 0){
                    this.healthbar[this.heartLocation].damage()
                    this.heartLocation -= 1;
                }
            }
        }

        //update UI
        this.score.update();

        for (let i = 0; i < this.healthbar.length; i++){
            this.healthbar[i].update();
        }

        requestAnimationFrame(() => this.gameLoop());
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
}

new Game();
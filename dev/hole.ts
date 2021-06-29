import { Entity } from "./entity.js";

export class Hole extends Entity{

    public enemy : boolean = false;
    public timer : number = Math.floor(Math.random() * (100 - 10) + 10)
    public enemyTimer : number = 150;

    constructor(tagName : string, yLocation : number, xVariant : number) {
        super(tagName, yLocation, xVariant)
        console.log("Hole was created");
    }

    public update() : void {

        if(this.timer <= 0){
            //Reset timer number
            this.timer = Math.floor(Math.random() * (100 - 10) + 10);
            //Set enemy to True
            this.enemy = true;
            //Set enemyTimer
            this.enemyTimer = 150;
        }

        if(this.enemyTimer <= 0){
            //Set enemy to False
            this.enemy = false;
            //Set enemyTimer
            this.enemyTimer = 150;
        }

        //Set image to holeWithEnemy and countdown enemytimer
        if(this.enemy == true){
            this.div.classList.add("holeWithEnemy");

            this.enemyTimer -= 0.3;
        }

        //Set image to hole and countdown timer
        if(this.enemy == false){
            this.div.classList.remove("holeWithEnemy");

            this.timer -= 0.3;
        }
    }
}
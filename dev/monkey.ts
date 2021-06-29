import { Entity } from "./entity.js"

export class Monkey extends Entity{

    private verticalSpeed : number = 0;
    private horizontalSpeed : number = 0;
    public hammerState : boolean = true;

    constructor(tagName : string, Xvariant : number, yLocation : number) {
        super(tagName, Xvariant, yLocation)
        console.log("Monkey created");

        this.x = 700;
        this.y = 315;

        //Add eventlisteners to keep track of input keys
        window.addEventListener("keyup" , (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown" , (e: KeyboardEvent) => this.onKeyDown(e))
    }

    public update() : void {
        //check if offscreen to the left, set to right side of screen
        if(this.x + this.div.clientWidth < 0){
            this.x = window.innerWidth
        }
        //check if offscreen to the right, set to left side of screen
        if(this.x + this.div.clientWidth > 1666){
            this.x = -100;
        }
        //Check if offscreen to the top, stop the player
        if(this.y + this.div.clientHeight < 445){
            this.y = 315;
        }
        //Check if offscreen to the bottom, stop the player
        if(this.y + this.div.clientHeight > 745){
            this.y = 615;
        }

        //Hammer is up, monkey can move, remove monkeyDown class
        if(this.hammerState == true){
            this.div.classList.remove("monkeyDown");
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
        
            this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        } else {
            //Add monkeyDown class, hammer is down, monkey can't move
            this.div.classList.add("monkeyDown");
        }
    }

    private onKeyDown(e: KeyboardEvent): void {
        // log the keyboard
        console.log(e.key);

        switch (e.key) {
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
            case  "ArrowLeft":
                this.horizontalSpeed = -5;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 5;
                break;
            case " ":
                this.hammerState = false;
                break;
            default:
                break;
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        // Check if ArrowUp, ArrowDown, ArrowLeft or ArrowRight key has been released
        if(e.key == "ArrowUp" || e.key == "ArrowDown"){
            this.verticalSpeed = 0;
        }

        if(e.key == "ArrowLeft" || e.key == "ArrowRight"){
            this.horizontalSpeed = 0;
        }
        //Check if spacebar has been pressed, hold for keeping hammer down, release for hammer going back up
        if(e.key == " "){
            this.hammerState = true;
        }
    }
}
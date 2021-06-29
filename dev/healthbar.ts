import { UI } from "./UI.js";

export class Healthbar extends UI {

    public health : boolean = true;

    constructor(tagName : string, place : number){
        super(tagName)

        this.x = 1150
        this.y = 20
        this.x += 110 * place

        console.log("Heart Created");
    }

    public update() : void {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        if (this.health == false){
            this.div.classList.add("emptyHeart");
        }
    }

    public damage() : void {
        this.health = false;
    }
}
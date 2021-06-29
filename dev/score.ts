import { UI } from "./UI.js";

export class Score extends UI {

    public scorecounter : number = 0;

    constructor(tagName : string){
        //Create score
        super(tagName)

        this.x = 100;
        this.y = 50;
    }

    //Get score
    public getScore() : number {
        return this.scorecounter;
    }

    public update() : void {
        //Update scorecounter with every kill
        this.div.innerHTML = `Score: ${this.scorecounter}`;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}
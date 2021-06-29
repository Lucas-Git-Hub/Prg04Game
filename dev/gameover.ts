export class GameOverScreen {

    private element : HTMLElement
    public endScore : number

    constructor(tagName : string){
        if(tagName == "gameover"){
            this.createImage(tagName);
        } else {
            this.createScore(tagName);
        }
    }

    //Create gameover screentitle (image)
    private createImage(tagName : string) : void {
        this.element = document.createElement(tagName);
        document.body.appendChild(this.element);
    }

    //Create final score
    private createScore(tagName : string) : void {
        this.element = document.createElement(tagName);
        this.element.classList.add("score");
        this.element.innerText = `Final score: ${this.endScore}`
        document.body.appendChild(this.element);
    }

    //Set score
    public setFinalScore(score : number) : void {
        this.endScore = score
    }

    //Update location and score
    public update() : void {
        this.element.style.transform = `translate(${600}px, ${500}px)`;
        this.element.innerText = `Final score: ${this.endScore}`
    }
}
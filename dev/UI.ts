export class UI {

    protected div : HTMLElement
    protected x : number 
    protected y : number 
   
    constructor(tagName : string){
        console.log("UI created")

        this.create(tagName)
    }

    private create(tagName : string) : void {
        this.div = document.createElement(tagName);
        if(tagName == "p"){
            this.div.classList.add("score");
            this.div.innerHTML = `Score: ${0}`;
        }
        document.body.appendChild(this.div);
        this.div.style.translate = `translate(${this.x}px, ${this.y}px)`;
    }
    
    public remove() : void {
        this.div.remove();
    }
}
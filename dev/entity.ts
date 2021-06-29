export class Entity {

    protected div : HTMLElement
    protected x : number = 0;
    protected y : number = 0;
   
    constructor(tagName : string, yLocation : number, xVariant : number){
        if (tagName == "hole"){
            this.x = 360*(xVariant+1);
            this.y = yLocation;
        }
        this.create(tagName)
    }

    private create(tagName : string) : void {
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    public remove() : void {
        this.div.remove();
    }

    public getRectangle() : DOMRect {
        return this.div.getBoundingClientRect()
    }
}
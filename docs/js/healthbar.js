import { UI } from "./UI.js";
export class Healthbar extends UI {
    constructor(tagName, place) {
        super(tagName);
        this.health = true;
        this.x = 1150;
        this.y = 20;
        this.x += 110 * place;
        console.log("Heart Created");
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.health == false) {
            this.div.classList.add("emptyHeart");
        }
    }
    damage() {
        this.health = false;
    }
}
//# sourceMappingURL=healthbar.js.map
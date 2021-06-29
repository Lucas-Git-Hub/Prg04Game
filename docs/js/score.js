import { UI } from "./UI.js";
export class Score extends UI {
    constructor(tagName) {
        super(tagName);
        this.scorecounter = 0;
        this.x = 100;
        this.y = 50;
    }
    getScore() {
        return this.scorecounter;
    }
    update() {
        this.div.innerHTML = `Score: ${this.scorecounter}`;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=score.js.map
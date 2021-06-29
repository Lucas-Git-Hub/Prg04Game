export class GameOverScreen {
    constructor(tagName) {
        if (tagName == "gameover") {
            this.createImage(tagName);
        }
        else {
            this.createScore(tagName);
        }
    }
    createImage(tagName) {
        this.element = document.createElement(tagName);
        document.body.appendChild(this.element);
    }
    createScore(tagName) {
        this.element = document.createElement(tagName);
        this.element.classList.add("score");
        this.element.innerText = `Final score: ${this.endScore}`;
        document.body.appendChild(this.element);
    }
    setFinalScore(score) {
        this.endScore = score;
    }
    update() {
        this.element.style.transform = `translate(${600}px, ${500}px)`;
        this.element.innerText = `Final score: ${this.endScore}`;
    }
}
//# sourceMappingURL=gameover.js.map
export class UI {
    constructor(tagName) {
        console.log("UI created");
        this.create(tagName);
    }
    create(tagName) {
        this.div = document.createElement(tagName);
        if (tagName == "p") {
            this.div.classList.add("score");
            this.div.innerHTML = `Score: ${0}`;
        }
        document.body.appendChild(this.div);
        this.div.style.translate = `translate(${this.x}px, ${this.y}px)`;
    }
    remove() {
        this.div.remove();
    }
}
//# sourceMappingURL=UI.js.map
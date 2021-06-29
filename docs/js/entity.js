export class Entity {
    constructor(tagName, yLocation, xVariant) {
        this.x = 0;
        this.y = 0;
        if (tagName == "hole") {
            this.x = 360 * (xVariant + 1);
            this.y = yLocation;
        }
        this.create(tagName);
    }
    create(tagName) {
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    remove() {
        this.div.remove();
    }
    getRectangle() {
        return this.div.getBoundingClientRect();
    }
}
//# sourceMappingURL=entity.js.map
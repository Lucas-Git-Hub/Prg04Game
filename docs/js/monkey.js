import { Entity } from "./entity.js";
export class Monkey extends Entity {
    constructor(tagName, Xvariant, yLocation) {
        super(tagName, Xvariant, yLocation);
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.hammerState = true;
        console.log("Monkey created");
        this.x = 700;
        this.y = 315;
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
    }
    update() {
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
        }
        if (this.x + this.div.clientWidth > 1666) {
            this.x = -100;
        }
        if (this.y + this.div.clientHeight < 445) {
            this.y = 315;
        }
        if (this.y + this.div.clientHeight > 745) {
            this.y = 615;
        }
        if (this.hammerState == true) {
            this.div.classList.remove("monkeyDown");
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
            this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        }
        else {
            this.div.classList.add("monkeyDown");
        }
    }
    onKeyDown(e) {
        console.log(e.key);
        switch (e.key) {
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
            case "ArrowLeft":
                this.horizontalSpeed = -5;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 5;
                break;
            case " ":
                this.hammerState = false;
                break;
            default:
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") {
            this.verticalSpeed = 0;
        }
        if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
            this.horizontalSpeed = 0;
        }
        if (e.key == " ") {
            this.hammerState = true;
        }
    }
}
//# sourceMappingURL=monkey.js.map
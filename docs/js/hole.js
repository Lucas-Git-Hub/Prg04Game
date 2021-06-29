import { Entity } from "./entity.js";
export class Hole extends Entity {
    constructor(tagName, yLocation, xVariant) {
        super(tagName, yLocation, xVariant);
        this.enemy = false;
        this.timer = Math.floor(Math.random() * (100 - 10) + 10);
        this.enemyTimer = 150;
        console.log("Hole was created");
    }
    update() {
        if (this.timer <= 0) {
            this.timer = Math.floor(Math.random() * (100 - 10) + 10);
            this.enemy = true;
            this.enemyTimer = 150;
        }
        if (this.enemyTimer <= 0) {
            this.enemy = false;
            this.enemyTimer = 150;
        }
        if (this.enemy == true) {
            this.div.classList.add("holeWithEnemy");
            this.enemyTimer -= 0.3;
        }
        if (this.enemy == false) {
            this.div.classList.remove("holeWithEnemy");
            this.timer -= 0.3;
        }
    }
}
//# sourceMappingURL=hole.js.map
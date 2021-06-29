import { GameOverScreen } from "./gameover";
export class GameScreen {
    constructor() {
        this.screen = new GameOverScreen(this);
        this.gameLoop();
    }
    showGameScreen() {
        this.screen = new GameScreen();
    }
    gameLoop() {
    }
}
//# sourceMappingURL=gamescreen.js.map
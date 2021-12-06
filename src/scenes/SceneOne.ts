import { Engine, Scene } from "excalibur";
import ExampleSystem from "../system/example.system";
export default class SceneOne extends Scene {
  constructor() {
    super();
  }
  onInitialize(game: Engine) {
    const exampleSystem = new ExampleSystem();
    game.add(exampleSystem);
  }
}

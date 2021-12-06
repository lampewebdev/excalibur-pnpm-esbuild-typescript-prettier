import { Engine, Scene } from "excalibur";
import Inn from "../items/Inn";
import ExampleSystem from "../system/example.system";

export default class SceneOne extends Scene {
  constructor() {
    super();
  }

  onInitialize(engine: Engine) {
    const exampleSystem = new ExampleSystem();
    const inn = new Inn();

    engine.add(exampleSystem);
    engine.add(inn);
  }
}

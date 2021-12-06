import { Actor, vec, Vector, Resolution } from "excalibur";
import { staticResources } from "../resources";

export default class Inn extends Actor {
  constructor() {
    super({
      pos: vec(
        Resolution.GameBoyAdvance.width / 2,
        Resolution.GameBoyAdvance.height / 2
      ),
      anchor: Vector.Zero,
    });
  }

  onInitialize() {
    this.graphics.show(staticResources.innRes);
  }
}

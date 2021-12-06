import { Actor, vec, Vector, Resolution, Color } from "excalibur";
import { innSprite } from "../assets";
import engine from "../engine";

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
    const i = this.graphics.show(innSprite);
  }
}

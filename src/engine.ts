import { Engine, DisplayMode, Color, Resolution } from "excalibur";

const engine = new Engine({
  backgroundColor: Color.Black,
  resolution: Resolution.GameBoyAdvance,
  displayMode: DisplayMode.FitScreen,
  antialiasing: false,
  snapToPixel: true,
});

export default engine;

import { ImageSource, Sprite } from "excalibur";
import inn from "../assets/inn.png";

type ImagesToSprite = {
  [key: string]: ImageSource;
};

const imagesToSprite: ImagesToSprite = {
  innRes: new ImageSource(inn),
};

type StaticResources = {
  [key: string]: Sprite;
};

let staticResources: StaticResources = {};

Object.keys(imagesToSprite).forEach((key: string) => {
  imagesToSprite[key].load();
  staticResources[key] = imagesToSprite[key].toSprite();
});

export { staticResources };

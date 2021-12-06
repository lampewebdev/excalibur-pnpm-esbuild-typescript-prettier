import { ImageSource } from "excalibur";
import inn from "../assets/inn.png";

const innRes = new ImageSource(inn);
innRes.load();
const innSprite = innRes.toSprite();
export { innSprite };

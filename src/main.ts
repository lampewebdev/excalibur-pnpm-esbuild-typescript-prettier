import engine from "./engine";
import SceneOne from "./scenes/SceneOne";
import "./assets";

engine.add("sceneOne", new SceneOne());
engine.goToScene("sceneOne");

engine.start();

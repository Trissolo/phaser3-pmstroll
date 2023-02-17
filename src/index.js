// import Phaser from './phaser-custom-sprite-loader';
import Phaser from "phaser";
import SceneOne from "./scenes/sceneA.mjs";


const config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    backgroundColor: '#320822',
    disableContextMenu: true,
    scale:
    { 
        mode: Phaser.Scale.NONE,
        width: 256,
        height: 128,
        zoom: 3
        // autoCenter: Phaser.Scale.CENTER_BOTH
    },
    loader: {
        path: 'assets/'
    },
    scene: SceneOne
};

const game = new Phaser.Game(config);

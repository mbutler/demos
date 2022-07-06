import Phaser from "phaser"
import BoardPlugin from "phaser3-rex-plugins/plugins/board-plugin.js"
import { Level } from "./level.js"

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: screenWidth,
    height: screenHeight,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Level,
    plugins: {
        scene: [
            {
                key: "rexBoard",
                plugin: BoardPlugin,
                mapping: "rexBoard",
            },
        ],
    },
}

const game = new Phaser.Game(config)

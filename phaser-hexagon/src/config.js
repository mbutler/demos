import { Level } from "./level.js"

export const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
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

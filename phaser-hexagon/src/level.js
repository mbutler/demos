export class Level extends Phaser.Scene {
    constructor() {
        super({
            key: "level",
        })
    }

    preload() {}
    create() {
        const print = this.add.text(0, 0, "Click any tile")

        const staggeraxis = "y"
        const staggerindex = "odd"
        const board = this.rexBoard.add
            .board({
                grid: {
                    gridType: "hexagonGrid",
                    x: 480,
                    y: 40,
                    size: 40,
                    staggeraxis: staggeraxis,
                    staggerindex: staggerindex,
                },
            })
            .setInteractive()
            .on("tiledown", (pointer, tileXY) => {
                print.text = `${tileXY.x},${tileXY.y}`
            })

        const tileXYArray = board.fit(
            this.rexBoard.hexagonMap.hexagon(board, 4)
        )

        const graphics = this.add.graphics({
            lineStyle: {
                width: 2,
                color: 0xf5f5f5,
                alpha: 1,
            },
        })
        let tileXY, worldXY
        for (const i in tileXYArray) {
            tileXY = tileXYArray[i]
            graphics.strokePoints(
                board.getGridPoints(tileXY.x, tileXY.y, true),
                true
            )
        }
    }

    update() {}
}

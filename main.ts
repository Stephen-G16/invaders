input.onButtonPressed(Button.A, function () {
    ships.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    boom = game.createSprite(ships.get(LedSpriteProperty.X), ships.get(LedSpriteProperty.Y))
    boom.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        boom.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (boom.isTouching(enemies)) {
            game.addScore(1)
            boom.delete()
            enemies.delete()
        }
    }
    if (boom.get(LedSpriteProperty.Y) <= 0) {
        boom.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    ships.move(1)
})
let enemies: game.LedSprite = null
let boom: game.LedSprite = null
let ships: game.LedSprite = null
ships = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    enemies = game.createSprite(randint(0, 4), 0)
    enemies.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    enemies.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        enemies.move(1)
        basic.pause(500)
        if (enemies.isTouching(ships)) {
            game.gameOver()
        }
    }
    if (enemies.isTouchingEdge()) {
        enemies.delete()
    }
})

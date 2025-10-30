/* Copyright (c) 2025 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Oct 2025
 * This program shows while loops in action
*/

// variables
let sprite: game.LedSprite = null
let loopCounterX = 0
let loopCounterY = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when "A" is pressed, the pixels move cw
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    while (loopCounterY <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY = loopCounterY + 1
        basic.pause(500)
    }
    while (loopCounterX <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX = loopCounterX + 1
        basic.pause(500)
    }
    while (loopCounterY >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY = loopCounterY - 1
        basic.pause(500)
    }
    while (loopCounterX >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX = loopCounterX - 1
        basic.pause(500)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// when "B" is pressed, the pixels move ccw
input.onButtonPressed(Button.B, function () {
    // setup
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    while (loopCounterX <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX = loopCounterX + 1
        basic.pause(500)
    }
    while (loopCounterY <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY = loopCounterY + 1
        basic.pause(500)
    }
    while (loopCounterX >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounterX)
        loopCounterX = loopCounterX - 1
        basic.pause(500)
    }
    while (loopCounterY >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounterY)
        loopCounterY = loopCounterY - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

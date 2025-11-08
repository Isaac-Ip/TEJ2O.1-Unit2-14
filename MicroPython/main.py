"""
Copyright (c) 2025 Isaac Ip All rights reserved

Created by: Isaac Ip
Created on: Oct 2025
This program shows while loops in action
"""

from microbit import *
import game

# variables
sprite = None
loopCounterX = 0
loopCounterY = 0

# setup
display.clear()
display.show(Image.HAPPY)
while True:

    # when "A" is pressed, the pixels move cw
    if button_a.was_pressed():
        global sprite, loopCounterX, loopCounterY
        # setup
        display.clear()
        sprite = game.create_sprite(0, 0)
        loopCounterX = 0
        loopCounterY = 0

        while loopCounterY <= 4:
            sprite.set_x(loopCounterY)
            loopCounterY = loopCounterY + 1
            sleep(500)
        while loopCounterX <= 4:
            sprite.set_y(loopCounterX)
            loopCounterX = loopCounterX + 1
            sleep(500)
        while loopCounterY >= 0:
            sprite.set_x(loopCounterY)
            loopCounterY = loopCounterY - 1
            sleep(500)
        while loopCounterX >= 0:
            sprite.set_y(loopCounterX)
            loopCounterX = loopCounterX - 1
            sleep(500)

        sprite.delete()
        display.show(Image.HAPPY)

    # when "B" is pressed, the pixels move ccw
    if button_b.was_pressed():
        global sprite, loopCounterX, loopCounterY
        # setup
        display.clear()
        sprite = game.create_sprite(0, 0)
        loopCounterX = 0
        loopCounterY = 0

        while loopCounterX <= 4:
            sprite.set_y(loopCounterX)
            loopCounterX = loopCounterX + 1
            sleep(500)
        while loopCounterY <= 4:
            sprite.set_x(loopCounterY)
            loopCounterY = loopCounterY + 1
            sleep(500)
        while loopCounterX >= 0:
            sprite.set_y(loopCounterX)
            loopCounterX = loopCounterX - 1
            sleep(500)
        while loopCounterY >= 0:
            sprite.set_x(loopCounterY)
            loopCounterY = loopCounterY - 1
            sleep(500)
        sprite.delete()
        display.show(Image.HAPPY)

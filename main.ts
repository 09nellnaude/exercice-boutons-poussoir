basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})

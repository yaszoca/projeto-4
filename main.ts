let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(0, 2)
    if (x == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (x == 1) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})

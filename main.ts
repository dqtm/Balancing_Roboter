radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    if (name == "distance") {
        distance = value
    }
})
let speed = 0
let modus = 0
let distance = 0
basic.showNumber(0)
radio.setGroup(0)
let stop = 0
let fahre = 1
let links = 2
let rechts = 3
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        modus = fahre
    } else if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
        modus = links
    } else if (!(input.buttonIsPressed(Button.A)) && input.buttonIsPressed(Button.B)) {
        modus = rechts
    } else {
        modus = stop
    }
    speed = 20
    radio.sendValue("mode", modus)
    radio.sendValue("speed", speed)
    basic.pause(100)
})

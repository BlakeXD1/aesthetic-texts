input.onButtonPressed(Button.A, function () {
    radio.sendString("Alright M8")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("never gonna give u up")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (receivedString))
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("E")
})
radio.setGroup(69)
basic.forever(function () {
	
})

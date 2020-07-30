radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("celsius", receivedNumber)
})
basic.showString("RECEIVER")
radio.setGroup(42)
basic.forever(function () {
	
})

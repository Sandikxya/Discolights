serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    serialLineReceived2 = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    commandparts = serialLineReceived2.split("")
    command2 = commandparts[0]
    if (command2 == "heart") {
        basic.showIcon(IconNames.Heart)
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(500)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(500)
        }
    } else if (command2 == "diamond") {
        basic.showIcon(IconNames.Target)
        basic.pause(500)
        basic.showIcon(IconNames.Diamond)
        basic.pause(500)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(500)
    } else {
        if (command2 == "square") {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showIcon(IconNames.Square)
            basic.pause(500)
            basic.showIcon(IconNames.SmallSquare)
            basic.pause(500)
        } else {
            if (("command" as any) == ("sensitivity" as any)) {
                if (commandparts.length >= 1) {
                    sensitivity2 = parseFloat(commandparts[1])
                }
            } else {
                basic.showString("command")
            }
        }
    }
})
let command2 = ""
let commandparts: string[] = []
let serialLineReceived2 = ""
let sensitivity2 = 0
sensitivity2 = 255
serial.setBaudRate(BaudRate.BaudRate115200)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    led.setBrightness(input.soundLevel() * (sensitivity2 / 255))
})

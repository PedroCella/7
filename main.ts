basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.TShirt)
        basic.pause(200)
        basic.showIcon(IconNames.House)
        basic.pause(200)
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.showIcon(IconNames.No)
        basic.pause(200)
        basic.showIcon(IconNames.Square)
        basic.pause(200)
    }
})

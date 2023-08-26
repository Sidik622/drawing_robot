input.onButtonPressed(Button.A, function () {
    sparkbitO.stopMotorModule(SparkbitOutPort.Output2)
    sparkbitO.setLightModule(SparkbitOutPort.Output3, SparkbitColor.Red, 0)
    music.stopAllSounds()
})
basic.forever(function () {
    if (sparkbitI.bumpSensorIsPressed(SparkbitInPort.Input1)) {
        sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Clockwise, 36)
        sparkbitO.setLightModule(SparkbitOutPort.Output3, SparkbitColor.Green, 49)
        music.setVolume(27)
        music.play(music.stringPlayable("C5 B A G F E D C ", 150), music.PlaybackMode.LoopingInBackground)
    }
})

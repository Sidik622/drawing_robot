basic.forever(function () {
    if (sparkbitI.bumpSensorIsPressed(SparkbitInPort.Input1)) {
        sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Clockwise, 36)
        sparkbitO.setLightModule(SparkbitOutPort.Output3, SparkbitColor.Green, 49)
    }
})

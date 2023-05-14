input.onButtonPressed(Button.AB, function () {
    if (input.soundLevel() == 20) {
        input.setSoundThreshold(SoundThreshold.Loud, 255)
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
})
music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 2379, 0, 255, 4274, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
music.setBuiltInSpeakerEnabled(true)
basic.showIcon(IconNames.Happy)
let sound = input.soundLevel()
basic.forever(function () {
	
})

input.onButtonPressed(Button.A, function () {
    compteur_de_rotations = 0
    while (compteur_de_rotations <= compteur) {
        TobbieII.rightward()
        basic.pause(500)
        TobbieII.stopturn()
        basic.pause(500)
        compteur_de_rotations += 1
    }
    compteur += 1
    basic.showNumber(compteur)
})
input.onButtonPressed(Button.AB, function () {
    compteur = 0
    basic.showNumber(compteur)
})
input.onButtonPressed(Button.B, function () {
    compteur_de_rotations = 0
    while (compteur_de_rotations <= compteur) {
        TobbieII.leftward()
        basic.pause(500)
        TobbieII.stopturn()
        basic.pause(500)
        compteur_de_rotations += 1
    }
    compteur += 1
    basic.showNumber(compteur)
})
let compteur_de_rotations = 0
let compteur = 0
compteur = 0
basic.showNumber(compteur)

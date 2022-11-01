let J1 = {
    parti: 2,
    win: 1,
    elo: 1400
}

let J2 = {
    parti: 2,
    win: 1,
    elo: 1400
}

function p(elo1, elo2) {
    return elo1.elo / elo2.elo
}

function play(J1, J2) {

    J1.parti++
    J2.parti++
    const Rdm = Math.random()
    Rdm > 0.5 ? J1.win++ : J2.win++
    const who = Rdm > 0.5 ? J1 : J2
    const ForceJ1 = p(J1, J2)
    const ForceJ2 = p(J2, J1)
    RateJ1 = J1.win / J1.parti
    RateJ2 = J2.win / J2.parti

    const diff = J1.elo - J2.elo

    if (who === J1) {

        if (J1.elo >= J2.elo) {
            J1.elo += J1.elo / 100 * 1
            J2.elo -= J2.elo / 100 * 1
        }
        else {
            J1.elo += J2.elo / 100 * 6
            J2.elo -= J2.elo / 100 * 6
        }

    }
    else {

        if (J2.elo >= J2.elo) {
            J2.elo += J2.elo / 100 * 1
            J1.elo -= J1.elo / 100 * 1
        }
        else {
            J2.elo += J2.elo / 100 * 6
            J1.elo -= J2.elo / 100 * 6
        }
    }

    J1.elo = parseInt(J1.elo.toString().split('.')[0])
    J2.elo = parseInt(J2.elo.toString().split('.')[0])

    return [J1, J2]

}


setInterval(() => {

    const tab = play(J1, J2)
    J1 = tab[0]
    J2 = tab[1]

    console.log(J1.elo, J2.elo)

}, 3 * 1000)
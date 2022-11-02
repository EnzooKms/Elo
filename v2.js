let EloA = 1400
let Elob = 1400


function T(diff) {
    return 1 / (1 + (10 ** -(diff / 400))) * 100
}

let i = 0

setInterval(() => {

    i++
    const diff = EloA - Elob

    const who = Math.floor(Math.random() * 7) + 1 > 6 ? 'a' : "b"

    const RatioA = Math.floor(T(diff))
    const RatioB = Math.floor((1 - RatioA / 100) * 100)

    if (who === "a") {
        EloA = EloA + (40 * (1 - RatioA / 100))
        Elob -= (40 * (1 - RatioA / 100))
    }
    else {
        Elob = Elob + (40 * (1 - RatioB / 100))
        EloA -= (40 * (1 - RatioB / 100))
    }

    console.log(EloA, Elob, (40 * (1 - RatioA / 100)), who, i);
}, 1 * 1000);
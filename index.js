let nomeDoHeroi = "Mestre dos Magos";
let XP = 4520;
let medalha;

if (XP <= 1000) {
    medalha = "ferro";
} else if (XP > 1000 && XP <= 2000) {
    medalha = "Bronze";
} else if (XP > 2000 && XP <= 5000) {
    medalha = "Prata";
} else if (XP > 5000 && XP <= 7000) {
    medalha = "Ouro";
} else if (XP > 7000 && XP <= 8000) {
    medalha = "Platina";
} else if (XP > 8000 && XP <= 9000) {
    medalha = "Ascendente";
} else if (XP > 9000 && XP <= 10000) {
    medalha = "Imortal";
} else { medalha = "Radiante"
    // Adicione outros casos conforme necessário
}

console.log("O herói de nome " + nomeDoHeroi + " está no nível de " + medalha);
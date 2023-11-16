let nomeDoHeroi = "Mestre dos Magos";
let XP = 5200;
let medalha;

while (XP > 1000) {
    if (XP <= 1000) {
        medalha = "ferro";
    } else if (XP <= 2000) {
        medalha = "Bronze";
    } else if (XP <= 5000) {
        medalha = "Prata";
    } else if (XP <= 7000) {
        medalha = "Ouro";
    } else if (XP <= 8000) {
        medalha = "Platina";
    } else if (XP <= 9000) {
        medalha = "Ascendente";
    } else if (XP <= 10000) {
        medalha = "Imortal";
    } else {
        medalha = "Radiante";
        // Adiciona outros casos conforme necessário
    }
    break; // Encerra o loop depois de determinar a medalha
}

console.log("O herói de nome " + nomeDoHeroi + " está no nível de " + medalha);
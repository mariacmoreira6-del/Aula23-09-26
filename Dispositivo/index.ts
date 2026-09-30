import readLine from "readline-sync";

import { LampadaInteligente } from "./src/models/LampadaInteligente.js";
import { Termostato } from "./src/models/Termostato.js";


console.log("\n======================================");
console.log("       SISTEMA DE DISPOSITIVOS");
console.log("======================================");
console.log("1 - Lâmpada Inteligente");
console.log("2 - Termostato");
console.log("======================================");

const opcao = readLine.questionInt("\nEscolha o dispositivo: ");


switch (opcao) {

    case 1:

        const novaLampada = new LampadaInteligente({
            idRede: "REDE-001",
            nomeLocal: "Sala",
            isLigado: 1,
            corHexadecimal: "#FFFFFF",
            nivelBrilho: 100,
        });

        console.log("\n======================================");
        console.log("       LÂMPADA INTELIGENTE");
        console.log("======================================");

        novaLampada.setIdRede =
            readLine.question("Digite o ID da rede: ");

        novaLampada.setNomeLocal =
            readLine.question("Digite o local da lâmpada: ");

        novaLampada.setIsLigado =
            readLine.questionInt(
                "A lâmpada está ligada? (1-Sim / 2-Não): "
            );

        novaLampada.setCorHexadecimal =
            readLine.question(
                "Digite a cor em hexadecimal (ex: #FFFFFF): "
            );

        novaLampada.setNivelBrilho =
            readLine.questionInt(
                "Digite o nível de brilho (1-100): "
            );


        console.log("\n======================================");
        console.log("       DADOS DA LÂMPADA");
        console.log("======================================");

        console.log(`ID da rede: ${novaLampada.getIdRede}`);
        console.log(`Local: ${novaLampada.getNomeLocal}`);
        console.log(
            `Ligada: ${novaLampada.getIsLigado === 1 ? "Sim" : "Não"}`
        );
        console.log(`Cor: ${novaLampada.getCorHexadecimal}`);
        console.log(`Nível de brilho: ${novaLampada.getNivelBrilho}%`);

        break;


    case 2:

        const novoTermostato = new Termostato({
            idRede: "REDE-002",
            nomeLocal: "Quarto",
            isLigado: 1,
            temperaturaAtual: 25,
            temperaturaAlvo: 22,
        });

        console.log("\n======================================");
        console.log("             TERMOSTATO");
        console.log("======================================");

        novoTermostato.setIdRede =
            readLine.question("Digite o ID da rede: ");

        novoTermostato.setNomeLocal =
            readLine.question("Digite o local do termostato: ");

        novoTermostato.setIsLigado =
            readLine.questionInt(
                "O termostato está ligado? (1-Sim / 2-Não): "
            );

        novoTermostato.settemperaturaAtual =
            readLine.questionInt(
                "Digite a temperatura atual: "
            );

        novoTermostato.setTemperaturaAlvo =
            readLine.questionInt(
                "Digite a temperatura desejada: "
            );


        console.log("\n======================================");
        console.log("       DADOS DO TERMOSTATO");
        console.log("======================================");

        console.log(`ID da rede: ${novoTermostato.getIdRede}`);
        console.log(`Local: ${novoTermostato.getNomeLocal}`);
        console.log(
            `Ligado: ${novoTermostato.getIsLigado === 1 ? "Sim" : "Não"}`
        );
        console.log(
            `Temperatura atual: ${novoTermostato.getTemperaturaAtual}°C`
        );
        console.log(
            `Temperatura alvo: ${novoTermostato.getTemperaturaAlvo}°C`
        );

        break;


    // ==================================
    // OPÇÃO INVÁLIDA
    // ==================================

    default:

        console.log("\nERRO: opção inválida!");
        console.log("Escolha 1 para Lâmpada ou 2 para Termostato.");

        break;
}
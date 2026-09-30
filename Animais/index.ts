import readLine from "readline-sync";

import { Gato } from "./src/models/Gato.js";
import { Cachorro } from "./src/models/Cachorro.js";


console.log("\n======================================");
console.log("       SISTEMA VETERINÁRIO");
console.log("======================================");
console.log("1 - Cadastrar Gato");
console.log("2 - Cadastrar Cachorro");
console.log("======================================");

const opcao = readLine.questionInt("\nEscolha uma opção: ");


switch (opcao) {

    case 1:

        // =========================
        // CADASTRO DO GATO
        // =========================

        const novoGato = new Gato({
            nomepaciente: "",
            nomeTutor: "",
            pesoKG: 0,
            fivFelvTestado: false,
            isIndoor: false,
        });

        console.log("\n======================================");
        console.log("          CADASTRO DE GATO");
        console.log("======================================");

        novoGato.setNomepaciente =
            readLine.question("Digite o nome do animal: ");

        novoGato.setNomeTutor =
            readLine.question("Digite o nome do tutor: ");

        novoGato.setPesoKG =
            readLine.questionInt("Digite o peso em kg: ");

        const fivFelv = readLine.questionInt(
            "Foi testado para FIV/FELV? (1-Sim / 2-Nao): "
        );

        novoGato.setFivFelvTestado = fivFelv === 1;

        const indoor = readLine.questionInt(
            "O gato vive dentro de casa? (1-Sim / 2-Nao): "
        );

        novoGato.setIsIndoor = indoor === 1;


        console.log("\n======================================");
        console.log("          DADOS DO GATO");
        console.log("======================================");

        console.log(`Nome do paciente: ${novoGato.getNomepaciente}`);
        console.log(`Nome do tutor: ${novoGato.getNomeTutor}`);
        console.log(`Peso: ${novoGato.getPesoKG} kg`);
        console.log(`FIV/FELV testado: ${novoGato.getFivFelvTestado ? "Sim" : "Não"}`);
        console.log(`Vive dentro de casa: ${novoGato.getIsIndoor ? "Sim" : "Não"}`);

        break;


    case 2:

        // =========================
        // CADASTRO DO CACHORRO
        // =========================

        const novoCachorro = new Cachorro({
            nomepaciente: "",
            nomeTutor: "",
            pesoKG: 0,
            porte: "",
            precisaTosa: false,
        });

        console.log("\n======================================");
        console.log("        CADASTRO DE CACHORRO");
        console.log("======================================");

        novoCachorro.setNomepaciente =
            readLine.question("Digite o nome do animal: ");

        novoCachorro.setNomeTutor =
            readLine.question("Digite o nome do tutor: ");

        novoCachorro.setPesoKG =
            readLine.questionInt("Digite o peso em kg: ");

        novoCachorro.setPorte =
            readLine.question("Digite o porte do cachorro: ");

        const tosa = readLine.questionInt(
            "Precisa de tosa? (1-Sim / 2-Nao): "
        );

        novoCachorro.setPrecisaTosa = tosa === 1;


        console.log("\n======================================");
        console.log("        DADOS DO CACHORRO");
        console.log("======================================");

        console.log(`Nome do paciente: ${novoCachorro.getNomepaciente}`);
        console.log(`Nome do tutor: ${novoCachorro.getNomeTutor}`);
        console.log(`Peso: ${novoCachorro.getPesoKG} kg`);
        console.log(`Porte: ${novoCachorro.getPorte}`);
        console.log(`Precisa de tosa: ${novoCachorro.getPrecisaTosa ? "Sim" : "Não"}`);

        break;


    default:

        console.log("\nERRO: opção inválida!");
        console.log("Escolha 1 para Gato ou 2 para Cachorro.");

        break;
}
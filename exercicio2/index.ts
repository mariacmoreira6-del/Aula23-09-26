import readLine from "readline-sync";
import { Veiculo } from "./src/models/Veiculo.js";

console.log("=== CADASTRO DE VEICULO ===");

const novoVeiculo = new Veiculo({
    marca: "Audi",
    modelo: "R8",
    ano: 2020,
    quantidadedeportas: "65",
    cilindrada: "321",
});

console.log(`\nVeiculo cadastrado: ${novoVeiculo.getMarca}`);
console.log(`Registro: ${novoVeiculo.getModelo}`);

novoVeiculo.setModelo = readLine.question("\nDigite o modelo atualizado do Veiculo: ");
novoVeiculo.setAno = readLine.questionInt("Digite o novo ano: ");
novoVeiculo.setMarca = readLine.question ("Digite o modelo do veículo: ");

console.log("\n================================================");
console.log("      DADOS COMPLETOS DO Veiculo            ");
console.log("================================================");
console.log(`marca:                  ${novoVeiculo.getMarca}`);
console.log(`modelo:                 ${novoVeiculo.getModelo}`);
console.log(`ano:             ${novoVeiculo.getAno}`);
console.log("================================================\n");
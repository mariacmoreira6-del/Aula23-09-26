import readLine from "readline-sync";
import { Contabancaria } from "./src/models/Contabancaria.js";

console.log("=== CADASTRO DE Contabancaria ===");

const novoContabancaria = new Contabancaria({
    numeroConta: "333",
    titular: "Felipe",
    saldo: 99,
});

console.log(`\nContabancaria cadastrado: ${novoContabancaria.getNumeroConta}`);
console.log(`Registro: ${novoContabancaria.getNumeroConta}`);

novoContabancaria.setNumeroConta = readLine.question("\nDigite o numero da conta bancaria: ");
novoContabancaria.setSaldo = readLine.questionInt("Digite o saldo atual: ");
novoContabancaria.setTitular = readLine.question ("Digite o nome do titular: ");

console.log("\n================================================");
console.log("      DADOS COMPLETOS DO Contabancaria            ");
console.log("================================================");
console.log(`Nome do Titular:                  ${novoContabancaria.getTitular}`);
console.log(`Nome do NumeroConta:                 ${novoContabancaria.getNumeroConta}`);
console.log(`Saldo:             ${novoContabancaria.getSaldo}`);
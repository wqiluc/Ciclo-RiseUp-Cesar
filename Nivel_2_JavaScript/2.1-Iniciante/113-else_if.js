// else if

let nota;
let aluno;

nota = 100;
aluno = "Lucas";

if (nota >= 90) {
    console.log(`Parabéns, ${aluno}! 🏆 Sua nota foi ${nota} e você tirou Excelente!`);
} 
else if (nota >= 70) {
    console.log(`Muito bem, ${aluno}! ✅ Sua nota foi ${nota} e você tirou Boa nota!`);
} 
else if (nota >= 50) {
    console.log(`${aluno}, sua nota foi ${nota}. 🙂 Você está na média.`);
} 
else {
    console.log(`${aluno}, sua nota foi ${nota}. ❌ Você precisa melhorar.`);
}
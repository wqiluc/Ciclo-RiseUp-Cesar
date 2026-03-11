// Exemplo importado funções específicas:

import { soma, subtrai } from "./calculadora.js";

soma(10, 5);
subtrai(10, 5);

// Exemplo importando o módulo TODO:

import * as calculadora from "./calculadora.js"

calculadora.soma(10, 5);
calculadora.subtrai(10, 5);
calculadora.multiplica(10, 5);
calculadora.divide(10, 5);

// A exportação padrão ocorre no arquivo: "calculadora.js", deixando algo como:

/* 

export{

    

}

*/
import { soma, subtrai, multiplica } from "./calculadora.js";

soma(10, 5);
subtrai(10, 5);
multiplica(10, 5);

import * as calculadora from "./calculadora.js";

calculadora.soma(10, 5);
calculadora.subtrai(10, 5);
calculadora.multiplica(10, 5);
calculadora.divide(10, 5);
calculadora.multiplica(30, 2);

import Calculadora from "./calculadora.js";

const calc = new Calculadora();

calc.soma(10, 5);
calc.subtrai(10, 5);
calc.multiplica(10, 5);
calc.divide(10, 5);
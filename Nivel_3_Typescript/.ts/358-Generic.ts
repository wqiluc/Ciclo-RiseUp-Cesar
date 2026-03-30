 // =========================================
 // GENERICS EM TYPESCRIPT
 // =========================================

 // Generics permitem criar código reutilizável e
 // Funcionam como "tipos dinâmicos controlados".

 // =========================================
 // EXEMPLO BÁSICO:
 // =========================================

 // Sem generics (pouco reutilizável)
function identidadeString(valor: string): string {
  return valor
}

 // Com generics (reutilizável)
function identidade<T>(valor: T): T {
  return valor
}

 // O tipo é inferido automaticamente
const a = identidade("Lucas")   // string
const b = identidade(10)        // number

 // Também pode definir manualmente
const c = identidade<number>(20)

 // =========================================
 // GENERICS EM ARRAYS
 // =========================================

function primeiroElemento<T>(lista: T[]): T {
  return lista[0]
}

const num = primeiroElemento([1, 2, 3])        // number
const str = primeiroElemento(["a", "b"])       // string

 // =========================================
 // GENERICS EM TIPOS (TYPE)
 // =========================================

type Caixa<T> = {
  conteudo: T
}

const caixaNumero: Caixa<number> = {
  conteudo: 100
}

const caixaTexto: Caixa<string> = {
  conteudo: "Olá"
}

 // =========================================
 // GENERICS EM INTERFACES
 // =========================================

interface Resposta<T> {
  data: T
  sucesso: boolean
}

const resposta1: Resposta<string> = {
  data: "OK",
  sucesso: true
}

 // =========================================
 // MÚLTIPLOS GENERICS
 // =========================================

function par<K, V>(chave: K, valor: V): [K, V] {
  return [chave, valor]
}

const exemplo = par<string, number>("idade", 20)

 // =========================================
 // CONSTRAINT (RESTRIÇÃO)
 // =========================================

 // Limita o tipo que pode ser usado

function tamanho<T extends { length: number }>(valor: T): number {
  return valor.length
}

tamanho("texto")       // ✔ string tem length
tamanho([1, 2, 3])     // ✔ array tem length
// tamanho(10)         // ❌ number não tem length

 // =========================================
 // KEYOF COM GENERICS
 // =========================================

function obterValor<T, K extends keyof T>(obj: T, chave: K) {
  return obj[chave]
}

const pessoa = {
  nome: "Lucas",
  idade: 20
}

const nome = obterValor(pessoa, "nome")   // ✅
// obterValor(pessoa, "altura")           // ❌ erro
 // =========================================
 // TYPE ASSERTION (ASERÇÃO DE TIPOS)
 // =========================================

 // Aserção de tipo é quando você "diz" ao TypeScript
 // qual é o tipo de um valor, mesmo que ele não saiba

 // NÃO altera o valor em si, apenas informa ao compilador

 // =========================================
 // SINTAXE
 // =========================================

 // Forma mais comum (recomendada)
const valor: unknown = "Lucas"

const tamanho = (valor as string).length

 // Outra forma (menos usada, pode dar conflito com JSX)
const tamanho2 = (<string>valor).length

 // =========================================
 // QUANDO USAR
 // =========================================

 // Quando você SABE mais que o TypeScript

const dado: unknown = "texto"

// TS não sabe que é string
// então usamos asserção
const resultado = (dado as string).toUpperCase()

 // =========================================
 // EXEMPLO COM DOM
 // =========================================

 // TypeScript não sabe qual elemento é retornado
const input = document.getElementById("meuInput") as HTMLInputElement

// Agora pode acessar propriedades específicas
input.value = "Olá"

 // =========================================
 // CUIDADO ⚠️
 // =========================================

 // Aserção NÃO faz verificação real

const numero = "123" as unknown as number

// Isso NÃO converte string para number
// apenas engana o TypeScript

// numero ainda é string em tempo de execução

 // =========================================
 // DOUBLE ASSERTION
 // =========================================

 // Às vezes usamos "as unknown as Tipo"

const algo: any = "teste"

const convertido = algo as unknown as number

// ⚠️ perigoso: pode causar erros em runtime

 // =========================================
 // NON-NULL ASSERTION (!)
 // =========================================

 // Diz que o valor NÃO é null ou undefined

const elemento = document.getElementById("id")!

// sem isso, TS pode reclamar de null

 // =========================================
 // AS CONST
 // =========================================

 // Torna valores mais específicos e imutáveis

const cores = ["vermelho", "azul"] as const

// vira:
// readonly ["vermelho" 🔴, "azul" 🔵]
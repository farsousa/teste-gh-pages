import IMateria from "./IMateria"

export default interface IQuestao {
    id: string
    enunciado: string
    linkImagem: string
    alternativa1: string
    alternativa2: string
    alternativa3: string
    alternativa4: string
    resposta: string
    explicacao: string
    nomeMateria: string
}
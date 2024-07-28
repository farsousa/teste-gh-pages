import { tab_materias } from "../database/tab_materias"
import { questoes_direcao_defensiva, questoes_legislacao_transito, questoes_mecanica_basica, questoes_meio_ambiente_cidadania, questoes_primeiros_socorros } from "../database/tab_questoes"
import IMateria from "../interfaces/IMateria"
import IQuestao from "../interfaces/IQuestao"
import ISimulado from "../interfaces/ISimulado"

export const obterMaterias = (): IMateria[] => {
    return tab_materias
}

export const gerarSimuladoGeral = () => {
    let questoesSimulado: IQuestao[] = []

    let materias: IMateria[] = obterMaterias()
    if (materias.length === 0) {
        throw new Error('Nenhuma matéria foi encontrada!')
    }

    for (let materia of materias) {
        if (materia.quantidadeQuestoesSimuladoGeral <= 0) {
            continue
        }

        let questoes: IQuestao[] = obterQuestoesPorMateria(materia.id)
        if (materia.quantidadeQuestoesSimuladoGeral > questoes.length) {
            throw new Error(`Não há ${materia.quantidadeQuestoesSimuladoGeral} questões de ${materia.descricao} na base de dados para a geração do simulado!`)
        }

        let questoesSelecionadasAleatoriamente: IQuestao[] = selecionarQuestoesAleatoria(questoes, materia.quantidadeQuestoesSimuladoGeral)
        for (let questao of questoesSelecionadasAleatoriamente) {
            questoesSimulado.push(questao)
        }
    }

    let simulado: ISimulado = { dataHora: new Date, questoes: questoesSimulado }
    return simulado
}

export const gerarSimuladoEspecifico = (idMateria: string) => {
    let materia: IMateria = obterMateriaPorId(idMateria)
    if (materia.quantidadeQuestoesSimuladoEspecifico <= 0)
        throw new Error('Não é possível gerar simulado para esta matéria, pois sua quantidade de questões está 0')

    let questoes: IQuestao[] = obterQuestoesPorMateria(materia.id)
    if (materia.quantidadeQuestoesSimuladoEspecifico > questoes.length) {
        throw new Error(`Não há ${materia.quantidadeQuestoesSimuladoEspecifico} questões de ${materia.descricao} na base de dados para a geração do simulado!`)
    }

    let questoesSimulado: IQuestao[] = []

    let questoesSelecionadasAleatoriamente = selecionarQuestoesAleatoria(questoes, materia.quantidadeQuestoesSimuladoEspecifico)
    for (let questao of questoesSelecionadasAleatoriamente) {
        questoesSimulado.push(questao)
    }

    let simulado: ISimulado = {dataHora: new Date(), questoes: questoesSimulado}

    return simulado
}

function obterMateriaPorId(id: string): IMateria {
    let materia = tab_materias.filter((materia) => materia.id = id)[0]

    if(!materia) throw new Error('Matéria não encontrada!')

    return materia
}

function obterQuestoesPorMateria(id: string): IQuestao[] {
    if (id === 'LT') return questoes_legislacao_transito
    else if (id === 'DD') return questoes_direcao_defensiva
    else if (id === 'MB') return questoes_mecanica_basica
    else if (id === 'MAC') return questoes_meio_ambiente_cidadania
    else if (id === 'PS') return questoes_primeiros_socorros
    else return []
}

function selecionarQuestoesAleatoria(questoes: IQuestao[], quantidade: number): IQuestao[] {
    let questoesEscolhidas: IQuestao[] = []
    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio = gerarNumeroAleatorioEntre0ELimite(questoes.length);
        questoesEscolhidas.push(questoes[numeroAleatorio])
    }

    return questoesEscolhidas
}

function gerarNumeroAleatorioEntre0ELimite(limite: number): number {
    const numeroAleatorio = Math.random();
    const numeroAleatorioEntre0E100 = Math.floor(numeroAleatorio * limite);
    return numeroAleatorioEntre0E100;
}
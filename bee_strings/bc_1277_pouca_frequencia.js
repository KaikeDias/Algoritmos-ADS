import fs from 'fs';
// import { ler_numero, input } from '../io_utils.js';
const input = fs.readFileSync('1277_pouca_frequencia_input', 'utf8');
var lines = input.split('\n');

// Descomentar linha abaixo no Beecrowd
// const input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Questão feita em equipe no laboratório :) (by: Romero e Kaike)

function main() {
    const qtd_casos = Number(lines[0])
    let qtd_alunos
    let nome_alunos
    let frequencia_alunos
    let frequencia_aluno
    let nome_aluno
    let percentual_ausencia
    let alunos_impedidos
    
    let index = 1

    for (let contador = 0; contador <  qtd_casos; contador++){ 

        qtd_alunos = Number(lines[index])
        index++
        nome_alunos = lines[index].split(' ')
        index++
        frequencia_alunos = lines[index].split(' ')

        alunos_impedidos = ''

        for(let posicao = 0; posicao < nome_alunos.length; posicao++) {
            nome_aluno = nome_alunos[posicao]
            frequencia_aluno = frequencia_alunos[posicao]

            percentual_ausencia = get_percentual_ausencia(frequencia_aluno)

            if(contar_elemento('M', frequencia_aluno) !== frequencia_aluno.length) {
                if( percentual_ausencia > .25 ) {

                    if(alunos_impedidos === '') {
                        alunos_impedidos += `${nome_aluno}`
                    } else {
                        alunos_impedidos += ` ${nome_aluno}`
                    }
                }
            }
        }
        console.log(alunos_impedidos)

        index++
    }
}

function get_percentual_ausencia(frequencia_aluno) {
    let contador_ausencia = 0
    let contador_falta_justificada = 0

    for(let frequencia of frequencia_aluno) {
        if(frequencia === 'A') {
            contador_ausencia++
        }

        if(frequencia === 'M') {
            contador_falta_justificada++
        }
    }
    const num_frequencia_a_ser_considerada = frequencia_aluno.length - contador_falta_justificada 
    const percentual_ausencia = contador_ausencia / num_frequencia_a_ser_considerada

    return percentual_ausencia
}

function contar_elemento(elemento, vetor){
    let qtd = 0

    for(let indice = 0; indice < vetor.length; indice++){
        if(vetor[indice] === elemento){
            qtd++
        }
    }
    return qtd
}


main()
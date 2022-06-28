import {input, input_number, input_number_range, ler_vetor_de_arquivo} from './io_utils.js'

import { adicionar_elementos, editar_por_posicao, elevar_valores_vetor, embaralhar_vetor, inverter_vetor, media_valores_vetor, multiplicar_vetor, negativos_e_qtd, novo_vetor, positivos_e_qtd, preencher_vetor_aleatoriamente, reduzir_a_fracao, remover_por_posicao, remover_por_valor, resetar_vetor, somatorio_valores_vetor, substituir_valores_negativos } from './vetor_utils.js'

import {auto_save, salvar_em_arquivo, show_menu_options, show_sub_options} from './utils.js'

function main(){
    let opcao,enter,vetor
    let continuar = false


    //Como a primeira opção é obrigatoria eu coloquei ela separadamente e na hora de escolher as opções o menu vai mostra apartir da II
    while(continuar === false){
        console.clear()
        console.log('-------MENU-------')
        console.log('I- inicializar vetor numerico')
    
        const inicializar_vetor = Number(input('Que tipo de vetor deseja inicializar (1-dados automaticos; 2-Deseja informar os valores; 3- carregar valores de um arquivo  ): '))

        if(inicializar_vetor === 1){
            const tamanho = input_number('Numero de elementos do vetor: ')
            const minimo = input_number('Valor minimo: ')
            const maximo = input_number('Valor maximo: ')
            vetor = novo_vetor(tamanho)
            vetor = preencher_vetor_aleatoriamente(vetor,minimo,maximo)
            continuar = true
            
        }else if(inicializar_vetor === 2){
            const tamanho = input_number('Numero de elementos do vetor: ')
            const minimo = input_number('Valor minimo: ')
            const maximo = input_number('Valor maximo: ')
            vetor = novo_vetor(tamanho)
            
            for(let i = 0; i < vetor.length; i++){
                vetor[i] = input_number_range(minimo,maximo)
            }
            continuar = true
                
        }else if(inicializar_vetor === 3){
            vetor = ler_vetor_de_arquivo()
            continuar = true
        }else{
            console.clear()
            console.log('Digite uma opção valida')
            continuar = false
            enter = input('Aperte enter para continuar')
        }
        
    }

    console.clear()
    
    while(opcao !== 'XVI'){
        show_menu_options()

        opcao = input('Selecione a opção desejada: ')
        
        if(opcao === 'II'){
            console.clear()
            console.log('II-Mostrar todos os valores do vetor')

            console.log(vetor)
        
        }else if(opcao === 'III'){
            console.clear()
            console.log('III-Resetar o vetor')

            const valor_padrao = input_number('Digite o valor padrão: ')
            vetor = resetar_vetor(vetor,valor_padrao)
        
        }else if(opcao === 'IV'){
            console.clear()
            console.log('IV-Ver quantidade de itens do vetor')

            console.log(vetor.length)

        }else if(opcao === 'V'){
            console.clear()
            console.log('V-Ver Menor e Maior valores e suas posições')
            
            const [maior,menor,pos_maior,pos_menor] = maior_menor(vetor)

            console.log(`Maior numero: ${maior} || Posição: ${pos_maior}`)
            console.log(`Menor numero: ${menor} || Posição: ${pos_menor}`)

        }else if(opcao === 'VI'){
            console.clear()
            console.log('VI-Média dos Valores')

            const media = media_valores_vetor(vetor)
            console.log(`Media dos valores: ${media}`)

        }else if(opcao === 'VII'){
            console.clear()
            console.log('VII-Somatório dos Valores')

            const somatorio = somatorio_valores_vetor(vetor)
            console.log(`Somatório dos valores: ${somatorio}`)
        
        }else if(opcao === 'VIII'){
            console.clear()
            console.log('VIII-Mostrar Valores Positivos e Quantidade')

            const [positivos, qtd] = positivos_e_qtd(vetor)
            console.log(`Numeros positivos: ${positivos}`)
            console.log(`Quantidade: ${qtd}`)

        }else if(opcao === 'IX'){
            console.clear()
            console.log('IX-Mostrar Valores Negativos e Suas Quantidades')

            const [negativos, qtd] = negativos_e_qtd(vetor)
            console.log(`Numeros negativos: ${negativos}`)
            console.log(`Quantidade: ${qtd}`)

        }else if(opcao === 'X'){
            console.clear()
            console.log('X-Atualizar todos os valores por uma das regras:')
            
            show_sub_options()

            const sub_opcao = input_number('Selecione a opcao: ')

            if(sub_opcao === 1){
                console.clear()
                console.log('1-Multiplicar por um valor')

                const valor = input_number('Digite o valor pelo qual irá multiplicar os numeros: ')
                vetor = multiplicar_vetor(vetor, valor)

            }else if(sub_opcao === 2){
                console.clear()
                console.log('2-Elevar a um valor (exponenciação)')

                const valor = input_number('Digite o expoente dos numeros: ')
                vetor = elevar_valores_vetor(vetor,valor)

            }else if(sub_opcao === 3){
                console.clear()
                console.log('3-Reduzir a uma fração (pedir  a fração fração ex: ⅕)')

                const valor = input_number('Digite o valor pelo qual deseja dividir os numeros: ')
                vetor = reduzir_a_fracao(vetor,valor)

            }else if(sub_opcao === 4){
                console.clear()
                console.log('4-Substituir valores negativos por um número aleatórios da uma faixa(min, max)')

                const min = input_number('Valor minimo: ')
                const max = input_number('Valor maximo: ')
                vetor = substituir_valores_negativos(vetor,min,max)

            }else if(sub_opcao === 5){
                console.clear()
                console.log('5-Ordenar valores (reverse?)')

                vetor = inverter_vetor(vetor)

            }else if(sub_opcao === 6){
                console.clear()
                console.log('6-Embaralhar valores')

                vetor = embaralhar_vetor(vetor)

            }else{
                console.log('A oção escolhida não existe')
            }

        }else if(opcao === 'XI'){
            console.clear()
            console.log('XI-Adicionar Novos Valores')
            
            const qtd_valores = input_number('Quantos valores vai inserir: ')
            vetor = adicionar_elementos(vetor,qtd_valores)

        }else if(opcao === 'XII'){
            console.clear()
            console.log('XII-Remover Itens por Valor exato')

            const valor = input_number('Valor que deseja remover: ')
            vetor = remover_por_valor(vetor,valor)

        }else if(opcao === 'XIII'){
            console.clear()
            console.log('XIII-Remover por Posição')

            const posicao = input_number('Posicao que deseja remover: ')
            vetor = remover_por_posicao(vetor,posicao)
        }else if(opcao === 'XIV'){
            console.clear()
            console.log('XIV-Editar valor específico por Posição')

            const posicao = input_number('Posicao que deseja editar: ')
            const valor_novo = input_number('Qual valor deseja colocar no lugar: ')
            vetor = editar_por_posicao(vetor,posicao,valor_novo)
        }else if(opcao === 'XV'){
            //Crie um arquivo que voce usará para fazer o save alternativo

            console.clear()
            console.log('XV-Salvar valores em arquivo')

            const arquivo = input('Nome do arquivo (sem o .txt): ')
            const save = salvar_em_arquivo(vetor,arquivo)
        }else if(opcao === 'XVI'){
            const autosave = auto_save(vetor)
        }else{
            console.log('A oção escolhida não existe')
        }

        enter = input('Aperte enter para continuar')
        console.clear()
    }
}

main()
import fs from 'fs'

export function salvar_em_arquivo(vetor,arquivo){
    //converter para string para dps salvar em um txt
    const string = vetor.join('\n')
    fs.writeFileSync(`${arquivo}.txt`, string, 'utf-8')
}

export function auto_save(vetor){
    //converter para string para dps salvar em um txt
    const string = vetor.join('\n')
    fs.writeFileSync(`autosave.txt`, string, 'utf-8')
}

export function show_sub_options(){
    console.log('1-Multiplicar por um valor')
    console.log('2-Elevar a um valor (exponenciação)')
    console.log('3-Reduzir a uma fração (pedir  a fração fração ex: ⅕)')
    console.log('4-Substituir valores negativos por um número aleatórios da uma faixa(min, max)')
    console.log('5-Ordenar valores (reverse?)')
    console.log('6-Embaralhar valores')
}

export function show_menu_options(){
    console.log('-------MENU-------')
    console.log('II-Mostrar todos os valores do vetor')
    console.log('III-Resetar o vetor')
    console.log('IV-Ver quantidade de itens do vetor')
    console.log('V-Ver Menor e Maior valores e suas posições')
    console.log('VI-Média dos Valores')
    console.log('VII-Somatório dos Valores')
    console.log('VIII-Mostrar Valores Positivos e Quantidade')
    console.log('IX-Mostrar Valores Negativos e Suas Quantidades')
    console.log('X-Atualizar todos os valores por uma das regras')
    console.log('XI-Adicionar Novos Valores')
    console.log('XII-Remover Itens por Valor exato')
    console.log('XIII-Remover por Posição')
    console.log('XIV-Editar valor específico por Posição')
    console.log('XV-Salvar valores em arquivo')
    console.log('XVI-Sair')
}

import { input } from "./io_utils.js"

function main(){
    const texto = input('Texto: ')
    const pos = Number(input('A partir de qual posição: '))
    const qtd = Number(input('Quantidade de caracteres: '))

    const texto_substr = extrair(texto,pos,qtd)

    console.log(texto_substr)
}

function extrair(texto,pos,qtd){
    let substr = ''
    const ultima_pos = pos + qtd
    for(let i = 0; i < ultima_pos; i++){
        if(i >= pos){
            substr += texto[i]
        }
    }

    return substr
}

main()
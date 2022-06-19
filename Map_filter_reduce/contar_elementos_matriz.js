function main(){
    const input = [['a', 'b', 'c'], ['c', 'd', 'f'], ['d', 'f', 'g'],]

    const [a, b, c, d, f ,g] = contar(input)

    console.log(`a: ${a}`)
    console.log(`b: ${b}`)
    console.log(`c: ${c}`)
    console.log(`d: ${d}`)
    console.log(`f: ${f}`)
    console.log(`g: ${g}`)
}

function contar(matriz){
    let a = 0
    let b = 0
    let c = 0
    let d = 0
    let f = 0
    let g = 0

    for(let vetor of matriz){
        for(let elemento of vetor){
            if(elemento === 'a'){
                a++
            }else if(elemento === 'b'){
                b++
            }else if(elemento === 'c'){
                c++
            }else if(elemento === 'd'){
                d++
            }else if(elemento === 'f'){
                f++
            }else if(elemento === 'g'){
                g++
            }
        }
    }

    return [a, b, c, d, f ,g]
}

main()
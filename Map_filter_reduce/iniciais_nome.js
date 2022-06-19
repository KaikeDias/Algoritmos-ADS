function main(){
    const input = 'George Raymond Richard Martin'.split(' ')

    const iniciais = get_name_initials(input)

    console.log(iniciais)
}

function get_name_initials(vetor){
    let iniciais = ''
    
    for(let nome of vetor){
        iniciais += nome[0]
    }

    return iniciais
}

main()
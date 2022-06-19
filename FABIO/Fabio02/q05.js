import {input} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Numero 1: '))
    const n2 = Number(input('Numero 2: '))
    const n3 = Number(input('Numero 3: '))
    
    //Saida
    console.log(menor(n1,n2,n3))
    console.log(meio(n1,n2,n3))
    console.log(maior(n1,n2,n3))


}

function maior(A,B,C){
    if (A > B && A > C){
        return A
    }else if(B > A && B > C){
        return B
    }else if(C > A && C > B){
        return C
    }
}

function menor(X,Y,Z){
    if (X<Y && X<Z){
        return X
    }else if (Y<X && Y<Z){
        return Y
    }else if (Z<X && Z<Y){
        return Z
    }
}

function meio(D,E,F){
    if (D<E && D>F || D>E && D<F){
        return D
    }else if (E<D && E>F || E>D && E<F){
        return E
    }else if (F<D && F>E || F>D && F<E){
        return F
    }

}

main()
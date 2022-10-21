function notaBoa (nota)
{
    if(nota>=7)
    {
        console.log("Aprovado com " + nota)
    }
    else
    {
        console.log("Reprovado com " + nota)
    }
}

notaBoa(5.0)
notaBoa(7.0)
notaBoa("Teste") // Cuidado !!

Number.prototype.entre = function (inicio,fim)
{
    return this >= inicio && this <= fim
}

const imprimirResultado = function(notaTeste)
{
    if(notaTeste.entre(9,10))
    {
        console.log("Quadro de honra")
    }
    else if(notaTeste.entre(7,8))
    {
        console.log("Aprovado !")
    }
    else if(notaTeste.entre(0,6))
    {
        console.log("Recuperacao")
    }
    else
    {
        console.log("Nota Invalida")
    }

    console.log('Fim!')

}

imprimirResultado(10)
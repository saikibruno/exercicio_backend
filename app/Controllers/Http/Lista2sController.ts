// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista2sController {

    ex1( {request} ) {
        const dados = request.body()
        const estoqueMedio = (dados.qtdMinima*1 + dados.qtdMaxima*1)/2
        return {estoqueMedio}
    }

    ex2( {request} ) {
        const dados = request.body()
        
        const salarioBruto = (dados.HorasTrabalhadas * dados.valorPorHora)
        const salario = salarioBruto+(salarioBruto * (dados.NumFilhos * 3)/100)
        const nome = dados.nome
        return {nome,salario}
    }

    ex3( {request} ) {
        const dados = request.body()

        const IdadeEmDias = (dados.anos * 360) + (dados.mes * 30)  + dados.dias
        
        return {IdadeEmDias}
    }

    ex4( {request} ) {
        const dados = request.body()

        const idadeAno = dados.anos % 360
        const anoIdade = (dados.anos - idadeAno) / 360        
        const idadeMes = idadeAno % 30
        const mesIdade = (idadeAno - idadeMes) / 30
        const ano = anoIdade
        const mes = mesIdade
        const dia = idadeMes

        /*10353*/
        return {ano,mes,dia}
    }

    ex5( {request} ) {
        const dados = request.body()
        
        const media = (dados.nota1*0.2)+(dados.nota2*0.3)+(dados.nota3*0.5)
        
        return {media}
    }
    
    ex6( {request} ) {
        const dados = request.body()

        const tempoHora = dados.segundos % 3600
        const horaTempo = (dados.segundos - tempoHora) / 3600
        const tempoMinuto = tempoHora % 60
        const minutoTempo =(tempoHora - tempoMinuto) / 60
        const hora = horaTempo
        const minuto = minutoTempo
        const segundos = tempoMinuto

        return {hora,minuto,segundos}
    }
    
    ex7( {request} ) {
        const dados = request.body()
        
        const salario = dados.salarioFixo + (dados.totalVenda*(dados.percentual/100))
        const nome = dados.nome        

        return {nome,salario}
    }
    
    ex8( {request} ) {
        const dados = request.body()
        
        const velocidade = dados.distancia / dados.tempo
        const nome = dados.nome        
    
        const resultado = {
            frase: "A velocidade média do "+nome+" foi "+velocidade+" km/h"
        }
        return resultado
    }

    ex9( {request} ) {
        const dados = request.body()                        

        if (dados.salario > 1000) {
            return {frase:"Seu salário não e abaixo de 1000 reais."}
        }else{
            return {salario: dados.salario + (dados.salario*0.3)}
        }
        
    }

}

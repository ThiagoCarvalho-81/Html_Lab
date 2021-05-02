/*
Exemplo de uma tabuada
*/

//Declaração de uma função
function calculatabuada (){

    //criação vairavel tabuada para obter do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada");
    
    //obtendo o valor A do campo input e convertendo em número inteiro 
    let valorA = parseInt(document.querySelector("#valorA").value);

    //limpando a taboada para sempre começar o calculo com ela zerada
    tabuada.innerHTML = '';

    //criando laço de repetição de 0 a 10
    for(let valorB =0; valorB<=10; valorB++ ) {

        //calculo do resultado de cada linha
        let resultado = valorA * valorB;

        //criando o template de cada linha de registro (coluna a coluna)
        let template =`
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            `;
        //criando o elemento tr
        let tr = document.createElement ('tr');

        //inserindo o conteudo do template na tabela 
        tr.innerHTML = template;

        //adicionando a linha na tabela
        tabuada.append(tr);
    
    }// fechando o for

} //fechando a função

//chamando a função para execução
calculatabuada();

//adicionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener('change', calculatabuada);
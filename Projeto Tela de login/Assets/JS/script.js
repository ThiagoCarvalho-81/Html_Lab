let email = 'joao@hcode.com.br';
email = 'tscarvalho2@hotmail.com';

console.log(email);
console.log('O seu e-mail é: '+email)
console.log(`O seu e-mail é: ${email}`)

document.getElementById('btn-submit').addEventListener('click', e=> {

    console.log('O botão foi clicado')

});

document.getElementById('form-login').addEventListener('mouseenter', e=> {

    console.log('O mouse está sobre o formulario')

});

document.querySelector('#form-login').addEventListener('mouseleave', e=> {

    console.log('O mouse saiu do formulario')

});

document.querySelector('#form-login').addEventListener('submit', e=> {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password  
    }
    
    console.log(json);

    let stringJson = JSON.stringify(json);

    console.log(stringJson);

    let jsonParse = JSON.parse(stringJson)
    
    console.log(jsonParse);
    console.log(jsonParse.email);
    console.log(jsonParse.password);


    if(!json.email) {
    
        console.error("O campo email deve ser preenchido.");
    
    } else if(!json.password) {
        
        console.error("O campo password deve ser preenchido.");

    } else {

        console.info("Tudo certo! Dados validados com sucesso!")

    }

});
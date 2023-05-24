function limpaFormulario(){
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('ibge').value = '';
}

function meucallback(conteudo){
    //Validação do cep
    if(!("erro" in conteudo)){
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('ibge').value = (conteudo.ibge);
    }
    else{
        limpaFormulario();
        alert("CEP não encontrado");
    }
}

function pesquisacep(valor){
    //Verificação do cep
    let cep = valor.replace(/\D/g,'');
    if(cep != ""){
        let validaCep = /^[0-9]{8}$/;
        if(validaCep.test(cep)){
            let script = document.createElement('script');
            script.src = "http://viacep.com.br/ws/" + cep + "/json/?callback=meucallback";
            document.body.appendChild(script);
        }
        else{
            limpaFormulario();
            alert("Formato de cep inválido");
        }
    }
    else{
        limpaFormulario();
    }
}
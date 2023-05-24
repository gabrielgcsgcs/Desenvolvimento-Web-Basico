function toJson(){
    let jsonSend = `{ "nome":"${document.getElementById('nome').value}",
    "email":"${document.getElementById('email').value}",
    "nascimento":"${document.getElementById('nasc').value}",
    "senha":"${document.getElementById('senha').value}",
    "cep":"${document.getElementById('cep').value}",
    "uf":"${document.getElementById('uf').value}",
    "logradouro":"${document.getElementById('rua').value}",
    "bairro":"${document.getElementById('bairro').value}",
    "cidade":"${document.getElementById('cidade').value}",
    "ibge":"${document.getElementById('ibge').value}"
 }`;
    alert(jsonSend);
}






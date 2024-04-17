//função que recebera os dados e os guardará  todos os itens no sessionStorage
function receberNomeUsuario() {
    var nameUsuario = document.getElementById("form_name_usuario").value;
    console.log(nameUsuario);
    sessionStorage.setItem("nameUsuario", nameUsuario);

    var emailUsuario = document.getElementById("form_email_usuario").value;
    console.log(emailUsuario);
    sessionStorage.setItem("emailUsuario", emailUsuario);

    var telefoneUsuario = document.getElementById("form_telefone_usuario").value;
    console.log(telefoneUsuario);
    sessionStorage.setItem("telefoneUsuario", telefoneUsuario);

    var nascidoUsuario = document.getElementById("form_nascimento_usuario").value;
    console.log(nascidoUsuario);
    sessionStorage.setItem("nascidoUsuario", nascidoUsuario);

    var cepUsuario = document.getElementById("form_cep_usuario").value;
    console.log(cepUsuario);
    sessionStorage.setItem("cepUsuario", cepUsuario);

    var logradouroUsuario = document.getElementById("form_logradouro_usuario").value;
    console.log(logradouroUsuario);
    sessionStorage.setItem("logradouroUsuario", logradouroUsuario);

    var numResidenciaUsuario = document.getElementById("form_numResidencia_usuario").value;
    console.log(numResidenciaUsuario);
    sessionStorage.setItem("numResidenciaUsuario", numResidenciaUsuario);

    var bairroUsuario = document.getElementById("form_bairro_usuario").value;
    console.log(bairroUsuario);
    sessionStorage.setItem("bairroUsuario", bairroUsuario);

    var estadoUsuario = document.getElementById("form_estado_usuario").value;
    console.log(estadoUsuario);
    sessionStorage.setItem("estadoUsuario", estadoUsuario);

    var cidadeUsuario = document.getElementById("form_cidade_usuario").value;
    console.log(cidadeUsuario);
    sessionStorage.setItem("cidadeUsuario", cidadeUsuario);

    window.location.href = "../paginas/dados_usuario.html"; 
}

//Acesso dos dados do sessionStorage para mandar aos ids do itens da nova pagina
var nameUsuario = sessionStorage.getItem("nameUsuario");
if (nameUsuario) {
    document.getElementById("valor_form_name_usuario").textContent = nameUsuario;
}
var emailUsuario = sessionStorage.getItem("emailUsuario");
if (emailUsuario) {
    document.getElementById("valor_form_email_usuario").textContent = emailUsuario;
}
var telefoneUsuario = sessionStorage.getItem("telefoneUsuario");
if (telefoneUsuario) {
    document.getElementById("valor_form_telefone_usuario").textContent = telefoneUsuario;
}
var nascidoUsuario = sessionStorage.getItem("nascidoUsuario");
if (nascidoUsuario) {
    document.getElementById("valor_form_nascimento_usuario").textContent = nascidoUsuario;
}
var cepUsuario = sessionStorage.getItem("cepUsuario");
if (cepUsuario) {
    document.getElementById("valor_form_cep_usuario").textContent = cepUsuario;
}
var logradouroUsuario = sessionStorage.getItem("logradouroUsuario");
if (logradouroUsuario) {
    document.getElementById("valor_form_logradouro_usuario").textContent = logradouroUsuario;
}
var numResidenciaUsuario = sessionStorage.getItem("numResidenciaUsuario");
if (numResidenciaUsuario) {
    document.getElementById("valor_form_numResidencia_usuario").textContent = numResidenciaUsuario;
}
var bairroUsuario = sessionStorage.getItem("bairroUsuario");
if (bairroUsuario) {
    document.getElementById("valor_form_bairro_usuario").textContent = bairroUsuario;
}
var estadoUsuario = sessionStorage.getItem("estadoUsuario");
if (estadoUsuario) {
    document.getElementById("valor_form_estado_usuario").textContent = estadoUsuario;
}
var cidadeUsuario = sessionStorage.getItem("cidadeUsuario");
if (cidadeUsuario) {
    document.getElementById("valor_form_cidade_usuario").textContent = cidadeUsuario;
}
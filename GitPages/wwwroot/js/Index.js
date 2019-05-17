'use strict';


const pesq = document.getElementById("listar-btn");
const pes = document.getElementById("pesquisa-text")
const url = "https://api.github.com/search/repositories?q=user:Siuari"
var tabela = document.getElementById("tabela");



pesq.addEventListener('click', getRepos);

function listarRepositorios(lista) {
    for (let i = 0; i < lista.length; i++) {
        var row = tabela.insertRow(1);
        row.innerHTML = '<td>' + lista[i].name + '</td>' + '<td><a href="http://github.com/' + lista[i].full_name + '"/>'+lista[i].full_name+'</td>';
    }
}

async function getRepos() {
    const response = await fetch(url);
    const result = await response.json();
    listarRepositorios(result.items);
    /*
    $("#modal-mensagem").modal('show');
    $("#mensagem").html(repos);
    console.log(result);
    console.log(result.items[0].name);
    */
}

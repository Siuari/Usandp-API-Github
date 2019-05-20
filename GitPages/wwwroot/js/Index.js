const pesq = document.getElementById("listar-btn");
const campoTextPesquisa = document.getElementById("campo-pesquisa");
const tab = document.getElementById("corpo");
const url = "https://api.github.com/search/repositories?q=user:Siuari"
var tabela = document.getElementById("tabela");
var gitObj = null;


pesq.addEventListener('click', getRepos);

function listarRepositorios(lista) {
    console.dir(lista);
    $(tab).html("");
    let pesquisa = $(campoTextPesquisa).val();
    if (pesquisa != "") {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].name.toUpperCase().includes(pesquisa.toUpperCase()))
                $(tab).append('<tr id="linha'+i+'"><td id="repo-'+i+'">' + lista[i].name + '</td>' + '<td><a href="http://github.com/' + lista[i].full_name + '">' + lista[i].full_name + '</a></td><td><button class="btn btn-info" type="button" id="fav'+i+'" onclick="clickListener('+i+')">Info</button></td></tr>');
        }
    } else {
        for (let i = 0; i < lista.length; i++) {
            $(tab).append('<tr id="linha-'+i+'"><td id="repo-'+i+'">' + lista[i].name + '</td>' + '<td><a href="http://github.com/' + lista[i].full_name + '">' + lista[i].full_name + '</a></td><td><button class="btn btn-info" type="button" id="fav' + i + '"onclick="clickListener('+i+')">Info</button></td></tr>');
        }
    }

}

function clickListener(indice) {
    let repositorio = "repo-" + indice;
    let repoObj = document.getElementById(repositorio);
    getModal(repoObj, indice)
    console.log(indice);
}

async function getRepos() {
    setTimeout(async function () {
        const response = await fetch(url);
        const result = await response.json();
        gitObj = result.items;
        listarRepositorios(gitObj);
    }, 250)

    console.log(gitObj)
}

function getModal(qualquer, i) {
    const qqq = document.getElementById("qualquer")
    const ling = document.getElementById("linguagem")
    const dono = document.getElementById("dono")
    const desc = document.getElementById("desc")
    const atualizacao = document.getElementById("atualizacao")
    $("#modal-mensagem").modal('show');
    $(qqq).html($(qualquer).html())
    $(ling).html(gitObj[i].language)
    $(dono).html(gitObj[i].owner.login)
    $(desc).html(gitObj[i].description)
    $(atualizacao).html(gitObj[i].updated_at)
}


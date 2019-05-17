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
                $(tab).append('<tr><td>' + lista[i].name + '</td>' + '<td><a href="http://github.com/' + lista[i].full_name + '">' + lista[i].full_name + '</a></td><td><input type="checkbox" value="" id="fav'+i+'></td></tr>');
        }
    } else {
        for (let i = 0; i < lista.length; i++) {
            $(tab).append('<tr><td>' + lista[i].name + '</td>' + '<td><a href="http://github.com/' + lista[i].full_name + '">' + lista[i].full_name + '</a></td><td><input type="checkbox" value="" id="fav'+i+'></td></tr>');
        }
    }

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

function getModal() {
    $("#modal-mensagem").modal('show');
    $("#mensagem").html('<input type="text" class="form-control col-sm-8" id="input-pesquisa" placeholder="Pesquisa" />');
}


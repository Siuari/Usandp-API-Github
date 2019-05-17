const pesq = document.getElementById("listar-btn");
const campoTextPesquisa = document.getElementById("campo-pesquisa");
const tab = document.getElementById("corpo");
const url = "https://api.github.com/search/repositories?q=user:Siuari"
var tabela = document.getElementById("tabela");




function getModal() {
    $("#modal-mensagem").modal('show');
    $("#mensagem").html('<input type="text" class="form-control col-sm-8" id="input-pesquisa" placeholder="Pesquisa" />');
}

pesq.addEventListener('click', getRepos);

function listarRepositorios(lista) {
    console.dir(lista);
    $(tab).html("");
    let pesquisa = $(campoTextPesquisa).val();
    if (pesquisa != "") {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].name.includes(pesquisa))
                $(tab).append('<tr><td>' + lista[i].name + '</td>' + '<td><a href="http://github.com/' + lista[i].full_name + '">' + lista[i].full_name + '</a></td><td>fav</td></tr>');
        }
    } else {
        for (let i = 0; i < lista.length; i++) {
                $(tab).append('<tr><td>' + lista[i].name + '</td>' + '<td><a href="http://github.com/' + lista[i].full_name + '">' + lista[i].full_name + '</a></td><td>fav</td></tr>');
        }
    }

}

function resetTable() {

}

async function getRepos() {
    setTimeout(async function () {
        const response = await fetch(url);
        const result = await response.json();
        listarRepositorios(result.items);
    }, 250)

    /*
    $("#modal-mensagem").modal('show');
    $("#mensagem").html(repos);
    console.log(result);
    console.log(result.items[0].name);
    */
}
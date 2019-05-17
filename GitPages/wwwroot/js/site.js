// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
'use strict';
const pesq = document.getElementById("pesquisa-btn");
const pes = document.getElementById("pesquisa-text")

pesq.addEventListener('click', function () {
    $("#modal-mensagem").modal('show');
})


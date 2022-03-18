var dados = [];

function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            //Template String
            $("#tblDados tbody").append(`<tr>
            <td>${item.ID}</td>
            <td>${item.selectTipo}</td>
            <td>${item.dataHora}</td>   
            <td>${item.selectSE}</td>
            <td>${item.selectTag}</td>
            <td>${item.selectProtecao}</td>
             </tr>
              
                        
            `)
        })
    }
}


$(function () {
    // Executar ao carregar da tela
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela()
    }
    $("#btnSalvar").click(function () {
        // Evento click do botão salvar

        let selectTipo = $("#selectTipo").val();
        let dataHora = $("#dataHora").val()
        let selectSE = $("#selectSE").val()
        let selectTag = $("#tagEquipamento").val()
        let selectProtecao = $("#protecaoSinalizada").val()

        let registro = {}
        registro.selectTipo = selectTipo;
        registro.dataHora = dataHora;
        registro.selectSE = selectSE;
        registro.selectTag = selectTag;
        registro.selectProtecao = selectProtecao;

        registro.ID = dados.length + 1

        dados.push(registro);
        // Alerta de Registro Salvo
        alert("Registro salvo com Sucesso")
        $("#modalRegistro").modal("hide")
        //Limpeza dos campos do Modal
        $("#selectTipo").val("");
        $("#dataHora").val("");
        $("#selectSE").val("");
        $("#tagEquipamento").val("");
        $("#protecaoSinalizada").val("")


        PopulaTabela()
    })

})
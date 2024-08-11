var chamada = [];
var texto = [];
texto[1] = "Começou o jogo";
texto[5] = "Aperte o cinco, ops cinto";
texto[6] = "Pingo na barriga";
texto[9] = "Pingo no pé";
texto[10] = "Craque de bola";
texto[11] = "Um atrás do outro, entre na fila";
texto[13] = "Deu azar";
texto[16] = "O leão está solto";
texto[17] = "O bicho que pula";
texto[22] = "Dois patinhos na lagoa";
texto[31] = "Preparem os fogos";
texto[33] = "Idade de Cristo";
texto[38] = "Justiça de Goiás";
texto[45] = "Fim do Primeiro Tempo";
texto[51] = "Uma boa ideia";
texto[55] = "Dois cachorros do padre";
texto[66] = "Só falta o sapato para as meias";
texto[69] = "Um indo, outro voltando";
texto[75] = "Terminou o jogo";

rodada[1] = {
    0: {
            tipo: 'LINHA/COLUNA',
            premio: 'COBERTOR VERDE'
        },
    1: {
            premio: 'BOMBONIERE'
        },
};
rodada[2] = {
    0: {
            tipo: 'LINHA/COLUNA',
            premio: 'CHAMPANHEIRA'
        },
    1: {
            premio: 'BOMBONIERE'
        },
};
rodada[3] = {
    0: {
            tipo: 'LINHA/COLUNA',
            premio: 'FACA e CHAIRA'
        },
    1: {
            premio: 'CONJUNTO SOBREMESA'
        },
};
rodada[4] = {
    0: {
            tipo: 'LINHA/COLUNA',
            premio: 'COBRELEITO CASAL'
        },
    1: {
            premio: 'BOMBONIERE'
        },
};
rodada[5] = {
    0: {
            tipo: 'LINHA/COLUNA',
            premio: 'VINHO'
        },
    1: {
            premio: 'VINHO'
        },
    2: {
            premio: 'VINHO'
        },
};
rodada[6] = {
    0: {
            tipo: 'LINHA/COLUNA',
            premio: 'CONJUNTO SOBREMESA'
        },
    1: {
            premio: 'VINHO'
        },
};
rodada[7] = {
    0: {
            tipo: 'CARTELA CHEIA',
            premio: 'COBRELEITO SOLTEIRO'
        }
};
rodada[8] = {
    0: {
            tipo: 'LINHA/COLUNA',
            premio: 'COBERTOR'
        },
    1: {
            premio: 'BOMBONIERE'
        },
};
rodada[9] = {
    0: {
            tipo: 'CARTELA CHEIA',
            premio: 'PANELA DE ARROZ'
        }
};
rodada[10] = {
    0: {
            tipo: 'CARTELA CHEIA',
            premio: 'ABRIDOR ELÉTRICO VINHO'
        }
};
rodada[11] = {
    0: {
            tipo: 'CARTELA CHEIA',
            premio: 'EDREDON'
        }
};
rodada[12] = {
    0: {
            tipo: 'CARTELA CHEIA',
            premio: 'FRITADEIRA ELÉTRICA'
        }
};
rodada[13] = {
    0: {
            tipo: 'SORTEIO',
            premio: 'COLAR'
        }
};

$("#limpar").on('click', function(){
    window.location.reload();
});
$("#linha").on('click', function(){
    $("#tipoCartela").html("<b>LINHA/COLUNA</b><BR>");
});
$("#cheia").on('click', function(){
    $("#tipoCartela").html("<b>CARTELA CHEIA</b><BR>");
});
$("#sorteio").on('click', function(){
    $("#tipoCartela").html("<b>SORTEIO</b><BR>");
});
$("#premio").on('click', function(){
    $("#tipoCartela").append("<small><small>Valendo:</small></small><BR><b>"+$("#qualPremio").val().toUpperCase()+"</b>");
});
$("#rodada").on('click', function(){
    obj = rodada[$("#qualRodada").val()];

    $("#imagem").html("<img src='./premios/"+$("#qualRodada").val()+".jpg' width='100%'>");
    $("#tipoCartela").html("");
    Object.keys(obj).forEach(function(key) {
        if(obj[key].tipo){
            $("#tipoCartela").append("<b>"+(obj[key].tipo)+"</b><br><small><small>Valendo: </small></small><b>"+(obj[key].premio)+"</b><br>");
        } else {
            $("#tipoCartela").append("<small><small>Valendo: </small></small><b>"+(obj[key].premio)+"</b><br>");
        }
    });
    $("#numeroRodada").html($("#qualRodada").val());
});

$(".bola").on('click', function(){
    var id = $(this).attr("id");
    var letra = $(this).attr("letra");
    var frase = "";

    if(!chamada.includes(letra+id)){
        chamada.push(letra+id);
        $("#"+id).removeClass("bg-secondary").addClass("bg-warning").removeClass("text-white").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $("#texto").html("&nbsp;");
        if(texto[id]){
            frase = texto[id];
        }

        $("#texto").html('<span class="badge h1 text-white bg-danger bg-gradient bolaPrincipal mx-auto shadow display-2"><span style="font-size: 20pt!important; line-height:40pt!important; margin-left:-5px!important">'+letra+id+'</span></span> '+frase);
        playSound("drop");
    } else {
        $("#texto").html("&nbsp;");
        if (confirm("Confirma Remoção da Bolinha "+letra+id+"!") == true) {
            chamada.splice(chamada.indexOf(letra+id), 1);
            $("#"+id).removeClass("bg-warning").addClass("bg-secondary").addClass("text-white");
            playSound("remove");
        } 
    }

    $("#resultado").html("");
    
    for (const element of chamada) {
        $(".bolaResultado").removeClass("bg-danger").removeClass("bolaUltima").addClass("bg-success");
        $("#resultado").prepend('<div class="col-2 p-0 h5 text-white bg-danger bg-gradient bolaResultado bolaUltima m-2 shadow "r'+element+'">'+element+'</div>')
        $(".bolaUltima").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
});

function playSound (file) {
    let ding = new Audio(file+'.mp3');
    ding.play();
}
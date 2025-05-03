//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
            //slideToggle("slow") faz o efeito de esconder e mostrar o formulário de cadastro

        $("#section-login").slideToggle("slow");
            //slideToggle("slow") faz o efeito de esconder e mostrar a seção de login

        $("#botao-cadastrar").hide();
            //esconde o botão cadastrar
    

    });


});

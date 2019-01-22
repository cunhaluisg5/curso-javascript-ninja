(function(win, doc){
    'use strict';
    /*
    Essa semana você terá dois desafios:
    1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
    tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
    ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
    o que não ficou tão claro das aulas anteriores.
    É essencial que você entenda todo o conteúdo que foi passado até aqui,
    para que possamos prosseguir para a parte mais avançada do curso :D

    2) Estudar eventos!
    Acesse a página do MDN:
    https://developer.mozilla.org/en-US/docs/Web/Events#Categories

    Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
    desafio os experimentos legais que você conseguir desenvolver :D
    */

    var $nome = doc.querySelector('[data-js="nome"]');
    var $idade = doc.querySelector('[data-js="idade"]');
    var $estado = doc.querySelector('[data-js="estado"]');
    var $nomePreenchido = doc.querySelector('[data-js="nomePreenchido"]');
    var $idadePreenchida = doc.querySelector('[data-js="idadePreenchida"]');
    var $estadoPreenchido = doc.querySelector('[data-js="estadoPreenchido"]');
    var $enviar = doc.querySelector('[data-js="enviar"]');

    function activeEvent(element, event, callback){
        element.addEventListener(event, callback, false);
    }

    activeEvent($nome, 'input', function(){
        $nomePreenchido.value = this.value;
    });

    activeEvent($idade, 'input', function(){
        $idadePreenchida.value = this.value;
    });

    activeEvent($estado, 'change', function(){
        $estadoPreenchido.value = this.value;
    });

    activeEvent($enviar, 'click', function(){
        alert('Formulário Enviado!');
    });
})(window, document);
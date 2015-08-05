(function() {
    var app = angular.module('equipa', []);

    var jogadores = [
        {
            nome: 'Carlos',
            numero: '10',
            idade: '38',
            substituir: true,
            substituido: false,
        },

        {
            nome:"filipe",
            numero:"11",
            idade:'18',
            substituir:false,
            substituido: false,
        }

    ];

app.controller('mostraJogador', function(){

    this.objecto = jogadores;
})

app.controller('')

})();
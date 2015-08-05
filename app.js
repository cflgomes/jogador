(function() {
    var app = angular.module('equipa', []);

    var jogadores = [
        {
            nome: 'Carlos',
            numero: '10',
            idade: '38',
            substituir: true,
            substituido: false,
            caracteristicas: [
                {
                    votos: 5,
                    comentario: "Excelente pé esquerdo",
                    autor: "cflgomes@gmail.com"
                }
            ]
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

app.controller('PanelController', function(){
    this.tabulador = 1;
    this.setTabulador = function(settab){
        this.tabulador = settab;
    }
    this.isSelected = function(checktab){
        return this.tabulador === checktab;
    }
})
app.controller('CaracteristicasController', function(){
    this.carateristica={};
    this.envio = function(carac){
        carac.caracteristicas.push(this.caracteristica);
        this.caracteristica = {};
    }

})

})();
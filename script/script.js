//------ Conversor de Moedas ------//
var valorDolar = 64;
var cotacaoDolar = 5.32;

var valorEmReal = valorDolar * cotacaoDolar;
valorEmReal = valorEmReal.toFixed(2);
//alert ( valorDolar + " USD convertido para real fica R$" + valorEmReal);

//------ Conversor de Anos Luz ------//
var km = 5e13;
var anoLuz = 9.461e12;

var converter = km / anoLuz;
converter = converter.toFixed(3);
alert(km + "km são " + converter + " Anos Luz.");

//------ Distância entre as estrelas e Tempo ------//
var distanciaSoleSirius = 540000; // UA - Unidade Astronomica.
var velocidadeLuz = 8.316; // minutos/UA
var minutosUmAno = 525600;

var tempoAnosSolAteSirius = distanciaSoleSirius * velocidadeLuz / minutosUmAno;
tempoAnosSolAteSirius = tempoAnosSolAteSirius.toFixed(2);

function split_decimal(x){
    var inteiro = Math.floor(x);    
    var dec = x % 1;
    return [inteiro, dec];
};

var anos = split_decimal(tempoAnosSolAteSirius);
var meses = split_decimal(anos[1] * 12);
var dias = split_decimal(meses[1] * 30);
var horas = split_decimal(dias[1] * 24);


alert("O Sol até a Sirius demora aproximadamente " + anos[0] + " anos " + meses[0] + " meses e " + dias[0] + " dias na velocidade da Luz.");
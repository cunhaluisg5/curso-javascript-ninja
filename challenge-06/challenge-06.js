/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Mineiro';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['América', 'Atlético', 'Boa', 'Patrocinense', 'Caldense'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(numero){
    if(numero < 1 || numero > 5){
        return "Não temos a informação do time que está nessa posição.";
    }    
    return "O time que está em " + numero + " º lugar é o " + teams[numero - 1] + ".";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); //"O time que está em 1 º lugar é o América."
showTeamPosition(8); //"Não temos a informação do time que está nessa posição."
showTeamPosition(3); //"O time que está em 3 º lugar é o Boa."
showTeamPosition(5); //"O time que está em 5 º lugar é o Caldense."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var num = 20;
while(num <= 30){
    console.log(num);
    num++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
    var texto = "O hexadecimal para a cor " + cor + " é ";
    switch(cor){
        case 'red':
            texto += "#FF0000.";
        break;
        case 'blue':
            texto += "#0000FF.";
        break;
        case 'yellow':
            texto += "#FFFF00.";
        break;
        case 'green':
            texto += "#008000.";
        break;
        case 'black':
            texto += "#000000.";
        break;
        default:
            texto = "Não temos o equivalente hexadecimal para " + cor + ".";
        break;
    }
    return texto;
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('yellow'); //"O hexadecimal para a cor yellow é #FFFF00."
convertToHex('blue'); //"O hexadecimal para a cor blue é #0000FF."
convertToHex('gray'); //"Não temos o equivalente hexadecimal para gray."
convertToHex('black'); //"O hexadecimal para a cor black é #000000."
convertToHex('red'); //"O hexadecimal para a cor red é #FF0000."
convertToHex('purple'); //"Não temos o equivalente hexadecimal para purple."
convertToHex('green'); //"O hexadecimal para a cor green é #008000."
convertToHex('orange'); //"Não temos o equivalente hexadecimal para orange."
var m1 = new Array();
/*m1.push([10,11]);
m1.push([15,16]);*/

//m1[0][1]=50;atribuicao
//m1[0][1]= parseInt(prompt("Digite valor para linha 0 e coluna 1"))atribuicao
m1[0][1]=Math.floor(Math.random()*60);
/*m1[0][0]=Math.floor(Math.random()*60);
m1[1][0]=Math.floor(Math.random()*60);
m1[1][1]=Math.floor(Math.random()*60);*/

document.write("Pos L 0  C 1 = " +m1[0][1]);//recuperacao
/*document.write("Pos L 0 C 0 = " + m1[0][0]);
document.write("Pos L 1 C 0 = " + m1[1][0]);
document.write("Pos L 1 C 1 = " + m1[1][1]);*/
document.write("<br>");

document.write("<table border='1'>");
for(var l=0; l<m1.length; l++){
    document.write("<tr>");
    for(var c=0; c<m1[l].length; c++){
        document.write("<td>" + m1[l][c] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

//console.log(m1);
console.table(m1);
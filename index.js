var num1 = Number(prompt('Primeiro Valor'))


do{
  var operacao = prompt('Difite a operação matemática: ')
} while(operacao!='+' && operacao!='-' && operacao!='*' && operacao!='/')

var num2 = parseInt(prompt('Segundo Valor: '))

switch(operacao){
  case'+':
   resultado = num1 + num2
   alert('O resultado é : ' + resultado)
   break
  case'-':
   resultado = num1 - num2
   alert('O resultado é : ' + resultado)
   break
  case'*':
   resultado = num1 * num2
   alert('O resultado é : ' + resultado)
   break
  case'/':
   resultado = num1 / num2
   alert('O Rseultado é : ' + resultado)   
   break
}
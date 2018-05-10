# 09 - Transform Employee Data

## transformEmployeeData

Escreva uma função chamada "transformEmployeeData" que transforma alguns dados de funcionários de um formato para outro.

O argumento ficará assim:

```text
[
  [
    [ ' firstName ' , ' Joe ' ], [ ' lastName ' , ' Blow ' ], [ ' age ' , 42 ], [ ' papel ' , ' balconista ' ]
  ]
  [
    [ ' firstName ' , ' Mary ' ], [ ' lastName ' , ' Jenkins ' ], [ ' idade ' , 36 ], [ ' papel ' , ' gerente ' ]
  ]
]
```

Dada a entrada, o valor de retorno deve ficar assim:

```text
[
    {firstName :  ' Joe ' , lastName :  ' Blow ' , age :  42 , papel :  ' clerk ' },
    {firstName :  ' Mary ' , lastName :  ' Jenkins ' , idade :  36 , cargo :  ' manager ' }
]
```

Observe que a entrada pode ter um número diferente de linhas ou chaves diferentes da amostra fornecida.

Por exemplo, digamos que o departamento de recursos humanos inclua um campo "tshirtSize" em cada registro de funcionário. Seu código deve ser flexível para tratar essa situação.

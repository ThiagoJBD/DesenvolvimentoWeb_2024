function transporMatriz(matriz){
    let nova_matriz = '';
    for(let coluna = 0; coluna < matriz[0].length; coluna++){
        for(let linha = 0; linha < matriz.length; linha++){
            nova_matriz += matriz[linha][coluna] + ' ';
        }
        nova_matriz += '\n';
    }
    console.log(nova_matriz);

}

const matriz = [
            [1, 2], 
            [3, 4], 
            [5, 6]
        ];

transporMatriz(matriz);
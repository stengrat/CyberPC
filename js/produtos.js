var arrayProdutos = [['AMD Ryzen Threadripper 3990X', '31529.29','amdryzen.jpg','2627.44','26799.90'], 
                    ['NVIDIA GeForce RTX 2080 Ti', '12117.53','rtx.jpg','1009.79','10299.90'], 
                    ['Gabinete Cooler Master C700P', '4210.42','gabinete.jpg','350.87','3999.90'],
                    ['Memória XPG Spectrix 8GB', '335.18','memoria.jpg','27.93','284.90'], 
                    ['SSD Kingston A400, 120GB', '317.53','ssd.jpg','15.68','159.90'], 
                    ['Monitor Gamer LG LED 29', '1822.11','monitor.jpg','151.84','1639.90']
                    
                ];


$(document).ready(function(){
    Cards();

});


function Cards(){

    for (var i = 0; i < arrayProdutos.length ; i++){
        var conteudo = " ";

        conteudo += '<div class="col-8 mb-4 mt-4">';
        conteudo += '<div class="card card w-100">';
        conteudo += '<img class="card-img-top imagem" src="../image/'+arrayProdutos[i][2]+ '">';
        conteudo += '<div class="card-body">';
        conteudo += '<h5 class="card-title"> ' +arrayProdutos[i][0]+ '</h5>';
        conteudo += '<span class="preco_normal">R$ ' +arrayProdutos[i][1] + '</span>';
        conteudo += '<p class="parcelado"> Em ';
        conteudo += '<strong"> 12x sem juros no cartão ';
        conteudo += '</strong">de  <span class="parcelado price"> R$ ' + arrayProdutos[i][3]+ '</span>';
        conteudo += ' <br></p>';
        conteudo += ' <p class="preco_desconto"> R$ ' + arrayProdutos[i][4]+ '   à vista</p>';
        conteudo += '</div>';
        conteudo += '<div class="card-footer">';
        conteudo += '<small class="text-muted">';

        preco = parseFloat(arrayProdutos[i][4]);
        


        conteudo += '<button type="button" class="btn btn-info" onclick="AddCarrinho('+preco+','+i+')"> Comprar </button>';

        conteudo += '</small>';
        conteudo += '</div>';
        conteudo += '</div>';
        conteudo += '</div>';


        $(".div-cards").append(conteudo);


   }

   


 
}

function AddCarrinho(valor,posicao,imagem)
{ 

    
    produto = arrayProdutos[posicao][0]
    

    localStorage.setItem("produto" + posicao, produto);
    valor = parseFloat(valor);
    localStorage.setItem("valor" + posicao, valor);
    localStorage.setItem("imagem" + posicao, imagem)
    alert("Atenção o seu produto foi adicionado com sucesso.!");
}
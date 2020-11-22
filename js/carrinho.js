$(document).ready(function(){
    Carrinho();

});







function Carrinho(){
    
    var precoTotal = 0

    
    
for (let i = 0; i <= 10 ; i++){
    var conteudo = ''
    var item = localStorage.getItem("produto" + i);
    var valor = localStorage.getItem("valor" + i)
    var imagem = localStorage.getItem("imagem" + i)
    if(valor != null){

        precoTotal = parseFloat(precoTotal) + parseFloat(valor);
        console.log(precoTotal)
    }
    

    if(item != null){
        conteudo += '<li class="list-group-item">'
        conteudo += '<h6 class="my-0 ">'+item+'</h6>'
        conteudo += '<p class="text-muted">R$ '+valor+'</p>'
        
        conteudo += '</li>'


        $(".teste").append(conteudo);
    }

    
    

    

    


    }
    console.log(precoTotal)
    

    document.getElementById("precoTotal").innerHTML = "Total R$ " + precoTotal.toFixed(2); 

}


function limparCarrinho(){
    localStorage.clear(); 
    location.reload();

}
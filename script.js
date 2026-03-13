let produtos=[];

fetch('produtos.json')
.then(res=>res.json())
.then(data=>{
produtos=data
mostrar(produtos)
})

function mostrar(lista){

const area=document.getElementById("catalogo")
area.innerHTML=""

lista.forEach(p=>{

area.innerHTML+=`

<div class="produto">
<img src="${p.imagem}">
<h3>${p.nome}</h3>
<p class="preco">R$ ${p.preco}</p>
<a class="botao" href="https://wa.me/55SEUNUMERO">Comprar</a>
</div>

`

})

}

function filtrar(tipo){

if(tipo==="todos"){

mostrar(produtos)

}else{

mostrar(produtos.filter(p=>p.categoria===tipo))

}

}

document.getElementById("buscar").addEventListener("input",e=>{

const valor=e.target.value.toLowerCase()

mostrar(produtos.filter(p=>p.nome.toLowerCase().includes(valor)))

})

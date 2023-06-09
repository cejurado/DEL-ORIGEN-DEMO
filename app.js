const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const formulario = document.getElementById('formulario')
const boton = document.getElementById('boton')
const items = document.getElementById('items')
const cards = document.getElementById('cards')
const footer = document.getElementById('footer')

const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', ()=>{
    fetchData()
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})
cards.addEventListener('click', e =>{
addCarrito(e)})

items.addEventListener('click', e =>{
    btnAction(e)})

const fetchData = async ()=>{
    const res = await fetch('api.json')
    const data = await res.json()
    pintarCards(data)
    

}
const pintarCards = data =>{
    data.forEach(producto => {
    templateCard.querySelector('h5').textContent = producto.title
    templateCard.querySelector('p').textContent = producto.precio
    templateCard.querySelector('h6').textContent = producto.descripcion
    templateCard.querySelector('img').setAttribute('src', producto.thumbnailUrl)
    templateCard.querySelector('button').dataset.id = producto.id


     const clone = templateCard.cloneNode(true)  
     fragment.appendChild(clone) 
    });
    cards.appendChild(fragment)
}
const addCarrito = e =>{
    if(e.target.classList.contains('btn-success')){  //cambio dark a success
setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}
const productos = [
    {
        "id": 1,
        "title": "Bolsón Verduras 2Kg",
        "thumbnailUrl": "img/bolsonVerdura.jpeg",
        "descripcion":"Contiene cebollas 1/2kg, papas 1/2Kg, zanahoria 1/2Kg, 1 pimiento, 2 choclos y 1 ajo.",
        "precio": "2000"
      },
      {
        
        "id": 2,
        "title": "Bolsón Verduras 3Kg",
        "thumbnailUrl": "img/bolsonVerdura.jpeg",
        "descripcion":"Contiene cebollas 1kg, papas 1Kg, zanahoria 1/2Kg, 1 pimiento, 2 choclos y 1 ajo.",
        "precio": "3000"
      },
      {
        
        "id": 3,
        "title": "Bolsón Verduras 5Kg",
        "thumbnailUrl": "img/bolsonVerdura.jpeg",
        "descripcion":"Contiene cebollas 1kg, papas 1Kg, zanahoria 1Kg, 1 pimiento, 2 choclos,2 atados de acelga y 1 ajo.",
        "precio": "5000"
      },
      {
        
        "id": 4,
        "title": "Bolsón Verduras 8Kg",
        "thumbnailUrl": "img/bolsonVerdura.jpeg",
        "descripcion":"Contiene cebollas 1 1/2kg, papas 2Kg, zanahoria 1Kg,2 atados espinacas, 1 pimiento, 2 choclos,2 atados de acelga y 1 ajo.",
        "precio": "8000"
      },
      {
        
        "id": 5,
        "title": "Bolsón Frutas 2Kg",
        "thumbnailUrl": "img/bolsonFruta2.jpeg",
        "descripcion":"Contiene manzanas 1/2kg, naranja 1/2Kg, peras 1/2Kg y bananas 1/2Kg.",
        "precio": "1000"
      },
      {
        
        "id": 6,
        "title": "Bolsón Frutas 3Kg",
        "thumbnailUrl": "img/bolsonFruta2.jpeg",
        "descripcion":"Contiene manzanas 1kg, naranja 1Kg, peras 1/2Kg y bananas 1/2Kg.",
        "precio": "1500"
      },
      {
        
        "id": 7,
        "title": "Bolsón Frutas 5Kg",
        "thumbnailUrl": "img/bolsonFruta2.jpeg",
        "descripcion":"Contiene manzanas 1kg naranja 1Kg, peras 1Kg, uvas 1/2Kg, mandarinas 1/2kg y bananas 1Kg.",
        "precio": "2500"
      },
      {
        
        "id": 8,
        "title": "Bolsón Frutas 8Kg",
        "thumbnailUrl": "img/bolsonFruta2.jpeg",
        "descripcion":"Contiene manzanas 1kg naranja 1Kg, peras 1Kg, uvas 1Kg, mandarinas 1kg, bananas 1Kg, Ciruelas 1 kg y  Pomelos 1Kg.",
        "precio": "4000"
      },
      {
        
        "id": 9,
        "title": "Huevos Docena",
        "thumbnailUrl": "img/huevosBcos.jpeg",
        "descripcion":"Blanco o de color, tamaños 00, 01,02, 03",
        "precio": "400"
      },
      {
        
        "id": 10,
        "title": "Huevos Maple",
        "thumbnailUrl": "img/maple.jpeg",
        "descripcion":"Blanco o de color, tamaños 00, 01,02, 03",
        "precio": "1000"
      },
      {
        
        "id": 11,
        "title": "Huevos Codorniz",
        "thumbnailUrl": "img/huevosCodorniz.jpeg",
        "descripcion":"Huevos de codorniz de excelente calidad",
        "precio": "800"
      },
      {
  
        "id": 12,
        "title": "Frutas Deshidratadas x 250gr",
        "thumbnailUrl":  "img/bolsonFrutas1.jpeg",
        "descripcion":  "Mix de frutas deshidratadas",
        "precio": "900"
      },
      {
        
        "id": 13,
        "title": "Frutos Secos x 250gr",
        "thumbnailUrl": "img/mani.jpeg",
        "descripcion":  "Almendras, Nueces, Castañas de Cajú y mani de primera calidad",
        "precio": "1250"
      },
      {
        
        "id": 14,
        "title": "Frutos Secos x 500gr",
        "thumbnailUrl": "img/castañas.jpeg",
        "descripcion":  "Almendras, Nueces, Castañas de Cajú y mani de primera calidad",
        "precio": "2500"
      },
      {
  
        "id": 15,
        "title": "Frutos Secos x 1000gr",
        "thumbnailUrl": "img/almendras.jpeg",
        "descripcion":  "Almendras, Nueces, Castañas de Cajú y mani de primera calidad",
        "precio": "5000"
      }
]
//Logica del buscador
const filtrar = ()=>{
    ;
    resultado.innerHTML=''
const texto = formulario.value.toLowerCase();
for(let producto of productos){
    let nombre = producto.title.toLowerCase()
    if(nombre.indexOf(texto) !== -1){
       
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('h6').textContent = producto.descripcion
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        templateCard.querySelector('button').dataset.id = producto.id
        

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
  
          
          resultado.appendChild(fragment)
          
}}
}
boton.addEventListener('click',filtrar)


const setCarrito = objeto =>{
const producto = {
    id: objeto.querySelector('button').dataset.id,
    title: objeto.querySelector('h5').textContent,
    descripcion: objeto.querySelector('h6').textContent,
    precio: objeto.querySelector('p').textContent,
    cantidad:1



}

if (carrito.hasOwnProperty(producto.id)){
    producto.cantidad = carrito[producto.id].cantidad +1
}
carrito[producto.id] = {... producto}
pintarCarrito()

}

const pintarCarrito = ()=>{
    console.log(carrito);
    items.innerHTML= ''
Object.values(carrito).forEach(item  =>{
templateCarrito.querySelector('th').textContent=item.id
templateCarrito.querySelectorAll('td')[0].textContent=item.title
templateCarrito.querySelectorAll('td')[1].textContent=item.cantidad

templateCarrito.querySelector('.btn-info').dataset.id=item.id
templateCarrito.querySelector('.btn-danger').dataset.id=item.id
templateCarrito.querySelector('span').textContent=item.cantidad * item.precio

console.log(item.title);
// cart1(item.cantidad);

//console.log(item.cantidad);

const clone = templateCarrito.cloneNode(true)
fragment.appendChild(clone)
})
items.appendChild(fragment)
pintarFooter()

localStorage.setItem('carrito', JSON.stringify(carrito))

}


 
const pintarFooter = ()=>{
    footer.innerHTML = ''
    if ( Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }
    const nCantidad = Object.values(carrito).reduce((acc,{cantidad}) => acc +cantidad  ,0 )
    const nPrecio = Object.values(carrito).reduce((acc,{cantidad,precio}) => acc + cantidad * precio ,0)
    
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio
    // cart1(nCantidad)
    const clone = templateFooter.cloneNode(true)
    footer.appendChild(clone)
    footer.append(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
        

    })
}

const btnAction = e =>{
if (e.target.classList.contains('btn-info')){
    carrito[e.target.dataset.id]

    const producto = carrito[e.target.dataset.id]
    producto.cantidad ++
    carrito[e.target.dataset.id] = {... producto}
    pintarCarrito()
}
if (e.target.classList.contains('btn-danger')){
    const producto = carrito[e.target.dataset.id]
    producto.cantidad --
   
    if(producto.cantidad === 0){
        delete  carrito[e.target.dataset.id]
    }
    pintarCarrito()

}
e.stopPropagation()
}
// function cart1(cantidad ) {
  
 
//    console.log(cantidad);
// var cartElement = document.getElementById('cart');
// if (carrito = {}){
// cartElement.innerText = 0
// }else{
// cartElement.innerText = cantidad
// }var cartElement = document.getElementById('cart');


// }

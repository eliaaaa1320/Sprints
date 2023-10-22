let listaProductos = [
    {nombre: "Caldero",
    precio: 10000,
    descripcion: "35 cms X 25 cms",
    img: "/Users/elianazapataalzate/Documents/UdeA/Sprint 1/01 INDEX/PRODUCTO-1.png",
},
{nombre: "Skull",
    precio: 15000,
    descripcion: "25 cms X 15 cms",
    img: "/Users/elianazapataalzate/Documents/UdeA/Sprint 1/01 INDEX/PRODUCTO-2.png"
},
{nombre: "Bloque ?",
    precio: 20000,
    descripcion: "25 cms X 20 cms",
    img: "/Users/elianazapataalzate/Documents/UdeA/Sprint 1/01 INDEX/PRODUCTO-3.png"
},
]

function hiceclick(i) {
    console.log("Diste click en producto" + i);
    eCommerceShop.agregarItem(i);
}

function eliminarClick(id) {
    console.log("Diste click en producto" + id);
    eCommerceShop.eliminarItem(id);
}

function mostrarProductos() {
    let productosCodigoHTML = ""; 
    for (let i = 0; i < listaProductos.length; i++) {
        let producto = `<div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
          <img src="${listaProductos[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${listaProductos[i].nombre}</h5>
              ${listaProductos[i].descripcion}
              <h5 class="card-text">${listaProductos[i].precio}</h5>
              <a href="#" class="btn btn-primary" onclick="hiceclick(${i})">Mire más</a>
            </div>
          </div>
        </div>`
        `<div class="col">
          <div class="card">
          <img src="${listaProductos[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${listaProductos[i].nombre}</h5>
              ${listaProductos[i].descripcion}
              <h5 class="card-text">${listaProductos[i].precio}</h5>
            </div>
          </div>
        </div>`
        `<div class="col">
          <div class="card">
          <img src="${listaProductos[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${listaProductos[i].nombre}</h5>
              ${listaProductos[i].descripcion}
              <h5 class="card-text">${listaProductos[i].precio}</h5>
            </div>
          </div>
        </div>`
        `<div class="col">
          <div class="card">
          <img src="${listaProductos[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${listaProductos[i].nombre}</h5>
              ${listaProductos[i].descripcion}
              <h5 class="card-text">${listaProductos[i].precio}</h5>
            </div>
          </div>
        </div>
      </div>` 
      productosCodigoHTML += producto;
    }
    document.getElementById("Catalogo-productos").innerHTML = productosCodigoHTML
}

mostrarProductos(); 

let eCommerceShop = new Carrito(listaProductos);

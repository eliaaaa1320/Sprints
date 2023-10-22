class Carrito{
    constructor(productos) {
        this.productos = productos;
        this.itemSeleccionado = [];
    }
    agregarItem (id) {
        this.itemSeleccionado.push(this.productos[id]);

        this.mostrarItem(); 
    }
    eliminarItem(id) {
        console.log(this.itemSeleccionado);
        this.itemSeleccionado.splice(id, 1);
        console.log(this.itemSeleccionado);
        this.mostrarItem(); 
    }
    mostrarItem() {
        let productosCodigoHTML = "";  
        for (let i = 0; i < this.itemSeleccionado.length; i++){
            let productoSeleccionado = `<li class="list-group-item d-flex flex-row align-self-center justify-content-evenly text-indent: 2em">
            <h5>${this.itemSeleccionado[i].nombre}</h5>
            <p><i>${this.itemSeleccionado[i].precio}</i></p>
          </li>
          <img src="${this.itemSeleccionado[i].img}" alt="...">
          <div class="alert alert-success" role="alert">
            Producto agregado
          </div>
          <button type="button" class="btn btn-outline-danger" onclick="eliminarClick(${i});">Eliminar</button>
          <li class="list-group-item d-flex flex-row align-self-center justify-content-evenly text-indent: 2em">
            <h5>${this.itemSeleccionado[i].nombre}</h5>
            <p><i>${this.itemSeleccionado[i].precio}</i></p>
          </li>
          <img src="${listaProductos[i].img}" alt="...">
          <div class="alert alert-success" role="alert">
            Producto agregado
          </div>
          <button type="button" class="btn btn-outline-danger" onclick="eliminarClick(${i});">Eliminar</button>
          <li class="list-group-item d-flex flex-row align-self-center justify-content-evenly text-indent: 2em">
            <h5>${this.itemSeleccionado[i].nombre}</h5>
            <p><i>${this.itemSeleccionado[i].precio}</i></p>
          </li>
          <img src="${listaProductos[i].img}" alt="...">
          <div class="alert alert-success" role="alert">
            Producto agregado
          </div>
          <button type="button" class="btn btn-outline-danger" onclick="eliminarClick(${i});">Eliminar</button>`;
          productosCodigoHTML += productoSeleccionado;  
        }
        document.getElementById("carrito-compras-lista").innerHTML = productosCodigoHTML;
    }
}
let eCommerceShop = new Carrito(listaProductos);
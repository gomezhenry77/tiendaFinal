//capturando la información del carrito previamente guardada en el local storage. El parse es para convertirla de nuevo en array
let carrito=JSON.parse(localStorage.getItem("carrito"))


//trayendo la etiqueta contenedora del html que va a empezar a llenar (la base para pintar)
let factura=document.getElementById("factura")

//compruebo el estado del carrito de compras
if(carrito==null){
//creando una fila en el html. my son márgenes arriba y abajo
    let fila=document.createElement("div")
    fila.classList.add("row", "my-5", "justify-content-center")
//creando una columna en el html
    let columna=document.createElement("div")
    columna.classList.add("col-12", "col-md-8")
//creando una imagen en el html
    let imagen=document.createElement("img")
//todas las clases deben contener las clases "img-fluid" y "w-100"
    imagen.classList.add("img-fluid", "w-100")
    imagen.src="../../assets/img/vacio.png"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent="El carrito está vacío"
    

//para que se visualice debe indicarse cuáles son las etiquetas padres y las etiquetas hijas
    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)
}else{
    //por cada elemento en el array carrito una función que toma productos
    carrito.forEach(function(producto){
//por cada producto en el carrito crea una fila
        let fila=document.createElement("div")
        fila.classList.add("row", "my-5", "shadow")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12", "col-md-4", "border", "justify-content-center")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12", "col-md-4", "align-self-center", "border", "py-5")

        let columna3=document.createElement("div")
        columna3.classList.add("col-12", "col-md-3", "align-self-center")
//se crea el elemento definiendo una etiqueta, necesariamente en la segunda se le agrega una clase, finalmente se llena haciendo la referencia (fuente) a la foto que ya está guardada en el objeto foto
        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-50", "ms-5")
        foto.src=producto.fotos

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center", "text-muted")
        nombre.textContent=producto.nombre

        let precio=document.createElement("h4")
        precio.classList.add("text-center")
        precio.textContent="Costo unidad: "+producto.precio

        let cantidad=document.createElement("h4")
        cantidad.classList.add("text-center")
        cantidad.textContent="Cantidad: "+producto.cantidad

        let subtotal=document.createElement("h3")
        subtotal.classList.add("text-center", "bg-dark", "text-light")

        let textoSubtotal=document.createElement("h3")
        textoSubtotal.classList.add("text-center", "pb-3")
        textoSubtotal.textContent="Subtotal"


        //separa el string

        let subtotalCalculado=producto.precio.split("£")[1]*producto.cantidad
        
        subtotal.textContent="£ "+subtotalCalculado
        
        console.log(subtotalCalculado);

        
        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna3.appendChild(textoSubtotal)
        columna3.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        fila.appendChild(columna3)
        factura.appendChild(fila)

    })
}
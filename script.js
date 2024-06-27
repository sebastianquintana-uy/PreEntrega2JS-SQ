    // agregar titulo con getElementById


document.addEventListener('DOMContentLoaded', () => {
const tituloPrincipal = document.getElementById('tituloPrincipal');
tituloPrincipal.textContent = 'Ferreteria Coder';

 // agregar subtítulo con createElement
   
 const subtitulo = document.createElement('h2');
 subtitulo.textContent = 'Nuestros Productos';
 document.getElementById('subtitulo').appendChild(subtitulo);

//  menú con getElementByTagName
const elementosMenu = ['Inicio', 'Productos', 'Contacto'];
 const menu = document.getElementsByTagName('ul')[0];
 elementosMenu.forEach(item => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${item.toLowerCase()}`;
     link.textContent = item;
     li.appendChild(link);
     menu.appendChild(li);
    });

 // Datos de productos
 const productos = [
        { nombre: 'Amoladroa Gris 800w', codigo: '001', precio: 1100, imagenUrl: 'medios/210.jpg' },
        { nombre: 'Taladro a Bateria', codigo: '002', precio: 2200, imagenUrl: 'medios/803.jpg' },
        { nombre: 'Amoladora Naranja 1200w', codigo: '003', precio: 3300, imagenUrl: 'medios/1806.jpg' },
        { nombre: 'Lijadora Gris 850w', codigo: '004', precio: 4400, imagenUrl: 'medios/2350.jpg' },
        { nombre: 'Lijadora de Banco 800w', codigo: '005', precio: 5500, imagenUrl: 'medios/3197.jpg' },
        { nombre: 'Rotomartillo Amarillo 3000w', codigo: '006', precio: 6600, imagenUrl: 'medios/5211.jpg' },
    ];

 //  productos con createElement
    const listaProductos = document.getElementById('listaProductos');
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement('div');
    tarjetaProducto.className = 'tarjeta-producto';

    const img = document.createElement('img');
        img.src = producto.imagenUrl;
        tarjetaProducto.appendChild(img);

        const nombre = document.createElement('p');
     nombre.textContent = `${producto.nombre}`;
        tarjetaProducto.appendChild(nombre);

        const codigo = document.createElement('p');
    codigo.textContent = `Código: ${producto.codigo}`;
        tarjetaProducto.appendChild(codigo);

        const precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio}`;
    tarjetaProducto.appendChild(precio);

        const cantidadEtiqueta = document.createElement('label');
    cantidadEtiqueta.textContent = 'Cantidad:';
       tarjetaProducto.appendChild(cantidadEtiqueta);

        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
  cantidadInput.min = '1';
        cantidadInput.value = '1';
    cantidadInput.className = 'producto-cantidad';
    tarjetaProducto.appendChild(cantidadInput);

    const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.addEventListener('click', () => {
        const cantidad = parseInt(cantidadInput.value);
                    agregarAlCarrito(producto, cantidad);
        });
        tarjetaProducto.appendChild(botonAgregar);

        listaProductos.appendChild(tarjetaProducto);
    });

  const itemsCarrito = document.getElementById('itemsCarrito');
    const precioTotalElemento = document.getElementById('precioTotal');

    const cargarItemsCarrito = () => {
               const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        itemsCarrito.innerHTML = '';
                let precioTotal = 0;
        carrito.forEach(item => {
            const li = document.createElement('li');
           li.textContent = `${item.nombre} - $${item.precio} x ${item.cantidad}`;
            itemsCarrito.appendChild(li);
         precioTotal += item.precio * item.cantidad;
        });
        precioTotalElemento.textContent = `Total: $${precioTotal}`;
    };

    const agregarAlCarrito = (producto, cantidad) => {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      const indiceProductoExistente = carrito.findIndex(item => item.codigo === producto.codigo);
        if (indiceProductoExistente !== -1) {
            carrito[indiceProductoExistente].cantidad += cantidad;
        } else {
            carrito.push({ ...producto, cantidad });
        }      localStorage.setItem('carrito', JSON.stringify(carrito));
        cargarItemsCarrito();
    };
    cargarItemsCarrito();
});

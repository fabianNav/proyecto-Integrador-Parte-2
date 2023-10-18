/* Librerías */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

/* Archivos de proyecto */
import './css/style.css'

import {
    calcularTotal,
    comprarProducto,
    eliminarProducto,
    eliminarProductoCompra,
    leerLocalStorage,
    leerLocalStorageCompra,
    obtenerEvento,
    pagar,
    procesarPedido,
    procesarPedidoProductos,
    vaciarCarrito
} from './src/carrito'
import { cambiarTema } from './src/tema'


const productos = document.getElementById('lista-productos')
//console.log(productos)
const carrito = document.getElementById('carrito')
// console.log(carrito)
const carritoCompra = document.getElementById('lista-compra')


cargarEventos()

function cargarEventos() {

    const ruta = String(location.href)

    if (!ruta.includes('carrito') && !ruta.includes('index') && !ruta.includes('contacto') && !ruta.includes('nosotros')) {
        esProductos()
    } else if (ruta.includes('index')) {
        esIndex()
    } else if (ruta.includes('carrito')) {
        esCarrito()
    } else if (ruta.includes('contacto')) {
        contacto()
    } else if (ruta.includes('nosotros')) {
        nosotros()
    }

}

function esIndex() {
    //console.log('No estoy en carrito!')


    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')

    // Se ejecuta cuando presiono sobre el botón comprar
    productos.addEventListener('click', (e) => comprarProducto(e))

    // Al cargar el documento se muestra lo almacenado en el LS
    document.addEventListener('DOMContentLoaded', leerLocalStorage())

    //Cuando se elimina un producto del carrito
    carrito.addEventListener('click', e => eliminarProducto(e))

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))

    // Enviar pedido a otra página
    procesarPedidoBtn.addEventListener('click', e => procesarPedido(e))

    cambiarTema()
}

function esProductos() {

    const vaciarCarritoBtn = carrito.querySelector('#vaciar-carrito')
    const procesarPedidoBtn = carrito.querySelector('#procesar-pedido')
    //console.log(vaciarCarritoBtn, procesarPedidoBtn)

    // Se ejecuta cuando presiono sobre el botón comprar
    productos.addEventListener('click', (e) => comprarProducto(e))

    // Al cargar el documento se muestra lo almacenado en el LS
    document.addEventListener('DOMContentLoaded', leerLocalStorage())

    //Cuando se elimina un producto del carrito
    carrito.addEventListener('click', e => eliminarProducto(e))

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', e => vaciarCarrito(e))

    // Enviar pedido a otra página
    procesarPedidoBtn.addEventListener('click', e => procesarPedidoProductos(e))

    //Cambiar tema
    cambiarTema()
}


function esCarrito() {

    const pagarCarrito = document.getElementById('pagar')

    // Voy a leer el localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorageCompra())

    carritoCompra.addEventListener('click', e => eliminarProductoCompra(e))

    calcularTotal()

    carritoCompra.addEventListener('change', e => obtenerEvento(e))
    carritoCompra.addEventListener('keyup', e => obtenerEvento(e))

    cambiarTema()

    pagarCarrito.addEventListener('click', e => pagar())
}

function contacto() {
    

    cambiarTema()

}

function nosotros() {
    

    cambiarTema()
}
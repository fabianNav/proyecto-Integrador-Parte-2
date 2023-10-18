import {resolve} from 'node:path'

export default {
    server: {
        port: "2222",
    },
    css:{
        devSourcemap: true,
    },
    build: {
        emptyOutDir: true,
        rollupOptions:{
            input:{
                accesorios: resolve('pages/accesorios.html'),
                contectividad: resolve('pages/conectividad.html'),
                consolas: resolve('pages/consolas.html'),
                notebooks: resolve('pages/notebooks.html'),
                perifericos: resolve('pages/perifericos.html'),
                software: resolve('pages/software.html'),
                categorias: resolve('pages/todo.html'),
                nosotros: resolve('pages/nosotros.html'),
                contacto: resolve('pages/contacto.html'),
                carrito: resolve('pages/carrito.html'),
                index: resolve('index.html')
            }
        }
    }
}

// npm run build una vez que se haya configurado
// Se va a crear una carpeta llamada dist que es la que se debe subir como versión final 

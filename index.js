class Concesionaria {
    constructor() {
        this.vehiculos = []
    }

    añadirVehiculo(...vehiculo) {
        this.vehiculos = vehiculo.map(elemento => elemento)
    }
    lista() {
        return this.vehiculos.map(elemento => {
            if (elemento.puertas) {
                console.log(`Marca: ${elemento.marca} // Modelo:${elemento.modelo} // Puertas: ${elemento.puertas} // Precio: ${this.mostrarPrecio(elemento.precio)}`)

            }
            if (elemento.cilindradas) {
                console.log(`Marca: ${elemento.marca} // Modelo:${elemento.modelo} // Cilindrada: ${elemento.cilindradas} // Precio: ${this.mostrarPrecio(elemento.precio)}`)

            }
        }

        )
    }
    buscarletras(letra) {
        return this.vehiculos.map(elemento => {
            if (elemento.marca.includes(letra)) {
                console.log(`Vehiculo que contiene en el modelo la letra "Y : ${elemento.marca} ${elemento.modelo} ${this.mostrarPrecio(elemento.precio)} `)
            }
        })
    }
    precios() {
        let caro = { vehiculo: "", precio: this.vehiculos[0].precio }
        let barato = { vehiculo: "", precio: this.vehiculos[0].precio }
        this.vehiculos.map(elemento => {
            if (elemento.precio > caro.precio) {
                caro.precio = elemento.precio
                caro.vehiculo = `${elemento.marca} ${elemento.modelo}`
            }
            if (elemento.precio < barato.precio) {
                barato.precio = elemento.precio
                barato.vehiculo = `${elemento.marca}  ${elemento.modelo}`
            }
        }

        )
        console.log(`El vehiculo mas caro: ${caro.vehiculo}`)
        console.log(`El vehiculo mas barato: ${barato.vehiculo}`)
    }
    mostrarPrecio(nStr) {
        let numeroModificado = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(nStr)
        return numeroModificado.replace(".", ",").replace(",", ".").replace("ARS", "$")
    }
    order() {
        let ordenado = this.vehiculos.sort((a, b) => {
            if (a.precio > b.precio) {
                return -1
            }
            if (a.precio < b.precio) {
                return +1
            }
            return 0
        })
        console.log("---------------------------------------------------")
        console.log("---------------------------------------------------")
        console.log("Vehiculos ordenados por precio de mayor a menor :")
        ordenado.map((elemento) => {
            console.log(`${elemento.marca} ${elemento.modelo}`)
        })
    }

}


class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca
        this.precio = precio
        this.modelo = modelo



    }
}

class Autos extends Vehiculo {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this.puertas = puertas
    }


}
class Motos extends Vehiculo {
    constructor(marca, modelo, precio, cilindradas) {
        super(marca, modelo, precio);
        this.cilindradas = cilindradas
    }


}




let autoUno = new Autos("Peugeot", 206, 200000, 4)
let motoDos = new Motos("Honda", "Titan", 60000, "125c")
let autoDos = new Autos("Peugeot", 208, 250000, 5)
let motoUno = new Motos("Yamaha", "YBR", 80500.50, "160c")







let miConcesionaria = new Concesionaria
miConcesionaria.añadirVehiculo(autoUno, motoDos, autoDos, motoUno)
miConcesionaria.lista()
console.log("---------------------------------------------------")
console.log("---------------------------------------------------")
miConcesionaria.precios()
miConcesionaria.buscarletras("Y")
miConcesionaria.order()
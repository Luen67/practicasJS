const automovil = {
    marca: 'Mitsubishi',
    modelo: {
        nombre: 'Xpander',
        version: 'Totalmente Equipada'
    },
    anio: 2023,
    color: 'Gray Silver',
    encender: () => console.log('Encendiendo'),
    frenar: () => console.log('Frenando'),
    acelerar: () => console.log('Acelerando')
};

const casa = {
    tamanio: '',
    cuartos: {
        cocina: {
            estufa: true            
        }
    },
    ubicacion: {
        
    }
}

const persona = {
    nombre: 'Luis',
    edad: 30,
    genero: 'X',
    domicilio: {
        calle: 'Insurgentes',
        numero: {
            exterior: 100,
            interior: 2
        },
        colonia: 'Del Valle',
        municipio: 'Benito Juarez',
        entidad: 'Ciudad de México',
        cp: '14210',
    },
    ocupacion: 'Desarrollador',    
}

const mentor = {
    nombre: 'Emi',
    edad: 30,
    genero: 'X',
    domicilio: {
        calle: 'Insurgentes',
        numero: {
            exterior: 100,
            interior: 2
        },
        colonia: 'Del Valle',
        municipio: 'Benito Juarez',
        entidad: 'Ciudad de México',
        cp: '14210',
    },
    ocupacion: 'Desarrollador', 
    cursos_impartidos: 'Maquetado, Git'
}

const koder = {
    nombre: 'Alberto',
    edad: 30,
    genero: 'X',
    domicilio: {
        calle: 'Insurgentes',
        numero: {
            exterior: 100,
            interior: 2
        },
        colonia: 'Del Valle',
        municipio: 'Benito Juarez',
        entidad: 'Ciudad de México',
        cp: '14210',
    },
    ocupacion: 'Desarrollador', 
    cursos_inscrito: 'Bootcamp Full Stack'
}

const computadora = {
    marca: '',
    
}

const edificio = {
    marca: '',
    
}

const telefono_movil = {
    marca: '',
    
}

const menu = {
    marca: '',
    
}

const saludarPersona = (persona) => {
    return "Hola: " + persona.nombre
}

console.log(saludarPersona(persona));
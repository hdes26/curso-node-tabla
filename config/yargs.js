const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe:'Es la base de la tabla de multiplicar'

        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe:'Muestra la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default:10,
            describe:'Hasta donde llegara la multiplicacion'
        })


        .check((argv, options) => {
            console.log('yargs', argv)
            if (isNaN(argv.l)) {
                throw 'La base tiene que ser un numero'
            }
            return true;

        })
        .argv;


module.exports = argv;
const colors = require('colors');

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=========== Por Hacer ============'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=================================='.green);
        }
        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    case 'actualizar':

        let actualizar = porHacer.acutualizar(argv.descripcion, argv.completado);
        console.log(actualizar)
        break;

    default:
        console('Comando desconocido');


}
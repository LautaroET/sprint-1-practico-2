import os from 'os'

//Obtener la arquitetura del sistema
console.log('Arquitetura :',os.arch());

//Obtener el tipo de sistema operactivo
console.log('plataforma:',os.platform());

//Obtener la cantidad total de la memoria
console.log('Memoria total:',os.totalmem());

//Obtener memoria Libre
console.log('Memoria libre:',os.freemem());

//Obtener la informacion de la CPU
console.log('Informacion de la CPU',os.cpus);
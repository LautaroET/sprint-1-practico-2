import path from 'path';

//Definir una ruta archivo de ejemplo
const filePath ='./data/example.txt';

//Obtener el directorio base
const dirName = path.dirname(filePath);

//Obtener el nombre del archivo sin extencion
const baseName = path.basename(filePath,'.txt');
console.log('Nombre del Archivo:',baseName);

//Obtener la extencion del archivo 
const extName = path.extname(filePath);
console.log('Extencion del Archivo:',extName);

//Crear una ruta unida
const newPath = path.join('/user','docs','newfile.txt');
console.log('Nueva Ruta:',newPath);

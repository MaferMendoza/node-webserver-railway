
const http = require ('http');

http.createServer ( (req, res) => {

    res.write ( 'Hola Mundo ');
    res.end();
   



})

.listen ( 4040 );

console.log (' Escuchando en el puerto', 4040);
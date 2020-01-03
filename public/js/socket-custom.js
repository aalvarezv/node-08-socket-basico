var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//Enviando información al server y recibir respuesta en function que es un callback
socket.emit('enviarMensaje', {
    usuario: 'Alan',
    mensaje: 'Hola a todos'
}, function(resp) {
    console.log('Se disparó el callback ');
    console.log(resp);
});

//Escuchando información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})
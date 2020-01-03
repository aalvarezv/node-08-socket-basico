const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');

    });

    //Enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    //Escuchar cliente y responde en el callback.
    client.on('enviarMensaje', (data, callback) => {

        client.broadcast.emit('enviarMensaje', data);
        // console.log(data);
        // if (mensaje.usuario) {
        //     callback({
        //         mensaje: `TODO OK se recibio el mensaje en el servidor del usuario ${data.usuario}`
        //     });
        // } else {
        //     callback({
        //         mensaje: `TODO MAL!!!`
        //     });
        // }

    });

});
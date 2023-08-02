const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const providersRoutes = require('./routes/providers.routes');
const LogRoutes = require('./routes/log.routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors( {origin: 'http://localhost:3000'} ));


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//definir rutas
app.use(providersRoutes);
app.use(LogRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen(4500);
console.log("servidor Proveedores en funcionamiento");
console.log("servidor en el puerto 4500");
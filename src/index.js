const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const davidRoutes = require('./routes/routesDavid');
const microservCompras = require('./routes/routesCompras');
const microserVentas = require('./routes/routesVentas');
const user = require('./routes/login/login');
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(davidRoutes);
app.use(microserVentas);
app.use(microservCompras);
app.use(user);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})
const port = process.env.PORT || 4000;
app.listen(port);
console.log("servidor en el puerto " + port);
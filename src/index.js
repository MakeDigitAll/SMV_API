const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const davidRoutes = require('./routes/routesDavid');
const zuleRoutes=require('./routes/zulemaRoutes');
const danieltasksRoutes = require('./routes/danielRoutes');
const microservCompras = require('./routes/routesCompras');
const microserVentas = require('./routes/routesVentas');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/user", require("./routes/user"));
app.use("/api/todos", require("./routes/todos"));
app.use("/api/refresh-token", require("./routes/refreshToken"));
app.use("/api/signout", require("./routes/signout"));
app.use(zuleRoutes);
app.use(danieltasksRoutes);
app.use(davidRoutes);
app.use(microserVentas);
app.use(microservCompras);


app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})
app.listen(4000);
console.log("servidor en el puerto 4000");
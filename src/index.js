const express =  require('express');
const morgan = require('morgan');
const cors = require('cors');

const tasksRoutes = require('./routes/tasks.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//definir rutas
app.use(tasksRoutes);

app.use((err, req, res, next) =>{
    return res.json({
        message: err.message
    })
})

app.listen(4000);
console.log("servidor Node.js en funcionamiento");
console.log("servidor en el puerto 4000");
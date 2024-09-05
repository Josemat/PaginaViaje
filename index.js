// Common JS, no es propia de Javascript
// const express = require('express');
// La version de imports
import express from 'express';
import router from  './routes/index.js'
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

// Conectar Base de datos
db.authenticate()
        .then(()=>{console.log('Base de datos conectada...')})
        .catch((error)=>console.log(error));



//Habilitar PUG
app.set('view engine','pug')

// Creando nuestro propio middleware
// Obtener el año actual
app.use((req, res, next)=>{
    res.locals.unaVariable = 'Todos los derechos reservados '
    const newYear = new Date();
    res.locals.actualYear = newYear.getFullYear()
    res.locals.nombreSitio = 'Agencia de viajes'
    return next() //con next o return next obligamos a que siga ejecutando
})

//Agregar body parser para leer los datos del form
app.use(express.urlencoded({extended: true}))

// Definir la carpeta publica
app.use(express.static('public'))
// Agregar router
app.use('/', router)

// Definir puerto
const port = process.env.PORT || 3000;
console.log(port)

app.listen(port,()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
})
import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio =async (req,res)=>{//req(request) lo que enviamos | res(response) lo que express nos responde
    //Consultar 3 viajes del modelo viaje
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit:3 }))
    promiseDB.push(Testimonial.findAll({ limit: 3 }))
    
    try {
        const resultado = await Promise.all(promiseDB)

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
    
    
    }
const paginaNosotros = (req,res)=>{//req(request) lo que enviamos | res(response) lo que express nos responde
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
    }
const paginaViajes = async (req,res)=>{
    //Aca consultamos la DB
    const viajes = await Viaje.findAll();
    
    res.render('viajes',{
        pagina: 'Viajes',
        viajes
    });
    }
const paginaTestimoniales = async (req,res)=>{

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimonios',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
    }


    //Muestrra un viaje por su slug
const paginaDetalleViajes = async (req, res)=>{
    const {slug} = req.params
    try {
        const resultado = await Viaje.findOne({where : {slug}})
        res.render('viaje',{
            pagina:'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}




    export {
        paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViajes
    }
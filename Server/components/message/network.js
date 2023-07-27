import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    console.log(req.headers)
    res.header({
        "Custom-header":"Nuevo valor personalizado"
    });
    // success(req, res, 'Lista de mensajes');
    console.log("Mensage enviado");
});

router.post('/',(req,res)=>{
    console.log(req.query);
    if(req.query.error == 'ok'){
        console.log("Error");
        // error(req, res, 'Error inesperado', 500, 'Es una simulación de errores');
    } else{
        console.log("Creado correctamente" + res);
        // success(req, res, 'Creado correctamente', 201);
    }
});

export default router 
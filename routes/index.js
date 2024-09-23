const express=require('express')

const clientesRouter=require('./personaRouter')

function routerApi(app){
    const router=express.Router()
    app.use('/api/v1', router)
    router.use('/clientes',clientesRouter)
}

module.exports=routerApi
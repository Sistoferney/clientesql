const {Persona, PersonaSchema} =require ('./persona.js')

function setupModels (sequelize){
    Persona.init(PersonaSchema, Persona.config(sequelize))
}

module.exports =setupModels
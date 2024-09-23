const {Model, DataTypes}=require('sequelize')

const CLIENTE_TABLE='clientes'

class Persona extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: CLIENTE_TABLE,
            modelName: 'Persona'
            
        }
    }
}

const PersonaSchema= {
    id_persona:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER

    },

    nombre_persona:{
        type:DataTypes.STRING,
        field:'nombre_persona'
    },

    apellido_persona:{
        type:DataTypes.STRING,
        field:'apellido_persona'
    },

    cedula:{
        type:DataTypes.INTEGER,
        field:'cedula'
    },

    fecha_nacimiento:{
        type:DataTypes.DATE,
        field:'fecha_nacimiento'
    },

    direccion:{
        type:DataTypes.STRING,
        field:'direccion'
        
    },

    correo:{
        type:DataTypes.STRING,
        field:'correo'
    },

    telefono:{
        type:DataTypes.INTEGER,
        field:'telefono'
    }

    
}

module.exports = {Persona, PersonaSchema}
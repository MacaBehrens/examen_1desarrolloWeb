import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Usuario = sequelize.define('Usuario', {

  nombreUsuario: { 
     type: DataTypes.STRING, 
    allowNull: false 
  },
  email:{
 type: DataTypes.STRING, 
    allowNull: false 
  },
  contrasena:{
 type: DataTypes.STRING, 
    allowNull: false 

  },

  fechaNacimiento:{
     type: DataTypes.DATE, 
    allowNull: false 
  },

  planSuscripcionId:{
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

  
  fechaInicioPlan:{
     type: DataTypes.DATE, 
    allowNull: false 
  },

});

export default Usuario;
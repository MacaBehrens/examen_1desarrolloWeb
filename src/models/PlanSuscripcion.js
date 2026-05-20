import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const PlanSuscripcion = sequelize.define('PlanSuscripcion', {

  nombrePlan: { 
     type: DataTypes.STRING, 
    allowNull: false 
  },
  precioMensual:{
 type: DataTypes.FLOAT, 
    allowNull: false 
  },
  calidadAudioMax:{
 type: DataTypes.STRING, 
    allowNull: false 

  },

  limiteDispositivosSimultaneo:{
     type: DataTypes.INTEGER, 
    allowNull: false 
  },


});

export default PlanSuscripcion;
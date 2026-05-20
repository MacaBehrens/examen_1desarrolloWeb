import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Reproduccion = sequelize.define('Reproduccion', {

  usuarioId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

  cancionId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

  fechaHoraInicio:{
 type: DataTypes.DATE, 
    allowNull: false 
  },
  dispositivoUtilizado:{
 type: DataTypes.STRING, 
    allowNull: false 
  },


});

export default Reproduccion;
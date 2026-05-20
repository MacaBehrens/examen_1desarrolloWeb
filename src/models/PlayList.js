import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const PlayList = sequelize.define('PlayList', {

  nombre: { 
     type: DataTypes.STRING, 
    allowNull: false 
  },
  fechaCreacion:{
 type: DataTypes.DATE, 
    allowNull: false 
  },
  usuarioId:{
 type: DataTypes.STRING, 
    allowNull: false 
  },


});

export default PlayList;
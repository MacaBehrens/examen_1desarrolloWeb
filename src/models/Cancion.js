import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Cancion = sequelize.define('Cancion', {

  titulo: { 
     type: DataTypes.STRING, 
    allowNull: false 
  },
  duracionSegundos:{
 type: DataTypes.FLOAT, 
    allowNull: false 
  },
  generoId :{
 type: DataTypes.INTEGER, 
    allowNull: false 
  },
  albumId :{
 type: DataTypes.INTEGER, 
    allowNull: false 
  },



});

export default Cancion;
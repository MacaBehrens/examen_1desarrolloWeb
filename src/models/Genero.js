import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Genero = sequelize.define('Genero', {

  nombreGenero: { 
     type: DataTypes.STRING, 
    allowNull: false 
  },


});

export default Genero;
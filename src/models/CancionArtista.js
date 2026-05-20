import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const CancionArtista = sequelize.define('CancionArtista', {

  cancionId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

  artistaId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

});

export default CancionArtista;
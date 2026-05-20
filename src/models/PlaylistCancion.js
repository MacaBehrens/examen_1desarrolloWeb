import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const PlaylistCancion = sequelize.define('PlaylistCancion', {

  playlistId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

  cancionId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

   cancionId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

   orden: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

  

});

export default PlaylistCancion;
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const AlbumArtista = sequelize.define('AlbumArtista', {

  albumId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

  artistaId: { 
     type: DataTypes.INTEGER, 
    allowNull: false 
  },

});

export default AlbumArtista;
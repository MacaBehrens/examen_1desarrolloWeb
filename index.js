import app from './src/app.js';
import { sequelize, testConnection } from "./src/config/database.js";
import Usuario from "./src/models/Usuario.js";
import Reproduccion from "./src/models/Reproduccion.js";
import PlaylistCancion from "./src/models/PlaylistCancion.js"


const startServer = async () => {
  try {
    // Paso A: Verificar la conexión
    await testConnection();

    // Paso B: Crear tablas (si no existen)
    await sequelize.sync({ force: false });
    console.log('✅ Tablas sincronizadas');

    // Paso C: Abrir el puerto
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 App corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('💥 Error fatal:', error);
  }
};

startServer();
 import { Router } from 'express';
import usuarioRoutes from "./usuarioRoutes.js"

const router = Router(); 
    
    router.use('/api/usuario', usuarioRoutes)
    
    export default router;

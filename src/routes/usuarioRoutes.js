import { Router } from 'express';
import { Usuario } from '../models/index.js'; 

    const router = Router();

  
    router.get('/', async (req, res) => {
        try {
            /*
            Usuario.findAll(): Obtiene todos las Usuarios que haya guardados en la DB
            */
            const usuario = await Usuario.findAll();
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
        }
    });

   // GET /api/usuario/:id (Obtener uno producto por su id)
    router.get('/:id', async (req, res) => {usuario
        try {
            const { id } = req.params;
            /*
            Usuario.findByPk(id): Similar a findAll, pero obteniendo sólo el registro que coincida con el ID proporcionado.
            */
            const usuario = await Usuario.findByPk(id);
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener Usuario', error: error.message });
        }
    });

    // POST /api/usuario(Crear uno nuevo)
    router.post('/', async (req, res) => {
        try {
            /*
            Usuario.create(req.body): Crea un nuevo usuario. Recibe un objeto con los atributos que querramos registrar, podemos validar aquí o "confiar" que el objeto viene validado desde el frontend
            */
            const nuevoUsuario = await Usuario.create(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
                // A veces, pueden ocurrir multiples errores a la vez, el detalle lo encontramos en `error.errors`, el cual es un array y podemos mapearlo.
                return res.status(400).json({ message: 'Error de validación', errors: error.errors ? error.errors.map(e => e.message) : error.message });
            }
            res.status(500).json({ message: 'Error al crear usuario', error: error.message });
        }
    });

    // PUT /api/usuario/:id (Actualizar uno existente)
    router.put('/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const usuario = await Usuario.findByPk(id);
            if (usuario) {
                /*
                departamento.update(req.body): Actualiza la instancia del usuario enviandole un objeto con los atributos a reemplazar. 
                Notar que `.update()` es un método de instancia, no estático como `.findAll()`
                */
                const usuarioActualizado = await usuario.update(req.body);
                res.status(200).json(usuarioActualizado);
            } else {
                res.status(404).json({ message: 'usuario no encontrado para actualizar' });
            }
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ message: 'Error de validación', error: error.message });
            }
            res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
        }
    });

    // DELETE /api/usuario/:id (Eliminar uno)
    router.delete('/:id', async (req, res) => {
        try {
            const { id } = req.params;
            // Departamento.destroy({ where: { id } }): Elimina el usuario filtrando por el campo `id`. Devuelve la cantidad de registros afectados por la eliminación.
            const resultado = await Usuario.destroy({ where: { id: id } });
            if (resultado > 0) {
                res.status(200).json({ message: 'Usuario eliminado exitosamente' });
            } else {
                res.status(404).json({ message: 'Usuario no encontrado para eliminar' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar Usuario', error: error.message });
        }
    });

    export default router;
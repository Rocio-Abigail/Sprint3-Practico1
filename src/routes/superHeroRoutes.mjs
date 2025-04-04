import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperHeroeController,
    actualizarSuperHeroeController,
    eliminarSuperHeroePorIdController,
    eliminarSuperHeroePorNombreController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.post('/heroes/crear-nuevo', crearSuperHeroeController);
router.put('/heroes/actualizar/:id', actualizarSuperHeroeController);
router.delete('/heroes/eliminar/:id', eliminarSuperHeroePorIdController);
router.delete('/heroes/eliminar/nombre/:nombre', eliminarSuperHeroePorNombreController)
export default router;

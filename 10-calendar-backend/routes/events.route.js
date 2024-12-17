const { Router } = require("express");
const { getEventos, crearEvento, putEventos, deleteEventos } = require("../controllers/events.controllers");

const router = Router()
//Obtener eventos

router.get('/', getEventos);
router.post('/', crearEvento);
router.put('/:id', putEventos);
router.delete('/:id', deleteEventos);


module.exports = router;
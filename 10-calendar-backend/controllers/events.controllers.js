

const eventsCTRL = {};

eventsCTRL.getEventos = async(req, res) => {
    res.json({
        ok: true, 
        mgs: 'Geteventos'
    })
};

eventsCTRL.crearEvento = async(req, res) => {
    res.json({
        ok: true, 
        mgs: 'CrearEvento'
    })
};
eventsCTRL.putEventos = async(req, res) => {
    res.json({
        ok: true, 
        mgs: 'Actualizar Evento'
    })
};
eventsCTRL.deleteEventos = async(req, res) => {
    res.json({
        ok: true, 
        mgs: 'Borrar Evento'
    })
};

module.exports = eventsCTRL;
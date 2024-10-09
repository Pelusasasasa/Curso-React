import { addHours, differenceInSeconds } from 'date-fns';
import { useMemo, useState } from 'react';
import Swal from 'sweetalert2';

import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale';

registerLocale('es', es)


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [formSubmited, setFormSubmited] = useState(false); 

    const [formValues, setFormvalues] = useState({
      title: 'Fernando',
      notes: 'Lorenzatto',
      start: new Date(),
      end: addHours(new Date(), 2)
    })

    const titleClass = useMemo(() => {

        if (!formSubmited) return '';

        return (formValues.title.trim().length > 0) ? 'is-valid' : 'is-invalid'

    }, [formValues.title, formSubmited])

    const opnInputChange = ({ target }) => {
      setFormvalues({
        ...formValues,
        [ target.name ]: target.value
      })
    };

    const onDateChange = (e, changing) => {
      setFormvalues({
        ...formValues,
        [changing]: e
      })
    }

    const onCloseModal = () => {
        setIsOpen(false)
    };

    const onSubmit = (e) => {
      e.preventDefault();
      setFormSubmited(true);

      const diferencia = differenceInSeconds( formValues.end, formValues.start );
      
       if (isNaN(diferencia) || diferencia < 0){
        Swal.fire('Fechas Incorrecats', 'Revisar las fechas ingresadas', 'error')
        return
       }

       if (formValues.title.trim().length < 1){
        console.log('Error de titulo');
        return
       };

       console.log(formValues);
    }

  return (
    <Modal 
        isOpen={ isOpen }
        onRequestClose={ onCloseModal }
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
    >

          <h1> Nuevo evento </h1>
          <hr />
          <form className="container" onSubmit={onSubmit}>

          <div className="form-group mb-2">
              <label>Fecha y hora inicio</label>
              <DatePicker
                selected={ formValues.start }
                onChange={ (event) => onDateChange(event, 'start') } 
                className='form-control'
                dateFormat='Pp'
                showTimeSelect
                locale={es}
                />
          </div>

          <div className="form-group mb-2">
              <label>Fecha y hora fin</label>
              <DatePicker
              minDate={formValues.start}
                selected={ formValues.end }
                className='form-control'
                onChange={ (event) => onDateChange(event, 'end') }
                dateFormat='Pp'
                showTimeSelect
                locale={es}
              />
          </div>

          <hr />
          <div className="form-group mb-2">
              <label>Titulo y notas</label>
              <input 
                  type="text" 
                  className={`form-control ${titleClass}`}
                  placeholder="Título del evento"
                  name="title"
                  value={ formValues.title }
                  autoComplete="off"
                  onChange={opnInputChange}
              />
              <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>

          <div className="form-group mb-2">
              <textarea 
                  type="text" 
                  className="form-control"
                  placeholder="Notas"
                  rows="5"
                  value={ formValues.notes }
                  name="notes"
                  onChange={opnInputChange}
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>

          <button
              type="submit"
              className="btn btn-outline-primary btn-block"
          >
              <i className="far fa-save"></i>
              <span> Guardar</span>
          </button>

      </form>
    </Modal>
  )
}

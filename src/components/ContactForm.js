import React from 'react';

const ContactForm = () => {
  return (
    <div className="col-lg-6 order-1 order-lg-1">
      <h5>Nombre y apellido</h5>
      <input type="text" className="form-control" placeholder="Nombre" required />

      <h5>Déjanos tu comentario</h5>
      <textarea className="form-control" rows="10" required></textarea>
      <br />
      <button className="btn btn-custom btn-lg w-100">Enviar</button>
      <br /><br />
      <button className="btn btn-custom btn-lg w-100">Limpiar</button>
    </div>
  );
};

export default ContactForm;

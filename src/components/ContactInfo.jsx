import React from 'react';
import { useFormContext } from 'react-hook-form';

const ContactInfo = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h3>Información de Contacto</h3>
      <div>
        <label>Email</label>
        <input {...register("email", { required: "Email es requerido", pattern: { value: /^\S+@\S+$/i, message: "Formato de email inválido" } })} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Teléfono</label>
        <input {...register("phone", { required: "Teléfono es requerido" })} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
    </div>
  );
};

export default ContactInfo;

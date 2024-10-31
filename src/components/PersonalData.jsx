import React from 'react';
import { useFormContext } from 'react-hook-form';

const PersonalData = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h3>Datos Personales</h3>
      <div>
        <label>Nombre</label>
        <input {...register("name", { required: "Nombre es requerido" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Edad</label>
        <input type="number" {...register("age", { min: 18, message: "Debe ser mayor de edad" })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
    </div>
  );
};

export default PersonalData;

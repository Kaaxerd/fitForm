import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import PersonalData from './PersonalData';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Formulario = () => {
  const methods = useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const onSubmit = (data) => {
    console.log("Enviando datos:", data);
    // Lógica para enviar datos al servidor
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalData />;
      case 1:
        return <ContactInfo />;
      case 2:
        return <TrainingPreferences />;
      default:
        return <PersonalData />;
    }
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {renderStep()}
          <ButtonGroup>
            {currentStep > 0 && <button type="button" onClick={prevStep}>Anterior</button>}
            {currentStep < 2 && <button type="button" onClick={nextStep}>Siguiente</button>}
            {currentStep === 2 && <button type="submit">Enviar</button>}
          </ButtonGroup>
        </form>
      </FormProvider>
    </Container>
  );
};

export default Formulario;

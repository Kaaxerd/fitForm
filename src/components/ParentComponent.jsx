import React from 'react';
import TrainingPreferences from './TrainingPreferences';
import ContactInfo from './ContactInfo';
import PersonalData from './PersonalData';
import { useForm, FormProvider } from 'react-hook-form';
import DataPost from './DataPost';

const ParentComponent = () => {
    const methods = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Agrega aquí la lógica de envío de datos
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <PersonalData />
                <ContactInfo />
                <TrainingPreferences />
                <DataPost />
            </form>
        </FormProvider>
    );
};

export default ParentComponent;

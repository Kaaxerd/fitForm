<<<<<<< HEAD
import React from 'react';

const DataPost = () => {
    return <button type="submit">Submit</button>;
};

export default DataPost;
=======
import { useState } from 'react';
import ContactInfo from './ContactInfo';
import PersonalData from './PersonalData';
import TrainingPreferences from './TrainingPreferences';

const DataPost = () => {
    const [contactInfo, setContactInfo] = useState({
        email: '',
        phone: ''
    });

    const [personalData, setPersonalData] = useState({
        name: '',
        gender: '',
        age: '',
        height: '',
        weight: ''
    });

    const [trainingPreferences, setTrainingPreferences] = useState({
        mainGoal: '',
        preferredTraining: '',
        trainingFrequency: '',
        sessionDuration: '',
        experienceLevel: '',
        muscleGroupPreference: '',
        specificInterests: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const allData = {
            contactInfo,
            personalData,
            trainingPreferences
        };
        console.log(allData);
        // Add your data posting logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <ContactInfo info={contactInfo} setInfo={setContactInfo} />
            <PersonalData formData={personalData} setFormData={setPersonalData} />
            <TrainingPreferences formData={trainingPreferences} setFormData={setTrainingPreferences} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default DataPost;
>>>>>>> 21360c2be06ec07adb5d7755bea86f67fc0ce802

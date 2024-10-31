import React, { useState } from 'react';
import TrainingPreferences from './TrainingPreferences';
import DataPost from './DataPost';

const ParentComponent = () => {
    const [formData, setFormData] = useState({
        mainGoal: '',
        preferredTraining: '',
        trainingFrequency: '',
        sessionDuration: '',
        experienceLevel: '',
        muscleGroupPreference: '',
        specificInterests: []
    });

    return (
        <div>
            <TrainingPreferences formData={formData} setFormData={setFormData} />
            <DataPost formData={formData} />
        </div>
    );
};

export default ParentComponent;

import React, { useState } from 'react';
<<<<<<< HEAD
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
    justify-content: center;
`;

const StyledButton = styled.button`
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    background-color: ${props => (props.selected ? '#007bff' : '#f0f0f0')};
    color: ${props => (props.selected ? 'white' : 'black')};
    cursor: pointer;
    min-width: 120px;
    text-align: center;
    border-color: ${props => (props.selected ? '#007bff' : '#ccc')};

    &:hover {
        background-color: #007bff;
        color: white;
    }
`;

const TrainingPreferences = () => {
    const { register, setValue } = useFormContext();

    const [selectedGoal, setSelectedGoal] = useState('');
    const [selectedTraining, setSelectedTraining] = useState('');
    const [selectedFrequency, setSelectedFrequency] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);

    const handleSelect = (category, value) => {
        setValue(category, value); // Guarda el valor en el formulario
        switch (category) {
            case 'mainGoal':
                setSelectedGoal(value);
                break;
            case 'preferredTraining':
                setSelectedTraining(value);
                break;
            case 'trainingFrequency':
                setSelectedFrequency(value);
                break;
            case 'sessionDuration':
                setSelectedDuration(value);
                break;
            case 'experienceLevel':
                setSelectedExperience(value);
                break;
            default:
                break;
        }
    };

    const handleMuscleGroupSelect = (value) => {
        const updatedSelection = selectedMuscleGroups.includes(value)
            ? selectedMuscleGroups.filter((item) => item !== value)
            : [...selectedMuscleGroups, value];
        
        setSelectedMuscleGroups(updatedSelection);
        setValue('muscleGroupPreference', updatedSelection);
    };

    return (
        <Container>
            <h3>Preferencias de Entrenamiento</h3>

            <label>Objetivo Principal:</label>
            <ButtonGroup>
                {['Perder peso', 'Ganar músculo', 'Mantenerse en forma'].map((goal) => (
                    <StyledButton
                        type="button"
                        key={goal}
                        onClick={() => handleSelect('mainGoal', goal)}
                        selected={selectedGoal === goal}
                    >
                        {goal}
                    </StyledButton>
                ))}
            </ButtonGroup>

            <label>Entrenamiento Preferido:</label>
            <ButtonGroup>
                {['Cardio', 'Fuerza', 'Yoga', 'HIIT', 'Pilates'].map((training) => (
                    <StyledButton
                        type="button"
                        key={training}
                        onClick={() => handleSelect('preferredTraining', training)}
                        selected={selectedTraining === training}
                    >
                        {training}
                    </StyledButton>
                ))}
            </ButtonGroup>

            <label>Frecuencia de Entrenamiento:</label>
            <ButtonGroup>
                {['1-2 veces por semana', '3-4 veces por semana', '5 o más veces por semana'].map((frequency) => (
                    <StyledButton
                        type="button"
                        key={frequency}
                        onClick={() => handleSelect('trainingFrequency', frequency)}
                        selected={selectedFrequency === frequency}
                    >
                        {frequency}
                    </StyledButton>
                ))}
            </ButtonGroup>

            <label>Duración de Sesión:</label>
            <ButtonGroup>
                {['Menos de 30 minutos', '30-60 minutos', 'Más de 60 minutos'].map((duration) => (
                    <StyledButton
                        type="button"
                        key={duration}
                        onClick={() => handleSelect('sessionDuration', duration)}
                        selected={selectedDuration === duration}
                    >
                        {duration}
                    </StyledButton>
                ))}
            </ButtonGroup>

            <label>Nivel de Experiencia:</label>
            <ButtonGroup>
                {['Principiante', 'Intermedio', 'Avanzado'].map((level) => (
                    <StyledButton
                        type="button"
                        key={level}
                        onClick={() => handleSelect('experienceLevel', level)}
                        selected={selectedExperience === level}
                    >
                        {level}
                    </StyledButton>
                ))}
            </ButtonGroup>

            <label>Preferencia de Grupo Muscular:</label>
            <ButtonGroup>
                {['Piernas', 'Espalda', 'Pecho', 'Brazos', 'Abdominales'].map((group) => (
                    <StyledButton
                        type="button"
                        key={group}
                        onClick={() => handleMuscleGroupSelect(group)}
                        selected={selectedMuscleGroups.includes(group)}
                    >
                        {group}
                    </StyledButton>
                ))}
            </ButtonGroup>
        </Container>
    );
};

export default TrainingPreferences;
=======
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
>>>>>>> 21360c2be06ec07adb5d7755bea86f67fc0ce802

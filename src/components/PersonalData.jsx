import React from 'react';

const DataPost = ({ formData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    return (
        <button type="submit" onClick={handleSubmit}>
            Submit
        </button>
    );
};

export default DataPost;

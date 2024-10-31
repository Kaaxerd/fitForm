import React, { useState } from 'react';

const DataPost = (info) => {
    // Function to handle data submission
    console.log('Submitting data:', info);
    // Add your data submission logic here (e.g., API call)
};

const ContactInfo = () => {
    const [info, setInfo] = useState({
        email: '',
        phone: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        DataPost(info);
    };

    return (
        <div>
            <h2>Información de contacto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={info.email} 
                        onChange={(e) => setInfo({ ...info, email: e.target.value })} 
                    />
                </div>
                <div>
                    <label>Teléfono: </label>
                    <input 
                        type="tel" 
                        value={info.phone} 
                        onChange={(e) => setInfo({ ...info, phone: e.target.value })} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactInfo;
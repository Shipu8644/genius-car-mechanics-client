import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://serene-hollows-08213.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const deleteServiceHandle = id => {
        console.log(id);
        const url = `https://serene-hollows-08213.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remainingServices = services.filter(service => service._id !== id);
                    setServices(remainingServices);
                    alert("delete Successfully");

                }
            })
    }
    return (
        <div>
            <h1>Manage Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => deleteServiceHandle(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;
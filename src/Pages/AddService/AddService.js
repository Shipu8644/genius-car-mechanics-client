import React from 'react';
import './/AddService.css';

import { useForm } from "react-hook-form";
import axios from 'axios';
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Data added successfully')
                    reset();
                }
            })

    };
    return (
        <div className="add-service">
            <h1>Please add a service here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 }
                )} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Img Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
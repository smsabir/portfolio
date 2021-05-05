import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css'
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div id={"contact"} className="contact-form container pt-5 pb-5">
            <h2 style={{color: "rgb(190, 190, 190)"}} className="text-center">Let's Get in Touch.</h2>
            <div className="d-flex justify-content-center pt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your First Name" {...register("firstName", { required: true, maxLength: 20 })} />
                <input placeholder="Your Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input placeholder="Your Email Address" type="email" {...register("email", { required: true })} />
                <textarea placeholder="Write your message..." type="text" col="50" row="35" {...register("message", { required: true })} />
                <br/>
                <input type="submit" />
            </form>
            </div>
            

        </div>
    );
};

export default Contact;
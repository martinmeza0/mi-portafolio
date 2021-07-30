import React from 'react';
import {useForm} from 'react-hook-form';
import '../css/_Contacto.sass';
import emailjs from 'emailjs-com';
import Modal from './Modal';

const Contacto = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const enviarMensaje  = (data,e) => {   
        let Datos = {
            name: data.Nombre,
            email: data.Correo,
            message: data.Mensaje
        }
        emailjs.send("service_zhua4wc","template_spqer1u", Datos, "user_HPt4N1jpTCSwJcAv87Vgq")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        e.target.reset();
    }
    return (
        <>
            <section className="contacto">
                    <div className="container">
                        <h3>Contactame!</h3>
                        <img src="/assets/svg/undraw_Opened.svg" alt=""/>
                    </div>
                    <form onSubmit={handleSubmit(enviarMensaje)}>

                        {errors.Nombre && <p className="error">{errors.Nombre.message}</p>}

                        <input 
                            type="text" placeholder="Nombre"
                            {...register("Nombre", {
                                required: "Ingrese un nombre",
                                minLength:{
                                    value: 4,
                                    message: "El nombre ingresado muy corto, ingrese mas de 3 letras"
                                }
                            })}
                        />

                        {errors.Correo && <p className="error">{errors.Correo.message}</p>}

                        <input 
                            type="text" placeholder="Correo" 
                            {...register("Correo", {
                                required: "Ingrese un correo",
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "El correo ingresado no es valido"
                                }
                            })}
                        />

                        {errors.Mensaje && <p className="error">{errors.Mensaje.message}</p>}

                        <textarea
                            placeholder="Mensaje"
                            {...register("Mensaje", {
                                required: "Ingrese un mensaje",
                                minLength:{
                                    value: 4,
                                    message: "El mensaje ingresado es muy corto, ingrese mas de 3 letras"
                                }
                            })}/>

                        <input 
                            type="submit" value="Enviar"
                        />
                    </form>  
            </section>  
            <Modal>

            </Modal>
        </>
    )
}

export default Contacto

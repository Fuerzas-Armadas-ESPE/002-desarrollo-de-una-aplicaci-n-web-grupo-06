import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import img from "../assets/img-11.jpg"

export const ContactUs = () => {

    const refForm = useRef();
    const [message, setMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_r87m1r9";
        const templateId = "template_d9w8h4q";
        const apikey = "kRt260BWuggGVpSze";


        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
            .then(result => {
                console.log(result.text);
                setMessage({ type: 'success', text: 'Formulario enviado correctamente.' });
            })
            .catch(error => {
                console.error(error);
                setMessage({ type: 'error', text: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.' });
            });

        refForm.current.reset();
    }


    return (
        <div>
            <section id='contact' className=' w-full'>
                <div className='max-w-[1500px] m-auto grid grid-cols-2 items-center gap-10 py-0 max-xl:pt-[100px] max-lg:pt-[0px] max-lg:pb-[60px] max-md:pt-[0px]max-md:pb-[70px] max-lg:grid-cols-1 max-lg:gap-6 padding-x'>
                    <div className=' h-[70%] max-lg:max-w-[40%] max-md:max-w-[70%] max-sm:max-w-[100%] max-md:h-[100%] m-10 rounded'>
                        <img src={img} alt="ContactImg" className=' object-cover w-full h-full' />
                    </div>

                    <div className=' px-5 max-lg:px-0'>
                        <p className='w-fit text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] '>CONTACTANOS!</p>

                        <div className='text-5xl font-semibold leading-[70px] mt-5 mb-5 max-xl:leading-[50px] max-xl:mb-10 max-sm:text-3xl'>
                            <h1>SIENTETE LIBRE DE HABLARNOS</h1>
                            <h1>ESTAMOS PARA AYUDARTE!</h1>
                        </div>

                        <div class="container ml-auto mr-auto flex items-center justify-center ">
                            <div class="w-full " >
                                <form class="bg-white px-8 pt-6 pb-8 mb-4" ref={refForm} action="" onSubmit={handleSubmit} >
                                    <div class="mb-4">
                                        <div class="grid grid-flow-row sm:grid-flow-col gap-4">
                                            <div class="sm:col-span-4 justify-center">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="from_name">Nombre y Apellido</label>
                                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="from_name" placeholder="Ej. Carlos Lopez" required />
                                            </div>

                                            <div class="sm:col-span-4 justify-center">
                                                <label class="block text-gray-700 text-sm font-bold mb-2" for="from_name">Email</label>
                                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Ej. carloslopez@gmail.com" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-4">

                                    </div>

                                    <div class="mb-4">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="from_name">Asunto</label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="asunto" placeholder="Ej. Consulta" required />
                                    </div>

                                    <div class="mb-6">
                                        <label class="block text-gray-700 text-sm font-bold mb-2" for="from_name">Mensaje</label>
                                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" placeholder="Escribe tu mensaje" required></textarea>
                                    </div>

                                    <button className=' py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm'>
                                        <div className=' buttonDiv'></div>
                                        <span className='buttonSpan'>ENVIAR</span>
                                    </button>

                                </form>
                                
                                {message && (
                                    <div className={`text-white p-3 mt-3 rounded ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {message.text}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
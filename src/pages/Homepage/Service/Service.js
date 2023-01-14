import React, { useEffect, useState } from 'react';
import CardService from './CardService';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <section className="py-6 sm:py-12 text-black ">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <p className="font-serif lg:text-5xl text-warning font-bold">phoneGPT Services</p>
                        <h2 className="lg:text-2xl font-bold ">ChatGPT is a powerful generator of human-like replies to any inputs. Thanks to the GPT-3.5 language model, it is exceptionally good at understanding the context of a chat.</h2>

                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 items-center">
                        {
                            services.map(service => <CardService
                                key={service._id}
                                service={service}
                            ></CardService>)
                        }

                    </div>
                </div>

            </section>

        </div>
    );
};

export default Service;
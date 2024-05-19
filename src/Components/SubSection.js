import React, { useState, useEffect } from "react";
import foto4 from "../assets/foto4.png";
import foto3 from "../assets/foto3.png";
import foto2 from "../assets/foto2.png";
import foto1 from "../assets/foto1.png";

const SubSection = ({ update, toggleModal }) => {
    const [subData, setSubData] = useState(() => {
        const data = window.localStorage.getItem('formData');
        return data ? JSON.parse(data) : null;
    });

    useEffect(() => {
        const data = window.localStorage.getItem('formData');
        if (data) {
            setSubData(JSON.parse(data));
        } else {
            setSubData(null);
        }
    }, [update]); // Se ejecuta cada vez que `update` cambia

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'formData') {
                const updatedData = event.newValue ? JSON.parse(event.newValue) : null;
                setSubData(updatedData);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const getGoalText = (goal) => {
        switch (goal) {
            case 'competencia':
                return 'Preparación de competencia';
            case 'subir':
                return 'Subir de peso';
            case 'bajar':
                return 'Bajar de peso';
            case 'definir':
                return 'Definir';
            default:
                return 'N/A';
        }
    };

    const getMembershipText = (membership) => {
        return membership.replace('_', ' ').toUpperCase();
    };

    const getImageForMembership = (membership) => {
        switch (membership) {
            case '1_mes':
                return foto1;
            case '3_meses':
                return foto2;
            case '6_meses':
                return foto3;
            case '12_meses':
                return foto4;
            default:
                return 'default.png';
        }
    };

    return (
        <div id="suscripcion" className="max-w-xxl mt-20 mb-0 mr-10 ml-0 p-10 flex flex-col md:flex-row md:space-x-8 m-10">
            <div className="flex-1 md:w-1/2">
                <p className='text-[#f04e3c] text-4xl font-bold relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 before:translate-y-[-50%] mb-10'>SUSCRIPCIÓN</p>
                {!subData ? (
                    <div className="bg-white shadow-md rounded-lg p-6 mt-4 md:mt-0">
                        <p>No hay datos de suscripción disponibles.</p>
                        <br></br>
                        <br></br>
                        <button
                            className=" py-4 px-7 text-xl group relative text-white bg-[orangered] rounded-sm"
                            onClick={toggleModal}
                        >
                            <div className=" buttonDiv"></div>
                            <span className="buttonSpan">INSCRIBETE AHORA</span>
                        </button>
                    </div>
                ) : (
                    <div className="bg-white shadow-md rounded-lg p-10 mt-4 md:mt-0">
                        <h3 className="text-3xl font-bold mb-2">{subData.name} {subData.lastName}</h3>
                        <p className="text-[#f04e3c] text-lg font-bold"><span className="font-medium">Email: </span> <span className="text-black">{subData.email}</span></p>
                        <p className="text-[#f04e3c] text-lg font-bold"><span className="font-medium">Peso: </span> <span className="text-black">{subData.weight} kg</span></p>
                        <p className="text-[#f04e3c] text-lg font-bold"><span className="font-medium">Altura: </span> <span className="text-black">{subData.height} m</span></p>
                        <p className="text-[#f04e3c] text-lg font-bold"><span className="font-medium">Meta: </span> <span className="text-black">{getGoalText(subData.goal)}</span></p>
                        <p className="text-[#f04e3c] text-lg font-bold"><span className="font-medium">Membresía: </span> <span className="text-black">{getMembershipText(subData.membresia)}</span></p>
                    </div>
                )}
            </div>
            <div className="flex-1 flex flex-col justify-center items-center mt-10 md:mt-0">
                {subData && (
                    <>
                        <img src={getImageForMembership(subData.membresia)} alt="Membership" className="max-w-xs mb-2 w-30" />
                        <h3 className="text-lg font-semibold">MEMBRESIA: {getMembershipText(subData.membresia)}</h3>
                    </>
                )}
            </div>

        </div>



    );
};

export default SubSection;

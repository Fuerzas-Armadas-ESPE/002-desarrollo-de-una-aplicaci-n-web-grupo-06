import React, { useState } from 'react';
import imgForm from "../assets/img-8.jpg"

const Offer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    weight: '',
    height: '',
    goal: '',
    membresia: ''
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Form data saved to localStorage:', formData);
    // Aquí puedes cerrar el modal si deseas
    toggleModal();
  };

  return (
    <section className='w-full bg-sky-950'>
      <div className='max-container flex justify-between items-center text-white py-28 max-lg:py-24 max-md:flex-col max-md:items-start max-md:gap-5 max-md:py-16 max-sm:py-12 padding-x'>
        <div className='text-6xl font-semibold leading-[70px] max-lg:text-4xl max-w-[50%] max-lg:max-w-[100%] max-sm:text-3xl'>
          <h1>April membership offer available Now</h1>
        </div>

        <button onClick={toggleModal} className='py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm'>
          <div className='buttonDiv'></div>
          <span className='buttonSpan'>MORE SERVICES</span>
        </button>
      </div>
      {/* Main modal */}
      {isModalOpen && (
        <div
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50 over"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="flex relative over p-0 w-full max-w-5xl bg-white rounded-lg shadow">
            <div className='flex-none w-96 relative'>
              <img src={imgForm} alt="formImg" className='absolute inset-0 w-full h-full object-cover rounded-l-lg' />
            </div>
            {/* Modal header */}
            <div className='flex-1'>
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  Inscribeté Ahora!!
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form className="p-4" onSubmit={handleSubmit}>
                <div className="flex justify-between">
                  <div className="grid gap-4 mb-4 grid-cols-2 flex-1">
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Apellido</label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor='weight' className='block mb-2 text-sm font-medium text-gray-900'>Peso</label>
                      <input
                        type='number'
                        name='weight'
                        id='weight'
                        value={formData.weight}
                        onChange={handleChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                        placeholder='Kg'
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor='height' className='block mb-2 text-sm font-medium text-gray-900'>Altura</label>
                      <input
                        type='number'
                        name='height'
                        id='height'
                        value={formData.height}
                        onChange={handleChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                        placeholder='cm'
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="goal" className="block mb-2 text-sm font-medium text-gray-900">Objetivo</label>
                      <select
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        required
                      >
                        <option disabled value="">Cuál es tu objetivo</option>
                        <option value="competencia">Entrenar para competencia</option>
                        <option value="subir">Subir de peso</option>
                        <option value="bajar">Bajar de peso</option>
                        <option value="definir">Definir</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 md:p-5 flex-1">
                    <p className="text-gray-900">Elige tu plan:</p>
                    <ul className="space-y-4 mb-4">
                      <li>
                        <input type="radio" id="1_mes" name="membresia" value="1_mes" className="hidden peer" onChange={handleChange} required />
                        <label htmlFor="1_mes" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-900 hover:bg-gray-100 max-h-16">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">1 MES</div>
                            <div className="w-full text-gray-500">$ 35</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="3_meses" name="membresia" value="3_meses" className="hidden peer" onChange={handleChange} />
                        <label htmlFor="3_meses" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-900 hover:bg-gray-100 max-h-16">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">3 MESES</div>
                            <div className="w-full text-gray-500">$ 95</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="6_meses" name="membresia" value="6_meses" className="hidden peer" onChange={handleChange} />
                        <label htmlFor="6_meses" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-900 hover:bg-gray-100 max-h-16">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">6 MESES</div>
                            <div className="w-full text-gray-500">$ 150</div>
                          </div>
                        </label>
                      </li>
                      <li>
                        <input type="radio" id="12_meses" name="membresia" value="12_meses" className="hidden peer" onChange={handleChange} />
                        <label htmlFor="12_meses" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-900 hover:bg-gray-100 max-h-16">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">12 MESES</div>
                            <div className="w-full text-gray-500">$ 240</div>
                          </div>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm"
                >
                  <div className='buttonDiv'></div>
                  <span className='buttonSpan'>Inscribirse</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Offer;

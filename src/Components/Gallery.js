import React from 'react'
import img1 from "../assets/img-18.jpg"
import img2 from "../assets/img-19.jpg"
import img3 from "../assets/img-20.jpg"
import img4 from "../assets/img-21.jpg"
import img5 from "../assets/img-1.jpg"

const Gallery = () => {

  const images = [img1, img2, img3, img4, img5]

  const [active, setActive] = React.useState(img1)

  return (
    <section id='gallery' className='flex max-lg:flex-col w-full min-h-screen bg-service-pattern bg-cover bg-fixed items-center justify-center max-lg:bg-center max-sm:bg-center sm:min-h-min p-4'>
      
      <div className='w-full padding-hero-y padding-x' style={{flex: 0.5}}>
        <div className='flex justify-between items-end max-lg:flex-col max-lg:items-start max-lg:gap-5 max-sm:mb-20'>
          <div>
            <p className='text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>Galeria</p>
            <div className='text-6xl text-white mt-8 leading-[60px] max-w-[65%] font-semibold max-xl:text-4xl max-lg:text-5xl max-lg:leading-[60px] max-lg:max-w-[100%] max-sm:text-3xl'>
              <h1>Conoce más nuestro gimnasio</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center w-full flex-1'>
        <div className='max-w-3xl w-full'>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                src={active}
                alt=""
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    onClick={() => setActive(image)}
                    src={image}
                    className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                    alt="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Gallery

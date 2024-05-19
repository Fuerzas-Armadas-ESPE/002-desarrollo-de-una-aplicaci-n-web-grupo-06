import React from 'react'
import { footer } from '../Data/Data'
import logo from "../assets/logo-2.png"

import {BiLogoFacebook} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import {FaGlobe} from "react-icons/fa6"
import {BsInstagram} from "react-icons/bs"

import {TbArrowBigUpFilled} from "react-icons/tb"


const Footer = ({nav}) => {

  const date = new Date().getFullYear()

  return (
    <section className=' text-white min-h-[65vh] w-full bg-footer-pattern bg-center bg-cover bg-no-repeat '>
        {nav ? <a href="#home"><div className='bg-[red] w-14 h-14 fixed right-10 bottom-10 text-2xl flex justify-center items-center rounded-full cursor-pointer hover:bg-black hover:border-2 hover:border-[red]'><TbArrowBigUpFilled /></div></a>  : "none"}
      <div className='max-container  gap-10 padding-hero-y px-20 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:px-10 '>
        

        <div>
          <a href="#home" className=' font-semibold text-5xl flex items-center gap-1 text-white'>
            <img src={logo} alt="logo" width={60} height={60}/>
            ARES GYM
          </a>

          <p className=' mt-5 font text-start'>
          Desata el guerrero interior que llevas dentro en Ares Gym y conquista tus metas fitness con determinación y fuerza.
          </p>

          <div className=' flex items-center gap-6 cursor-pointer text-2xl mt-[35px] text-slate-200 max-sm:text-xl'>
            <BiLogoFacebook className=' hover:-scale-x-110 duration-300'/>
            <BsTwitter className=' hover:-scale-x-110 duration-300'/>
            <FaGlobe className=' hover:-scale-x-110 duration-300' />
            <BsInstagram className=' hover:-scale-x-110 duration-300' />
          </div>
        </div>
      </div>

      <div className=' border-t border-[#3e3e3e] max-container pt-10 pb-16 text-[#c4c4c4] text-center px-4'>
        <p className=' font'>Copyright &copy;{date} All rights reserved | Made by <a className='font text-[red]' href="https://github.com/Fuerzas-Armadas-ESPE/002-desarrollo-de-una-aplicaci-n-web-grupo-06">EPA</a></p>
      </div>
    </section>
  )
}

export default Footer
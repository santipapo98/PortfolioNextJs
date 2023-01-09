import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactMe({}: Props) {

  const {register, handleSubmit} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:saguirreg@unal.edu.co?subject=${formData.subject}&body=Hi, my name is ${formData.name} ${formData.message} (${formData.email})`
  }

  return (
    <div className='h-screen w-full flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase'>contact</h3>
        <div className='flex items-center flex-col space-y-10 justify-center'>
            <h4 className='text-4xl font-semibold text-center'>Get in touch !</h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+57 320 760 6342</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>saguirreg@unal.edu.co</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Manizales - Colombia</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col space-y-2 w-full mx-auto'>
              <div className='flex flex-col md:flex-row'>
                <input {...register('name')} placeholder='Name' className='contactInput mb-2 md:mb-0' type="text" />
                <input {...register('email')} placeholder='Email' className='contactInput md:ml-2' type="email" />
              </div>
              <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
              <textarea {...register('message')} placeholder='Message' className='contactInput resize-none' />
              <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#cd8e07] transition-all'>Submit</button>
            </form>
        </div>
    </div>
  )
}
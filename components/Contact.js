import React from 'react'
import { createClient } from '@supabase/supabase-js'


const Contact = () => {

    const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL || '',
     process.env.NEXT_PUBLIC_SERVICE_KEY || ''  
    )

   const sendData = async (event) => {
     event.preventDefault()
     const formInputs = document.querySelectorAll('input, textarea')
     
     let submision = {};

     formInputs.forEach(element => {
       const { value, name } = element
       if (value) {
         submision[name] = value
         
       }
     })
     const { error } = await supabase.from('entries').insert([submision], {returning: 'minimal'})
     if (error) {
       alert('There was an error please, fill all the form and try again.')
   } else {
     alert('message delivered.')

   }
   }
 
  return (
    <div className='my-5' id="contact">
        <h1 className="text-4xl mx-5 font-bold text-white text-center mt-20 mb-2">Contact</h1>
         <div className='w-3/4 flex flex-col justify-center align-center mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
<form onSubmit={sendData} id="contact-form" className="w-full max-w-lg self-center mt-5">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
        * First Name
      </label>
      <input className="input appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="name" type="text" placeholder="Jane"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
        * Last Name
      </label>
      <input className="input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" name="last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
        * E-mail
      </label>
      <input className="input appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" placeholder='example@mail.com'/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
        * Message
      </label>
      <textarea className="textarea no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message" placeholder='Please, write your message here.'></textarea>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button type="submit" className="shadow bg-white hover:bg-zinc-900 focus:shadow-outline focus:outline-none text-zinc-900 hover:text-slate-50 font-bold py-2 px-4 border-0 rounded-md">
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
  </div>
    
    </div>
  )
}

export default Contact
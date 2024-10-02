import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";

function Form() {
  const{register,handleSubmit,reset}=useForm()

  const submit= (data)=>{
    emailjs
      .send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        {
          user_name: data.user_name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          reset();
          alert("Message is successfuly ");
        },
        (error) => {
          alert("Message is Failed ");
        }
      );
   
  }



  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="mt-12 lg:mt-0"
    >
      <input
        {...register("user_name")}
        required
        className="w-full mb-3 p-3 px-8 bg-zinc-700/25 text-lg rounded-md "
        type="text"
        placeholder="Name"
      />
      <input
        {...register("email")}
        required
        className="w-full mb-3 p-3 px-8 bg-zinc-700/25 text-lg rounded-md "
        type="email"
        placeholder="Email"
      />
      <input
        {...register("subject")}
        required
        className="w-full mb-3 p-3 px-8 bg-zinc-700/25 text-lg rounded-md "
        type="text"
        placeholder="Subject"
      />
      <textarea
        {...register("message")}
        required
        rows={6}
        className="w-full mb-3 p-3 px-8 bg-zinc-700/25 text-lg rounded-md "
        placeholder="Message"
      />
      <input
        className="px-3 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg cursor-pointer"
        type="submit"
        value="Send Message"
      />
    </form>
  );
}

export default Form
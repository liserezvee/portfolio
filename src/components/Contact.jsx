// Required since we're using browser APIs
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const formRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')
    setSuccessMessage('')
    if (!formRef.current) return

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_key,
      )
      .then(
        () => {
          setSuccessMessage('Message sent successfully!')
          setTimeout(() => {
            setSuccessMessage('')
          }, 3000)
          formRef.current?.reset()
        },
        () => {
          setErrorMessage('Failed to send message. Please try again.')
        }
      )
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div id="contact" className="py-16 sm:py-20 bg-white  shadow p-6">
    <div className="text-center px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Get In Touch!</h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-900 mt-4 mb-6">
        Ready to start your next project with me? Send me a quick message and
        I will get back to you<br className="hidden sm:block" /> as soon as possible!
      </p>
    </div>
  
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="w-full sm:w-4/5 md:w-full lg:w-full mx-auto space-y-6 bg-white px-4 sm:px-8 py-8 rounded-xl shadow-xl"
    >
      <div className='text-start'>
        <label className="block text-gray-700 font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="from_name"
          required
          className="w-full mt-2 px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
  
      <div className='text-start'>
        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="from_email"
          required
          className="w-full mt-2 px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
  
      <div className='text-start'>
        <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full mt-2 px-4 py-3 text-black border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>
      </div>
  
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center py-3 px-4 cursor-pointer border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-300 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
  
      {successMessage && (
        <div className="p-3 text-sm text-green-700 bg-green-100 rounded-md">
          {successMessage}
        </div>
      )}
  
      {errorMessage && (
        <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
          {errorMessage}
        </div>
      )}
    </form>
  </div>
  
  )
}

export default ContactForm

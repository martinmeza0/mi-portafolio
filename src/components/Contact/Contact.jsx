import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Modal from '../Modal/Modal'
import './Contact.scss'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const sendMessage = (data, e) => {
    const Data = {
      name: data.Name,
      email: data.Email,
      message: data.Message
    }
    emailjs.send('service_zhua4wc', 'template_spqer1u', Data, 'user_HPt4N1jpTCSwJcAv87Vgq')
      .then(function (response) {
        if (response) {
          setModalIsOpen(true)
          e.target.reset()
        }
      }, function (error) {
        console.log('FAILED...', error)
      })
  }
  return (
    <>
      <section className='contact' id='contact'>
        <div className='contact-container'>
          <h3>Contact Me!</h3>
          <img src='/assets/svg/undraw_Opened.svg' alt='' />
        </div>
        <form onSubmit={handleSubmit(sendMessage)}>

          {errors.Name && <p className='error'>{errors.Name.message}</p>}

          <input
            type='text' placeholder='Name'
            {...register('Name', {
              required: 'Enter his name',
              minLength: {
                value: 4,
                message: 'The name is too short, must be at least 4 characters'
              }
            })}
          />

          {errors.Email && <p className='error'>{errors.Email.message}</p>}

          <input
            type='text' placeholder='Email'
            {...register('Email', {
              required: 'Enter an email',
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'the email address is invalid'
              }
            })}
          />

          {errors.Message && <p className='error'>{errors.Message.message}</p>}

          <textarea
            placeholder='Message'
            {...register('Message', {
              required: 'Enter a message',
              minLength: {
                value: 4,
                message: 'The message is too short, must be at least more than 3 characters'
              }
            })}
          />

          <input
            type='submit' value='Send'
          />
        </form>
      </section>
      <Modal open={modalIsOpen}>
        <div className='overlay overlay_pop-up'>
          <div className='pop-up'>
            <img src='/assets/svg/undraw_Mail_sent_green.svg' alt='' />
            <p> ¡The message was sent successfully! </p>
            <button onClick={() => setModalIsOpen(false)}>OK</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Contact

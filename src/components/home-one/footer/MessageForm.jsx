import ArrowRight3Img from '../../../assets/images/icon/arrow-right3.svg'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Field from '../../common/Field'
import { send } from '@emailjs/browser'

function MessageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [statusMessage, setStatusMessage] = useState('')

  const submitForm = (formData) => {
    const serviceId = 'service_da73ccm' // Replace with your EmailJS service ID
    const templateId = 'template_v8hv2bm' // Replace with your EmailJS template ID
    const publicKey = 'Xv0OEFXt86phVqfX5' // Replace with your EmailJS public key

    send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setStatusMessage('Message sent successfully!')
      })
      .catch((err) => {
        console.error('FAILED...', err)
        setStatusMessage('Failed to send message. Please try again later.')
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="aximo-form-field">
          <Field error={errors.name}>
            <input
              {...register('name', { required: 'Name is required.' })}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </Field>
        </div>
        <div className="aximo-form-field">
          <Field error={errors.email}>
            <input
              {...register('email', { required: 'Email is required.' })}
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
            />
          </Field>
        </div>
        <div className="aximo-form-field">
          <input
            {...register('phone')}
            type="text"
            name="phone"
            id="phone"
            placeholder="+91 1234567891"
          />
        </div>
        <div className="aximo-form-field">
          <textarea
            {...register('message', { required: 'Message is required.' })}
            name="message"
            id="message"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button id="aximo-submit-btn" type="submit">
          Send message{' '}
          <span>
            <img src={ArrowRight3Img} alt="ArrowRight3Img" />
          </span>
        </button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  )
}

export default MessageForm

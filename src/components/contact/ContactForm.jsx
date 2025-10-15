import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { send } from '@emailjs/browser'
import Star2Img from '../../assets/images/v1/star2.png'
import Field from '../common/Field'

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [statusMessage, setStatusMessage] = useState('') // For UI feedback

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
    <div className="section aximo-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-section-title">
              <h2>
                <span className="aximo-title-animation">
                  Contact us for a
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star" />
                  </span>
                </span>
                personal experience
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 order-lg-2">
            {/* Add a placeholder image or content */}
          </div>
          <div className="col-lg-7">
            <div className="aximo-main-form">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="aximo-main-field">
                  <Field label="Your Name" error={errors.name}>
                    <input
                      {...register('name', { required: 'Name is required.' })}
                      type="text"
                      name="name"
                      id="name"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter email address" error={errors.email}>
                    <input
                      {...register('email', { required: 'Email is required.' })}
                      type="email"
                      name="email"
                      id="email"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <Field label="Enter Phone Number" error={errors.phone}>
                    <input
                      {...register('phone', { required: 'Phone is required.' })}
                      type="text"
                      name="phone"
                      id="phone"
                    />
                  </Field>
                </div>
                <div className="aximo-main-field">
                  <label>Write your message here...</label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required.',
                    })}
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button id="aximo-main-btn" type="submit">
                  Send Message
                </button>
              </form>
              {statusMessage && (
                <p className="status-message">{statusMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

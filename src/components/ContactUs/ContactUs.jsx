import React, { useState } from 'react'
import './ContactUs.css'
import { Formik, Form, Field } from 'formik'
import { HiUser, HiCheckCircle } from "react-icons/hi"
import { MdEmail, MdPhone, MdMessage } from "react-icons/md"
import { motion } from 'framer-motion'

const ContactUs = () => {
  const [sent, setSent] = useState(false);
    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'This field is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
      
      function validateUsername(value) {
        let error;
        if (!value) {
          error = 'This field is required.';
        }
        return error;
      }

  return (
    <section className='contact-wrap' id='contact-us'>
      <div className="flex flex-center padding inner-width contact-container">
      <motion.div className='flex flex-column flex-center inner-width'
        initial={{y:'-5rem', opacity:0}}
        whileInView={{y:'0', opacity:1}}
            transition={{
                duration: 2,
                type: 'spring'
            }}
      >
        <div className="flex flex-column flex-center">
            <div className='pink-text'>Contact Us</div>
            <div className="primary-text">Get in Touch</div>
        </div>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
              }}
              onSubmit={values => {
                console.log(values);
                setSent(true);
              }}
            >
              {({ errors, touched }) => (
                <Form className='inner-width flex flex-column'>
                  <div className="flex flex-center inner-width">
                      <div className="field flex flex-column flex-center inner-width">
                          <Field type='text' name="firstName" validate={validateUsername} className='inner-width' placeholder='First name*' />
                          <HiUser/>
                          {errors.firstName && touched.firstName && <div className='error'>{errors.firstName}</div>}
                      </div>
                      <div className="field flex flex-column flex-center inner-width">
                          <Field type='text' name="lastName" validate={validateUsername} className='inner-width' placeholder='Last name*' />
                          <HiUser/>
                          {errors.lastName && touched.lastName && <div className='error'>{errors.lastName}</div>}
                      </div>
                  </div>

                  <div className="flex flex-center inner-width">
                      <div className="field flex flex-column flex-center inner-width">
                          <Field name="email" validate={validateEmail} className='inner-width' placeholder='Email*' />
                          <MdEmail/>
                          {errors.email && touched.email && <div className='error'>{errors.email}</div>}
                      </div>
                      <div className="field flex flex-column flex-center inner-width">
                          <Field type='phone' name="phone" className='inner-width' placeholder='Phone number' />
                          <MdPhone/>
                      </div>
                  </div>

                  <div className="field flex flex-column inner-width">
                      <Field type='text' name="message" className='inner-width' placeholder='Your message' />
                      <MdMessage/>
                  </div>
            
                  <div className="flex flex-row-space-between inner-width">
                    { sent ?  <motion.div className='inner-width flex success'
                      initial={{x:'-5rem', opacity:0}}
                      animate={{x:'0', opacity:1}}
                          transition={{
                              duration: 2,
                              type: 'spring'
                          }}
                    >
                    <div className="blur-card"></div>
                    <div className="flex flex-start">
                      <HiCheckCircle/>
                      <span>Mesage sent successfully</span>
                    </div>
                    </motion.div> : '' }
                    <div className="flex flex-end inner-width"><button type="submit" className='btn secondary'>Send message</button></div>
                  </div>
                </Form>
              )}
            </Formik>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs

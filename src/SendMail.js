import React from 'react'
import firebase from "firebase"
import {db} from "./firebase"
import { closeSendMessage } from "./features/mailSlice.js"
import "./style/SendMail.css"
import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"


function SendMail() {
  const { register, handleSubmit, errors} = useForm()
  const dispatch = useDispatch()
  const onSubmit = (formData) => {
    console.log(formData)
    db.collection("emails").add(
      {
        to:formData.to,
        subject:formData.subject,
        message:formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    dispatch(closeSendMessage())
  }

  
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}> {/* handleSubmit comes from the "react-hook-form" library */}
        <input 
          name="to"
          type="mail"
          placeholder="To"
          ref={register({required: true})}
        />
        {errors.to && <p className="sendMail__error" >To is Required!</p>}
        <input 
          name="subject" 
          type="text" 
          placeholder="Subject" 
          ref={register({required: true})}
        />
        {errors.subject && <p className="sendMail__error" >Subject is Required!</p>}
        <input 
          name="message"
          type="text" 
          placeholder="Message..." 
          className="sendMail__message" 
          ref={register({required: true})}
        />
        <div className="sendMail__options">
         <Button 
          className="sendMail__send" 
          variant="contained" 
          color="primary" 
          type="submit"
        >
          Send
        </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail

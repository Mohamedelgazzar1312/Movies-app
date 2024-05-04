import React, { useContext, useState } from 'react'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import {LanguageContext} from '../context/language'

export default function Language(){

const {language,setLanguage}=useContext(LanguageContext)
const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language">Select Language:</label>
      
    </div>
  );
}
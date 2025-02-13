"use server"

import axios from "axios";
import Link from "next/link";




export async function formServer(prevState, queryData) {


    const fullname = queryData.get('fullname');
    const email = queryData.get('email');
    const phone = queryData.get('phone');

    if (!fullname && !email && !phone) {
      return;
    } else {
        
        const poster =  axios.post("http://127.0.0.1:8080/api/user",{

            email: await email,
            fullname: await fullname,
            phone: await phone
        })
       return `successfuly submitted, get back to you ${await fullname}`
    }
  }
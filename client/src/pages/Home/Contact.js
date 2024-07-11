import React from 'react'
import SectionTitles from '../../components/SectionTitles'

function Contact() {
 const user = {
    name: "Ushan Pramod Dissanayaka",
    age:"25",
    gender: "male",
    email: "ushandissanayaka@gmail.com",
    mobile:"+94 704 548 662",
    country : "Srilanka"

 }


  return (
    <div>
      <SectionTitles title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">

        <p className="text-tertiary text-sm">{'{'}</p>
        {
            Object.keys(user).map((key) => (
                <p className="ml-5 ">
                  <span className="text-tertiary">{key} : </span>  <span className="text-tertiary">{user[key]}</span>
                </p>
            ))
        }
        <p className="text-tertiary ">{"}"}</p>

        </div>
       <div className="h-[400px] ">
       <lottie-player 
       src="https://lottie.host/95fa08ed-8972-43c3-99e0-5acaa2a187fd/FpQRyuTVEH.json"
        background="##FFFFFF" 
        speed="10"  
        loop controls autoplay direction="1" 
        mode="normal">

        </lottie-player>
        </div>     
       

      </div>
    </div>
  )
}

export default Contact

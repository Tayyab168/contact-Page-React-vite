import React, { useState } from "react";
// import service from "./assets/images/service.svg"
import service from './assets/images/service.svg'
function Conact() {


let[name,setName]=useState("")
let[email,setEmail]=useState("")
let[text,setText]=useState("")



const viachat= ()=>{
    console.log("viachat");
}
const viacall= ()=>{
    console.log("viacall");
}
const submitform=(event)=>{
 event.preventDefault();
 setName (event.target[0].value);
 setEmail(event.target[1].value);
 setText( event.target[2].value);
 alert("thnk you for submiting")
//  alert("thank you for submission ")
// console.log(name)
}

  return (
    <>
      <div className="flex flex-wrap w-[75%] justify-  m-auto mt-16 ">
        <div className="flex flex-wrap  justify-start">
          <h1 className="font-bold text-[15px] sm:text-[35px]">Contact Us</h1>
        </div>
        <p className="leading-7 font-bold text-[15px]">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className="flex flex-wrap justify-around mt-10 items-center sm:w-[75%] m-auto">
        <div className="flex flex-wrap flex-col ">


          <div className="flex flex-wrap  gap-8">
            <button onClick={viachat} className="border-black border-solid border-2 p-2 bg-black rounded-md text-white"> <i class="fa-solid fa-comment-sms px-3" ></i> Via Support Chat</button>
            <button className="border-black border-solid border-2 px-10 rounded-md py-2 text-center justify-center bg-black text-white" onClick={viacall} > <i class="fa-solid fa-phone px-3"></i> Via Call</button>
          </div>
            <div>
                <button className="border-black border-solid border-2 rounded-md px-10 py-2 text-center justify-center  flex flex-wrap items-center w-[100%] mt-5 font-bold text-[15px]"> <i class="fa-solid fa-envelope mx-4"></i>VIA EMAIL FORM</button>
            </div>
            <form action="" onSubmit={submitform}>
                <div className="flex flex-wrap flex-col mt-2 formcontrol">
                <label className="font-bold text-[15px]" htmlFor="">Name</label>
                <input type="text" name="" className="border-black border-solid border-2 h-10 text-left rounded-sm outline-none" />
                </div>
                <div className="flex flex-wrap flex-col mt-6 formcontrol">
                <label className="font-bold text-[15px]" htmlFor="">E-MAIL</label>
                <input type="text" name="" className="border-black border-solid border-2 h-10 text-left rounded-sm outline-none" />
                </div>
                <div className="flex flex-wrap flex-col mt-6 formcontrol">
                <label className="font-bold text-[15px]" htmlFor="">Text</label>
                <textarea name="" id=""  className="border-black border-solid border-2 h-10 text-left rounded-sm outline-none h-24 p-1"> Write Your Message At Here</textarea>
                </div>
                <div className="flex flex-wrap justify-end mt-6">
                <button type="submit" class=" border-2 border-black border-solid px-5 py-2 rounded-md font-bold text-[20px] bg-black text-white w-[50%] ">Submit</button>
                </div>
                
            </form>
            <div>
                {name }
                
            </div>
            <div>
            {email}
                
            </div>
            <div>
            {text}
            </div>
        </div>
        <div> <img src={service} alt="" /></div>
      </div>
    </>
  );
}

export default Conact;

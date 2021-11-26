import React from 'react'
import {AiFillStar } from "react-icons/ai";
import { useState,useEffect } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";



const Slice = () => {
    const[imgA,setImgA]=useState('silice_img1')
    const list = ['silice_img1','silice_img2']
    const[all,setAll]=useState(0)
    const index = all
    const All = ()=>{
        setAll(all +1)
        if(all === 1){
            setAll(0)
        }
        setImgA(list[index])
    }
    useEffect(() => {
        const id = setInterval(() => {
          All()
        }, 5000);
        return () => clearInterval(id);
      }, [all]);


    return (
        <div id='silice'>
        <div id={imgA} >
            <h1 className ='silice_text1'>Enjoy <span className='silice_text-1'>Your</span> Holiday</h1>
            <h1 className ='silice_text2'>With Our <span className='silice_text-1'>Agency</span></h1>
            <div className='silice_text3'>
                <li> <AiFillStar /> SPECTACULAR THINGS TO DO </li>
                <li className='silice_text-item'>BEST PLACES TO SEE</li>
            </div>
            <li className='silice_text4'> <AiFillStar /> LOCALS GUIDE AVAILABLE</li>
            <div className='silice_text5'>
                <li > <AiFillStar /> ALL INCLUSIVE FAMYLY HOLIDAY</li>
                <li className='silice_text-item'>FOR ALL SEASON</li>
            </div>
            <p className ='silice_text7'>$25</p>
            <div className='silice_text6'>
            
                <li className ='silice_text-item2'>BUY THE TUOR </li>
            
            </div>
            <h2 className='silice_icons1' onClick = {All}><AiOutlineLeft /></h2>
            <h2 className='silice_icons2' onClick = {All}><AiOutlineRight /></h2>
        </div>
        </div>
    )
}

export default Slice

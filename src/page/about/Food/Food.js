import React from 'react'
import "./food.scss"
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { CgBowl } from "react-icons/cg";
import { CiPizza } from "react-icons/ci";
import { LuPizza } from "react-icons/lu";

const Food = () => {
  return (
   <>
   
   <div className='food'>
          <h1>Why People Choose Us</h1>
          <div className='content-food'>
            <div className='content'>
             <IoFastFoodOutline className='fruct'/>
             <div className='ur-text'>
                <h1>Friendli Team</h1>
                <p> Morbi tristique senectus <br></br>et netus et malesuada <br/>fames ac turpis.</p>
                </div>
            </div>
            <div className='content'>
            <MdOutlineEmojiFoodBeverage className='fruct' />
            <div className='ur-text'>
                <h1>Best Servisec</h1>
                <p> Morbi tristique senectus <br></br>et netus et malesuada <br/>fames ac turpis.</p>
            </div>
            </div>
            <div className='content'>
            <PiBowlFood  className='fruct' />
            <div className='ur-text'>
                <h1>Fresh Food</h1>
                <p> Morbi tristique senectus <br></br>et netus et malesuada <br/>fames ac turpis.</p>
            </div>
            </div>
            <div className='content'>
            <CgBowl className='fruct' />
            <div className='ur-text'>
                <h1>Friendli Team</h1>
                <p> Morbi tristique senectus <br></br>et netus et malesuada <br/>fames ac turpis.</p>
            </div>
            </div>
            <div className='content'>
            <CiPizza className='fruct' />
            <div className='ur-text'>
                <h1>Friendli Team</h1>
                <p> Morbi tristique senectus <br></br>et netus et malesuada <br/>fames ac turpis.</p>
            </div>
            </div>
            <div className='content'>
            <LuPizza className='fruct' />
            <div className='ur-text'>
                <h1>Friendli Team</h1>
                <p> Morbi tristique senectus <br></br>et netus et malesuada <br/>fames ac turpis.</p>
            </div>
            </div>
          </div>
   </div>
   </>
 
  )
}

export default Food
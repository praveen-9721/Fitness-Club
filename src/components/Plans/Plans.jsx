import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import RightArrow from '../../assets/rightArrow.png'
import {BsCurrencyRupee} from 'react-icons/bs'
import './Plans.css'
const Plans = () => {
  return (
    <div className="plans-container" id='plans'>
        <div className="blur plans-blur1"></div>
        <div className="blur plans-blur2"></div>
        <div className="programs-header" style={{gap:'1rem'}}>
            <span className='stroke-text'>READY TO START </span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>

        {/* plans card */}
        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span> <BsCurrencyRupee style={{height:'5rem'}}/> {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span className='see-more'>See more benefits <img src={RightArrow} alt="" /></span>
                    </div>
                    <button className="btn btn2">Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans
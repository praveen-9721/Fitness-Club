import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from "../../assets/hero_img.png";
import hero_image_back from "../../assets/hero_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {type: 'spring', duration : 3}
  const mobile=window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='home'>

        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
{/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left:mobile? "200px": '238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            {/* hero heading  */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>build </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>body ideal</span>
                </div>
                <div>
                    <span>
                        In here we will help you to shape and build your ideal 
                        body and live up your life to fullest
                    </span>
                </div>
            </div>

            {/* figures */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={25} start={5} delay='1' preFix="+"/>
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={999} start={900} delay='4' preFix="+"/>
                    </span>
                    <span>member joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={5} delay='1.5' preFix="+"/>
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/* hero button */}
            <div className="hero-buttons">
                <bottons className="btn">Get Started</bottons>
                <bottons className="btn">Learn More</bottons>
            </div>
        </div>
        <div className="right-h">
            <button className='btn btn1'>Join Now</button>

            <motion.div 
            initial= {{right: "-1rem"}}
            whileInView={{right:"4rem"}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            {/* hero image */}
            <img src={hero_image} alt="" className="hero-image" />
            <motion.img 
            initial={{right:"17rem"}}
            whileInView={{right:"26rem"}}
            transition={transition}
            src={hero_image_back} alt="" className="hero-image-back" />
            {/*  */}
            <motion.div 
            initial={{right:"45rem"}}
            whileInView={{right:"35rem"}}
            transition={transition}
            className="calories"
            >
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero
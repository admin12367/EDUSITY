import React, { useRef, useState } from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'
import video_play from '../../assets/graduation.video.mp4'

const About = () => {

  const [show, setShow] = useState(false)

  const touch = () => {
    show? setShow(false) : setShow(true)
  }

  const player = useRef()

  const close = (e) => {
    if (e.target === player.current) {
        setShow(false)
    }
  }

  return (
    <div className='about'>
      <div className={show? 'videoplayer' : 'hide'} ref={player} onClick={close}>
       <video src={video_play} autoPlay loop muted></video>
    </div>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_img} alt="" className='play-img' onClick={touch}/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab dicta perferendis quas accusantium, corrupti dolore reiciendis nesciunt in iusto sapiente repellat nobis nostrum consequatur cupiditate delectus saepe temporibus illum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi debitis consequuntur dolorem eum veniam blanditiis dolorum possimus, voluptate quae, quaerat in rem exercitationem officiis harum voluptas sint culpa non?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repellat omnis voluptas fugiat minus harum recusandae, similique ipsam earum cum exercitationem ea architecto libero eum error at cumque consequuntur tempora?</p>
      </div>
    </div>
    
  )
}

export default About

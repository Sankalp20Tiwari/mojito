import React from 'react'
import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Contact = () => {

    useGSAP(()=>{

        const titleSplit = SplitText.create('#contact h2',{
            type: 'words'
        })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut'       
        })

        timeline.from(titleSplit.words, {
            opacity:0,
            duration:1,
            yPercent:100,
            ease: 'expo.out',
            stagger:0.02
        })
        .from('#contact h3, #contact p', {
            opacity:0,
            duration:1,
            yPercent:100,
            ease: 'power1.inOut',
            stagger:0.04
        })
        .to('#f-right-leaf', {
            y:-50,
            duration:1,
            ease: 'power1.inOut'
        })
        .to('#f-left-leaf', {
            y:-50,
            duration:1,
            ease: 'power1.inOut'
        },'<')

    })

  return (
    <footer id="contact">
        <img 
            src="/images/footer-right-leaf.png" 
            alt="f-r-leaf" 
            id='f-right-leaf'
        />
        <img 
            src="/images/footer-left-leaf.png" 
            alt="f-l-leaf" 
            id='f-left-leaf'
        />

        <div className="content">
            <h2>
                Where to find us
            </h2>

            <div>
                <h3>Visit Our Bar</h3>
                <p>4567 Las Vegas Blvd, Las Vegas, NV 89101</p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>1-800-123-4567</p>
                <p>awesomebar.com</p>
            </div>

            <div>
                <h3>Open Every Day</h3>
                {
                    openingHours.map((time, index) => (
                        <p key={index}>
                            {time.day}: {time.time}
                        </p>

                    ))
                }
            </div>

            <div>
                <h3>Socials</h3>

                <div className='flex-center gap-5'>
                    {
                        socials.map((social, index) => (
                            <a 
                                href={social.url} 
                                key={index}
                                target='_blank'
                                rel="noreferrer noopener"
                                aria-label={social.name}
                            >
                                <img 
                                    src={social.icon} 
                                    alt={social.name} 
                                    className='w-10 h-10 object-contain'
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact

import { useGSAP } from '@gsap/react'
import { navLinks } from '../constants'
import gsap from 'gsap'

const Navbar = () => {

    useGSAP(()=>{
        const navScroll = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: 'bottom top',
            }
        })

        navScroll.fromTo(
            'nav',{
                backgroundColor: 'transparent',
            },
        {
            backgroundColor:"#00000050",
            backdropFilter: 'blur(20px)',
            duration:1,
            ease: 'power1.inOut'
        })
    })

  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img 
                    src="/images/logo.png" 
                    alt="logo"
                    className='w-10 h-10 object-contain' 
                />
                <p>
                    AwesomeBar
                </p>
            </a>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

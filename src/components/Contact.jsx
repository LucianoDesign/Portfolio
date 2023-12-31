import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from '../styles'
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { github, linkedin } from '../assets';


const Contact = () => {

  const {
    VITE_EMAILJS_USERID,
    VITE_EMAILJS_SERVICEID,
    VITE_EMAILJS_TEMPLATEID,
    VITE_EMAIL_TO,
  } = import.meta.env;

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.send(VITE_EMAILJS_SERVICEID,
      VITE_EMAILJS_TEMPLATEID,
     {
      from_name: form.name,
      to_name: 'Luciano',
      from_email: form.email,
      to_email: VITE_EMAIL_TO,
      message: form.message,
     },
     VITE_EMAILJS_USERID
     )
     .then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name:'',
        email:'',
        message:'',
      })
     }, (error)=>{
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
     })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubColored}>Get in touch</p>
        <h3 className={styles.sectionHeadColored}>Contact.</h3>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open("https://github.com/LucianoDesign/", "_blank")}
              className="black-gradient mr-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open("https://www.linkedin.com/in/luciano-design", "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={linkedin}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
         >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Let's talk..."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}

          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');
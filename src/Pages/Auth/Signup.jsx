import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import Slider from "react-slick";
//import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth,onRegister } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Login.css';

const images =[
        {
            id:1,
            img:'./photos/login-img1.svg',
            text:'Love Shopping?',
            sub:'We have amazing products just for you 😉'
        },
        {
            id:2,
            img:'./photos/login-img4.svg',
            text:'Love Shopping?',
            sub:'We have amazing products just for you 😉'
        },
        {
            id:3,
            img:'./photos/login-img3.svg',
            text:'Love Shopping?',
            sub:'We have amazing products just for you 😉'
        },
    ]


function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [file, setFile] = useState('');
    const [user, loading, error] = useAuthState(auth);
  
    
    const onSubmit = async (e) => {
        e.preventDefault()
        if (!name) alert("Please enter name");
    onRegister(name, email, password,confirmPassword);
        }


/*useEffect(() => {
if (loading) return;
            
if (user) navigate('/home',{replace:true});
          
}, [user, loading]);*/

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0,
       
      };
  return (
    <div className='login'>
        
        <div className='slider__container'>
        <Slider {...settings}>
            {images.map(item => {
                return(
               <div key={item.id}>    
        <figure className='animated'>
        <img src={item.img}/>
    </figure>
    <h3>{item.text}</h3>
    <p>{item.sub}</p>
    </div> 
    
                
                )
            })}
            </Slider>
    
</div>

<div className='login__text'>
    <h1 className='text-center'>Hi, Welcome! </h1>
    <form className='login__form' onSubmit={onSubmit}>
        <div className='main__input'>
        <input type='email'
        value={name} 
        placeholder='Enter your name'
        onChange={(e) => setName(e.target.value)}
        />
        <input type='email'
        value={email} 
        placeholder='Enter your email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type='password' 
        value={password}
        placeholder='Enter your password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <input type='password' 
        value={confirmPassword}
        placeholder='Confirm your password'
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
        </div>
        <div className='img__file'>
        <input type='file' 
        value={file}
        onChange={(e) => setFile(e.target.files[0])}
        />
        </div>
        
        <button > Create Account</button>
        
    </form>
    <h5>Already have an account?
        <span onClick={() => navigate('/login')}>Sign up for free</span>
    </h5>
</div>

    </div>
  )
}

export default Signup
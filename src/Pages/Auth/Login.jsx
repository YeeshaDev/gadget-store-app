import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
//import { signInWithGoogle } from '../../firebase';
//import {useAuthState} from 'react-firebase-hooks/auth'
import { auth,provider } from '../../Utils/firebase';
import './Login.css';

function Login() {
    const navigate = useNavigate();

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
            text:'Easy Delivery',
            sub:'Get your packages without any hassle 📦'
        },
        {
            id:3,
            img:'./photos/login-img3.svg',
            text:'Love Shopping?',
            sub:'Order your favourite items with just a click!'
        },
    ]

    const [email, setEmail] = useState('test01@gmail.com');
    const [password, setPassword] = useState('Agunbiade01');
    //const [user, loading, error] = useAuthState(auth);

    
    const onLogin =async (e) => {
        e.preventDefault();
      
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
      }

      const signIn = () => {
        //auth.signInWithPopup(provider).catch((error) => alert(error.message));
      signInWithPopup(auth,provider)
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      //
      //navigate('/')
      console.log(user)
      
    console.log(token)
      
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = provider.credentialFromError(error);
      // ...
      
      });
      };
      
      /*useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/home");
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
    <h3 className='text-center'>{item.text}</h3>
    <p>{item.sub}</p>
    </div> 
    
                
                )
            })}
            </Slider>
    
</div>

<div className='login__text'>
    <h1 >Hi, Welcome Back</h1>
    <form className='login__form' onSubmit={(e) => e.preventDefault() }>
        <div className='main__input'>
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
        </div>
        <div className='checkbox__field'>
        <label htmlFor='checkbox'>
        <input type='checkbox'/>
        Remember Me
        </label>
        <span>Forgot Password</span>
        </div>
        <button onClick={onLogin}> Sign In</button>
        <button className='google__btn' onClick={signIn}>
            <img src='./photos/google.png' className='google-logo'
            alt='google logo'/>
            Sign In with Google</button>
    </form>
    
    <h5 className='last--text'>Don't have an account?
        <span onClick={() => navigate('/signup')}>Sign up for free</span>
    </h5>
</div>

    </div>
  )
}

export default Login
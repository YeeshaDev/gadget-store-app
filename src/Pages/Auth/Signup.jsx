import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import Slider from "react-slick";
import {collection,addDoc} from 'firebase/firestore/lite'
import {updateProfile,createUserWithEmailAndPassword} from 'firebase/auth'
import {ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage'
import { auth,storage,db } from '../../Utils/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from 'react-toastify';
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
    const [file, setFile] = useState(null);
    const [user, loading, error] = useAuthState(auth);
  
    
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!name) alert("Please enter name");
           const userCredential = await createUserWithEmailAndPassword(auth, email, password,confirmPassword)
           const user = userCredential.user;
        console.log(user);
        //navigate("/login")
            const storageRef = ref(storage,`images/${Date.now() + name}`)
            const uploadTask = uploadBytesResumable(storageRef,file);

            uploadTask.on((error) =>{
           toast.error(error.message)
            },() => {
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=> {
                 await updateProfile(user,{
                    displayName:name,
                    photoURL:downloadURL
                 }); 

                 //This stores the user data on the firestore database
                  await addDoc(collection(db,'users',user.uid),{
                    uid:user.uid,
                    displayName:name,
                    email,
                    photoURL:downloadURL,
                  }) 
                });
            })
            toast.success('Account created successfully')
            navigate('/login')
        }
        catch (error){
           console.log(error)
        }
        
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
        <input type='text'
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
        onChange={(e) => setFile(e.target.files[0])}
        />
        </div>
        
        <button style={{marginTop:'2rem'}} > Create Account</button>
        
    </form>
    <h5 className='last--text'>Already have an account?
        <span onClick={() => navigate('/login')}>Sign In</span>
    </h5>
</div>

    </div>
  )
}

export default Signup
import React,{useState,useEffect} from 'react'
import { auth } from './firebase';
import {onAuthStateChanged} from 'firebase/auth'
function useAuth() {
const[current,setCurrent] = useState([]);

useEffect(() => {
    onAuthStateChanged(auth,(user) => {
        if(user){
            setCurrent(user)
        }else {
            setCurrent(null)
        }
    })
})
  return {
    current,
  }
}

export default useAuth
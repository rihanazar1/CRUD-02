import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {

  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [bio, setBio] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()

    axios.post(`http://127.0.0.1:4000/user/create`, {image, name, email, age, bio})

    .then((res)=>{
      console.log(res.data)
    })

    .catch((err)=>{
      console.log(err)
    })

    setImage("")
    setName("")
    setEmail("")
    setAge("")
    setBio("")

  }


  return (
    <>
      <div className='h-full flex justify-center items-center'>
        <div className='h-[21rem] w-[18rem] bg-gray-300 rounded-md '>
        
          <form onSubmit={(e)=>{
            onSubmitHandler(e)
          }}
          className='flex flex-col items-center gap-y-4 mt-3' >
              <h2>Add User</h2>
            <div className='w-full flex justify-center'>
              <input
               className='p-1 w-[80%] rounded'
               type="text"
               value={image}
               onChange={(ev)=>{
                setImage(ev.target.value)
                console.log(ev.target.value)
               }}
               placeholder='enter image url' />
            </div>

            <div className='w-full flex justify-center'>
              <input
               className='p-1 w-[80%] rounded'
               type="text"
               value={name}
               onChange={(ev)=>{
                setName(ev.target.value)
                console.log(ev.target.value)
               }}
               placeholder='enter your name' />
            </div>

            <div className='w-full flex justify-center'>
              <input
               className='p-1 w-[80%] rounded'
               type="text"
               value={email}
               onChange={(ev)=>{
                setEmail(ev.target.value)
                console.log(ev.target.value)
               }}
               placeholder='enter your email' />
            </div>

            <div className='w-full flex justify-center'>
              <input
               className='p-1 w-[80%] rounded'
               type="number"
               value={age}
               onChange={(ev)=>{
                setAge(ev.target.value)
                console.log(ev.target.value)
               }}
               placeholder='enter your age' />
            </div>

            <div className='w-full flex justify-center'>
              <input
               className='p-1 w-[80%] rounded'
               type="text"
               value={bio}
               onChange={(ev)=>{
                setBio(ev.target.value)
                console.log(ev.target.value)
               }}
               placeholder='enter your bio' />
            </div>
            <button className='bg-blue-600 rounded-md px-2 py-1 text-white font-semibold'>Submit!</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateUser
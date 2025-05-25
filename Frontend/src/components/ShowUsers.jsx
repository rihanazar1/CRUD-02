import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const ShowUsers = () => {

  const [userData, setUserData] = useState([])

  const fetchUsers = async () => {
    await axios.get(`http://127.0.0.1:4000/user/showUsers`)

    .then((res) => {
      setUserData(res.data.showUsers)
      console.log(res)
    })

    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:4000/user/delete/${id}`)
      setUserData(userData.filter((user) => user._id !== id))
    } catch (error) {
      console.log("delete failed :" + error)
    }
  }
  

  return (
    <div className='h-full flex justify-center items-center'>
      {
        userData.map((userData, index) => {
          return <div key={index} className='h-[20rem] w-[14rem] bg-gray-300 rounded-lg border border-gray-600 ml-5'>

            <div className='flex justify-center mt-8'>
              <img className='h-[6rem] w-[6rem] rounded-full' src={userData.image} alt="image" />
            </div>

            <h2 className='text-center mt-3'>{userData.name}</h2>

            <div className='ml-3 mt-3'>
              <h2>Email : {userData.email}</h2>          
              <h2>Age : {userData.age}</h2>          
              <h2>Bio : {userData.bio}</h2>          
            </div>

            <div className='flex justify-around mt-4'>
              <button className='bg-green-800 rounded-md px-3 py-2 text-white font-semibold'>Edit</button>
              <button onClick={() => deleteHandler(userData._id)} className='bg-red-600 rounded-md px-3 py-2 text-white font-semibold'>Delete</button>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default ShowUsers
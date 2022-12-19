import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DevPage = () => {

    const [getData , setData] = useState([])

    useEffect(() => { axios.get(`http://localhost:5000/api/inputValue`)
    .then(res => {
      console.log(res?.data?.data)
      setData(res?.data?.data)
    })}, [getData])

   
  


    return (
        <>
       
        {getData.map(data => (

           <div className='border border-secondary m-2 rounded w-90  bg-secondary mt-5'> <h1 className='text-white' >name: {data?.Name} email:  {data?.email} Phone: {data?.Phone}</h1></div>
            // <h1 className='text-danger mt-4' >Email: {data?.email}</h1>,
            // <h1 className='text-danger mt-4' >phone: {data?.Phone}</h1>
        ))}
        </>
    );
};

export default DevPage;
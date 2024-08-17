// import React, { useState } from 'react'

// export default function Mulipledata()
// {

//     const[data,setdata] = useState([]);
 
//     const changedata = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         const checked = e.target.checked;
    
//         if (e.target.type === 'checkbox') {
//             if (checked) {
//                  setdata((oldData) => ({ ...oldData, [name]: Array.isArray(oldData[name]) ? [...oldData[name], value] : [value] }));
//             } else {
//                  setdata((oldData) => ({ ...oldData, [name]: Array.isArray(oldData[name]) ? oldData[name].filter(item => item !== value) : [] }));
//             }
//         } 
//         else {
//              setdata((oldData) => ({ ...oldData, [name]: value }));
//         }
//     };
    
    

//     return(
//         <>
//         <h1> Multiple data hadle</h1>

//         Your name is {data.name} <br />
//         Your Phone no is {data.phone}  <br />
//         Your Gender is {data.gender} <br />
//         Your lanng is {data.lang} <br />
//         Your City is {data.city} <br />
        
        
//         <br />

//         <form>

//         <label> Name : </label>
//             <input onChange={changedata}   type="text" name='name' placeholder="enter your namme"/> 
//             <br /> <br />

//             <label>Phone : </label>
//             <input onChange={changedata}  type="number" name='phone' placeholder="Enter your Number"/>
//             <br /> <br />

//             <label>Gender : </label>
//             <input  onChange={changedata} checked={data.gender == "male"}  type="radio" name='gender' value='male'/> Male
//             <input onChange={changedata}  checked={data.gender == 'female'} type="radio" name='gender' value='female'/> FeMale


//             <br /> <br />

//             <label>Language Kow : </label>
//             <input  onChange={changedata} type="checkbox" name='lang' value='Eglish'/> English
//             <input  onChange={changedata} type="checkbox" name='lang' value='Tamil'/> Tamil


//             <br /> <br />

//             <label>Select City </label>
//             <select onChange={changedata} name='city'> 

//                 <option> Select City</option>
//                 <option value='pondy'> Pondy</option>

//                 <option value='chennai'> Chenai</option>

//             </select>

//             <br /> <br />

//             <input  type='submit' value='Register'/>
//         </form>
//         </>
//     )
// }


import React, { useState } from 'react';

export default function Mulipledata() 
{
    const [data, setData] = useState({
        name: '',
        phone: '',
        gender: '',
        lang: [],
        city: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const checked = e.target.checked;

        if (e.target.type === 'checkbox') {
            if (checked) {
                setData((oldData) => ({ ...oldData, [name]: [...oldData[name], value] }));
            } else {
                setData((oldData) => ({ ...oldData, [name]: oldData[name].filter(item => item !== value) }));
            }
        } else {
            setData((oldData) => ({ ...oldData, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         
        setData({
            name: '',
            phone: '',
            gender: '', 
            lang: [],
            city: ''
        });

        alert("your data has been stored to DB")
    };

    return (
        <>
            <h1>Multiple data handle</h1>

            Your name is {data.name} <br />
            Your Phone no is {data.phone} <br />
            Your City is {data.city} <br />
            Your language is {data.lang.join(', ')} <br />
            Your Gender is {data.gender}
            <br />
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input onChange={handleChange} type="text" name='name' value={data.name} placeholder="enter your name" />
                <br /> <br />

                <label>Phone :</label>
                <input onChange={handleChange} type="number" name='phone' value={data.phone} placeholder="Enter your Number" />
                <br /> <br />

                <label>Gender :</label>
                <input onChange={handleChange} checked={data.gender === "male"} type="radio" name='gender' value='male' /> Male
                <input onChange={handleChange} checked={data.gender === 'female'} type="radio" name='gender' value='female' /> Female
                <input onChange={handleChange} checked={data.gender === 'others'} type="radio" name='gender' value='others' /> Others
                <br /> <br />

                <label>Language Known :</label>
                <input onChange={handleChange} type="checkbox" name='lang' value='English' checked={data.lang.includes('English')} /> English
                <input onChange={handleChange} type="checkbox" name='lang' value='Tamil' checked={data.lang.includes('Tamil')} /> Tamil
                <input onChange={handleChange} type="checkbox" name='lang' value='Arabic' checked={data.lang.includes('Arabic')} /> Arabic
                <input onChange={handleChange} type="checkbox" name='lang' value='Hindi' checked={data.lang.includes('Hindi')} /> Hindi
                <br /> <br />

                <label>Select City :</label>
                <select onChange={handleChange} name='city' value={data.city}>
                    <option value=''>Select City</option>
                    <option value='pondicherry'>pondicherry</option>
                    <option value='chennai'>Chennai</option>
                    <option value='Bangular'>Bangular</option>
                    <option value='Delhi'>Delhi</option>
                </select>
                <br /> <br />

                <input type='submit' value='Register' />
            </form>
        </>
    )
}
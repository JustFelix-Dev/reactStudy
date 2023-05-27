import { useState } from "react";

const Create = () => {
    const [ name,setName ] = useState("")
    const [ bio,setBio ] = useState("")
    const [ country,setCountry ] = useState("")
    const [isPending,setIsPending] = useState(false)

const handleSubmit = (e)=>{
   e.preventDefault()
   setIsPending(true)
   const newBlogs = { name, bio, country }
   fetch('http://localhost:8000/details',{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newBlogs)
   }).then(()=>{
    console.log('New blog added');
    setIsPending(false)
   })
   
}

    return ( 
        <>
        <h2>New Blog!</h2>
        <form  onSubmit={handleSubmit}>
            <label>Blog name:</label> <br />
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br />
           <p>{name}</p>
            <label>Blog bio:</label> <br />
            <textarea value={bio}  onChange={(e)=>setBio(e.target.value)}></textarea> <br />
           <p>{bio}</p> 
            <label>country:</label> <br />
            <select name="" id="" value={country} onChange={(e)=>setCountry(e.target.value)}>
                <option value="Mario">Mario</option>
                <option value="Felix">Felix</option>
                <option value="Raymond">Raymond</option>
            </select><br />
           <p>{country}</p> 
         { !isPending &&  <button className="btn btn-outline-danger">Add Blog</button>}
         { isPending &&  <button className="btn btn-success">Adding Blog....</button>}

        </form>
        
        </>
     );
}
 
export default Create;
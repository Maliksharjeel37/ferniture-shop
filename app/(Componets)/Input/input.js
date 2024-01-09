import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div className="flex , flex-warp   bg-transparent text-black my-4  ">
      <nav className="justify-start flex">
       <div className='flex-2'>
       <ul className="flex , flex-werp justify-center  my-2">
       <h1 className=" fout-bold font-bold text-3xl  p-5 ml-8 text-black text-orange-600 ">SaniMKT</h1>

<li className="text-lg text-black hover:text-black p-5 mx-12">
  <Link style={{color:'orange'}} href="/">HOME</Link>
</li>
<li className="mx-8 text-lg text-black p-5 hover:text-lg ">
  <Link href={"/SERVICES"}>New Arrival</Link>
</li>
<li className="mx-8 text-lg text-black hover:text-stone-950 p-5">
  <Link href={"/ABOUT"}>Features</Link>
</li>

<li className="mx-8 text-lg text-black hover:text-stone-950 p-5">
  <Link href={"/BLOG"}>Blog</Link>
</li>
<li className="mx-8 text-lg text-black hover:text-stone-950 p-5">
  <Link href={"/CONTENT"}>Contact</Link>
</li>
</ul>
       </div>
       <div className='flex-1'>

       <form className='mx-6 text-lg text-black hover:text-stone-950 p-5 ml-5 '>
<input style={{padding:'5px', width:"%",display:'inline-block',border:'3px solid #ccc',borderRadius:'4px',boxSizing:'border-box'}}  type='text' placeholder='Search' ></input>
<button style={{marginLeft:'10px',border:'5px sold',borderRadius:'6px',backgroundColor:'orange', padding:'7px'}}>Search</button>
</form>
       </div>
       
      </nav>
    </div>
  )
}



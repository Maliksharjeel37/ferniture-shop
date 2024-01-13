import Image from "next/image"

export default function Card(prop) {
  return (
    <div className=" text-center border-4 ml-5 mr-5 bg-zinc-50 border-solid border-zinc-100 hover:bg-gray-300 hover:scale-90">
      <div className=' ml-10'>
      <Image
    src={prop.src}
    alt="Header"
    width={270}
    height={270}
/>
      </div>
      <div className=' flex text ml-10'>
        <h1 className=' text-black hover:text-orange-500 font-bold p-4 text-2xl'>
        {prop.text}
        </h1>
        <h6 className=' font-bold text-2xl  p-4'>
{prop.price}</h6>
<div className=' p-4'><button style={{padding:'10px', marginLeft:'10px',border:'3px sold',borderRadius:'4px',backgroundColor:'green',color:'white',paddingRight:'30px',paddingLeft:'30px'}}>Sale</button>
</div>
      </div>
    </div>
  )
}

import Image from "next/image"

export default function Card(prop) {
  return (
    <div className=" text-center border-4 bg-gray-300 hover:bg-zinc-600">
      <div className=' ml-10'>
      <Image
    src="/images/slider3.png"
    alt="Header"
    width={530}
    height={530}
/>
      </div>
      <div className=' flex text ml-10'>
        <h1 className=' text-black hover:text-orange-500 font-bold p-6 text-2xl'>
        {prop.text}
        </h1>
        <h6 className=' font-bold text-2xl  p-6'>
{prop.price}</h6>
<div className=' p-6'><button style={{padding:'10px', marginLeft:'10px',border:'3px sold',borderRadius:'4px',backgroundColor:'green',color:'white',paddingRight:'30px',paddingLeft:'30px'}}>Sale</button>
</div>
      </div>
    </div>
  )
}

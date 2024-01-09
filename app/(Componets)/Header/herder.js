import Image from "next/image"
import Input from "./../Input/input"
export default function herder() {
  return (
    <div>
      <div className="input">
<Input/>
      </div>
      <div className="text flex mt-20">
<div className="flex-1 p-28">
<h6 style={{fontSize:'30px' ,padding:'10px' , color:'gray'}}>Great Design Collection</h6>
<h1 style={{fontSize:'40px' , padding:'10px' , color:'black'}}>Cloth Covered Accent Chair</h1>
<p style={{fontSize:'20px',padding:'10px', color:'gray'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.</p>
<h6 style={{padding:'10px', fontSize:'30px'}}>$ 299.00</h6>
<button style={{padding:'10px', marginLeft:'10px',border:'3px sold',borderRadius:'4px',backgroundColor:'orange', padding:'20px',color:'white'}}>Add to Card</button>
</div>
<Image
    src="/images/slider3.png"
    alt="Header"
    width={530}
    height={530}
/>
</div>
      </div>
   
  )
}

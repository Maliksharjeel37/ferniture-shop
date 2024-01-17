import Image from "next/image"
import { FaStar } from "react-icons/fa6";

export default function card() {
  return (
    <div>
      <div className="section-1">
        <Image src="/images/f1.png" alt="Features" width={345} height={345}/>
      </div>
      <div className="section-2 flex ">
      {/* icons */}
        <div className="inons-part flex">
        <div className=" p-2">
        <FaStar style={{color:"yellow"}}/>
        </div>
        <div className=" p-2">
        <FaStar style={{color:"yellow"}}/>
        </div>
        <div className=" p-2">
        <FaStar style={{color:"yellow"}}/>
        </div>
        <div className=" p-2">
        <FaStar style={{color:"yellow"}}/>
        </div>
        <div className=" p-2">
        <FaStar style={{color:"gray"}}/>
        </div>
        </div>
        {/* text */}
        <div>
          <h1 className=" text-gray p-1 ml-5">{"(45 Review)"}</h1>
        </div>
      </div>
      <div>
        <button className=" px-28 py-2 text-2xl">Designed Sofa</button>
        <h1 className=" px-36 text-xl">
$160.00</h1>
      </div>
    </div>
  )
}

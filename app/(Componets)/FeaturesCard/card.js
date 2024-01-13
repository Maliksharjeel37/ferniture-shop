import Image from "next/image"
// import { FaStar } from "react-icons/fa";
export default function card() {
  return (
    <div style={{ marginLeft:'620px', marginTop:'40px'}}>
      <div>
        <Image src="/images/f1.png" alt="Features" width={345} height={345}/>
      </div>
      <div>
        <div>
        {/* <FaStar /> */}
        </div>
      </div>
    </div>
  )
}

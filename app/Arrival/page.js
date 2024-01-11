import ArrvalCard from "./../(Componets)/ArrivalCard/Card"
import Header from "./../(Componets)/Header/herder"
export default function page() {
  return (
  <div>
    <Header/>
    <h1 className=" font-bold text-2xl  text-black text-center p-8">New Arrivals</h1>
    <div className=" flex">
    <ArrvalCard  text=" Wooden Chair" price="$65.00" src="/images/arrivals1 (1).png"/>
    <ArrvalCard  text=" Wooden Chair" price="$65.00" src="/images/arrivals2.png"/>
    <ArrvalCard  text=" Wooden Chair" price="$65.00" src="/images/arrivals3.png"/>
   </div>
   <div className=" flex mt-7">
    <ArrvalCard  text=" Wooden Chair" price="$65.00" src="/images/arrivals4.png"/>
    <ArrvalCard  text=" Wooden Chair" price="$65.00" src="/images/arrivals5.png"/>
    <ArrvalCard  text=" Wooden Chair" price="$65.00" src="/images/arrivals6.png"/>
   </div>
  </div>
  )
}

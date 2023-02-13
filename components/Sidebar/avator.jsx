import profile from "./profile.jpg";
import Image from 'next/image'

export default function Avatar (props) {

    return( 
        <>

         <Image src={profile} alt="" style={{borderRadius:"100%" , height:"150px",  width:"150px", backgroundColor:"white"} } className={props.avator} /> <br></br>
  

        </>
       
    )
}
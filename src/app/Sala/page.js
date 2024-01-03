import { Box } from "@mui/material";
import Image from "next/image";
import getout from '../../../public/assets/getout.png'
import people from '../../../public/assets/people.png'
import roles from '../../../public/assets/roles.png'
import Link from "next/link";

export default function Sala() {
 
  return (
    
    <Box sx={{display:"flex", justifyContent:'space-between' ,width:"40%"}}>
      
      <Box sx={{
        display:"flex", 
        alignItems:'flex-start',
       
        }}>
          <Link href='/'>
          <Image src={getout} />
          </Link>

          
      <Box sx={{marginLeft:'1em'}}>Sala de Osvaldo</Box>
       
      </Box>
      <Box sx={{display:"flex", alignItems:'end', flexDirection:'column', }}>
         <Box>id:123123</Box>
         <Box ><Image src={people}/> 6</Box> 
         <Box><Image src={roles}/></Box>
      </Box>
    </Box>
    
  )
}

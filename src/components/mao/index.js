import { Box } from '@mui/material';
import React from 'react';



export default function Mao({Maocartas,setBaralhojgo}){
    const [openResumo, setOpenResumo]= React.useState(false);
    const headleResumo =()=>{
        setOpenResumo((e)=> !e);
        console.log(openResumo)
    }
    //console.log(Maocartas)
    return(
        <Box sx={{textAlign:'center',}}>
            {openResumo? 
            <Box sx={{
                position:'absolute',
                display:'flex',
                width:'100vw',
                height:'100vh',
                top:'0',
                right:'0',
                backgroundColor:'rgba(0, 0, 0, 0.8)',
                justifyContent:'center',
                alignItems:'center'
            }} 
            onClick={headleResumo}
            >
                <img src='/assets/resumo.png' />
            </Box>:
            <></>
                }
            <Box sx={{cursor:'pointer'}} onClick={headleResumo}>

                <img src='/assets/resumo.png' style={{ width: '30px', height: '30px',borderRadius:"50px"}}/>
            </Box>
        <Box sx={{display:'flex', justifyContent:'center'}}>
        {Maocartas.map(cartas=>{
            return <img src={cartas.img}  alt={cartas.Nome} key={cartas.id} style={{ width: '195px', height: '314px',}} />
            
            
        })}
        </Box>
        </Box>
    );
}
import { Box } from '@mui/material';



export default function Mao({Maocartas,setBaralhojgo}){
    console.log(Maocartas)
    return(
        <div>
        <h1>oii</h1>
        {Maocartas.map(cartas=>{
            return<Box>
            
                
                <img src={cartas.img}  alt={cartas.Nome}/>
            </Box>
            
        })}
        </div>
    );
}
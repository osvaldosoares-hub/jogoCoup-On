import { Box } from '@mui/material';
import React from 'react';



export default function Mao({Maocartas,setBaralhojgo}){
    const [openResumo, setOpenResumo]= React.useState(false);
    const [actionCard, setActionCard] = React.useState([]);
    const [PositionCard, setPositionCard]= React.useState(0);
    const handleAction = (idCard)=>{
        const cardSelected = Maocartas.filter((card) => card.id == idCard)
        const position =  Maocartas.map((card,index) => {
            if(card.id == idCard){
                return index
            }
            return -1;
        
        }).indexOf(-1);
        setPositionCard(position)
        setActionCard(cardSelected)
    }
    const handleTrocaCard = (idCard)=>{

    }
    const handleCloseActions = ()=>{
        const closeAction=[]
        setActionCard(closeAction);
    }
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
        <Box sx={{display:'flex', justifyContent:'space-around'}}>
        {Maocartas.map(cartas=>{
            return <img src={cartas.img}   alt={cartas.Nome} key={cartas.id}  style={{ width: '195px', height: '314px'}} onClick={()=>handleAction(cartas.id)}/>
            
            
        })}
        
        
        </Box>
        {actionCard.length>0 ?
        <Box sx={{
             position:'absolute',
             display:'flex',
             flexDirection:'column',
             justifyContent:'center',
             alignItems:'center',
             backgroundColor:'rgba(0, 0, 0, 0.8)',
             top:'0',
             right:'0',
             width:'100vw',
             height:'100vh',
        }}>
            <Box sx={{
                position:'relative',
                left:PositionCard?'-10%':'10%',
                top:'12%',
               
            }}>
                <Box sx={{
                    textAlign:"start",
                    
                }}>
                    <img src='/assets/close.png'   alt='close' onClick={()=> handleCloseActions(actionCard[0].id)}/>
                <Box sx={{
                    textAlign:"start",
                    marginLeft:'1em',
                    color:'#FFFFFF',
                    cursor:'pointer'
                }}>
                    Tirar carta
                </Box>
                <Box sx={{
                    textAlign:"start",
                    marginLeft:'2em',
                    color:'#FF0000',
                    cursor:'pointer'
                }}
                onClick={handleTrocaCard}>
                    Escolher outra carta
                </Box>
                <Box sx={{
                    textAlign:"start",
                    marginLeft:'3em',
                    color:'#FFFFFF'
                }}>
                    Virar carta
                </Box>

            </Box>  
      
        {actionCard.map(card=>{ 
            return <img src={card.img}   alt={card.Nome} key={card.id}  style={{ width: '195px', height: '314px', borderRadius:"20px"}}/>
            })}
        </Box>
            </Box>:<></>}
        </Box>
    );
}
'use client'
import { Box, Button } from "@mui/material";
import Image from "next/image";
import getout from '../../../public/assets/getout.png'
import people from '../../../public/assets/people.png'
import roles from '../../../public/assets/roles.png'
import Link from "next/link";
import Mao from "@/components/mao";
import React from "react";

const Baralho=[
  {
   id:0,
   carta:10,
   Nome:'assasino', 
   img:'/assets/assasino.png', 
  },
  {
      id:1,
      carta:11,
      Nome:'duque', 
      img:'/assets/duque.png', 
  },
  {
    id:2,
    carta:10,
    Nome:'assasino1', 
    img:'/assets/assasino.png', 
   },
   {
       id:3,
       carta:11,
       Nome:'duque1', 
       img:'/assets/duque.png', 
   },
   {
    id:4,
    carta:10,
    Nome:'assasino2', 
    img:'/assets/assasino.png', 
   },
   {
       id:5,
       carta:11,
       Nome:'duque2', 
       img:'/assets/duque.png', 
   },
]

export default function Sala() {
  const [IniciarJgo, setIniciarjgo]= React.useState(false);
  const [Baralhojgo, setBaralhojgo] = React.useState(Baralho)
  const [Maocartas ,setMaoCartas] = React.useState([]);
  const handleIniciar = ()=>{

    setIniciarjgo(true)
    if(Baralhojgo.length > 2){
      const novasCartas = [];
      for(let i = 0; i<2;i++){
        const CartaRandom = Math.floor(Math.random() * Baralhojgo.length);
        console.log(CartaRandom)
        const CartaEscolhida = Baralhojgo[CartaRandom];

        const novoBaralho = [...Baralhojgo.slice(0,CartaRandom), ...Baralhojgo.slice(CartaRandom + 1)]
        console.log(novoBaralho)
        setBaralhojgo(novoBaralho);


        novasCartas.push(CartaEscolhida);
      }
      setMaoCartas((prev)=>[...prev, ...novasCartas]);
    }
    
    
  }
  return (
    <Box sx={{width:'40%'}}>
        <Box sx={{display:"flex", justifyContent:'space-between' ,width:"100%"}}>
          
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
        <Box sx={{textAlign:'center',marginTop:'13em'}}>
            <Button variant="contained" sx={{width:'40%', height:'44px',backgroundColor:'#474747', fontFamily:'JetBrains Mono', margin:'2em' ,'&:hover': {
          backgroundColor: '#727272',
          },}}  onClick={handleIniciar}>
                    Começar a jogar
            </Button>
        </Box>    
        {IniciarJgo ?<Mao Maocartas={Maocartas} setBaralhojgo={setBaralhojgo}/>:<></>}
    </Box>
    
  )
}

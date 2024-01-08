'use client'
import { Box, Button } from "@mui/material";
import Image from "next/image";
import getout from '../../../public/assets/getout.png'
import people from '../../../public/assets/people.png'
import roles from '../../../public/assets/roles.png'
import Link from "next/link";
import Mao from "@/components/mao";
import React, { useEffect } from "react";


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
      img:'/assets/duque.jpg', 
  },
  {
    id:2,
    carta:12,
    Nome:'condessa', 
    img:'/assets/condessa.jpg', 
  },
  {
    id:3,
    carta:13,
    Nome:'capitão', 
    img:'/assets/capitao.jpg', 
  },
  {
    id:4,
    carta:14,
    Nome:'embaixador', 
    img:'/assets/embaixador.jpg', 
  },
  {
    id:5,
    carta:10,
    Nome:'assasino', 
    img:'/assets/assasino.png', 
   },
   {
       id:6,
       carta:11,
       Nome:'duque', 
       img:'/assets/duque.jpg', 
   },
   {
     id:7,
     carta:12,
     Nome:'condessa', 
     img:'/assets/condessa.jpg', 
   },
   {
     id:8,
     carta:13,
     Nome:'capitão', 
     img:'/assets/capitao.jpg', 
   },
   {
     id:9,
     carta:14,
     Nome:'embaixador', 
     img:'/assets/embaixador.jpg', 
   },
   {
    id:10,
    carta:10,
    Nome:'assasino', 
    img:'/assets/assasino.png', 
   },
   {
       id:11,
       carta:11,
       Nome:'duque', 
       img:'/assets/duque.jpg', 
   },
   {
     id:12,
     carta:12,
     Nome:'condessa', 
     img:'/assets/condessa.jpg', 
   },
   {
     id:13,
     carta:13,
     Nome:'capitão', 
     img:'/assets/capitao.jpg', 
   },
   {
     id:14,
     carta:14,
     Nome:'embaixador', 
     img:'/assets/embaixador.jpg', 
   },
   {
    id:15,
    carta:10,
    Nome:'assasino', 
    img:'/assets/assasino.png', 
   },
   {
       id:16,
       carta:11,
       Nome:'duque', 
       img:'/assets/duque.jpg', 
   },
   {
     id:17,
     carta:12,
     Nome:'condessa', 
     img:'/assets/condessa.jpg', 
   },
   {
     id:18,
     carta:13,
     Nome:'capitão', 
     img:'/assets/capitao.jpg', 
   },
   {
     id:19,
     carta:14,
     Nome:'embaixador', 
     img:'/assets/embaixador.jpg', 
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
       
        const CartaEscolhida = Baralhojgo[CartaRandom];
       
        
        setBaralhojgo((prevBaralho)=> prevBaralho.filter((cartas) => cartas.id != CartaEscolhida.id))
        
        novasCartas.push(CartaEscolhida);
      }
      
      setMaoCartas((prev)=>[...prev, ...novasCartas]);
    }
    
  }
  useEffect(() => {
    // Lógica que depende do estado atualizado
    console.log(Baralhojgo);
  }, [Baralhojgo]);
  const handleReiniciar = ()=>{
      const Maovazia=[];
      const cartas=[]
      for(let i = 0; i< Maocartas.length;i++){
        cartas.push(Maocartas[i]);
      }
      setMaoCartas(Maovazia)
      setBaralhojgo((prev)=> [...prev,...cartas])

      handleIniciar();
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
        <Box sx={{textAlign:'center',marginTop:'10em'}}>
        {!IniciarJgo
        ?<Button variant="contained" sx={{width:'40%', height:'44px',backgroundColor:'#474747', fontFamily:'JetBrains Mono', margin:'2em' ,'&:hover': {
          backgroundColor: '#727272',
          },}}  onClick={handleIniciar}>
                    Começar a jogar
            </Button>
            :<Button variant="contained" sx={{width:'40%', height:'44px',backgroundColor:'#474747', fontFamily:'JetBrains Mono', margin:'2em' ,'&:hover': {
          backgroundColor: '#727272',
          },}}  onClick={handleReiniciar}>
                    Reiniciar
            </Button>} 
        </Box> 
        {IniciarJgo ?<Mao Maocartas={Maocartas} setBaralhojgo={setBaralhojgo}/>:<></>}
    </Box>
    
  )
}

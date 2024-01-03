'use client'
import './styles.css'
import styles from './page.module.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import * as React from 'react';
export default function App(){
    const [jogo, setJogo] = React.useState('');
    const handleChange = (event)=>{
        setJogo(event.target.value)
        
    }
    
    return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:"column",
        minHeight:'80vh',
        
    }}>
        <Box sx={{fontSize:'24px'}}>
            Jogos com os amigos
        </Box>

        <Box >
        <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label"sx={{fontFamily:'JetBrains Mono'}}>Escolha o jogo</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={jogo}
                label="Escolha o jogo"
                onChange={handleChange}
                sx={{borderRadius:'20px', borderColor:'#707070', background:'#EEEEEE',fontFamily:'JetBrains Mono'}}
            >
                <MenuItem value={"Coup"} sx={{fontFamily:'JetBrains Mono'}}>Coup</MenuItem>
                
            </Select>
            </FormControl>

        </Box>
        <Box sx={{display:'flex',
        flexDirection:'column',
        
        alignItems:'center'
        }}>
            <Button variant="contained" sx={{width:'100%', height:'44px',backgroundColor:'#474747', fontFamily:'JetBrains Mono', margin:'2em' ,'&:hover': {
      backgroundColor: '#727272',
    },}}>
                Convidado
            </Button>
            <Button variant="outlined" sx={{width:'100%', height:'44px',backgroundColor:'#ffffff', borderColor:'#474747', color:'#474747',fontFamily:'JetBrains Mono',  '&:hover': {
                borderColor:'#474747',
                backgroundColor:'rgba(114, 114, 114, 0.6)'
    },}}>
                Criar Sala
            </Button>
            
        </Box>


        </Box>)
        
}
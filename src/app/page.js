'use client'
import './styles.css'
import styles from './page.module.css'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import * as React from 'react';
export default function App(){
    const [jogo, setJogo] = React.useState('');
    const handleChange = (event)=>{
       
       console.log(event.target.value)
    }
    return (
    <div>
        <div className={styles.header}>
            Jogos com os amigos
        </div>

        <Box>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Escolha o jogo</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={jogo}
                label="Escolha o jogo"
                onChange={handleChange}
            >
                <MenuItem value={"Coup"}>Coup</MenuItem>
                
            </Select>
            </FormControl>

        </Box>

    </div>)
        
}
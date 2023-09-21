import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';
import IceCreamShopService from '../services/IceCreamShopService';

const AddIceCreamComponent = () => {

    const paperStyle = {padding:'50px 20px', width:600, margin:'20px auto'}
    const [flavourCode, setFlavourCode] = useState('')
    const [flavour, setFlavour] = useState('')
    const [toppings, setToppings] = useState('')
    const [cost, setCost] = useState('')
    const history = useHistory()
    const {id} = useParams()

    const addIceCream = (e) =>{

        e.preventDefault()
        const iceCream = {flavourCode, flavour, toppings, cost}

        IceCreamShopService.addIceCream(iceCream).then((response) => {

            console.log(response.data);
            history.push('/iceCreams')

        }).catch(error => console.log(error))
    }

    useEffect(() => {
      
        IceCreamShopService.getIceCream(id).then((response) => {
            setFlavourCode(response.data.flavourCode)
            setFlavour(response.data.flavour)
            setToppings(response.data.toppings)
            setCost(response.data.cost)
        }).catch(error => {
            console.log(error);
            })
    }, []);

  return (
    <Container>
        <Paper elevation = {3} style={paperStyle}>
            <h2 style={{color:'blue', textAlign:'center'}}>Add Ice Cream</h2> 
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1},
                }}
                noValidate
                autoComplete="off"
                >
                
                <TextField id="outlined-basic" label="Flavour Code" variant="outlined" fullWidth 
                value={flavourCode}
                onChange={(e)=>setFlavourCode(e.target.value)}
                /><br />
                <TextField id="outlined-basic" label="Flavour" variant="outlined" fullWidth
                value={flavour}
                onChange={(e)=>setFlavour(e.target.value)}
                /><br />
                <TextField id="outlined-basic" label="Toppings" variant="outlined" fullWidth
                value={toppings}
                onChange={(e)=>setToppings(e.target.value)}
                /><br />
                <TextField id="outlined-basic" label="Cost" variant="outlined" fullWidth
                value={cost}
                onChange={(e)=>setCost(e.target.value)}
                /><br /><br />
                <Button variant='contained' color='error' style={{float:'right'}} href='/iceCreams'>
                    BACK TO HOME
                </Button>
                <Button style={{float:'right'}} variant='contained' color='primary' 
                onClick={(e) => addIceCream(e)}>
                    ADD ICE CREAM
                </Button>
                 <br /><br />
            </Box>
        </Paper>
    </Container>
    
  );
}

export default AddIceCreamComponent;

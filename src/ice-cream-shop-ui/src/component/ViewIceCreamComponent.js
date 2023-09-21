import React, { useState, useEffect } from 'react';
import IceCreamShopService from '../services/IceCreamShopService';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Table,TableCell,TableContainer,TableRow,Paper,Button,Container } from '@mui/material';

const ViewIceCreamComponent = () => {

    const paperStyle = {padding:'50px 20px', width:600, margin:'20px auto'}

    const [flavourCode, setFlavourCode] = useState('')
    const [flavour, setFlavour] = useState('')
    const [toppings, setToppings] = useState('')
    const [cost, setCost] = useState('')
    const {id} = useParams()

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
        <h2 style={{color:'blue', textAlign:'center'}}>View Ice Cream Details</h2>
        <Box component="form" sx={{'& > :not(style)': { m: 1},}} noValidate autoComplete="off">
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                
                    <TableRow>
                        <TableCell><b> Flavour Code:  </b></TableCell>
                        <TableCell><b>{flavourCode}</b></TableCell>
                    </TableRow> 
                    <TableRow>
                        <TableCell><b> Flavour:  </b></TableCell>
                        <TableCell><b>{flavour}</b></TableCell>
                    </TableRow> 
                    <TableRow>
                        <TableCell><b> Toppings:  </b></TableCell>
                        <TableCell><b>{toppings}</b></TableCell>
                    </TableRow> 
                    <TableRow>
                        <TableCell><b> Cost:  </b></TableCell>
                        <TableCell><b>{cost}</b></TableCell>
                    </TableRow>
                    <br />
                    <Button variant='contained' color='primary' style={{float:'right'}} href='/iceCreams'>
                    Back To Home
                    </Button>
                    <br /><br />
                </Table>
            </TableContainer>
        </Box>
    </Paper>
    </Container>
  )
};

export default ViewIceCreamComponent;

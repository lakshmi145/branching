import React, { useEffect, useState } from 'react';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button } from '@mui/material';
import IceCreamShopService from '../services/IceCreamShopService';

const ListIceCreamComponent = () => {
 
    const [iceCreams, setIceCream] = useState([]);

    useEffect(() => { getAllIceCreams() }, [])

    const getAllIceCreams = () => {
      IceCreamShopService.getAllIceCreams().then((response) => {
            setIceCream(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteIceCream = (flavourCode) => {
      IceCreamShopService.deleteIceCream(flavourCode).then((response) => {
            getAllIceCreams()
        }).catch(error => console.log(error))
    }

    return (
        <div className='container'>
        <h2 style={{textAlign:'center'}}><b></b></h2>
        <Button variant='contained' href='/add-icecream'><b>Add New Ice Cream</b></Button>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b> Flavour Code </b></TableCell>
            <TableCell><b> Flavour </b></TableCell>
            <TableCell><b> Toppings </b></TableCell>
            <TableCell><b> Price </b></TableCell>
            <TableCell><b> Actions </b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {iceCreams.sort((a, b) => a.flavourCode > b.flavourCode ? 1 : -1)
                    .map((iceCream) => (
            <TableRow
              key={iceCream.flavourCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                  {iceCream.flavourCode}
              </TableCell>
              <TableCell component="th" scope="row">
                  {iceCream.flavour}
              </TableCell>
              <TableCell component="th" scope="row">
                  {iceCream.toppings}
              </TableCell>
              <TableCell component="th" scope="row">
                  {iceCream.cost}
              </TableCell>
              <TableCell  component="th" scope="row"  >

              <Button variant='contained' color='secondary' style = {{marginRight:'20px'}} href={`/update-icecream/${iceCream.flavourCode}`}>
                  <b>Update</b>
              </Button>

              <Button variant='contained' color='error' href={`/confirm-delete/${iceCream.flavourCode}`}><b>Delete</b></Button>

              <Button variant='contained' color='primary' style = {{marginLeft:'20px'}} href={`/get-icecream/${iceCream.flavourCode}`}>
                  <b>View</b>
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default ListIceCreamComponent;
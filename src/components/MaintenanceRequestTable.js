import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as maintenanceRequestService from '../services/MaintenanceRequestService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  
export const MaintenanceRequestTable = () => {
    const [maintenanceRequests, setMaintenanceRequests]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        maintenanceRequestService.getAllMaintenanceRequests()
        .then(res => {
            setMaintenanceRequests(res.data);
        })
    }, [])
    const goToUpdate = (id) => {
        navigate(`/update/${id}`);
    }

    const deleteMaintenanceRequest = (id) => {
        maintenanceRequestService.deleteMaintenanceRequest(id)
        .then(()=>{
            maintenanceRequestService.getAllMaintenanceRequests()
            .then((res)=>{
                setMaintenanceRequests(res.data);
            })
        })
    }

    return (
        <div >
            <br></br>
            <h1>Code Differently Maintenance Request</h1>
            <br></br>
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Apt No
                    </TableCell>
                    <TableCell>
                        Created At
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        maintenanceRequests.map((maintenanceRequest)=> {
                            return(
                                <TableRow
                                    hover
                                    key={maintenanceRequest.id}
                                >
                                    <TableCell>
                                        {maintenanceRequest.id}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.email}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.aptNo}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.createdAt}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(maintenanceRequest.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteMaintenanceRequest(maintenanceRequest.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { CV_API } from "../../config";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MenuSelection() {
    const [menuItems, setMenuItems] = useState([]);

    const fetchMenu = async () => {
        await axios.get(CV_API.BASE_URL + "menu/", ).then((response) => {
            if (response.status !== 200) {
                console.log("Error fetching menu");
                return;
            }

            setMenuItems(response.data.menuItems);
        })
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="container">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Retter</TableCell>
                        <TableCell align="right">Pris</TableCell>
                        <TableCell align="right">Synlighed</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {menuItems.map((item) => (
                        <TableRow
                        key={item.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {item.name}
                        </TableCell>
                        <TableCell align="right">{item.unitPrice}</TableCell>
                        <TableCell align="right">{item.isActive ? "Synlig" : "Usynlig"}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    );
}

export default MenuSelection

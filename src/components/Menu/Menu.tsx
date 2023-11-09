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
import Avatar from '@mui/material/Avatar';

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

    // const deleteMenuItem = async (id: number) => {
    //     await axios.delete(CV_API.BASE_URL + "menu/" + id, ).then((response) => {
    //         if (response.status !== 200) {
    //             console.log("Error deleting menu item");
    //             return;
    //         }

    //         fetchMenu();
    //     })
    // }

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="container mx-auto">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Retter</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Pris</TableCell>
                        {/* <TableCell align="right">Synlighed</TableCell> */}
                        {/* <TableCell align="right"></TableCell> */}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {menuItems.map((item) => {
                            if (item.isActive) {
                            return (
                                <TableRow
                                    className="bg-gradient-to-r from-rose-100 to-white-100"
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align='left' scope="item"><Avatar alt={item.name} src={"../../src/assets/MenuImages/" + item.imagePath} /></TableCell>
                                    <TableCell scope="item">{item.name}</TableCell>
                                    <TableCell align="right">{item.unitPrice + " kr."}</TableCell>
                                    {/* <TableCell align="right">{item.isActive ? "Synlig" : "Usynlig"}</TableCell> */}
                                    {/* <TableCell align="right">
                                        <IconButton edge="end" aria-label="create" onClick={() => {setEditor(item)}}><CreateIcon /></IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => {deleteMenuItem(item.id)}}><DeleteIcon /></IconButton>
                                    </TableCell> */}
                                </TableRow>
                            )}})}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MenuSelection

import React, {useState, useEffect} from 'react';
import {CV_API} from "../../config";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import {IconButton, InputAdornment, MenuItem, OutlinedInput, Select} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from "@mui/material/TextField";
import SaveIcon from '@mui/icons-material/Save';

function MenuSelection() {
    const [menuItems, setMenuItems] = useState([]);

    const fetchMenu = async () => {
        await axios.get(CV_API.BASE_URL + "menu/",).then((response) => {
            if (response.status !== 200) {
                console.log("Error fetching menu");
                return;
            }
            setMenuItems(response.data.menuItems);
        })
    };

    const handleDeleteMenuItem = async (id: number) => {
        if (confirm("Er du sikker at du vil fjerne dette menupunkt?")) {
            try {
                await axios.delete(CV_API.BASE_URL + "menu/Item/" + id, {headers: {Authorization: "Bearer " + localStorage.getItem('session')?.replace(/\"/g, "")}}).then((response) => {
                    if (response.status == 204) {
                        fetchMenu();
                    }
                })
            } catch (error) {
                alert(error);
            }
        }
    }

    const [newItemName, setNewItemName] = useState("");
    const [newItemPrice, setNewItemPrice] = useState(0);
    const [newItemAvailability, setNewItemAvailability] = useState(true);
    const [newItemDescription, setNewItemDescription] = useState("");

    const handleUpdateMenuItem = async (id: number, itemName: string, price: number, active: boolean, desc: string, image: string, menu: number) => {
        if (confirm("Er du sikker at du vil gemme ændringerne?")) {
            try {
                var finalName = itemName;
                if (newItemName)
                    finalName = newItemName;

                var finalPrice = price;
                if (newItemPrice != 0)
                    finalPrice = newItemPrice;

                var finalAvailability = active;
                if (active != newItemAvailability)
                    finalAvailability = newItemAvailability;

                var finalDesc = desc;
                if (newItemDescription)
                    finalDesc = newItemDescription;

                await axios.put(CV_API.BASE_URL + "menu/Item/" + id, {id: id, name: finalName, description: finalDesc, unitPrice: finalPrice, isActive: finalAvailability, imagePath: image, menuId: menu}, {headers: {Authorization: "Bearer " + localStorage.getItem('session')?.replace(/\"/g, "")}}).then((response) => {
                    if (response.status == 204 || response.status == 200) {
                        fetchMenu();
                    }
                })
            } catch (error) {
                alert(error);
            }
        }
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="container mx-auto">
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Retter</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">Pris</TableCell>
                            <TableCell align="center">Synlighed</TableCell>
                            <TableCell align="center">Beskrivelse</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menuItems.map((item) => {
                            //console.log("Name: "+item.name+", char "+ item.name.length);
                            return (
                                <TableRow
                                    className="bg-gradient-to-r from-rose-100 to-white-100"
                                    key={item.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell align='left' scope="item"><Avatar alt={item.name}
                                                                                 src={"../../src/assets/MenuImages/" + item.imagePath}/></TableCell>
                                    <TableCell scope="item">
                                        <TextField
                                            placeholder="Madrettens navn"
                                            color="error"
                                            name="newItemName"
                                            defaultValue={item.name}
                                            onChange={(e) => setNewItemName(e.target.value)}
                                            type="text"
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <OutlinedInput
                                            placeholder="Madrettens pris"
                                            color="error"
                                            name="newItemPrice"
                                            onChange={(e) => setNewItemPrice(e.target.value)}
                                            endAdornment={<InputAdornment position="end">kr</InputAdornment>}
                                            defaultValue={parseInt(item.unitPrice)}
                                            type="number"
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <TextField
                                            color="error"
                                            name="newItemAvailability"
                                            type="boolean"
                                            select
                                            defaultValue={item.isActive}
                                            onChange={(e) => setNewItemAvailability(e.target.value)}
                                        >
                                            <MenuItem value={true}>Synlig</MenuItem>
                                            <MenuItem value={false}>Usynlig</MenuItem>
                                        </TextField>
                                    </TableCell>
                                    <TableCell align="center" scope="item">
                                        <TextField
                                            placeholder="Ingredienser/beskrivelse af madretten"
                                            color="error"
                                            id="newItemDescription"
                                            type="text"
                                            multiline
                                            defaultValue={item.description}
                                            onChange={(e) => setNewItemDescription(e.target.value)}
                                        >
                                        </TextField>
                                    </TableCell>
                                    <TableCell align="right">
                                        {/*<IconButton edge="end" aria-label="create" onClick={() => setIsDisabled(false)}><CreateIcon /></IconButton>*/}
                                        <IconButton edge="end" aria-label="save"
                                                    onClick={() => handleUpdateMenuItem(item.id, item.name, parseInt(item.unitPrice), item.isActive, item.description, item.imagePath, item.menuId)}><SaveIcon/></IconButton>
                                        <IconButton edge="end" aria-label="delete"
                                                    onClick={() => handleDeleteMenuItem(item.id)}><DeleteIcon/></IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MenuSelection
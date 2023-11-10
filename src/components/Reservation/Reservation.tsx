import React from 'react';
import {Datepicker} from 'flowbite-react';
import {IconButton} from "@mui/material";
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoTone from '@mui/icons-material/RemoveCircleOutlineTwoTone';

function Reservation() {
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);

    const setAdultsCount = (count: number) => {
        setAdults(Math.min(Math.max(count, 1), 10 - children));
    }

    const setChildrenCount = (count: number) => {
        setChildren(Math.min(Math.max(count, 0), 10 - adults));
    }

    return (
        <div className="container mx-auto pt-16 pb-16 text-center bg-gray-100 border border-b border-neutral-100">
            <h1 className="mx-auto max-w-5xl font-display font-bold text-5xl tracking-tight sm:text-5xl">
                Bestil bord
            </h1>

            <div className="pt-16 pb-16 text-left mx-auto max-w-5xl">
                <p className="font-display font-bold text-2xl tracking-tight uppercase">Du reserverer nu bord til</p>
                <p>
                    <b>Café Vesuvius Odense</b>
                    <br/>
                    <p>
                        Odensevej 123
                        <br/>
                        5000 Odense C
                    </p>
                    <p className="w-1/2 max-w-5xl tracking-tight">
                        <br/>
                        Ring til restauranten på tlf 1234 5678 såfremt der ønskes bord til mere end 10 personer, eller
                        med evt. ønsker til denne reservation.
                        <br/>
                        <br/>
                        Vi glæder os til at se dig!
                    </p>

                    <form className="mt-5">
                        <p className="font-display font-bold text-2xl tracking-tight uppercase italic mb-6">Hvor mange bliver?</p>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div className="flex bg-white">
                                <p className="font-display font-bold text- m-5 tracking-tight uppercase text-vesuvius-red">Antal voksne (13+ ÅR)</p>
                                <div className="flex ml-auto mr-5">
                                    <IconButton edge="end" aria-label="create" onClick={() => {setAdultsCount(adults - 1)}}><RemoveCircleOutlineTwoTone fontSize="medium" /></IconButton>
                                    <p id="adult" className="mx-2 ml-6 font-bold text-vesuvius-red text-center place-self-center text-xl">{adults}</p>
                                    <IconButton edge="end" aria-label="delete" onClick={() => {setAdultsCount(adults + 1)}}><AddCircleOutlineTwoToneIcon fontSize="medium"/></IconButton>
                                </div>
                            </div>
                            <div className="flex bg-white">
                                <p className="font-display font-bold text- m-5 tracking-tight uppercase text-vesuvius-red">Antal børn (0-12 ÅR)</p>
                                <div className="flex ml-auto mr-5">
                                    <IconButton edge="end" aria-label="create" onClick={() => {setChildrenCount(children - 1)}}><RemoveCircleOutlineTwoTone fontSize="medium" /></IconButton>
                                    <p id="children" className="mx-2 ml-6 font-bold text-vesuvius-red text-center place-self-center text-xl">{children}</p>
                                    <IconButton edge="end" aria-label="delete" onClick={() => {setChildrenCount(children + 1)}}><AddCircleOutlineTwoToneIcon fontSize="medium"/></IconButton>
                                </div>
                            </div>
                        </div>

                        <p className="font-display font-bold text-2xl tracking-tight uppercase italic mb-6">Hvornår skal
                            i bruge et bord?</p>

                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <Datepicker/>
                        </div>

                        <p className="font-display font-bold text-2xl tracking-tight uppercase italic mb-6">Kontaktoplysninger</p>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <input type="text" id="name"
                                       className="bg-white-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="DIT NAVN"/>
                            </div>
                            <div>
                                <input type="text" id="phone"
                                       className="bg-white-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                       placeholder="MOBILNR"/>
                            </div>
                        </div>
                    </form>
                </p>
            </div>
        </div>
    );
}

export default Reservation

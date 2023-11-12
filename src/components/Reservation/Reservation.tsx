import React from 'react';
import {IconButton} from "@mui/material";
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import RemoveCircleOutlineTwoTone from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    DateCalendar,
    DayCalendarSkeleton,
    DigitalClock,
    LocalizationProvider,
    PickersDay,
    PickersDayProps
} from '@mui/x-date-pickers';
import Badge from '@mui/material/Badge';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import * as dayjs from "dayjs";
import {Dayjs} from "dayjs";

function ServerDay(props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }) {
    const {highlightedDays = [], day, outsideCurrentMonth, ...other} = props;

    const isSelected =
        !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

    return (
        <Badge
            key={props.day.toString()}
            overlap="circular"
            badgeContent={isSelected ? '🌚' : ''}
        >
            <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day}/>
        </Badge>
    );
}

function Reservation() {
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);

    const setAdultsCount = (count: number) => {
        setAdults(Math.min(Math.max(count, 1), 10 - children));
    }

    const setChildrenCount = (count: number) => {
        const element: HTMLElement | null = document.getElementById("children");
        setChildren(Math.min(Math.max(count, 0), 10 - adults));

        if (count > 0) {
            element?.classList.add("text-vesuvius-red");
            element?.classList.remove("opacity-25");

        } else {
            element?.classList.remove("text-vesuvius-red");
            element?.classList.add("opacity-25");
        }
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

                    <form className="mt-8">
                        <p className="font-display font-bold text-2xl tracking-tight uppercase italic mb-8">Hvor mange
                            bliver?</p>
                        <div className="grid gap-6 mb-8 md:grid-cols-2">
                            <div className="flex bg-white">
                                <p className="font-display font-bold text- m-5 tracking-tight uppercase text-vesuvius-red">Antal
                                    voksne (13+ ÅR)</p>
                                <div className="flex ml-auto mr-5">
                                    <IconButton edge="end" aria-label="create" onClick={() => {
                                        setAdultsCount(adults - 1)
                                    }}><RemoveCircleOutlineTwoTone fontSize="medium"/></IconButton>
                                    <p id="adult"
                                       className="w-5 mx-2 ml-6 font-bold text-vesuvius-red text-center place-self-center text-xl">{adults}</p>
                                    <IconButton edge="end" aria-label="delete" onClick={() => {
                                        setAdultsCount(adults + 1)
                                    }}><AddCircleOutlineTwoToneIcon fontSize="medium"/></IconButton>
                                </div>
                            </div>
                            <div className="flex bg-white">
                                <p className="font-display font-bold m-5 tracking-tight uppercase">Antal børn
                                    (0-12 ÅR)</p>
                                <div className="flex ml-auto me-5">
                                    <IconButton edge="end" aria-label="create" onClick={() => {
                                        setChildrenCount(children - 1)
                                    }}><RemoveCircleOutlineTwoTone fontSize="medium"/></IconButton>
                                    <p id="children"
                                       className="w-5 mx-2 ml-6 font-bold text-center place-self-center text-xl opacity-25">{children}</p>
                                    <IconButton edge="end" aria-label="delete" onClick={() => {
                                        setChildrenCount(children + 1)
                                    }}><AddCircleOutlineTwoToneIcon fontSize="medium"/></IconButton>
                                </div>
                            </div>
                        </div>

                        <p className="font-display font-bold text-2xl tracking-tight uppercase italic mb-8">Hvornår skal
                            i bruge et bord?</p>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <div className="flex justify-between bg-white">
                                        <p className="font-display font-bold m-5 tracking-tight uppercase">Vælg dato</p>
                                        <div className="flex justify-center my-auto me-5 opacity-75">
                                            <ArrowDropDownIcon fontSize="medium"/>
                                        </div>

                                    </div>
                                    <DateCalendar
                                        defaultValue={dayjs().add(1, 'day')}
                                        views={['day']}
                                        renderLoading={() => <DayCalendarSkeleton/>}
                                        slots={{
                                            day: ServerDay,
                                        }}
                                        shouldDisableDate={(day) => {
                                            return dayjs().isAfter(day);
                                        }}
                                        disablePast={true}
                                        disableHighlightToday={true}
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between bg-white">
                                        <p className="font-display font-bold m-5 tracking-tight uppercase">Vælg tid</p>
                                        <div className="flex justify-center my-auto me-5 opacity-75">
                                            <ArrowDropDownIcon fontSize="medium"/>
                                        </div>

                                    </div>
                                    <DigitalClock defaultValue={dayjs('2022-04-17T15:30')}
                                                  shouldDisableTime={(value, view) =>
                                                      view === 'hours' && value.hour() < 10 || (value.hour() > 22)
                                                  }
                                                  ampm={false}
                                    />
                                </div>
                            </div>
                        </LocalizationProvider>

                        <p className="font-display font-bold text-2xl tracking-tight uppercase italic mb-8">Kontaktoplysninger</p>
                        <div className="grid gap-6 mb-8 md:grid-cols-2">
                            <input type="text" id="name"
                                   className="bg-white font-display font-bold p-5 tracking-tight uppercase"
                                   placeholder="DIT NAVN"/>
                            <input type="text" id="name"
                                   className="bg-white font-display font-bold p-5 tracking-tight uppercase"
                                   placeholder="MOBILNR"/>
                        </div>
                    </form>
                </p>
            </div>
        </div>
    );
}

export default Reservation

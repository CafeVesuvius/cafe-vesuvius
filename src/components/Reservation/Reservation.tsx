import React, {useEffect, useCallback} from 'react';
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
import axios from "axios";
import {CV_API} from "../../config";

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
    const [availableTimes, setAvailableTimes] = React.useState<string[]>([]);
    const [availableDays, setAvailableDays] = React.useState<string[]>([]);
    const [month, setMonth] = React.useState<Dayjs>(dayjs());

    const tomorrowDate = dayjs().add(1, 'day').startOf('day');
    const isWeekend = tomorrowDate.day() >= 5 || tomorrowDate.day() == 0;
    const initialDate = tomorrowDate.add(isWeekend ? 12 : 16, 'hour').toDate();

    const [date, setDate] = React.useState<Date>(initialDate);
    const [time, setTime] = React.useState<Date>(date); // [date, setDate

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = JSON.stringify({
            "name": (document.getElementById("name") as HTMLInputElement).value,
            "phone": (document.getElementById("phone") as HTMLInputElement).value,
            "people": adults + children,
            "time": time.toISOString(),
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: CV_API.BASE_URL + "reservation",
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [adults, children, date]);

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

    const checkAvailableDates = (reservationTime: string) => {
        return axios.get(CV_API.BASE_URL + "Reservation/IsAvailableToday/" + reservationTime).then((response: {
            status: number,
            data: { isAvailable: boolean, reason: string }
        }) => {
            if (response.status !== 200) {
                console.log("Error fetching menu");
                return;
            }
            return response.data;
        })
    };

    const checkAvailableTimes = (reservationTime: string) => {
        return axios.get(CV_API.BASE_URL + "Reservation/IsAvailableAtTime/" + reservationTime).then((response: {
            status: number,
            data: { isAvailable: boolean, reason: string }
        }) => {
            if (response.status !== 200) {
                console.log("Error fetching menu");
                return;
            }
            return response.data;
        })
    }

    useEffect(() => {
        const fetchAvailableDays = async () => {
            const list: string[] = [];
            const start = month.startOf('month');
            const end = month.endOf('month');

            for (let m = start; m.isBefore(end); m = m.add(1, 'day')) {
                const response = await checkAvailableDates(m.format('YYYY-MM-DDTHH:mm:ss'));

                if (response.isAvailable) {
                    list.push(m.toDate().toDateString());
                }
            }

            setAvailableDays(list);
        };

        fetchAvailableDays();
    }, [month]);

    useEffect(() => {
        const fetchAvailableTimes = async () => {
            const list: string[] = [];
            const start = dayjs(date).startOf('day');
            const end = dayjs(date).endOf('day');

            for (let m = start; m.isBefore(end); m = m.add(30, 'minute')) {
                const response = await checkAvailableTimes(m.format('YYYY-MM-DDTHH:mm:ss'));

                if (response.isAvailable) {
                    list.push(m.toDate().toLocaleTimeString('da-DK', {hour: '2-digit', minute: '2-digit'}));
                }
            }

            setAvailableTimes(list);
        };

        fetchAvailableTimes();
    }, [date])

    return (
        <div className="container mx-auto pt-16 pb-16 text-center bg-gray-100 border border-b border-neutral-100">
            <h1 className="mx-auto max-w-5xl font-display font-bold text-5xl tracking-tight sm:text-5xl">
                Bestil bord
            </h1>

            <div className="pt-16 pb-16 text-left mx-auto max-w-5xl">
                <p className="font-display font-bold text-2xl tracking-tight uppercase">Du reserverer nu bord til</p>
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

                <form className="mt-8" onSubmit={handleSubmit}>
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
                                        return dayjs().isAfter(day) || (availableDays.indexOf(day.toDate().toDateString()) < 0);
                                    }}
                                    disablePast={true}
                                    disableHighlightToday={true}
                                    onChange={(value) => {
                                        setDate(value.toDate())
                                    }}
                                    onMonthChange={(newMonth) => {
                                        setMonth(newMonth)
                                    }}
                                />
                            </div>
                            <div>
                                <div className="flex justify-between bg-white">
                                    <p className="font-display font-bold m-5 tracking-tight uppercase">Vælg tid</p>
                                    <div className="flex justify-center my-auto me-5 opacity-75">
                                        <ArrowDropDownIcon fontSize="medium"/>
                                    </div>
                                </div>
                                <DigitalClock
                                    shouldDisableTime={(value, view) => {
                                        const timeString = value.toDate().toLocaleTimeString('da-DK', {hour: '2-digit', minute: '2-digit'});
                                        const day = dayjs(date).day();
                                        return view === 'hours' && (value.hour() < (day >= 5 || day == 0 ? 12 : 16) || value.hour() > (day >= 5 || day == 0 ? 22 : 21)) || (availableTimes.indexOf(timeString) < 0);
                                    }}
                                    onChange={(value) => {
                                        const dateValue = date;
                                        const timeValue = value['$d'];

                                        dateValue.setHours(timeValue.getHours() + 1);
                                        dateValue.setMinutes(timeValue.getMinutes());
                                        dateValue.setSeconds(timeValue.getSeconds());
                                        setTime(dateValue);
                                    }}
                                    skipDisabled={true}
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
                        <input type="text" id="phone"
                               className="bg-white font-display font-bold p-5 tracking-tight uppercase"
                               placeholder="MOBILNR"/>
                    </div>
                    <div className="flex justify-end">
                        <input
                            className="bg-vesuvius-red font-display font-bold p-5 tracking-tight uppercase cursor-pointer text-white"
                            type="submit" value="BESTIL BORD"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reservation

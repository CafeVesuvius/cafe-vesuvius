import * as React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import {CV_API} from "../../config";
import {MenuItem} from "@mui/material";
import dayjs, { Dayjs,  } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import {DataGrid} from "@mui/x-data-grid";

function OverviewGrafs(){
    const [date, setDate] = React.useState<Dayjs | null>(dayjs());
    const [total, setTotal] = useState();
    const [data, setData] = useState([])

    const columns = [
        { field: "id", width: 80},
        { field: 'Navn På Menu element', width: 250 },
        { field: 'Quantity', width: 80, type: 'number' },
    ];
    const fetchData = async () => {
        let orderConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: CV_API.BASE_URL+'order/all',
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('session')?.replace(/"/g, "")+''
            }
        };
        await axios.request(orderConfig).then((response) => {
            if (response.status !== 200) {
                console.log("Error fetching menu");
                return;
            }
            const orderOnDatetemp = [];
            response.data.forEach(order =>{
                const orderDate = dayjs(order.createdDate)
                if(dayjs(date).format('DD/MM/YYYY') == dayjs(orderDate).format('DD/MM/YYYY')){
                    order.orderLines.forEach(item => {
                        orderOnDatetemp.push(item)
                    })
                }
            })
            console.log(orderOnDatetemp);
            const count = [];
            let totaltemp = 0;
            orderOnDatetemp.forEach(item =>{
                    totaltemp += item.menuItem.unitPrice*item.quantity;
                    if (count[item.menuItem.name]) {
                        count[item.menuItem.name] += 1+item.quantity;
                    } else {
                        count[item.menuItem.name] = 1;
                    }
            })
            setTotal(totaltemp);
            const rowtemp = []
            let counter = 0;
            for (var countKey in count) {
                console.log(countKey)
                rowtemp.push({id: counter, "Navn På Menu element": countKey, "Quantity": count[countKey]});
                counter++;
            }
            setData(rowtemp);
            console.log(rowtemp);
        })
    };

    useEffect(() => {
        fetchData();
    }, [date]);

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar']}>
                    <DemoItem>
                        <DateCalendar value={date} onChange={(newValue) => {
                            setDate(newValue)
                        } }/>
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>

            <Stack direction="row" spacing={10} margin={10}>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: [dayjs(date).format('DD/MM/YYYY')] }]}
                    series={[{ data: [total] } ]}
                    width={500}
                    height={300}
                />
                <Box sx={{ width: '40%'}}>
                    <Box sx={{ height: 400, mt: 1 }}>
                        <DataGrid rows={data} columns={columns} />
                    </Box>
                </Box>
            </Stack>

        </div>)

}

export default OverviewGrafs

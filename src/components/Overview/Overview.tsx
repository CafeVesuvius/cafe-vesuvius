import axios from "axios";
import {useEffect, useState} from "react";
import { BarChart } from '@mui/x-charts/BarChart';

function OverviewGrafs(){
    const [totalMoney, setTotalMoney] = useState([]);
    const [menuItems , setMenuItems] = useState([{"name": "", "total": 0}]);

    const fetchData = async () => {
        let items = [];
        let menuConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://10.130.54.23:2000/api/menu/',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJDVl9BZG1pbiIsIm5iZiI6MTcwMTE1NzE3NCwiZXhwIjoxNzAxMjQzNTc0LCJpYXQiOjE3MDExNTcxNzR9.VBJuxOFZNjIinGSok5k0HTEUGqjeS4p2_h-PS9ophcI'
            }
        };
        await axios.request(menuConfig).then((response) => {
            if (response.status !== 200) {
                console.log("Error fetching menu");
                return;
            }
            response.data.menuItems.forEach(menuItem =>{
                items.push(menuItem.name);
            });
            console.log(items);
        })
        let orderConfig = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://10.130.54.23:2000/api/order/all',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJDVl9BZG1pbiIsIm5iZiI6MTcwMTE1NzE3NCwiZXhwIjoxNzAxMjQzNTc0LCJpYXQiOjE3MDExNTcxNzR9.VBJuxOFZNjIinGSok5k0HTEUGqjeS4p2_h-PS9ophcI'
            }
        };
        await axios.request(orderConfig).then((response) => {
            if (response.status !== 200) {
                console.log("Error fetching menu");
                return;
            }
            let items2:Array<object> = [];
            const nextItems = menuItems.map(items => {

            });


            console.log(response.data);
        })



    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <BarChart
                width={screen.width}
                height={500}
                margin={{bottom: 40, top: 40, left: 40, right: 40}}
                xAxis={[
                    {
                        data: menuItems,
                        scaleType: 'band',
                        tickLabelStyle: {
                            fontSize: 8,
                        }
                    },
                ]}
                series={[
                    {
                        data: [2, 5, 1, 2, 3, 2, 4, 5, 5 ,2 ,1 ,3 ,5, 6, 1, 2],
                    },
                ]}
            />
        </div>)
}

export default OverviewGrafs

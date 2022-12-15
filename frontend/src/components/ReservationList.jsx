import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getReservationListFromApi(){
    const url = 'http://127.0.0.1/api/reservations/'
    try{
        const response = await fetch(url, {
            headers: authHeader(),
        });
        const ReponseJson = await response.json();
        console.log(ReponseJson);
        return ReponseJson;
    } catch(error){
        console.log(error);
        return [];
    }

}

export default function ReservationList(){
    const [reservationList, setReservationList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getReservationList(){
            const reservationListFromApi = await getReservationListFromApi();
            console.log("reservation List",reservationListFromApi);
            setReservationList(reservationListFromApi);
            setIsLoading(false);
        }
        getReservationList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Reservation List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Reservation List</h2>}
                dataSource={reservationList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Reservation ID: {item.reservation_id}</p>
                        <p>Date: {item.date}</p>
                        <p>Time Slot: {item.time_slot}</p>
                        <p>Room ID: {item.room}</p>
                        <p>Customer ID: {item.customer}</p>
                        <p>Number of people: {item.number_of_people}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getEventListFromApi(){
    const url = 'http://127.0.0.1/api/events/'
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

export default function EventList(){
    const [eventList, setEventList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getEventList(){
            const eventListFromApi = await getEventListFromApi();
            console.log("event List",eventListFromApi);
            setEventList(eventListFromApi);
            setIsLoading(false);
        }
        getEventList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Event List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Event List</h2>}
                dataSource={eventList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Event ID: {item.event_id}</p>
                        <p>topic: {item.topic}</p>
                        <p>name: {item.name}</p>
                        <p>Type: {item.type}</p>
                        <p>start_datetime: {item.start_datetime}</p>
                        <p>stop_datetime: {item.stop_datetime}</p>
                        <p>customers: {item.customers}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getRoomListFromApi(){
    const url = 'http://127.0.0.1/api/studyrooms/'
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

export default function RoomList(){
    const [roomList, setRoomList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getRoomList(){
            const roomListFromApi = await getRoomListFromApi();
            console.log("room List",roomListFromApi);
            setRoomList(roomListFromApi);
            setIsLoading(false);
        }
        getRoomList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Room List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Room List</h2>}
                dataSource={roomList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Room ID: {item.room_id}</p>
                        <p>Capacity: {item.capacity}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
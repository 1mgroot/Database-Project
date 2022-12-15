import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

// import React from 'react';
// async function getTokenFromAPI(values){
//     const url = 'http://127.0.0.1/api/token/'
//     try{
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//               },
//             body: JSON.stringify(values)
//         });
//         const ReponseJson = await response.json();
//         // console.log(ReponseJson);
//         console.log('RELOAD TEST');
//         console.log('Success:', values);
//         return ReponseJson;
//     } catch(error){
//         console.log(values);
//         console.log(error);
//         return [];
//     }
//     }

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

    const cards=roomList?.map(item=>{
        return (
            <div>
                <h2>{item.room_id}</h2>
                <h2>{item.capacity}</h2>
            </div>
        )
    })
    

    return isLoading ? (<h1>Loading</h1>) : (
        <div>
            {/* <p> asds</p> */}
            {cards}
            {/* {roomList[0].name} */}
        </div>
    );
}
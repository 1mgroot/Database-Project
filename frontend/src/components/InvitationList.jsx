import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getInvitationListFromApi(){
    const url = 'http://127.0.0.1/api/invitations/'
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

export default function InvitationList(){
    const [invitationList, setInvitationList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getInvitationList(){
            const invitationListFromApi = await getInvitationListFromApi();
            console.log("invitation List",invitationListFromApi);
            setInvitationList(invitationListFromApi);
            setIsLoading(false);
        }
        getInvitationList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Invitation List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Invitation List</h2>}
                dataSource={invitationList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Invitation ID: {item.invitation_id}</p>
                        <p>Author: {item.author}</p>
                        <p>Event: {item.event}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
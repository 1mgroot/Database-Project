import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getCopyListFromApi(){
    const url = 'http://127.0.0.1/api/copies/'
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

export default function CopyList(){
    const [copyList, setCopyList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getCopyList(){
            const copyListFromApi = await getCopyListFromApi();
            console.log("copy List",copyListFromApi);
            setCopyList(copyListFromApi);
            setIsLoading(false);
        }
        getCopyList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Copy List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Copy List</h2>}
                dataSource={copyList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Copy ID: {item.copy_id}</p>
                        <p>Status: {item.status}</p>
                        <p>Book: {item.book}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
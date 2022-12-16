import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getAuthorListFromApi(){
    const url = 'http://127.0.0.1/api/authors/'
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

export default function AuthorList(){
    const [authorList, setAuthorList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getAuthorList(){
            const authorListFromApi = await getAuthorListFromApi();
            setAuthorList(authorListFromApi);
            setIsLoading(false);
        }
        getAuthorList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Author List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Author List</h2>}
                dataSource={authorList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Author_id: {item.author_id}</p>
                        <p>fname: {item.fname}</p>
                        <p>lname: {item.lname}</p>
                        <p>Email_Address: {item.email_address}</p>
                        <p>mailing_country: {item.mailing_country}</p>
                        <p>mailing_city: {item.mailing_city}</p>
                        <p>mailing_street: {item.mailing_street}</p>
                        <p>mailing_room: {item.mailing_room}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getBookListFromApi(){
    const url = 'http://127.0.0.1/api/books/'
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

export default function BookList(){
    const [bookList, setBookList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getBookList(){
            const bookListFromApi = await getBookListFromApi();
            console.log("book List",bookListFromApi);
            setBookList(bookListFromApi);
            setIsLoading(false);
        }
        getBookList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Book List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Book List</h2>}
                dataSource={bookList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Book ID: {item.book_id}</p>
                        <p>topic: {item.topic}</p>
                        <p>Type: {item.type}</p>
                        <p>Authors: {item.authors}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
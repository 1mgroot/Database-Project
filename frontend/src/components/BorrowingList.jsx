import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getBorrowingListFromApi(){
    const url = 'http://127.0.0.1/api/borrowings/'
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

export default function BorrowingList(){
    const [borrowingList, setBorrowingList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getBorrowingList(){
            const borrowingListFromApi = await getBorrowingListFromApi();
            console.log("borrowing List",borrowingListFromApi);
            setBorrowingList(borrowingListFromApi);
            setIsLoading(false);
        }
        getBorrowingList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Borrowing List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Borrowing List</h2>}
                dataSource={borrowingList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Borrowing ID: {item.borrow_id}</p>
                        <p>Status: {item.status}</p>
                        <p>borrow_date: {item.borrow_date}</p>
                        <p>expect_return_date: {item.expect_return_date}</p>
                        <p>Fee: {item.fee}</p>
                        <p>customer: {item.customer}</p>
                        <p>actural_return_date: {item.actural_return_date}</p>
                        <p>copy: {item.copy}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
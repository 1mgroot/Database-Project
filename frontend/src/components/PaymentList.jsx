import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getPaymentListFromApi(){
    const url = 'http://127.0.0.1/api/payments/'
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

export default function PaymentList(){
    const [paymentList, setPaymentList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getPaymentList(){
            const paymentListFromApi = await getPaymentListFromApi();
            console.log("payment List",paymentListFromApi);
            setPaymentList(paymentListFromApi);
            setIsLoading(false);
        }
        getPaymentList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Payment List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Payment List</h2>}
                dataSource={paymentList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Payment ID: {item.payment_id}</p>
                        <p>Amount: {item.amount}</p>
                        <p>Date: {item.date}</p>
                        <p>card_holder_lname: {item.card_holder_lname}</p>
                        <p>card_holder_fname: {item.card_holder_fname}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
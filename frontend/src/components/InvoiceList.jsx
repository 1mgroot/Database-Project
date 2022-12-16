import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getInvoiceListFromApi(){
    const url = 'http://127.0.0.1/api/invoices/'
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

export default function InvoiceList(){
    const [invoiceList, setInvoiceList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getInvoiceList(){
            const invoiceListFromApi = await getInvoiceListFromApi();
            console.log("invoice List",invoiceListFromApi);
            setInvoiceList(invoiceListFromApi);
            setIsLoading(false);
        }
        getInvoiceList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Invoice List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Invoice List</h2>}
                dataSource={invoiceList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Invoice ID: {item.invoice_id}</p>
                        <p>Date: {item.date}</p>
                        <p>Amount: {item.amount}</p>
                        <p>borrowing: {item.borrowing}</p>
                        <p>Payment: {item.payment}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
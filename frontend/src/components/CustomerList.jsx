import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import authHeader from '../utils/authHeader';

async function getCustomerListFromApi(){
    const url = 'http://127.0.0.1/api/customers/'
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

export default function CustomerList(){
    const [customerList, setCustomerList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        console.log("useEffect");
        async function getCustomerList(){
            const customerListFromApi = await getCustomerListFromApi();
            console.log("customer List",customerListFromApi);
            setCustomerList(customerListFromApi);
            setIsLoading(false);
        }
        getCustomerList().catch(console.error);
        
    },[]);

    

    return isLoading ? (<h1>Loading Customer List</h1>) : (
            <List
                // grid={{gutter: 16,xs: 1,sm: 2,md: 4,lg: 4,xl: 6,xxl: 3,}}
                header={<h2>Customer List</h2>}
                dataSource={customerList}
                bordered={true}
                renderItem={(item) => (
                <List.Item>
                    <Card>
                        <p>Customer ID: {item.customer_id}</p>
                        <p>fname: {item.fname}</p>
                        <p>lname: {item.lname}</p>
                        <p>Phone Number: {item.phone_number}</p>
                        <p>Email_Address: {item.email_address}</p>
                        <p>Identification_type: {item.identification_type}</p>
                        <p>Identification_num: {item.identification_num}</p>
                    </Card>
                </List.Item>
                )}
            />
    );
}
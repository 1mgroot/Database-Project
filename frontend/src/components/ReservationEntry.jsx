import React from "react";
import { Button, Col, Form, Input, Row } from 'antd';
import { sendPostRequest } from "../utils/fetchFromApi";

async function postNewReservation(values){

    const url = 'http://127.0.0.1/api/reservations/';
    try{
        const ReponseJson = await sendPostRequest(url,values);
        if (ReponseJson.reservation_id) {
            console.log('Success:', ReponseJson);
        }
        else{
            console.log('Reservation Failed', values);
        }
    } catch(error){
        console.log(values);
        console.log(error);
        return [];
    }
}


export default function ReservationEntry() {

    const onFinish = (values) => {
        postNewReservation(values);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Row justify="center" align="middle" >
            <Col span={24}><h1>Make Reservation</h1> </Col>
            <Col style={{marginTop: "20px"}}>
                <Form
                // name="basic"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 10 }}
                layout="horizontal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Reservation ID "
                    name="reservation_id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="date"
                    name="date"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Time Slot"
                    name="time_slot"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Number of People "
                    name="number_of_people"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Room ID"
                    name="room"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Customer ID"
                    name="customer"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Reserve
                    </Button>
                </Form.Item>
            </Form>
            </Col>
        </Row>
    );
};

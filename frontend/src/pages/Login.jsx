import { useState } from 'react'
// import { useSpring, animated } from 'react-spring'
import { Button, Col, Form, Input, Row } from 'antd';
// import reactLogo from '../../assets/react.svg'
import './Login.css'
//import test from './test.html'

export default function Login() {
    const [count, setCount] = useState(0)
    // const props1 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, to: { y: 0 }, from: { y: -500 }, delay: 200 })
    // const props2 = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, to: { y: 0 }, from: { y: 500 }, delay: 200 })


    const onFinish = (values) => {

        async function setUser(values){
        const url = 'http://127.0.0.1/api/token/'
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(values)
            });
            // const ReponseJson = await response.json();
            console.log(response.data);
            if (response.data.access ) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log('Success:', values);
            return response.data;
        } catch(error){
            console.log(values);
            console.log(error);
            return [];
        }
        }

        setUser(values);
        // const tokens = await getTokenFromAPI(values);
        // if(tokens && tokens.access && tokens.refresh){

        // }
        // localStorage.setItem("accessToken", tokens.access) ;
        // localStorage.setItem("refreshToken", tokens.refresh) ;
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Row>
            <Col>
                <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </Col>

            <Col span={24}>
                    <Button></Button>
            </Col>
        </Row>
        
    )
}
import { Button, Col, Form, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
// import './Login.css'

export default function Login() {

    const navigate = useNavigate();

    const onFinish = (values) => {

        async function setTokens(values){
        const url = 'http://127.0.0.1/api/token/'
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(values)
            });
            const ReponseJson = await response.json();
            // console.log(ReponseJson);
            if (ReponseJson.access && ReponseJson.refresh) {
                await localStorage.setItem("accessToken", ReponseJson.access);
                await localStorage.setItem("refreshToken", ReponseJson.refresh);
                console.log('Success:', values);
                navigate("/reservation");
            }
            else{
                console.log('Cannot LogIn with this email/password', values);
            }

        } catch(error){
            console.log(values);
            console.log(error);
            return [];
        }
        }

        setTokens(values);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Row justify="center" align="middle">
            <Col span={24}><h1>LOG IN TO LIBRARY MANAGEMENT SYSTEM</h1> </Col>
            <Col style={{marginTop: "100px"}}>
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
                            message: 'Please input your email!',
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
                        Login
                    </Button>
                </Form.Item>
            </Form>
            </Col>
        </Row>
        
    )
}
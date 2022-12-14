import { Button, Col, Form, Input, Row } from 'antd';
// import './Login.css'

export default function Login() {

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
            const ReponseJson = await response.json();
            // console.log(ReponseJson);
            if (ReponseJson.access ) {
                localStorage.setItem("accessToken", ReponseJson.access);
                localStorage.setItem("refreshToken", ReponseJson.refresh);
            }
            console.log('Success:', values);
            return ReponseJson;
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
        </Row>
        
    )
}
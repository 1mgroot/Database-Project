import { Row, Col, Divider } from "antd";
import RoomList from "../components/RoomList";
import ReservationEntry from "../components/ReservationEntry";
import ReservationList from "../components/ReservationList";



export default function Reservation() {
    return (
        <div>
            <Row justify="center" style={{padding:"40px"}} gutter={4}>
                <Col span={24}>
                    <h1>Reservation</h1>
                </Col>
            </Row>
            <Row justify="center" style={{padding:"40px"}} gutter={4}>
                <Col>
                    <RoomList/>
                </Col>
                <Col>
                    <ReservationEntry/>
                </Col>
            </Row>
            <Divider/>
            <Row justify="center">
                <Col>
                    <ReservationList/>
                </Col>
            </Row>
        </div>
    );
}
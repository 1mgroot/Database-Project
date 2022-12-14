import { Row, Col } from "antd";
import RoomList from "../components/RoomList";


export default function Reservation() {
    return (
        // <div>
        //     <h2>Home</h2>
        // </div>
        <>
            <Row>
                <Col>
                    <RoomList/>
                    <h1>Reservation</h1>
                </Col>

            </Row>
        </>
    );
}
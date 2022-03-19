import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import "./home.css";

const Home = (props) => {

    const menu = props.tasks.map((task) => {
        return (
            // <div key={task.id} >
            //     {task.title}
            // </div>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={task.image}
                        top
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {task.title}
                        </CardTitle>
                        <CardText>
                            {task.desc}
                        </CardText>
                        <Button
                            color="primary"
                            href={task.link}
                            target="_blank">
                            View &nbsp; <i class="fa-solid fa-earth-americas"></i>
                        </Button>
                    </CardBody>
                </Card>

        )
    })

    return (
        <>
            <div className="container">
                <h4><i class="fa-solid fa-bars-progress"></i> &nbsp; Completed Tasks</h4>
                <div className="menus">
                    {menu}
                </div>
            </div>
        </>

    );
}
export default Home
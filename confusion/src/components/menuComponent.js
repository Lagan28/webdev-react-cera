import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

/*componentDidMount(){
    console.log('menu Component didMount invoked')
}*/

//this is for class component
/*constructor(props){
    super(props);
    //console.log('menu component contructor invoked')
}*/

    //console.log('menu component render invoked')

function RenderMenuItems({ dish, onClick }){
    return(
        <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle tag="h1">{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key = {dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItems dish={dish} onClick={props.onClick} />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;

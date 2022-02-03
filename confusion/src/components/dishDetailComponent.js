import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

 /*componentDidMount(){
        console.log('DishDetail Component didMount invoked')
    }

    componentDidUpdate(){
        console.log('DishDetail Component didUpdate invoked')
    }*/


    /*constructor(props){
        super(props);
        this.state = {
            selectedDishDetail: this.props.dishDetail
        }
    }*/


    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle tag="h1">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            )
        }else{
            return(
                <div></div>
            );
        }
    }

    function RenderComm({comments}) {

        if (comments == null) {
            return (
                <div></div>
            );
        }
        const comms = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {comms}
                </ul>
            </div>
        )
    }

    const DishDetail = (props) => {

        //console.log('DishDetail Component render invoked')

        const dish = props.dish

        if (dish == null) {
            return (
                <div></div>
            );
        }

        /*const dishItem = this.renderDish(dish);
        const dishComms= this.renderComm(dish.comments);*/

        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComm comments={props.comments}/>
                </div>
            </div>
        );
    }


export default DishDetail;
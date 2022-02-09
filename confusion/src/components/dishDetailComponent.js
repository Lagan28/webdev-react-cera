import React, {Component} from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText,
    Button, Modal, ModalBody, ModalHeader, Label, Row, Col
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

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

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isCommentModalOpen: false
        }

        this.handleChange = this.handleSubmit(this);
        this.toggleCommentModal = this.toggleCommentModal.bind(this);
    }

    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        //alert('Current State is: ' + JSON.stringify(values));
    }

    toggleCommentModal(){
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        })
    }

    render(){
        return(
            <>
                <Button onClick={this.toggleCommentModal}>
                    <span className="fa fa-comment fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                                    placeholder="Select Rating"
                                                    className="form-control"
                                                    validators={{
                                                        required
                                                    }}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: "Required"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yname" md={2}>Your name</Label>
                                <Col md={10}>
                                    <Control.text model=".yname" id="yname" name="yname"
                                                  placeholder="Enter your name"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                                  }}
                                    >

                                    </Control.text>
                                    <Errors
                                        className="text-danger"
                                        model=".yname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be less than or equal to 15 characters'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                                      rows="6"
                                                      placeholder="Enter comment"
                                                      className="form-control"
                                                      validators={{
                                                          required
                                                      }}
                                    >
                                    </Control.textarea>
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

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

function RenderComments({dish,comments}){
    if (comments == null) {
        return (<div></div>)
    }
    const cmnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
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
                {cmnts}
            </ul>
            <CommentForm dish={dish} comments={comments} />
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    <RenderDish dish={ props.dish }/>
                    <RenderComments comments={ props.comments }/>
                </div>
            </div>
        );
    }


export default DishDetail;
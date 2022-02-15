import React, { Component } from 'react';
import Home from './homeComponent';
import Menu from './menuComponent';
import DishDetail from './dishDetailComponent';
import Contact from './contactComponent';
import Header from './headerComponent';
import Footer from './footerComponent'
import About from './aboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/actionCreators';

const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    //the above funcition, dispatches the addCOmment with the given parameters to be able to use it in the mainComponent
    fetchDishes: () => {dispatch(fetchDishes())} //dispatching the frtchDishes() thunk using the fetchDishes() function
});

class Main extends Component {

    constructor(props){
        super(props);
    }

    //componentDidMount() lifecycle method is invoked immediately after a component is mounted (inserted into the tree).
    // Initialization that requires DOM nodes should go here. So, the dishes will be fetched as soon as the component
    // is mounted.
    componentDidMount() {
        this.props.fetchDishes();
    }

    render(){

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        //part of match location and history but the others aren't considered here. we get array of results
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                            isLoading={this.props.dishes.isLoading}
                            errMess={this.props.dishes.errMess}
                            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                            addComment={this.props.addComment}
                />
            );
        };

        const AboutUs = () => {
            return(
                <About
                    leaders={this.props.leaders}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

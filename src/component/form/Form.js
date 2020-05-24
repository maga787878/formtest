import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import { ListGroup, ListGroupItem } from 'reactstrap'

class Form extends Component {
    componentDidMount(){
        this.props.actions.getCategories()
    }
    render() {
        return (
            <div>
                <h3>Hello {this.props.categories.length} </h3>
                <ListGroup>
                    {this.props.categories.map(category=>(
                      <ListGroupItem>
                         {category.name}
                      </ListGroupItem>
                    ))
                    }
                   
                </ListGroup>
        <h5>Change category - {this.props.currentCategory.categoryName}</h5>
            </div>
        )
    }
}


 
function mapStoreToProps(state){
    return{
        currentCategory:state.changeCategoryReducer,
        categories:state.categoryListReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            getCategories:bindActionCreators(categoryActions.getCategories,dispatch)
        }
    }
}

export default connect(mapStoreToProps,mapDispatchToProps)(Form)

import React,{Component} from 'react';
//pull in the Component property from React so you don't have to keep doing React.Component
//const Component = React.Component;
//you have to import React because when the jsx is compiled is will reference React

class SearchBar extends /*React.*/Component{
    constructor(props){
        super(props);
        this.state = {term:'type in search term'};
        window.Me = this;
        
    }
    render() {
        return <input 
        value={this.state.term} 
        onChange={event=>this.onInputChange(event.target.value)} />;
    }
    /*
   you cannot directly assign the function to the onchange value onChange={this.onInputChange}
    because the function isn't compiled within the proper scope
    "this" will not be the react class 
    so you have to use inline arrow function always
       */
    onInputChange(term){
        //you would have to have some reference to the instance somewhere which is silly
        //window.Me.setState({term:event.target.value});
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
 
}
export default SearchBar;
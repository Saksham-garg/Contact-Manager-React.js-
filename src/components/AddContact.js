import React from "react";


export default class AddContact extends React.Component{
   state={
            name:"",
            email:""
        }

    
    add = (e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fileds are mandatory");
            return;
        }

        
        this.props.getdata(this.state);
        this.setState({name:"",email:""});
      
    }
   
    render(){
        return(
            <div className="ui main" >
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input placeholder="Name" type='text' name='name' value={this.state.name}
                         onChange={(e)=>{this.setState({name:e.target.value})}}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input placeholder="Email" type='text' name='email'value={this.state.email}
                         onChange={(e)=>{this.setState({email:e.target.value})}}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

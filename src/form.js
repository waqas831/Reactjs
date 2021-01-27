import React,{Component,Fragment} from "react";

class Secure extends Component{
    render(props){
        return(
            <Fragment>
                <h1>hello welcome {this.props.name}</h1>
                <p>{this.props.detail}If you don’t specify any model managers on a proxy model, it inherits the managers from its model parents. If you
                define a manager on the proxy model, it will become the default, although any managers defined on the parent classes
                will still be available.</p>
                <ul>
                    <li>{this.props.fruit1}</li>
                    <li>{this.props.fruit2}</li>
                    <li>{this.props.fruit3}</li>
                </ul>
            </Fragment>
        );
    }
}


export default Secure;

import React,{Component,Fragment} from "react";


class Fun extends Component{
    render(){
        return(
            <Fragment>
                <p>A proxy model must inherit from exactly one non-abstract model class. You can’t inherit from multiple non-abstract
                models as the proxy model doesn’t provide any connection between the rows in the different database tables. A proxy
                model can inherit from any number of abstract model classes, providing they do not define any model fields. A proxy
                model may also inherit from any number of proxy models that share a common non-abstract parent class.</p>
                <center>
                    <ul>
                        <li>django</li>
                        <li>daabase</li>
                        <li>oracle</li>
                        <li>mysql</li>
                        <li>androoid development</li>
                    </ul>
                </center>
                <p>
                If you don’t specify any model managers on a proxy model, it inherits the managers from its model parents. If you
                define a manager on the proxy model, it will become the default, although any managers defined on the parent classes
                will still be available.
                </p>
            </Fragment>
        );
    }
}

export default Fun;
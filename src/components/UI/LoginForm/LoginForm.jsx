// @flow
import React, {Component} from 'react';
import './LoginForm.css';

type Props = {}

type State = {
    email: string,
    password: string,
    emailError: string,
    passwordError: string
}

class LoginForm extends Component<Props,State> {
    state = {
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
    }
    emailRegexp: Object
    passwordRegexp: Object
    constructor(props: Props,context:any){
        super(props,context);
        this.emailRegexp = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/;
        this.passwordRegexp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,64})/;
    }
    componentDidMount(){
        this.validateEmail(this.state.email);
        this.validatePassword(this.state.password);
    }
    render() {
        return (
            <form className="LoginForm" onSubmit={this.handleSubmit}>
                <div className="title">Log in</div>
                <fieldset>
                    <div className="group">
                        <label>E-mail</label>
                        <input  name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email"/>
                        <div className="error">{this.state.emailError}</div>
                    </div>
                    <div className="group">
                        <label>Password</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}  placeholder="Enter your password"/>
                        <div className="error">{this.state.passwordError}</div>
                    </div>
                    <input disabled={this.state.emailError || this.state.passwordError} type="submit" value="Log in"/>
                </fieldset>
            </form>
        );
    }
    handleChange = (e: Object)=>{
        const target = e.target;
        const name = target.name;
        this['validate'+name.charAt(0).toUpperCase()+name.substr(1)](target.value);
        this.setState({
            [name]: target.value
        });
    }
    validateEmail(value: string){
        if(!value) return this.setState({emailError:'Email cannot be empty'});
        if(!this.emailRegexp.test(value)) return this.setState({emailError:'Email is not correct.'});
        this.setState({emailError:''});
    }
    validatePassword(value : string){
        if(!value) return this.setState({passwordError:'Password cannot be empty'});
        if(!this.passwordRegexp.test(value)) return this.setState({passwordError:'Password is weak. It should contain at least 6 symbols. At least one uppercase letter and one special symbol.'});
        this.setState({passwordError:''});
    }
    handleSubmit = (e: Object)=>{
        console.log(this.state);
        window.location.hash = '#/';
        this.setState({email:'',password:'',emailError:'',passwordError:''});
        e.preventDefault();
    }
}

export default LoginForm;
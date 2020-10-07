import React from 'react';

class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Login</h2>
                    
                    {/* Login error message displayed here */}
                    {
                        this.props.error && (
                            <div>{this.props.error}</div>
                        )
                    }

                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div>
                            <label>Email
                                <input
                                    type="text"
                                    name="email"
                                    required
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </label>
                        </div>
    
                        <div>
                            <label>Password
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </label>
                        </div>
    
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default LoginView;
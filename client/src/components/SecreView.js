import React from 'react';
import Api from '../helpers/Api';


class SecretView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { secret: '' };
    }

    async componentDidMount() {
        let response = await Api.request('GET', '/secret');
        if (response.ok) {
            this.setState({ secret: response.data.message });
        } else {
            console.log('GET /secret error:', response.error);
        }

    }

    render() {
        if (!this.state.secret) {
            return <h2>Loading...</h2>;
        }

        return (
            <div className="SecretView">
                <h2>Secret View</h2>
                <p>{this.state.secret}</p>
            </div>
        );
    }

}

export default SecretView;
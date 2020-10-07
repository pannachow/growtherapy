import React from 'react';
import Api from '../helpers/Api';
import ErrorView from './ErrorView';


class ProfileView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      statusCode: 0,
      statusText: ''
    };
  }

  async componentDidMount() {
    let userId = this.props.match.params.userId;
    let response = await Api.request('GET', `/users/${userId}/profile`);
    if (response.ok) {
      this.setState({
        user: response.data,
        statusCode: 200,
        statusText: ''
      });
    } else {
      this.setState({
        user: null,
        statusCode: response.status,
        statusText: response.statusText
      });
    }
  }

  render() {
    if (this.state.statusCode !== 200) {
      return <ErrorView code={this.state.statusCode} text={this.state.statusText} />
    }

    if (!this.state.user) {
      return <h2>Loading...</h2>;
    }

    let u = this.state.user;
    return (
      <div className="ProfileView">
        <h2>Profile View</h2>
                ID: {u.id}<br />
                Email: {u.email}
      </div>
    );
  }

}

export default ProfileView;
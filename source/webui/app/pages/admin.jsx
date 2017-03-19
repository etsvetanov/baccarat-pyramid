import React, {PropTypes} from 'react';


class AdminPage extends React.Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleAddUserClick = this.handleAddUserClick.bind(this);
    }

    handleAddUserClick() {
        // const fetchHeaders = new Headers();
        // console.log('headers:', fetchHeaders);

        const formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);

        const fetchInit = {
            method: 'POST',
            // headers: fetchHeaders,
            body: formData,
        };

        fetch('/api/create_user', fetchInit)
            .then((response) => {
                console.log('User created', response)
            });

        this.setState({
            username: '',
            password: '',
        });
    }

    handleChange(event) {
        const stateProperty = event.target.name;
        this.setState({
            [stateProperty]: event.target.value,
        });
    }

    render() {
        return (
            <div className="main">
                <form >
                    <fieldset>
                        <legend> Create new user </legend>
                        <table className="inline-form">
                            <tbody>
                                <tr>
                                    <td>
                                        <label> Username </label>
                                    </td>
                                    <td>
                                        <input className="fancy-input"
                                               type="text"
                                               name="username"
                                               value={this.state.username}
                                               onChange={this.handleChange}
                                               autoComplete="new-password"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label> Password </label>
                                    </td>
                                    <td>
                                        <input className="fancy-input"
                                               type="password"
                                               name="password"
                                               value={this.state.password}
                                               onChange={this.handleChange}
                                               autoComplete="new-password"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>  </td>
                                    <td>
                                        <div className="button" onClick={this.handleAddUserClick}>
                                            Create
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AdminPage;
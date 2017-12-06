import React from 'react';
import apiClient from '../../helpers/apiClient';


class viewPlace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: this.props.params.placeId
        };
    }

    componentDidMount() {
        apiClient.viewPlaces()
            .then(({ data }) => {
                this.setState({
                    places: data
                });
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.place}</p>
            </div>
        )
    }
}


export default viewPlace; 
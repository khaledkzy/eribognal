import React from 'react';
import apiClient from '../../helpers/apiClient';



class viewPlace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
        };
    }

    componentDidMount() {
        apiClient.viewPlaces()
            .then(({ data }) => {
                this.setState({
                    places: data,
                });
            })
            .catch((err) => { })
    }

    render() {
        let {placeId} = this.props.match.params
            
        
        return (
            <div>
            
                {
                    
                    
                    this.state.places.map((place, index) => {
                        if(place._id === placeId)
                        return (
                            <div key={index}>
                                {place.name}
                                {place.category}
                                {place._id}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default viewPlace; 
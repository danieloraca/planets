import React from 'react';

class Item extends React.Component {
    constructor() {
        super();
        this.planetImageStyle = {
            background: '#000 url("https://solarsystem.nasa.gov/assets/footer_bg.jpg") top center no-repeat'
        };

        this.state = {};
    }

    render() {
        return (
            <div className="card text-center" style={{margin: 5}}>
                <img className="card-img-top" src={this.props.img} style={this.planetImageStyle}/>
                <div className="card-body">
                    <h3 className="card-title">{this.props.name}</h3>
                    <ul className="list-group">
                        <li className="list-group-item"><b>Moons: </b> {this.props.moons}</li>
                        <li className="list-group-item"><b>Diameter: </b> {this.props.diameter} km</li>
                        <li className="list-group-item"><b>Average distance from Sun: </b> {this.props.distanceFromSun} Mio km</li>
                    </ul>
                    <a href={this.props.wikiUrl} target="blank" className="btn btn-primary" style={{marginTop: 10}}>{this.props.name} in Wikipedia</a>
                </div>
            </div>
        );
    }
}

export default Item;

import React, { Component } from 'react';
import Items from "./Items";

class Planets extends Component
{
    constructor() {
        super();

        this.state = {
            planets: []
        };
    }

    componentDidMount() {
        fetch('/planet/getPlanets')
            .then(response => response.json())
            .then(planets => {
                this.setState({
                    planets: planets.planets
                });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.planets.map(
                        ({ id, img, name, moons, diameter, distanceFromSun, wikiUrl }) => (
                            <Items
                                key={id}
                                img={img}
                                name={name}
                                moons={moons}
                                diameter={diameter}
                                distanceFromSun={distanceFromSun}
                                wikiUrl={wikiUrl}
                            >
                            </Items>

                        )
                    )}
                </div>
            </div>
        );
    }
}

export default Planets;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export const Vehicle = () => {
    const { uid } = useParams();
    const [vehicle, setVehicle] = useState(null);

    const getVehicle = () => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Detalle vehicle:", data.result.properties);
                setVehicle(data.result.properties);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getVehicle();
    }, [uid]);

    if (!vehicle) {
        return (
            <div className="container mt-5">
                <h2>Loading vehicle</h2>
            </div>
        );
    }
    return (
        <div className="container mt-4">
            <div className="row align-item-center">
                <div className="col-md-6 text-center">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                        className="img-fluid"
                        alt={vehicle.name}
                        onError={(event) => {
                            event.target.src = "https://placehold.co/800x600?text=star+wars";
                        }}
                    />
                </div>
                <div className="col-md-6 text-center">
                    <h1>{vehicle.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor blandit mauris, sed condimentum quam eleifend rutrum. Nullam ipsum mauris, hendrerit sit amet tellus in, pulvinar mattis sem. Aliquam interdum nisl at iaculis pretium. Quisque ut imperdiet tortor. Vivamus imperdiet blandit sem semper sodales. Nulla elementum fermentum ligula, at mattis enim porta quis. Etiam vehicula, sem vel pellentesque viverra, elit massa dapibus metus, bibendum consequat augue enim eget mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec efficitur sem eros, eget porttitor erat maximus non. Pellentesque tristique posuere libero non semper. Mauris maximus dui eu euismod sagittis. Proin varius vel arcu vitae cursus. Phasellus vitae ex et ligula aliquet consequat non ut lorem. Nullam id laoreet urna.</p>
                </div>
            </div>
            <br className="border border-danger opacity-100 mt-5"></br>
            <div className="row text-danger text-center fw-bold">
                <div className="col">
                    <p>Name</p>
                    <span>{vehicle.name}</span>
                </div>
                <div className="col">
                    <p>Model</p>
                    <span>{vehicle.model}</span>
                </div>
                <div className="col">
                    <p>Vehicle Class</p>
                    <span>{vehicle.vehicle_class}</span>
                </div>
                <div className="col">
                    <p>Passengers</p>
                    <span>{vehicle.passengers}</span>
                </div>
                <div className="col">
                    <p>Manufacturer</p>
                    <span>{vehicle.manufacturer}</span>
                </div>
                <div className="col">
                    <p>Length</p>
                    <span>{vehicle.length}</span>
                </div>
            </div>
        </div>
    );
};
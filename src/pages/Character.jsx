import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export const Character = () => {
    const { uid } = useParams();
    const [character, setCharacter] = useState(null);

    const getCharacter = () => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Detalle character:", data.result.properties);
                setCharacter(data.result.properties);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getCharacter();
    }, [uid]);

    if (!character) {
        return (
            <div className="container mt-5">
                <h2>Loading character</h2>
            </div>
        );
    }
    return (
        <div className="container mt-4">
            <div className="row align-item-center">
                <div className="col-md-6 text-center">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                        className="img-fluid"
                        alt={Character.name}
                        onError={(event) => {
                            event.target.src = "https://placehold.co/800x600?text=star+wars";
                        }}
                    />
                </div>
                <div className="col-md-6 text-center">
                    <h1>{character.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor blandit mauris, sed condimentum quam eleifend rutrum. Nullam ipsum mauris, hendrerit sit amet tellus in, pulvinar mattis sem. Aliquam interdum nisl at iaculis pretium. Quisque ut imperdiet tortor. Vivamus imperdiet blandit sem semper sodales. Nulla elementum fermentum ligula, at mattis enim porta quis. Etiam vehicula, sem vel pellentesque viverra, elit massa dapibus metus, bibendum consequat augue enim eget mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec efficitur sem eros, eget porttitor erat maximus non. Pellentesque tristique posuere libero non semper. Mauris maximus dui eu euismod sagittis. Proin varius vel arcu vitae cursus. Phasellus vitae ex et ligula aliquet consequat non ut lorem. Nullam id laoreet urna.</p>
                </div>
            </div>
            <br className="border border-danger opacity-100 mt-5"></br>
            <div className="row text-danger text-center fw-bold">
                <div className="col">
                    <p>Name</p>
                    <span>{character.name}</span>
                </div>
                <div className="col">
                    <p>Birth Year</p>
                    <span>{character.birth_year}</span>
                </div>
                <div className="col">
                    <p>Gender</p>
                    <span>{character.gender}</span>
                </div>
                <div className="col">
                    <p>Height</p>
                    <span>{character.height}</span>
                </div>
                <div className="col">
                    <p>Skin Color</p>
                    <span>{character.skin_color}</span>
                </div>
                <div className="col">
                    <p>Eye Color</p>
                    <span>{character.eye_color}</span>
                </div>
            </div>

        </div>

    )

}
import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardItem = ({ item, type }) => {
const { dispatch } = useGlobalReducer();

    const renderDeails = () => {
        if (type === "characters") {
            return (
                <>
                    Gender: {item.gender}
                    <br />
                    Hair color: {item.hair_color}
                    <br />
                    Eye color: {item.eye_color}
                </>
            );
        }
        if (type === "planets") {
            return (
                <>
                    Population: {item.population}
                    <br />
                    Terrain: {item.terrain}
                    <br />
                    Climate: {item.climate}
                </>
            );
        }
        if (type === "vehicles") {
            return (
                <>
                    Model: {item.model}
                    <br />
                    Manufacturer: {item.manufacturer}
                    <br />
                    Cost: {item.cost_in_credits}
                </>
            );
        }
    };



    return (
        <div
            className="card" style={{ minWidth: "18rem" }} key={item.uid}
        >
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${type}/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.name}
                onError={(event) => {
                    event.target.src = "https://placehold.co/400x200?text=star+wars";
                }}
            />

            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    {renderDeails()}
                </p>

                <div className="d-flex justify-content-between">
                    <Link
                        to={`/characters/${item.uid}`}
                        className="btn btn-outline-primary">
                        Learn more!
                    </Link>

                    <button className="btn btn-outline-warning"
                    onClick={()=>
                        dispatch({
                            type: "add_favorite",
                            payload:{
                                uid: item.uid,
                                name: item.name,
                                type: type
                            }
                        })
                    }>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}; 
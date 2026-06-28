import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardItem } from "../components/CardItem.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const getPeople = () => {
		fetch("https://www.swapi.tech/api/people/")
			.then((response) => {
				console.log("Respuesta people:", response.status);
				return response.json();
			})
			.then((data) => {
				console.log("Lista people:", data.results);

				const peoplePromises = data.results.map((person) => {
					return fetch(person.url)
						.then((response) => response.json())
						.then((detail) => {
							return {
								uid: person.uid,
								name: person.name,
								url: person.url,
								...detail.result.properties
							};
						});
				});

				Promise.all(peoplePromises).then((peopleDetails) => {
					console.log("Personajes con detalles:", peopleDetails);

					dispatch({
						type: 'set_people',
						payload: peopleDetails
					});
				});

			})
			.catch((error) => console.log(error));
	};

	const getPlanets = () => {
		fetch("https://www.swapi.tech/api/planets/")
			.then((response) => {
				console.log("Respuesta planets:", response.status);
				return response.json();
			})
			.then((data) => {
				console.log("Lista planets:", data.results);

				const planetPromises = data.results.map((planet) => {
					return fetch(planet.url)
						.then((response) => response.json())
						.then((detail) => {
							return {
								uid: planet.uid,
								name: planet.name,
								url: planet.url,
								...detail.result.properties
							};
						});
				});

				Promise.all(planetPromises).then((planetDetails) => {
					console.log("Planetas con detalles:", planetDetails);

					dispatch({
						type: 'set_planets',
						payload: planetDetails
					});
				});

			})
			.catch((error) => console.log(error));
	};

	const getVehicles = () => {
		fetch("https://www.swapi.tech/api/vehicles/")
			.then((response) => {
				console.log("Respuesta vehicles:", response.status);
				return response.json();
			})
			.then((data) => {
				console.log("Lista vehicles:", data.results);

				const vehiclePromises = data.results.map((vehicle) => {
					return fetch(vehicle.url)
						.then((response) => response.json())
						.then((detail) => {
							return {
								uid: vehicle.uid,
								name: vehicle.name,
								url: vehicle.url,
								...detail.result.properties
							};
						});
				});

				Promise.all(vehiclePromises).then((vehicleDetails) => {
					console.log("Vehiculos con detalles:", vehicleDetails);

					dispatch({
						type: 'set_vehicles',
						payload: vehicleDetails
					});
				});

			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getPeople();
		getPlanets();
		getVehicles();
	}, []);

	return (
		<div className="container mt-5">
			<h2 className="text-danger mb-4">Characters</h2>
			<div className="d-flex overflow-auto gap-4 pb-3 mb-5">
				{store.people.map((person) => (
					<CardItem
						key={person.uid}
						item={person}
						type="characters"
					/>
				))}
			</div>

			<h2 className="text-danger mb-4">Planets</h2>
			<div className="d-flex overflow-auto gap-4 pb-3 mb-5">
				{store.planets.map((planet) => (
					<CardItem
						key={planet.uid}
						item={planet}
						type="planets"
					/>
				))}
			</div>

			<h2 className="text-danger mb-4">Vehicles</h2>
			<div className="d-flex overflow-auto gap-4 pb-3 mb-5">
				{store.vehicles.map((vehicle) => (
					<CardItem
						key={vehicle.uid}
						item={vehicle}
						type="vehicles"
					/>
				))}
			</div>
		</div>
	);
};
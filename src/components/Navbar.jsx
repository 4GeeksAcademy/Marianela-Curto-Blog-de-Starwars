import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand fw-bold text-dark">STAR WARS</span>
				</Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>Favorites{""}
						<span className="badge text-bg-secondary">
							{store.favorites.length}
						</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length === 0 ? (
							<li>
								<span className="dropdown-item text-muted">
									(empty)
								</span>
							</li>
						) : (
							store.favorites.map((favorite) => (
							<li
								key={`${favorite.type} ${favorite.uid}`}
								className="dropdown-item d-flex justify-content-between align-items-center"
							>
								<span>{favorite.name}</span>
								<button className="btn btn-sm btn-outline-danger ms-3"
									onClick={() =>
										dispatch({
											type: "remove_favorite",
											payload: {
												uid: favorite.uid,
												type: favorite.type
											}
										})
									}
								>
									<i className="fa-solid fa-trash"></i>
								</button>
							</li>
						))
					)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
import { createContext, useEffect, useState } from "react";
import "./App.css";

import CartList from "./components/CartList/CartList";
import Header from "./components/Header/Header";

//UseContext
// UseContext recebe o valor iniciial
//E retorna 2 - 1 . Consumer - 2 . Provider

export const CartContext = createContext(null);

function App() {
	const [cartData, setCartData] = useState(null);

	useEffect(() => {
		fetch("https://dummyjson.com/carts/1")
			.then((res) => res.json())
			.then((json) => {
				return setCartData(json);
			});
	}, []);

	return (
		<>
			<CartContext.Provider value={cartData}>
				<Header />
				<h1>Cart App</h1>
				<div className="cart">
					<CartList />
				</div>
			</CartContext.Provider>
		</>
	);
}

export default App;

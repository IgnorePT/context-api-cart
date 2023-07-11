import { useContext } from "react";
import cartIcon from "../../../assets/cart-icon.svg";
import { CartContext } from "../../../App";

function HeaderCart() {
	//Utilizar o contexto que criamos
	const cartContext = useContext(CartContext);

	return (
		<div className="header-cart">
			<img src={cartIcon} alt="cart icon" />
			<span className="cart-quantity">{cartContext?.totalProducts}</span>
			<span className="cart-value">{cartContext?.total}€</span>{" "}
		</div>
	);
}

export default HeaderCart;

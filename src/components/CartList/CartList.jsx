import { useContext } from "react";
import { CartContext } from "../../App";

function CartList() {
	const context = useContext(CartContext);

	return (
		<ul className="cart-list">
			{context?.products &&
				context?.products.map((product) => {
					return (
						<li key={product.id}>
							<h3>{product.title}</h3>
							<span>Price: {product.price}€</span>
							<input type="number" value={product.quantity} />
							<span>Total: {product.total}€</span>
						</li>
					);
				})}
		</ul>
	);
}

export default CartList;

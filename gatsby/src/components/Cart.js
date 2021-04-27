import React, { useState, useContext, useEffect } from "react";
import ShoppingIcon from "../assets/images/shopping-bag.svg";
import "../styles/carticon.css";
import "../styles/cartdropdown.css";
import OrderContext from "./OrderContext";
import useCartInfo from "../utils/useCartInfo";
import CustomButton from "./CustomButton";
import Img from "gatsby-image";

const Cart = () => {
	const [toggle, setToggle] = useState(false);
	const [order, setOrder] = useContext(OrderContext);
	const toggleCartHidden = () => {
		{
			toggle ? setToggle(false) : setToggle(true);
		}
	};
	//Opening the cart dropdown when you add to cart
	useEffect(() => {
		if (order.length > 0) {
			setToggle(true);
		}
	}, [order]);

	// console.log(order);
	// const { products } = useCartInfo({ products });

	return (
		<>
			<div className="cart-icon" onClick={toggleCartHidden}>
				<img
					alt="Shopping cart icon"
					src={ShoppingIcon}
					className="shopping-icon"
				/>
				<span className="item-count">{order.length}</span>
			</div>

			{toggle && (
				<DropDownBar toggleCartHidden={toggleCartHidden} setOrder={setOrder} />
			)}
		</>
	);
};

const DropDownBar = ({ toggleCartHidden }) => {
	const [order] = useContext(OrderContext);

	const { clearOrder, products } = useCartInfo({ products });

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				<span
					onClick={toggleCartHidden}
					style={{ marginLeft: "185px", padding: "0.7em", cursor: "pointer" }}
				>
					{" "}
					&#x2715;{" "}
				</span>
				{order.map((singleOrder, index) => (
					<div key={`${singleOrder.id} - ${index}`}>
						<div
							style={{
								display: "flex",
								borderBottom: "3px solid grey",
								marginBottom: 10,
							}}
						>
							<div style={{ flexDirection: "column" }}>
								<h2 style={{ fontSize: 15 }}> {singleOrder.name}</h2>
								<p> $ {singleOrder.price.toFixed(2) / 100}</p>
							</div>
							<div style={{ width: "5em", marginRight: "6px" }}>
								<Img fluid={singleOrder.image} />
							</div>
						</div>
						<div style={{ marginLeft: "25px" }}>
							<CustomButton
								style={{ marginBottom: 12, marginTop: "-5px" }}
								className="custom-buttonn"
								inverted
								type="button"
								onClick={() => {
									clearOrder(index);
									toggleCartHidden();
								}}
							>
								{" "}
								Clear
							</CustomButton>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Cart;

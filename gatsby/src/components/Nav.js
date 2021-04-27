import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Cart from "./Cart";

const Nav = () => {
	const HeaderContainer = styled.div`
		height: 70px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
		border-bottom: 3px solid lightgray;
	`;
	const LogoContainer = styled(Link)`
		height: 100%;
		width: 70px;
		padding: 25px;
		a {
			text-decoration: none;
			text-decoration-color: none;
		}
	`;

	return (
		<HeaderContainer>
			<LogoContainer>
				<Link to="/slicemasters">
					{" "}
					<span style={{ fontWeight: 700 }}> BEJAMAS_ </span>{" "}
				</Link>
			</LogoContainer>
			<Cart />
		</HeaderContainer>
	);
};

export default Nav;

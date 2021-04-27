import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-items: center;
	border: 1px solid var(--grey);
	margin: 2rem 0;
	border-radius: 5px;
	text-align: center;
	& > * {
		padding: 1rem;
		flex: 1;
		border-right: 1px solid var(--grey);
		text-decoration: none;
		&[aria-current],
		&.current {
			color: var(--white);
			background: var(--black);
		}
		&[disabled] {
			pointer-events: none;
			color: var(--gray);
		}
	}
	@media (max-width: 800px) {
		font-size: 1.4rem;
	}
	@media (min-width: 1120px) {
		text-align: center;
		margin-top: 3vh;
		max-width: 20vw;
		margin-left: 25vw;
		align-content: center;
		align-items: center;
		justify-items: center;
	}
`;

// reusable pagination component
const Pagination = ({ pageSize, totalCount, currentPage, skip, base }) => {
	const totalPages = Math.ceil(totalCount / pageSize);
	const prevPage = currentPage - 1;
	const nextPage = currentPage + 1;
	const hasNextPage = nextPage <= totalPages;
	const hasPrevPage = prevPage >= 1;
	return (
		<PaginationStyles>
			{!hasPrevPage ? (
				""
			) : (
				<Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
					&#8592;
				</Link>
			)}

			{Array.from({ length: totalPages }).map((_, i) => (
				<Link
					className={currentPage === 1 && i === 0 ? "current" : ""}
					to={`${base}/${i > 0 ? i + 1 : ""}`}
					key={`page${i}`}
				>
					{i + 1}
				</Link>
			))}

			{!hasNextPage ? (
				" "
			) : (
				<Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
					&#8594;
				</Link>
			)}
		</PaginationStyles>
	);
};

export default Pagination;

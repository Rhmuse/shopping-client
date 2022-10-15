import styled from 'styled-components';

export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: space-between;
	flex-direction: column;
	width: 100%;
	border: 1px solid lightBlue;
	border-radius: 20px;
	height: 100%;

	img {
		max-height: 250px;
		object-fit: contain;
		border-radius: 20px 20px 0 0;
		padding: 20px 10px;
	}

	.information {
		font-family: Arial, Helveitca, sans-serif;
		padding: 1rem;
		height: 100%;
		text-align: center;
	}

	h3.price {
		justify-content: center;
		text-align: center;
	}

	a,
	a:hover,
	a:focus,
	a:active {
		color: inherit;
		text-decoration: none;
	}
`;

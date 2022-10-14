import styled from 'styled-components';

export const ItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	border: 1px solid lightBlue;
	border-radius: 20px;
	height: 100%;

	img {
		max-height: 250px;
		object-fit: cover;
		border-radius: 20px 20px 0 0;
	}

	.information {
		font-family: Arial, Helveitca, sans-serif;
		padding: 1rem;
		height: 100%;
	}

	.price {
		justify-content: center;
		align-content: center;
	}
`;

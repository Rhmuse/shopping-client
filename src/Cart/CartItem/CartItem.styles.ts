import styled from 'styled-components';

export const CartItemWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: Arial, Helvetica, sans-serif;
	border-bottom: 1px soild lightblue;
	padding-bottom: 20px;

	div {
		flex: 1;
	}

	.infromation,
	.buttons {
		display: flex;
		justify-content: space-between;
	}

	img {
		max-width: 80px;
		object-fit: contain;
		magin-left: 40px;
	}
`;

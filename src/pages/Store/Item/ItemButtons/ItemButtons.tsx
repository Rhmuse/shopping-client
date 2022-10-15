// Styles
import { ItemButtonWrapper } from './ItemButtons.styles';
// Types
import { ItemTypeDTO as ItemType } from '../../../../api/dto/ItemTypeDTO';
// Components
import { Button, Container, Grid } from '@mui/material';
// Utilites
import { isItemInCart } from '../../../../utilites/isItemInCart';
import { useEffect, useState } from 'react';
import localState from '../../../../state/localState';

type Props = {
	item: ItemType;
	addToCart: (clickedItem: ItemType) => void;
	removeFromCart: (id: number) => void;
};

const ItemButtons: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
	const cart = localState.cart.getCart();
	const itemInCart = cart.find(
		(cartItem: ItemType) => cartItem.id === item.id
	);

	if (itemInCart) {
		item.amount = itemInCart.amount;
	} else {
		item.amount = 0;
	}

	const [amountInCart, setAmountInCart] = useState(item.amount);

	const renderCart = () => {
		if (amountInCart >= 1) {
			return (
				<Grid
					container
					direction='row'
					justifyContent='center'
					alignItems='center'
					spacing={{ xs: 2 }}
					style={{ lineHeight: '0.5' }}>
					<Grid item>
						<Button
							onClick={() => {
								addToCart(item);
								setAmountInCart(amountInCart + 1);
							}}
							className='inCart'>
							+
						</Button>
					</Grid>
					<Grid item className='inCart'>
						<h4>{amountInCart}</h4>
					</Grid>
					<Grid item>
						<Button
							onClick={() => {
								removeFromCart(item.id);
								setAmountInCart(amountInCart - 1);
							}}
							className='inCart'>
							-
						</Button>
					</Grid>
				</Grid>
			);
		} else {
			return (
				<Button
					className='notInCart'
					onClick={() => {
						addToCart(item);
						setAmountInCart(amountInCart + 1);
					}}>
					Add to Cart
				</Button>
			);
		}
	};

	return <ItemButtonWrapper>{renderCart()}</ItemButtonWrapper>;
};

export default ItemButtons;

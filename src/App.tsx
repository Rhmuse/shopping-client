import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Cart from './Cart/Cart';
import Store from './Store/Store';
import { Navbar } from './Navbar/Navbar';
import { Drawer, LinearProgress, Grid, Badge, Container } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
// Styles
import { Wrapper, StyledButton } from './App.styles';
// Types
import { ItemTypeDTO as ItemType } from './api/dto/ItemTypeDTO';

const App = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as ItemType[]);

	const getTotalItems = (items: ItemType[]): number =>
		items.reduce((i: number, item) => i + item.amount, 0);

	const handleAddToCart = (clickedItem: ItemType) => {
		setCartItems((prev) => {
			// Item is already in the cart.
			const isItemInCart = prev.find(
				(item) => item.id === clickedItem.id
			);

			if (isItemInCart) {
				return prev.map((item) =>
					item.id === clickedItem.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			}
			// Item is not in the Cart.
			return [...prev, { ...clickedItem, amount: 1 }];
		});
	};

	const handleRemoveFromCart = (id: number) => {
		setCartItems((prev) =>
			prev.reduce((i, item) => {
				if (item.id === id) {
					if (item.amount === 1) return i;
					return [...i, { ...item, amount: item.amount - 1 }];
				} else {
					return [...i, item];
				}
			}, [] as ItemType[])
		);
	};

	return (
		<Container>
			<Navbar />
			{/* <Routes>
				<Route path='/' element={} />
				<Route path='/' element={} />
				<Route path='/' element={} />
			</Routes> */}

			<Wrapper>
				<Drawer
					anchor='right'
					open={cartIsOpen}
					onClose={() => setCartIsOpen(false)}>
					<Cart
						cartItems={cartItems}
						addToCart={handleAddToCart}
						removeFromCart={handleRemoveFromCart}
					/>
				</Drawer>
				{getTotalItems(cartItems) >= 1 ? (
					<StyledButton onClick={() => setCartIsOpen(true)}>
						<Badge
							badgeContent={getTotalItems(cartItems)}
							color='error'>
							<ShoppingCart fontSize='large' />
						</Badge>
					</StyledButton>
				) : null}
				<Store addToCart={handleAddToCart} />
			</Wrapper>
		</Container>
	);
};

export default App;

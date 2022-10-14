import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Cart from './Cart/Cart';
import Store from './pages/Store/Store';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';
import Navbar from './Navbar/Navbar';
import { Drawer, Badge, Container, Button } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
// Styles
import { Wrapper } from './App.styles';
// Types
import { ItemTypeDTO as ItemType } from './api/dto/ItemTypeDTO';
// Utilites
import { isItemInCart } from './utilites/isItemInCart';

const App = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as ItemType[]);

	useEffect(() => {
		const cart: ItemType[] = JSON.parse(
			window.localStorage.getItem('cart')!
		);
		setCartItems(cart);
	}, []);

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cartItems));
	}, [cartItems]);

	const getTotalItems = (items: ItemType[]): number =>
		items.reduce((i: number, item) => i + item.amount, 0);

	const handleAddToCart = (clickedItem: ItemType) => {
		setCartItems((prev) => {
			// Item is already in the cart.
			if (isItemInCart(clickedItem)) {
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
			<Navbar />{' '}
			<Wrapper>
				{getTotalItems(cartItems) >= 1 ? (
					<Button onClick={() => setCartIsOpen(true)}>
						<Badge
							badgeContent={getTotalItems(cartItems)}
							color='error'>
							<ShoppingCartOutlined fontSize='large' />
						</Badge>
					</Button>
				) : null}
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
			</Wrapper>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/store'
					element={
						<Store
							addToCart={handleAddToCart}
							removeFromCart={handleRemoveFromCart}
						/>
					}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/faq' element={<FAQ />} />
			</Routes>
		</Container>
	);
};

export default App;

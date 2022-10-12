import { useState, useM } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item';
import Cart from './Cart/Cart';
import { Drawer } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/icons-material';
// Styles
import { Wrapper, StyledButton } from './App.styles';
// Types
import { ItemTypeDTO as ItemType } from './api/dto/ItemTypeDTO';
// Service
import { StoreService } from './api/StoreService';

const App = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartItems, setCartItems] = useState([] as ItemType[]);

	const { data, isLoading, error } = useQuery<ItemType[]>(
		'products',
		StoreService.getItems
	);

	const getTotalItems = (items: ItemType[]) =>
		items.reduce((i: number, item) => i + item.amount, 0);

	const handleAddToCart = (clickedItem: ItemType) => null;

	const handleRemoveFromCart = () => null;

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong...</div>;

	return (
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
			<StyledButton onClick={() => setCartIsOpen(true)}>
				<Badge badgeContent={getTotalItems(cartItems)} color='error'>
					<AddShoppingCart />
				</Badge>
			</StyledButton>
			<Grid container spacing={3}>
				{data?.map((item) => (
					<Grid item key={item.id} xs={12} sm={4}>
						<Item item={item} handleAddToCart={handleAddToCart} />
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
};

export default App;

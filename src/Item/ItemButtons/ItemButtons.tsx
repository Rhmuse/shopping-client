// Styles
import { ItemButtonWrapper } from './ItemButtons.styles';
// Types
import { ItemTypeDTO as ItemType } from '../../api/dto/ItemTypeDTO';
// Components
import { Button, Container } from '@mui/material';
// Utilites
import { isItemInCart } from '../../utilites/isItemInCart';

type Props = {
	item: ItemType;
	addToCart: (clickedItem: ItemType) => void;
	removeFromCart: (id: number) => void;
};

const ItemButtons: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
	return (
		<ItemButtonWrapper>
			{isItemInCart(item) ? (
				<Container className='inCart'>
					<Button onClick={() => addToCart(item)}>+</Button>
					<Button onClick={() => removeFromCart(item.id)}>-</Button>
				</Container>
			) : (
				<Button className='notInCart' onClick={() => addToCart(item)}>
					Add to Cart
				</Button>
			)}
		</ItemButtonWrapper>
	);
};

export default ItemButtons;

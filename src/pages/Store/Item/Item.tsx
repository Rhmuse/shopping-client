// Components
import ItemButtons from './ItemButtons/ItemButtons';
import { Link as RouterLink } from 'react-router-dom';
// Types
import { ItemTypeDTO as ItemType } from '../../../api/dto/ItemTypeDTO';
// Styles
import { ItemWrapper } from './Item.styles';
import { Container, Link } from '@mui/material';

type Props = {
	item: ItemType;
	addToCart: (clickedItem: ItemType) => void;
	removeFromCart: (id: number) => void;
};

const Item: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
	<Link
		className='linkOverlay'
		component={RouterLink}
		to={`/product?itemId=${item.id}`}
		style={{ textDecoration: 'none', color: 'black' }}>
		<ItemWrapper>
			<img src={item.image} alt={item.title} />
			<Container className='information'>
				<h3 className='title'>{item.title}</h3>
				<h3 className='price'>${item.price}</h3>
			</Container>
			<ItemButtons
				item={item}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
			/>
		</ItemWrapper>
	</Link>
);

export default Item;

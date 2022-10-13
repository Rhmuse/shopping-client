import { Button } from '@mui/material';
// Types
import { ItemTypeDTO } from '../api/dto/ItemTypeDTO';
// Styles
import { ItemWrapper } from './Item.styles';

type ItemType = ItemTypeDTO;

type Props = {
	item: ItemType;
	addToCart: (clickedItem: ItemType) => void;
};

const Item: React.FC<Props> = ({ item, addToCart }) => (
	<ItemWrapper>
		<img src={item.image} alt={item.title} />
		<div>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<h3>${item.price}</h3>
		</div>
		<Button onClick={() => addToCart(item)}>Add to Cart</Button>
	</ItemWrapper>
);

export default Item;

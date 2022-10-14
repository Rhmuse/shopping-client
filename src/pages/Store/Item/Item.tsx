// Components
import ItemButtons from './ItemButtons/ItemButtons';
// Types
import { ItemTypeDTO as ItemType } from '../../../api/dto/ItemTypeDTO';
// Styles
import { ItemWrapper } from './Item.styles';

type Props = {
	item: ItemType;
	addToCart: (clickedItem: ItemType) => void;
	removeFromCart: (id: number) => void;
};

const Item: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
	<ItemWrapper>
		<img src={item.image} alt={item.title} />
		<div className='information'>
			<h3 className='title'>{item.title}</h3>
			<p className='description'>{item.description}</p>
			<h3 className='price'>${item.price}</h3>
		</div>
		<ItemButtons
			item={item}
			addToCart={addToCart}
			removeFromCart={removeFromCart}
		/>
	</ItemWrapper>
);

export default Item;

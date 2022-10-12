import CartItem from '../CartItem/CartItem';
// Styles
import { CartWrapper } from './Cart.styles';
// Types
import { ItemTypeDTO as ItemType } from '../api/dto/ItemTypeDTO';

type Props = {
	cartItems: ItemType[];
	addToCart: (clickedItem: ItemType) => void;
	removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
	return (
		<CartWrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : null}
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
		</CartWrapper>
	);
};

export default Cart;

import CartItem from './CartItem/CartItem';
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
	const calculateTotal = (items: ItemType[]): number => {
		return items.reduce(
			(i: number, item) => i + item.amount * item.price,
			0
		);
	};

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
			<h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
		</CartWrapper>
	);
};

export default Cart;

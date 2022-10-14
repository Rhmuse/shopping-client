import { ItemTypeDTO as ItemType } from '../api/dto/ItemTypeDTO';

const localState = {
	cart: {
		getCart: (): ItemType[] => {
			return JSON.parse(window.localStorage.getItem('cart')!);
		},
		setCart: (cartItems: ItemType[]): void => {
			window.localStorage.setItem('cart', JSON.stringify(cartItems));
		},
	},
};

export default localState;

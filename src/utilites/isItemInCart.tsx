import { ItemTypeDTO as ItemType } from '../api/dto/ItemTypeDTO';

export const isItemInCart = (clickedItem: ItemType): boolean => {
	const cart: ItemType[] = JSON.parse(window.localStorage.getItem('cart')!);

	if (cart.find((item: ItemType) => item.id === clickedItem.id)) {
		return true;
	} else {
		return false;
	}
};

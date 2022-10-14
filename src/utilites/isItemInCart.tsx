import { ItemTypeDTO as ItemType } from '../api/dto/ItemTypeDTO';

import localState from '../state/localState';

export const isItemInCart = (clickedItem: ItemType): boolean => {
	const cart: ItemType[] = localState.cart.getCart();

	if (cart.find((item: ItemType) => item.id === clickedItem.id)) {
		return true;
	} else {
		return false;
	}
};

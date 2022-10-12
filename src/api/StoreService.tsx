import { ItemTypeDTO } from './dto/ItemTypeDTO';

const HOST: string = 'https://fakestoreapi.com';

export const StoreService = {
	getItems: async (): Promise<ItemTypeDTO[]> => {
		return (await fetch(`${HOST}/products`)).json();
	},
};

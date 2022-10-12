import { ProductTypeDTO } from './dto/ProductTypeDTO';

const HOST: string = 'https://fakestoreapi.com';

export const StoreService = {
	getProducts: async (): Promise<ProductTypeDTO[]> => {
		return (await fetch(`${HOST}/products`)).json();
	},
};

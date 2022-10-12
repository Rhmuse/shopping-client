export type ProductTypeDTO = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
	rating: {
		count: number;
		rate: number;
	};
};

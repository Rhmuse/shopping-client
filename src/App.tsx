import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Product from './product/product';
import { Drawer } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/icons-material';
// Styles
import { Wrapper } from './App.styles';
// Types
import { ProductTypeDTO } from './api/dto/ProductTypeDTO';
// Service
import { StoreService } from './api/StoreService';

type ProductType = ProductTypeDTO;

const App = () => {
	const { data, isLoading, error } = useQuery<ProductType[]>(
		'products',
		StoreService.getProducts
	);
	console.log(data);

	const getTotalItems = () => null;

	const handleAddToCart = (clickedProduct: ProductType) => null;

	const handleRemoveFromCart = () => null;

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong...</div>;

	return (
		<Wrapper>
			<Grid container spacing={3}>
				{data?.map((product) => (
					<Grid item key={product.id} xs={12} sm={4}>
						<Product
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					</Grid>
				))}
			</Grid>
		</Wrapper>
	);
};

export default App;

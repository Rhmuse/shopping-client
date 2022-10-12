import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Drawer from '@mui/material';
import LinearProgress from '@mui/material';
import Grid from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material';
import Badge from '@mui/material/Badge';
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
	return <div className='App'>Start</div>;
};

export default App;

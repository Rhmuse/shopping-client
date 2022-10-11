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
export type PoductType = {
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
const getProducts = async (): Promise<PoductType[]> => {
	return await (await fetch('https://fakestoreapi.com/products')).json();
};

const App = () => {
	const { data, isLoading, error } = useQuery<PoductType[]>(
		'products',
		getProducts
	);
	console.log(data);
	return <div className='App'>Start</div>;
};

export default App;

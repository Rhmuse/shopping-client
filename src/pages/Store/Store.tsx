import { useQuery } from 'react-query';
// Styles
import { StoreWrapper } from './Store.styles';
// Components
import { Grid, LinearProgress } from '@mui/material';
import Item from './Item/Item';
// Service
import { StoreService } from '../../api/StoreService';
// Types
import { ItemTypeDTO as ItemType } from '../../api/dto/ItemTypeDTO';

type Props = {
	addToCart: (clickedItem: ItemType) => void;
	removeFromCart: (id: number) => void;
};

const Store: React.FC<Props> = ({ addToCart, removeFromCart }) => {
	const { data, isLoading, error } = useQuery<ItemType[]>(
		'products',
		StoreService.getItems
	);

	if (isLoading) return <LinearProgress />;
	if (error) return <div>Something went wrong...</div>;

	return (
		<StoreWrapper>
			<Grid container spacing={3}>
				{data?.map((item) => (
					<Grid item key={item.id} xs={12} sm={4}>
						<Item
							item={item}
							addToCart={addToCart}
							removeFromCart={removeFromCart}
						/>
					</Grid>
				))}
			</Grid>
		</StoreWrapper>
	);
};

export default Store;

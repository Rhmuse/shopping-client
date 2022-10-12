import { Button } from '@mui/material';
// Types
import { ProductTypeDTO } from '../api/dto/ProductTypeDTO';
// Styles
import { Wrapper } from '../App.styles';

type ProductType = ProductTypeDTO;

type Props = {
	product: ProductType;
	handleAddToCart: (clickedProduct: ProductType) => void;
};

const Product: React.FC<Props> = ({ product, handleAddToCart }) => (
	<Wrapper>
		<img src={product.image} alt={product.title} />
		<div>
			<h3>{product.title}</h3>
			<p>{product.description}</p>
			<h3>${product.price}</h3>
		</div>
	</Wrapper>
);

export default Product;

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline } from '@mui/material';

const client = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<CssBaseline>
		<BrowserRouter>
			<QueryClientProvider client={client}>
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	</CssBaseline>
);

import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';
import { Provider as PaperProvider } from 'react-native-paper';

import { ThemeProvider } from '@/theme';

import ApplicationNavigator from './navigators/Application';
import './translations';

const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
	return (
		<PaperProvider>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider storage={storage}>
				<ApplicationNavigator />
			</ThemeProvider>
		</QueryClientProvider>
		</PaperProvider>

	);
}

export default App;

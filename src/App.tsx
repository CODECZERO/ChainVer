import './App.css';
import { queryClinet } from './provider';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
    //Need to figure how will i handle all this with react queyr in it.
    return (
        <QueryClientProvider client={queryClinet}>
            <HomeIndex />
        </QueryClientProvider>
    )
}

export default App

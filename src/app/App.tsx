import { RouterProvider } from 'react-router';
import { router } from './routes';
import { MediaConfigProvider } from './contexts/MediaConfigContext';

export default function App() {
  return (
    <MediaConfigProvider>
      <RouterProvider 
        router={router}
        fallbackElement={null}
      />
    </MediaConfigProvider>
  );
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';
import { Toaster } from 'sonner';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<Toaster />
	</React.StrictMode>
);

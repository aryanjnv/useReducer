import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContextprovider } from './components/store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AuthContextprovider>
<App />
</AuthContextprovider>);
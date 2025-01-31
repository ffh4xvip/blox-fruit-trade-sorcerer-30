import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the base URL from the script tag
const scriptElement = document.querySelector('script[src*="/wp-content/plugins/"]') as HTMLScriptElement;
const baseUrl = scriptElement ? new URL(scriptElement.src).origin + new URL(scriptElement.src).pathname.split('/wp-content')[0] : '';

// Create a base element to handle relative paths
const baseElement = document.createElement('base');
baseElement.href = baseUrl + '/';
document.head.prepend(baseElement);

createRoot(document.getElementById("root")!).render(<App />);
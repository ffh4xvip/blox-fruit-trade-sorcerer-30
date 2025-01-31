import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the base URL from the script tag
const scriptElement = document.currentScript as HTMLScriptElement;
const baseUrl = scriptElement?.src.split('/wp-content')[0] || '';

// Create a base element to handle relative paths
const baseElement = document.createElement('base');
baseElement.href = baseUrl;
document.head.prepend(baseElement);

createRoot(document.getElementById("root")!).render(<App />);
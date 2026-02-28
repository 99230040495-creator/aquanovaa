import 'regenerator-runtime/runtime';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n' // Import i18n configuration
// Disable PWA Service Worker when running in a native Capacitor mobile environment
// to avoid conflicts with Capacitor's local asset scheme.
if (!window.location.protocol.includes('capacitor:')) {
  import('./pwa');
}

import { AuthProvider } from './context/AuthContext';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Use robust asset imports for Leaflet markers in Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)

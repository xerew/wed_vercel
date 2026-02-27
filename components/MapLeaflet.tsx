'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapLeafletProps {
  lat: number;
  lng: number;
  zoom: number;
  label: string;
  height?: number;
}

export default function MapLeaflet({ lat, lng, zoom, label, height = 320 }: MapLeafletProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let map: import('leaflet').Map | null = null;
    let cancelled = false;

    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled || !container) return;

      // Guard against Strict Mode double-invoke
      if ((container as HTMLDivElement & { _leaflet_id?: number })._leaflet_id) return;

      map = L.map(container, {
        center: [lat, lng],
        zoom,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      const heartIcon = L.divIcon({
        html: `
          <div style="display:flex;flex-direction:column;align-items:center;transform:translateY(-100%)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" style="filter:drop-shadow(0 2px 6px rgba(0,0,0,0.35))">
              <path fill="#b85c6e" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div style="background:#b85c6e;color:#fff;font-size:11px;font-family:sans-serif;padding:3px 8px;border-radius:10px;white-space:nowrap;margin-top:2px;box-shadow:0 2px 6px rgba(0,0,0,0.3)">${label}</div>
          </div>`,
        className: '',
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });

      L.marker([lat, lng], { icon: heartIcon }).addTo(map);
    })();

    return () => {
      cancelled = true;
      if (map) {
        map.remove();
        map = null;
      }
    };
  }, [lat, lng, zoom, label]);

  return <div ref={containerRef} style={{ width: '100%', height: `${height}px` }} />;
}

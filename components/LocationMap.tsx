import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const LocationMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current && !mapInstance.current) {
      // Initialize map centered on Rua dos Mouros 41
      const map = L.map(mapContainer.current, {
        center: [38.7125, -9.1435], // Slightly offset center to balance composition
        zoom: 15,
        scrollWheelZoom: false, // Prevent scrolling while browsing page
        zoomControl: false,
        attributionControl: false
      });

      // CartoDB Positron (Light) Tiles for minimalist look
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy;OpenStreetMap, &copy;CartoDB',
        maxZoom: 19
      }).addTo(map);

      // --- Custom Icons ---

      // Property Marker (Gold)
      const propertyIcon = L.divIcon({
        className: 'custom-pin-property',
        html: `
          <div class="relative flex flex-col items-center">
             <div class="w-4 h-4 rounded-full bg-gold border-2 border-white shadow-lg animate-pulse"></div>
             <div class="absolute -top-8 bg-charcoal text-white text-[10px] tracking-widest uppercase px-2 py-1 whitespace-nowrap">
               The Residence
             </div>
             <div class="w-0.5 h-4 bg-charcoal/20"></div>
          </div>
        `,
        iconSize: [20, 40],
        iconAnchor: [10, 40]
      });

      // Landmark Marker (Charcoal)
      const landmarkIcon = (label: string) => L.divIcon({
        className: 'custom-pin-landmark',
        html: `
          <div class="group relative flex flex-col items-center">
             <div class="w-2 h-2 rounded-full bg-charcoal/60 border border-white shadow-sm group-hover:bg-gold transition-colors"></div>
             <span class="absolute top-3 text-[9px] font-bold text-charcoal/60 uppercase tracking-wide whitespace-nowrap group-hover:text-charcoal transition-colors">
                ${label}
             </span>
          </div>
        `,
        iconSize: [10, 10],
        iconAnchor: [5, 5]
      });

      // --- Add Markers ---

      // Rua dos Mouros 41
      L.marker([38.711883, -9.144344], { icon: propertyIcon, zIndexOffset: 1000 }).addTo(map);

      // Landmarks
      const landmarks = [
        { lat: 38.7107, lng: -9.1395, name: "Chiado" },
        { lat: 38.7157, lng: -9.1478, name: "Príncipe Real" },
        { lat: 38.7150, lng: -9.1444, name: "Miradouro" },
        { lat: 38.7075, lng: -9.1425, name: "Cais do Sodré" }, // Near Time Out
        { lat: 38.7100, lng: -9.1420, name: "Luis de Camões" }
      ];

      landmarks.forEach(lm => {
        L.marker([lm.lat, lm.lng], { icon: landmarkIcon(lm.name) }).addTo(map);
      });

      // Add simple zoom control bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      mapInstance.current = map;
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-full z-0 bg-[#F5F3EE]" />;
};

export default LocationMap;
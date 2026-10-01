import React from 'react';
import Hero2Demo from './demo';

export default function Hero2Container({ onOpenBooking, onOpenDemo }) {
  return <Hero2Demo onOpenBooking={onOpenBooking} onOpenDemo={onOpenDemo} />;
}

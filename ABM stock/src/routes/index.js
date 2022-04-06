import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Home/index';
import Page404 from '../pages/Page404';

export default function RoutesMain() {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

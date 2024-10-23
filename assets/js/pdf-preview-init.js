// Place this in assets/js/pdf-preview-init.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import PDFPreview from './components/PDFPreview';

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('pdf-preview');
  if (container) {
    const root = createRoot(container);
    root.render(<PDFPreview />);
  }
});

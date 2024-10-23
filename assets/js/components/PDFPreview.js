import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import './pdf-preview.css';

const PDFPreview = () => {
  return (
    <div className="pdf-preview-container">
      <div className="pdf-preview-header">
        <div className="pdf-preview-title-section">
          <FileText className="pdf-preview-icon" />
          <h3 className="pdf-preview-title">VANTAGE Mission Overview</h3>
        </div>
        <div className="pdf-preview-actions">
          <div className="pdf-preview-buttons">
            <a 
              href="/assets/docs/VANTAGE_Overview.pdf" 
              download
              className="pdf-preview-button pdf-preview-button-primary"
            >
              <Download className="pdf-preview-button-icon" />
              Download PDF
            </a>
            <a 
              href="/assets/docs/VANTAGE_Overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-preview-button pdf-preview-button-secondary"
            >
              <ExternalLink className="pdf-preview-button-icon" />
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
      
      <div className="pdf-viewer-container">
        <object
          data="/assets/docs/VANTAGE_Overview.pdf#toolbar=0"
          type="application/pdf"
          className="pdf-viewer"
        >
          <p className="pdf-fallback">
            Unable to display PDF directly. Please use the download or open buttons above.
          </p>
        </object>
      </div>
    </div>
  );
};

export default PDFPreview;

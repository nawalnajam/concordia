import React from 'react';
import { FaFilePdf, FaDownload } from 'react-icons/fa';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'; // 👈 Import
import '../../styles/SharedPage.css';

const Downloads = () => {
  const files = [
    { title: 'Admission Form 2026', size: '1.2 MB' },
    { title: 'Fee Structure', size: '800 KB' },
    { title: 'Prospectus', size: '4.5 MB' },
    { title: 'Scholarship Guidelines', size: '600 KB' },
  ];

  return (
    <div>
      <section className="page-banner">
        <h1>Downloads</h1>
      </section>
      
      {/* Content ko wrap karein */}
      <ScrollReveal direction="up"> {/* 👈 Wrap */}
        <div className="page-container">
          <h2 style={{ color: '#0a1e40', marginBottom: '30px' }}>Important Documents</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {files.map((file, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#f8f9fa', borderLeft: '4px solid #0a1e40', borderRadius: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <FaFilePdf color="#e69119" size={24} />
                  <div>
                    <h4 style={{ margin: 0, color: '#0a1e40' }}>{file.title}</h4>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>PDF • {file.size}</span>
                  </div>
                </div>
                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#0a1e40', color: 'white', padding: '8px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  <FaDownload /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Downloads;
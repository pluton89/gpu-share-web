import React from 'react';

export default function App() {
  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          GPU Share Miner
        </h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Bienvenue sur le portail officiel. Télécharge l'application de minage pour Windows, lance-la et commence à accumuler des crédits sur ton tableau de bord.
        </p>

        {/* Le bouton qui télécharge ton .exe depuis le dossier public */}
        <a 
          href="/Setup-GPU-Share-Miner.exe" 
          download 
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            padding: '15px 30px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
            display: 'inline-block'
          }}
        >
          📥 Télécharger l'application (.exe)
        </a>

        <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '1.5rem' }}>
          Compatible Windows 10 / 11 (64-bits) • Sécurisé
        </p>
      </div>
    </div>
  );
}
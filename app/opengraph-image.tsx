import { ImageResponse } from 'next/og'

export const alt = 'SalaarPedia'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        <div style={{ color: '#C9A84C', fontSize: 96, fontWeight: 900, letterSpacing: '0.15em' }}>
          SALARPEDIA
        </div>
        <div style={{ color: '#888', fontSize: 28, letterSpacing: '0.3em', marginTop: 24 }}>
          THE COMPLETE LORE OF KHANSAAR
        </div>
        <div style={{ display: 'flex', gap: 48, marginTop: 48 }}>
          <div style={{ color: '#C9A84C', fontSize: 18 }}>🐂 MANNAR</div>
          <div style={{ color: '#A8A8A8', fontSize: 18 }}>🐺 SHOURYAANGA</div>
          <div style={{ color: '#8B0000', fontSize: 18 }}>🦅 GHANIYAAR</div>
        </div>
      </div>
    ),
    { ...size }
  )
}

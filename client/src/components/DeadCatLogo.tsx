export default function DeadCatLogo() {
  return (
    <div className="flex items-center justify-center">
      <div style={{ 
        fontFamily: 'Montserrat, sans-serif', 
        fontWeight: 800, 
        fontSize: '2.5rem',
        letterSpacing: '-0.03em',
        lineHeight: 1,
        textTransform: 'lowercase'
      }}>
        <span style={{ 
          color: '#E85E4F', 
          display: 'inline-block' 
        }}>deadcat</span>
        <span style={{ 
          color: '#5AC4A8',
          display: 'inline-block' 
        }}>BOUNCE</span>
      </div>
    </div>
  );
}

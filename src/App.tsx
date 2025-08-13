function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'green' }}>¡Hola! La página funciona</h1>
      <p>Si puedes ver este texto, React está funcionando correctamente.</p>
      <p>Fecha: {new Date().toLocaleString()}</p>
    </div>
  )
}

export default App

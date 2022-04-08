import Card from './Card';

function App() {
  const mobileOs = ['Andriod', 'Blackberry', 'iPhone', 'Windows Phone'];
  const mobileManufactures = ['Samsung', 'HTC', 'Micromax', 'Apple'];
  return (
    <div>
      <Card title='Mobile Operating System' arr={mobileOs} />
      <Card title='Mobile Manufacturers' arr={mobileManufactures} />
    </div>
  );
}

export default App;

import ReactWhatsapp from 'react-whatsapp'
import Carousselle from './Composants/Carousselle';
import background from './assets/back.jpg'
import Onglet from './Composants/Onglet';

const style={
  backgroundImage: `url(${background})`,
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

function App() {
  return (
    <div className="App" style={style}>
      <Onglet/>
    </div>
  );
}

export default App;

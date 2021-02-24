import Covid19 from './components/AppBar';
import GlobalData from './components/GlobalData';
import CountryWiseData from './components/CountryWiseData';

function App() {
  return (
    <div className="App">
      <Covid19 />
      <GlobalData />
      <CountryWiseData />
    </div>
  );
}

export default App;

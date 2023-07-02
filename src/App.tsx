import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';
import Nav from './components/common/nav/nav';
import Footer from './components/common/footer/footer';

function App() {
  const elem = useRoutes(routes);
  return <div>
    <Nav/>
    {elem}
    <Footer/>
    </div>;
}

export default App;

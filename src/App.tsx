import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';
import Nav from './components/common/nav/nav';

function App() {
  const elem = useRoutes(routes);
  return <div>
    <Nav/>
    {elem}
    </div>;
}

export default App;

import Layout from './components/Layout'
import Wrapper from './components/Wrapper'
import './App.css';

const quote = "Quality means doing it right when no one is looking."
const author = "Henry Ford"

function App() {
  return (
    <Layout>
      <Wrapper quote={quote} author={author} />
    </Layout>
  );
}

export default App;

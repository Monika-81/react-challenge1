import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import ContentCopy from './components/ContentCopy';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarSimple />
      <NavBarForm />
      <ContentCopy />
    </div>
  );
}

export default App;

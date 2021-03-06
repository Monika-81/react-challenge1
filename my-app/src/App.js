import css from './App.module.css';
// import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarSimple />
      <NavBarForm />
      <Content />
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;
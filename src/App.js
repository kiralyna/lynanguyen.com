import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Blurb from './components/Blurb';

function App() {
  return (
    <div class="row" className="App">
      <table id="main">
        <tbody id="page-body">
          <tr id="navigation-menu">
            <td id="nav-menu" colspan="3"></td>
          </tr>
          <tr id="build-body">
            <td id="main-left-col">
              <div><AboutMe /></div>
              <div><Contact /></div>
            </td>
            <td id="main-right-col">
              <div><Blurb /></div>
              <div></div>
              <div></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

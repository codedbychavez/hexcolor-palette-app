import logo from './logo.svg';
import styles from './App.module.css';
import RandomColor from './assets/RandomColor';
import Palette from './components/Palette';
import { For } from 'solid-js';

function App() {
  const hexColors = [
    'red', 'green', 'teal', 'orange'
  ]
  return (
    <div class={styles.App}>
      <h1>Welcome to Hex Color Palette</h1>
      <Palette hexColors={hexColors} />
      <RandomColor />
    </div>
  );
}

export default App;

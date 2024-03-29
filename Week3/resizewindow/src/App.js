//import logo from './logo.svg';
import './App.css';
import useWindowSize from './useWindowSize';

function App() {

    const { width, height } = useWindowSize();
    // console.log(width, height);

    return (
        <div className="App">
            <h3>Width: {width}
                <br />Height: {height}</h3>

        </div>
    );
}

export default App;

//import logo from './logo.svg';
import './App.css';
import useWindowSize from './Hooks/useWindowSize';
import AvatarDisplay from './components/AvatarDisplay';


import DisplayPerson from './components/DisplayPerson';

function App() {

    const { width, height } = useWindowSize();


    return (
        <div className="App">

            <div>Window Size: {width}px x {height}px</div>


            <AvatarDisplay />

            <p>
                Resizing your window changes the appearance of the avatar. A specific avatar is shown depending on whether your window is big, medium, or small.
            </p>
        </div>
    );
}

export default App;

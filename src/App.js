import React, { useState, useEffect } from 'react';

function App() {
    const [color, setColor] = useState('#ffffff');
    const [palettes, setPalettes] = useState([]);

    useEffect(() => {
        const savedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
        setPalettes(savedPalettes);
    }, []);

    const savePalette = () => {
        const newPalettes = [...palettes, color];
        setPalettes(newPalettes);
        localStorage.setItem('palettes', JSON.stringify(newPalettes));
    };

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <h1>Color Picker</h1>
            <input type="color" value={color} onChange={handleChange} />
            <button onClick={savePalette}>Save Palette</button>
            <h2>Saved Palettes:</h2>
            <ul>
                {palettes.map((palette, index) => (
                    <li key={index} style={{ backgroundColor: palette }}>{palette}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

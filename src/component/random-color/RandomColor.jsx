/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './RandomColor.scss';

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    const createHexColor = () => {
        setTypeOfColor('hex')
    }

    const createRGBColor = () => {
        setTypeOfColor('rgb')
    }

    const randomColor = (length) => {
        return Math.floor(Math.random() * length);
    }

    const randomHexHanlde = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor(hex.length)];
        }
        setColor(hexColor)
    }

    const randomRGBHanlde = () => {
        let r = randomColor(256)
        let g = randomColor(256)
        let b = randomColor(256)

        let rbg = `rgb(${r} , ${g} , ${b})`
        setColor(rbg)
    }

    useEffect(() => {
        if (typeOfColor === 'hex') {
            randomHexHanlde()
        } else {
            randomRGBHanlde()
        }
    }, [typeOfColor])

    return (
        <>
            <div className="container" style={{ background: `${color}` }}>
                <button onClick={createHexColor}>Create HEX Color</button>
                <button onClick={createRGBColor}>Create RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? randomHexHanlde : randomRGBHanlde}>{typeOfColor === 'hex' ? 'Generate Random HEX Color' : 'Generate Random RGB Color'}</button>
                <div className="text">
                    <h3>{typeOfColor === 'hex' ? 'hex color: ' : 'rgb color: '}</h3>
                    <h4>{color}</h4>
                </div>

            </div>
        </>
    );
}

export default RandomColor;
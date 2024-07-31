import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setOutput(eval(input)); // Be cautious with eval in production
            } catch (error) {
                setOutput('Error');
            }
            setInput('');
        } else if (value === 'C') {
            setInput('');
            setOutput('');
        } else if (value === 'DEL') {
            setInput(input.slice(0, -1)); // Remove the last character from the input
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display input={input} output={output} />
            <div className="buttons">
                <Button handleClick={handleClick} value="7" />
                <Button handleClick={handleClick} value="8" />
                <Button handleClick={handleClick} value="9" />
                <Button handleClick={handleClick} value="/" />
                <Button handleClick={handleClick} value="4" />
                <Button handleClick={handleClick} value="5" />
                <Button handleClick={handleClick} value="6" />
                <Button handleClick={handleClick} value="*" />
                <Button handleClick={handleClick} value="1" />
                <Button handleClick={handleClick} value="2" />
                <Button handleClick={handleClick} value="3" />
                <Button handleClick={handleClick} value="-" />
                <Button handleClick={handleClick} value="." />
                <Button handleClick={handleClick} value="0" />
                <Button handleClick={handleClick} value="00" />
                <Button handleClick={handleClick} value="+" />
                <Button handleClick={handleClick} value="C" />
                <Button handleClick={handleClick} value="DEL" className="del" />
                <Button handleClick={handleClick} value="=" className='equals'/>
            </div>
        </div>
    );
};

export default Calculator;

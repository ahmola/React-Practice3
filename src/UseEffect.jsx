import React, {useState, useEffect} from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listner Removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Count : ${count} ${color} Size: ${width} x ${height}`;
    }, [count, color, width, height]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

  return (
    <>
        <p style={{color: color}}>Count : {count}</p>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change</button>
    </>
  )
}

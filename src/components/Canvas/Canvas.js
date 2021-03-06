import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5';

function Canvas() {
	let [arr, setArr] = useState([])
	let [alive, setAlive] = useState(false)

	useEffect(() => {
		setArr()
	}, [arr])

	const handleClick = e => {
		e.preventDefault()
		setAlive(true)
	}

	const twoArray = (cols, rows) => {
		let arr = new Array(cols);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(rows);
		}
		return arr
	}

	let cols;
	let rows;
	let grid;
	let res = 20;

  return (
    <div className='canvas-wrapper'>
      <Sketch          
					setup={(p5, parentRef) => {
						p5.createCanvas(800, 600).parent(parentRef);
						cols = 1000 / res;
						rows = 1000 / res;
						grid = twoArray(cols, rows);
						for (let i=0; i < cols; i++) {
							for (let j=0; j < rows; j++) {
								grid[i][j] = 1
							}
						}
					}}
					draw={p5 => {
						p5.background(100);
            for (let i=0; i < cols; i++) {
							for (let j=0; j < rows; j++) {
								let x = i * res;
								let y = j * res;
								if (grid[i][j] === 1) {
									p5.fill(255)
									p5.stroke(0)
									p5.rect(x, y, res-1, res-1)
								}
							}
						}
					}}
				/>
    </div>
  )
}

export default Canvas

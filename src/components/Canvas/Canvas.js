import React from 'react'
import Sketch from 'react-p5';

function Canvas() {

  let y = 0;
  let direction = '^';

  return (
    <div className='canvas-wrapper'>
      <Sketch          
					setup={(p5, parentRef) => {
						p5.createCanvas(200, 200).parent(parentRef);
					}}
					draw={p5 => {
						p5.background(0);
						p5.fill(255, y * 1.3, 0);
						p5.ellipse(p5.width / 2, y, 50);
						if (y > p5.height) direction = '';
						if (y < 0) {
							direction = '^';
						}
						if (direction === '^') y += 8;
						else y -= 4;
					}}
				/>
    </div>
  )
}

export default Canvas

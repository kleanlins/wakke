import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";

import { LifeContainer } from "./styles";
import Week from "../week";

const squareSize = 15;
const squarePadding = squareSize * 0.2;

const screen = {
	width: window.innerWidth,
	height: window.innerHeight
};

const Life = () => {

	const [lifeMap, setLifeMap] = useState([]);

	useEffect(() => {

		let horizontalSquares = Math.floor(screen.width/(squareSize + squarePadding));
		let verticalSquares = Math.floor(screen.height/(squareSize + squarePadding));

		console.log(horizontalSquares, verticalSquares);

		let map = [];

		for(let i = 0; i < verticalSquares; i++) {
			let line = [];
			for(let j = 0; j < horizontalSquares; j++) {
				line.push(true)
			}
			map.push(line);
		}

		setLifeMap(map);

		console.log(lifeMap)

	}, []);

	return (
		<LifeContainer>
			<Grid container>
				{lifeMap.map((line, x) => {
					return line.map((status, y) => {
						return <Grid item>
							<Week size={squareSize} active={status} key={`${x}-${y}`}/>
						</Grid>
					})
				})}
			</Grid>
		</LifeContainer>
	);
};

export default Life;

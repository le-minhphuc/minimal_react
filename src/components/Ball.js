function randomRgbString() {
    const r = Math.round(Math.random() * 250);
    const g = Math.round(Math.random() * 250);
    const b = Math.round(Math.random() * 250);
    return `rgb(${r},${g},${b})`;
}

function Ball(canvasContextRef, xUpperBound, yUpperBound) {
    this.radius = 10;

    this.xLowerBound = this.radius;
    this.xUpperBound = xUpperBound - this.radius;
    this.yLowerBound = this.radius;
    this.yUpperBound = yUpperBound - this.radius;

    this.xCoord = Math.random() * 9 / 10 * (this.xUpperBound - this.xLowerBound) + this.xLowerBound;
    this.yCoord = Math.random() * 9 / 10 * (this.yUpperBound - this.yLowerBound) + this.yLowerBound;

    this.color = randomRgbString();

    this.draw = function () {
        canvasContextRef.beginPath();
        canvasContextRef.fillStyle = this.color;
        canvasContextRef.arc(this.xCoord, this.yCoord, this.radius, 0, 2 * Math.PI);
        canvasContextRef.fill();
    };

    this.xVelocity = (1 + Math.random() * 2) / 10;
    this.yVelocity = 0;
    this.xAcceleration = 0;
    this.yAcceleration = 0.81 / 1000; // account for millis unit used for interFrameDelay

    this.setNextFrameAttributes = function(elapsedMillis) {
        const xCurrVeloc = this.xVelocity;
        const yCurrVeloc = this.yVelocity;
        
        const xNextProjectedVeloc = xCurrVeloc + this.xAcceleration * elapsedMillis;
        const yNextProjectedVeloc = yCurrVeloc + this.yAcceleration * elapsedMillis;

        const xDelta = (xNextProjectedVeloc + xCurrVeloc) * elapsedMillis / 2.0;
        const yDelta = (yNextProjectedVeloc + yCurrVeloc) * elapsedMillis / 2.0;
        const xNextProjectedCoord = this.xCoord + xDelta;
        const yNextProjectedCoord = this.yCoord + yDelta;

        // update coords
        this.xCoord = xNextProjectedCoord;
        this.yCoord = yNextProjectedCoord;
        
        if (xNextProjectedCoord < this.xLowerBound || xNextProjectedCoord > this.xUpperBound) {
            // collided with vertical wall, bounce back. Simple implementation for now.
            // TODO: more complex implementation? Cost is worst performance
            this.xVelocity = - xNextProjectedVeloc;
        } else {
            this.xVelocity = xNextProjectedVeloc;
        }
        if (yNextProjectedCoord < this.yLowerBound || yNextProjectedCoord > this.yUpperBound) {
            // collided with the ground, bounce up. Simple implementation for now.
            // TODO: more complex implementation? Cost is worst performance
            this.yVelocity = - yNextProjectedVeloc;
        } else {
            this.yVelocity = yNextProjectedVeloc;
        }
    };
}

export default Ball;

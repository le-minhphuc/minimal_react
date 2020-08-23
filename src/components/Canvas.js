import React from 'react';

import Ball from './Ball';

class ReactCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.canvasHeight = 600;
        this.canvasWidth = 1200;

        // properties needed for animation
        this.ball = null; // set in componentDidMount
        this.ctx2D = null;
        this.now = 0;

        // boilerplate method binding
        this.drawFirstFrame = this.drawFirstFrame.bind(this);
        this.drawNextFrame = this.drawNextFrame.bind(this);
    }

    componentDidMount() {
        // access 2D rendering context - CanvasRenderingContext2D
        if (this.canvasRef.current.getContext) { // check if browser supports canvas
            this.ctx2D = this.canvasRef.current.getContext('2d');
            this.ball = new Ball(
                this.ctx2D,
                Math.floor(this.canvasWidth / 2), Math.floor(this.canvasHeight / 2), // try initializing a ball in the middle of the canvas
                0, this.canvasWidth,
                0, this.canvasHeight
            );
            requestAnimationFrame(this.drawFirstFrame);
        }
    }

    drawFirstFrame(now) {
        this.ball.draw();

        this.now = now;
        requestAnimationFrame(this.drawNextFrame);
    }

    drawNextFrame(now) {
        this.ball.setNextFrameAttributes(now - this.now);
        this.ctx2D.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ball.draw();

        this.now = now;
        requestAnimationFrame(this.drawNextFrame);
    }

    render() {
        // The <canvas> element creates a fixed-size drawing surface that exposes one or more
        // rendering contexts, which are used to create and manipulate the content shown.
        // The canvas is initially blank. To display something, a script first need to access
        // the rendering context and draw on it.
        return (
            <canvas id="canvas" height={this.canvasHeight} width={this.canvasWidth} ref={this.canvasRef}>
            </canvas>
        );
    }
}

export default ReactCanvas;

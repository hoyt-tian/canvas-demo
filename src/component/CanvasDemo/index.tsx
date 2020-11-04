import React, {createRef} from 'react';
import './index.less';

export default class extends React.PureComponent {
    canvasRef = createRef<HTMLCanvasElement>();

    componentDidMount() {
        const canvas = this.canvasRef.current;
        this.onCanvasReady(canvas.getContext('2d'), canvas);
    }

    onCanvasReady(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {

    }

    render() {
        return <section className="canvas-demo">
            <div className="goback-row"><a href="index.html"><button>返回</button></a></div>
            <div className="canvas-row"><canvas ref={this.canvasRef} width="150" height="150" /></div>
            </section>;
    }
}

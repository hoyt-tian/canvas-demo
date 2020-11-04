import '@/common';
import Canvas from '@/component/CanvasDemo';

export default class extends Canvas {

    onCanvasReady(ctx) {
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
    }
}

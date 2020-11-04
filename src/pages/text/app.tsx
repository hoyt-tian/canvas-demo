import '@/common';
import Canvas from '@/component/CanvasDemo';

export default class extends Canvas {

    onCanvasReady(ctx) {
        ctx.font = '24px serif';
        ctx.textBaseline = 'hanging';
        ctx.strokeText('Hello Canvas', 0, 50);
        ctx.fillText('Hello Canvas', 0, 100);
    }
}

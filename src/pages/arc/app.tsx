import '@/common';
import Canvas from '@/component/CanvasDemo';

export default class extends Canvas {

    onCanvasReady(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制，注意是弧度而非角度
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
        ctx.moveTo(95, 65);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
        ctx.fillStyle = '#1081E9';
        ctx.closePath();
        ctx.fill();
    }
}

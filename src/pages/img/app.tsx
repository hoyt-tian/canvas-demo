import '@/common';
import Canvas from '@/component/CanvasDemo';

export default class extends Canvas {

    onCanvasReady(ctx) {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 10, 10, 100 , 76);
        };
        img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    }
}

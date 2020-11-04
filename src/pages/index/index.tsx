import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(
    <App demos={[
        { text: '绘制矩形', link: 'rect.html'},
        { text: '绘制三角形', link: 'triangle.html'},
        { text: '绘制圆和弧', link: 'arc.html'},
        { text: '绘制文字', link: 'text.html'},
        { text: '绘制图片', link: 'img.html'},
    ]}/>,
    document.getElementById('root'));

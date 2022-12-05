import React, { useRef, useEffect, useCallback } from 'react'

// import './draggleLayout.less';


const drag = ({ leftDom: ref1, rightDom: ref2, contentDom }, draggleLineDom) => {
    const _ref1 = ref1;
  const _ref2 = ref2;
  console.log()
    draggleLineDom.onmousedown = (e) => {
      let _e = e;
      const dir = 'horizontal'; // 设置好方向 可通过变量控制默认水平方向 horizontal | vertical
      const firstX = _e.clientX; // 获取第一次点击的横坐标
      const width = ref2.offsetWidth; // 获取到元素的宽度
      // 移动过程中对左右元素宽度计算赋值
      document.onmousemove = (_event) => {
        _e = _event;
        // 可扩展上下拖动等
        switch (dir) {
          case 'horizontal':
              _ref1.style.width = `${contentDom.offsetWidth - width + (_e.clientX - firstX)}px`;
              _ref2.style.width = `${width - (_e.clientX - firstX)}px`;
            break;
          default:
            break;
        }
      };
      // 在左侧和右侧元素父容器上绑定松开鼠标解绑拖拽事件
      contentDom.onmouseup = () => {
        document.onmousemove = null;
      };
      return false;
    };
};
export default function DraggleLayout({ contentDom, leftDom, rightDom }) {
  console.log(contentDom, leftDom, rightDom,'contentDom, leftDom, rightDom')
    const draggleLineRef = useRef();
    const init = useCallback(drag.bind(null, { leftDom, rightDom, contentDom }),
     [leftDom, rightDom, contentDom, draggleLineRef.current]);

    useEffect(() => {
        // 初始化绑定拖拽事件
        init(draggleLineRef.current);
    }, [init]);

    return (<div className='draggleLine-wrapper2'><div className='draggleLine' ref={draggleLineRef}></div></div>)
}
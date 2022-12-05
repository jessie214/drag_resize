import React, { useRef, useEffect, useCallback,useState } from 'react'

// import './draggleLayout.less';





const DraggleLayout = (props) => {
  
  const draggleLineRef = useRef();
  const { contentDom, FirstDom, secondDom, direction, type } = props;
  const [classType, setClassType] = useState('');

  useEffect(() => {
    if (direction === 'horizontal') {
      setClassType('draggleLine-wrapper-h')
    } else {
      setClassType('draggleLine-wrapper-v')
    }
  }, [])
  const drag = ({ FirstDom: ref1, secondDom: ref2, contentDom }, draggleLineDom) => {
    const _ref1 = ref1;
    const _ref2 = ref2;
    
    draggleLineDom.onmousedown = (e) => {
      let _e = e;
      const dir = direction; // 设置好方向 可通过变量控制默认水平方向 horizontal | vertical
      let firstX = null; // 第一次点击的横坐标
      let firstY = null  // 第一次点击的纵坐标
      let width = null;  // 元素的宽度
      let height = null; // 元素的高度
      
      // 纵向bar水平操作
      if (direction === 'horizontal') {        
        firstX = _e.clientX; // 获取第一次点击的横坐标
        width = ref2.offsetWidth; // 获取到元素的宽度      
        console.log(firstX,width,'ref2')
      } else {

        // 横向bar垂直操作
        firstY = _e.clientY;
        height = ref2.offsetHeight;
        console.log(firstY, height, 'height')
        
      }
      
      // 移动过程中对左右元素宽度计算赋值
      document.onmousemove = (_event) => {
        _e = _event;
        // 可扩展上下拖动等

        switch (dir) {
          case 'horizontal':
              _ref1.style.width = `${contentDom.offsetWidth - width + (_e.clientX - firstX)}px`;
              _ref2.style.width = `${width - (_e.clientX - firstX)}px`;
            break;
          case 'vertical':
              _ref1.style.height = `${contentDom.offsetHeight - height + (_e.clientY - firstY)}px`;
              _ref2.style.height = `${height - (_e.clientY - firstY)}px`;
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

  const init = useCallback(drag.bind(null, { FirstDom, secondDom, contentDom }),
    [FirstDom, secondDom, contentDom, draggleLineRef.current]);
  
  useEffect(() => {
    // 初始化绑定拖拽事件
    init(draggleLineRef.current);
  }, [init]);
  console.log(classType,'classType')
  return (<div className={classType}><div className='draggleLine' ref={draggleLineRef}></div></div>)

}
export default DraggleLayout;
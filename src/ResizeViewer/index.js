import React, { useRef, useEffect, useState } from 'react';
import './index.css';

import DraggleLayout from './DraggleLayout';
// import DraggleLayoutV from './DraggleLayoutV';
const  ResizeViewer  = () =>{
  const contentRef = useRef();
  // const rightParentsDom = useRef();
  // const leftParentsDom = useRef();
  // const DomA = useRef();
  // const DomB = useRef();
  // const DomC = useRef();
  // const DomD = useRef();
  const [init, setInit] = useState(false);
  console.log(contentRef,'7777')
    useEffect(() => {
        setInit(true);
    }, [])

  // 传入左上和右上的dom
    const draggleLayoutPropsH = {
        contentDom: contentRef?.current,
        FirstDom: contentRef?.current?.childNodes[0],
        secondDom: contentRef?.current?.childNodes[1],      
    };
  // 传入左上和左下的dom
  const draggleLayoutPropsV = {
    contentDom: contentRef?.current?.childNodes[0],
    FirstDom: contentRef?.current?.childNodes[0]?.childNodes[0],
    secondDom: contentRef?.current?.childNodes[0]?.childNodes[1],
  };
  const draggleLayoutPropsV2 = {
    contentDom: contentRef?.current?.childNodes[1],
    FirstDom: contentRef?.current?.childNodes[1]?.childNodes[0],
    secondDom:contentRef?.current?.childNodes[1]?.childNodes[1],
  };
  

    return (
      <>
        <div className='content-wrapper' ref={contentRef} style={{ color: '#ffffff' }}>
          <div className='parentsBox'  style={{ color: '#ffffff' }}>
            <div className='left' >leftTop</div>
            {init && <DraggleLayout {...draggleLayoutPropsV} direction={'vertical'} type={1}/>}
            <div className='left'>LeftBottom</div>  
          </div>
          <div className='parentsBox'  style={{ color: '#ffffff' }}>
            <div className='right' >rightTop</div>
            {init && <DraggleLayout {...draggleLayoutPropsV2} direction={'vertical'} type={1}/>}
            <div className='right'>RightBottom</div>
          </div>

          {/* <div className='left' ref={DomA} >左侧1</div> */}
          {/* 父组件加载完再加载子组件 从而通过ref拿到父组件的dom节点 */}          
          {/* <div className='right' ref={DomB}>右侧1</div>          
          <div className='left2' ref={DomC} >左侧2</div>
          <div className='right2' ref={DomD}>右侧2</div> */}
          {/* 纵向bar-调整水平方向 */}
          {init && <DraggleLayout {...draggleLayoutPropsH} direction={'horizontal'} />}
          {/* 横向bar-调整垂直方向 */}
          {/* {init && <DraggleLayout {...draggleLayoutPropsV} direction={'vertical'} type={1}/>}
          {init && <DraggleLayout {...draggleLayoutPropsV2} direction={'vertical'} type={2}/>} */}
        </div>
      </>
    )
}

export default ResizeViewer;

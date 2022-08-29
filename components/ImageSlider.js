/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useRouter} from 'next/router';

export default function ImageSlider({data}) {
  const router = useRouter();
  /**
   * 슬라이더 translateX 값 변경시키는 함수
   * @param target 타겟 슬라이더
   * @param index 보여져야 할 슬라이더의 index
   * @param width 슬라이드 영역 width 값
   */
   const moveSlider = (target, index, width) => {
    target.dataset.index = index;
    target.dataset.translate = width * index;
    target.style.transform = `translateX(-${width * index}px)`;
    const children = target.nextElementSibling.childNodes;
    for(let i=0; i<children.length; i++){
      if(index === i) children[i].style.opacity = 1;
      else children[i].style.opacity = .4;
    }
  }
  /** 슬라이더 클릭 시 다음 슬라이드의 위치를 찾는 함수 */
  const getSliderPosition = (e) => {
    const half = window.innerWidth / 2;
    const cardWidth = e.target.clientWidth;
    const slider = e.currentTarget;
    const prevIndex = Number(slider.dataset.index);
    const lastIndex = e.currentTarget.childNodes.length-1;
    let newIndex = 0;
    // 왼쪽 방향으로 슬라이드
    if(e.clientX < half && prevIndex > 0){
      newIndex = prevIndex - 1;
      moveSlider(slider, newIndex, cardWidth);
    // 오른쪽 방향으로 슬라이드
    }else if(e.clientX >= half && prevIndex < lastIndex){
      newIndex = prevIndex + 1;
      moveSlider(slider, newIndex, cardWidth);
    }
  }
	return (
		<div css={sliderStyle} className={router.pathname === '/' ? 'hasInfo' : ''}>
			<ul onClick={getSliderPosition} data-translate={0} data-index={0}>
				{data.map((photo, i) => (
					<li
						key={`photo${i}`}
						css={{ backgroundImage: `url(${photo})`, paddingBottom: router.pathname === '/' ? '158.806%' : '100%'}}
					></li>
				))}
			</ul>
			<div css={sliderNavStyle} data-active={0}>
				{Array.from({ length: data.length }, (v, i) => (
					<button key={`sliderNav${i}`} style={{ opacity: i === 0 ? 1 : 0.4 }} onClick={(e)=>{
            const slider = e.target.parentNode.previousElementSibling;
            const width = slider.clientWidth;
            moveSlider(slider, i, width)
          }}>
						{i}
					</button>
				))}
			</div>
		</div>
	);
}

const sliderStyle = css`
overflow: hidden;
position: relative;
  ul{
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    li{
      flex-basis: 100%;
      flex-shrink: 0;
      height: 0;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  &.hasInfo{
    &::after{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 25%;
      background: linear-gradient(0deg, rgba(51,51,51,1) 40%, rgba(51,51,51,0) 100%);
      content: '';
      z-index: 1;
    }
  }
  &::before{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 7%;
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.3) 70%);
    content: '';
    z-index: 2;
  }
`
const sliderNavStyle = css`
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 30%;
  top: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 3;
  button{
    flex-basis: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #fff;
    font-size: 0;
    opacity: .4;
  }
`
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useRouter} from 'next/router';

export default function DetailHeader () {
  const router = useRouter();
  return (
    <header css={headerStyle}>
      <button type="button" onClick={()=>router.back()}>
        <i css={goBackButton}></i>
      </button>
      <button type="button" css={{position: 'relative'}}>
        <i css={settingButton}></i>
      </button>
    </header>
  )
}

const headerStyle = css`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  height: 42px;
  z-index: 2;
  pointer-events: none;
  button{
    position: absolute;
    top: 0;
    width: 42px;
    height: 42px;
    pointer-events: auto;
    &:nth-of-type(1){
      left: 4px;
    }
    &:nth-of-type(2){
      right: 4px;
    }
  }
`
const goBackButton = css`
position: relative;
display: block;
height: 100%;
&::before{
  position: absolute;
  top: 12px;
  left: 10px;
  width: 14px;
  height: 14px;
  border-left: 3px solid #fff;
  border-top: 3px solid #fff;
  content: '';
  transform: rotate(-45deg);
}
`
const settingButton = css`
position: absolute;
left: 50%;
top: 50%;
width: 6px;
height: 6px;
border-radius: 50%;
background-color: #fff;
margin: -2px 0 0 -2px;
&::before,
&::after{
  position: absolute;
  top: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  content: '';
}
&::before{
  left: -10px;
}
&::after{
  right: -10px;
}
`
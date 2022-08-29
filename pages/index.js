/** @jsxImportSource @emotion/react */
import start from '../public/star.png';
import Image from 'next/future/image';
import HeadElement from '../components/Head';
import Header from "../components/Header";
import {css} from '@emotion/react';
import { useEffect, useRef } from 'react';
import {apis} from './api/apis';
import {useState} from 'react';
import { useRouter } from 'next/router';
import ImageSlider from '../components/ImageSlider';
import SquareButton from '../components/SquareButton';

export default function Home() {
  const router = useRouter();
  const [suggestion, setSuggestion] = useState([]);
  const cardsRef = useRef();

  useEffect(()=>{
    (async () => {
      const list = await apis.getSuggestions({idx: null});
      setSuggestion(list.data.data);
    })();
  },[])

  return (
    <>
      <HeadElement title='Home'/>
      <Header />
      <div className='container' css={{position: 'relative', padding: '45px 4px 4px', boxSizing: 'border-box', zIndex: 1}}>
        <section>
          <ul ref={cardsRef}>
            {
              suggestion?.map((item,index)=>(
                <li css={cardStyle} key={`card${index}`}>
                  <div css={infoStyle}>
                    <span className='label'>오늘의 추천</span>
                    <h4>
                      {item.name}, {item.age}
                      {item.verified && <i></i>}
                      <button type="button" className='detailButton' onClick={()=>{
                        router.push({
                          pathname: `/detail/${index}`,
                          query: index,
                        });
                      }}>
                        <span>i</span>
                      </button>
                    </h4>
                    <p className='description'>{item.description}</p>
                    <div className='buttons' css={{display: 'flex', gap: '0 5px', padding: '20px 0 0', pointerEvents: 'auto'}}>
                      <SquareButton bgColor={'gray'} icon={true} clickEvent={()=>setSuggestion((prev)=>{
                        const _new = [...prev].filter((v,i)=>i !== index);
                        return _new;
                      })}><i css={closeIcon}>싫어요</i></SquareButton>
                      <SquareButton width={'full'}>좋아요</SquareButton>
                      <SquareButton icon={true}><Image src={start} width="19" height="18"/></SquareButton>
                    </div>
                  </div>
                  <ImageSlider data={item.photos}/>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </>
  )
}
const cardStyle = css`
position: relative;
overflow: hidden;
border-radius: 10px;
margin-top: 12px;

&.willRemove{
  margin-top: -158.806%;
  transition: ease-out 500ms;
}
`
const infoStyle = css`
position: absolute;
left: 0;
right: 0;
bottom: 0;
z-index: 2;
padding: 15px;
color: #fff;
pointer-events: none;
.label{
  display: inline-block;
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 4px;
  background-color: rgba(0,0,0,.4);
}
h4{
  position: relative;
  line-height: 1;
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  i{
    display: inline-block;
    position: relative;
    width: 14px;
    height: 14px;
    background-color: #54B767;
    border-radius: 50%;
    vertical-align: middle;
    margin-left: 6px;
    &::before{
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      width: 3px;
      height: 6px;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
      content: '';
      transform: rotate(-135deg);
      margin: -5px auto 0;
    }
  }
  .detailButton{
    position: absolute;
    right: 0;
    top: -2px;
    padding: 4px;
    pointer-events: auto;
    span{
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
      line-height: 20px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      color: #333;
      vertical-align: middle;
    }
  }
}
.description{
  font-size: 16px;
  display:-webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
  line-height: 1.4;
  max-height: 4.2em;
  overflow:hidden;
  text-overflow:ellipsis;
  word-break: keep-all;
}
.interest{
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin: 0 -3px;
  li{
    flex-shrink: 0;
    padding: 8px 12px;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    background-color: rgba(0,0,0,.4);
  }
}
`
const closeIcon = css`
  position: relative;
  display: block;
  height: 100%;
  &::before,
  &::after{
    position: absolute;
    width: 18px;
    height: 2px;
    left: 0;
    right: 0;
    top: 50%;
    margin: -1px auto 0;
    content: '';
    background-color: #fff;
  }
  &::before{
    transform: rotate(-45deg);
  }
  &::after{
    transform: rotate(45deg);
  }
`

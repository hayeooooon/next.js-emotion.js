/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { useEffect, useState, useRef } from 'react';
import {apis} from '../api/apis';
import HeadElement from '../../components/Head';
import Image from 'next/future/image';
import ImageSlider from '../../components/ImageSlider';
import DetailHeader from '../../components/DetailHeader';
import SquareButton from '../../components/SquareButton';
import start from '../../public/star.png';

export default function detail ({params}) {
  const [detail, setDetail] = useState([]);
  const [score, setScore] = useState(0);
  const [buttonsDisplay, setButtonsDisplay] = useState(false);
  useEffect(()=>{
    (async () => {
      const list = await apis.getSuggestions({idx: params[0]});
      setDetail(list.data.data);
    })();
  },[])
  return (
    <>
      <HeadElement title='Home'/>
      <DetailHeader></DetailHeader>
      <div className='container' css={{position: 'relative', zIndex: 1, padding: '0 0 91px'}} onScroll={(e)=>{
        const height = e.target.scrollHeight;
        const scrollTop = e.target.scrollTop;
        if(height * .8 < scrollTop + window.innerHeight){
          setButtonsDisplay(true);
        }else{
          setButtonsDisplay(false);
        }
      }}>
        <section>
          {
            detail.photos ? <ImageSlider data={detail.photos} css={{zIndex: 1}}/> : null
          }
        </section>
        <section className='inner'>
          <div css={infoArea}>
            <h4>{detail.name}, {detail.age} {detail.verified && <i css={{marginLeft: '6px', ...verifiedIcon}}></i>}</h4>
            <p>{detail.info?.work}</p>
            <p>{detail.location} <span>{detail.fromMe}</span></p>
            <p>{detail.info?.height}cm · {detail.info?.educationPlace ? detail.info?.educationPlace : detail.info?.education}</p>
            <div className='buttons' css={{display: 'flex', gap: '0 5px', padding: '20px 0'}}>
              <SquareButton width={'full'}>좋아요</SquareButton>
              <SquareButton icon={true}><Image src={start} width="19" height="18"/></SquareButton>
            </div>
            <p className='description'>{detail.description}</p>
            <dl>
              <div>
                <dt>체형</dt>
                <dd>{detail.info?.fit}</dd>
              </div>
              <div>
                <dt>성격</dt>
                <dd>
                  {
                    detail.info?.personality.map((item,idx)=>(
                      <span key={`personality${idx}`}>{item}{idx < detail.info?.personality.length-1 && ', '}</span>
                    ))
                  }
                </dd>
              </div>
              <div>
                <dt>종교</dt>
                <dd>{detail.info?.religion ? detail.info?.religion : '무교'}</dd>
              </div>
              <div>
                <dt>음주</dt>
                <dd>{detail.info?.drinking ? detail.info?.drinking : '안함'}</dd>
              </div>
              <div>
                <dt>흡연</dt>
                <dd>{detail.info?.smoking ? detail.info?.smoking : '안함'}</dd>
              </div>
              <div>
                <dt>별자리</dt>
                <dd>{detail.info?.constellation}자리</dd>
              </div>
            </dl>
            <p css={{fontSize: '11px!important', color: '#A3A3A3', margin: '20px 0'}}><i css={{marginLeft: '6px', ...verifiedIcon}}></i> 휴대전화번호 인증됨</p>
          </div>
        </section>
        <section css={{padding: '20px 12px', borderTop: '1px solid #e0e0e0'}}> 
          <div css={scoreStyle}>
            <p>{detail.name}님이 얼마나 매력적인가요?</p>
            <ul css={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0 14px', marginTop: '10px'}}>
              {
                Array.from({length: 5}, (star,idx)=> (
                  <li key={`star${idx}`}>
                    <button type="button" css={{
                      width: '33px',
                      height: '33px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      backgroundImage: score < idx+1 ? 'url(/star_before.png)' : 'url(/star_after.png)',
                      fontSize: 0,
                    }} onClick={()=>setScore(idx+1)}>{idx+1}</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
        <section css={{padding: '20px 12px', borderTop: '1px solid #e0e0e0'}}> 
          <h3 css={sectionTitle}>매력 포인트</h3>
          <ul css={labels}>
            {
              detail.strength?.map((item, idx)=>(
                <li key={`strength${idx}`}>{item}</li>
              ))
            }
          </ul>
          <h3 css={sectionTitle}>관심사</h3>
          <ul css={labels}>
            {
              detail.interest?.map((item, idx)=>(
                <li key={`interest${idx}`}>{item}</li>
              ))
            }
          </ul>
        </section>
      </div>
      <div className={buttonsDisplay ? 'isShow' : null} css={pageButtons}>
        <SquareButton width={'full'}>좋아요</SquareButton>
        <SquareButton icon={true}><Image src={start} width="19" height="18"/></SquareButton>
      </div>
    </>
  )
}

export function getServerSideProps({params:{params}}){
  return {
    props: {
      params
    }
  }
}

const infoArea = css`
h4{
  position: relative;
  line-height: 1;
  font-size: 16px;
  font-weight: 700;
  margin: 14px 0;
}
p{
  font-size: 14px;
  span{
    font-size: 12px;
    color: #818181;
  }
  &+p{
    margin-top: 6px;
  }
  &.description{
    line-height: 1.4;
  }
}
dl{
  font-size: 14px;
  margin-top: 20px;
  & > div{
    display: flex;
    align-items: center;
    dt{
      flex-basis: 24%;
      color: #818181;
    }
    & + div{
      margin-top: 10px;
    }
  }
}
`
const verifiedIcon = css`
display: inline-block;
position: relative;
width: 14px;
height: 14px;
background-color: #54B767;
border-radius: 50%;
vertical-align: middle;
margin-top: -2px;
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
`
const scoreStyle = css`
font-size: 12px;
color: #818181;
text-align: center;
`
const sectionTitle = css`
  font-size: 14px;
  color: #7F7F7F;
  font-weight: normal;
  margin-bottom: 10px;
`
const labels = css`
  display: flex;
  align-items: top;
  gap: 8px;
  flex-wrap: wrap;
  li{
    width: auto;
    flex-shrink: 0;
    line-height: 1;
    padding: 10px 12px;
    font-size: 13px;
    background-color: #F2F2F2;
    border-radius: 4px;
  }
  & + h3{
    margin-top: 20px;
  }
`
const pageButtons = css`
position: fixed;
left: 0;
right: 0;
bottom: -91px;
display: flex;
gap: 0 5px;
padding: 8px 12px 40px;
background: #fff;
z-index: 2;
border-top: 1px solid #e0e0e0;
transition: ease-out 280ms;
&.isShow{
  bottom: 0;
}
`
# next.js + emotion.js 기본기 연습
모바일 앱 'Glam'의 메인페이지 클론 코딩을 통하여 next.js와 emotion.js 기본기 연습
<br><br>

## 프로젝트 목표
Next.js와 Emotion.js 기본기 학습

<br><br>

## 사용 기술 및 라이브러리
Javascript
Axios
React
Next.js
Emotion.js

<br><br>

## 주요 학습 내용
### 1. _app.js 파일 활용을 통하여 공통 레이아웃 적용
_app.js 내에서 Layout을 담당하는 컴포넌트에 emotion.js의 Global 기능을 활용하여 reset.css 전체 페이지에 적용

```javascript
// _app.js
import Layout from '../components/Layout';
export default function Home({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  )
}

// Layout.js
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { reset } from '../styles/reset';

// emotion.js의 Global 컴포넌트 사용하여 reset.css 파일 전체 적용
export default function Layout({ children }) {
	return (
    <>
      <Global styles={css`${reset}`}/>
      <div css={{
        position: 'relative',
        width: '100%',
        maxWidth: '500px',
        minHeight: '100vh',
        margin: '0 auto',
        backgroundColor: '#fff',
      }}>
        {children}
      </div>
    </>
	);
}
```

<br><br>

### 2. API Route기능을 활용해 API 요청 테스트 
Server-Side 기능을 제공하는 장점을 활용하여, Backend 없이 자체 API 요청 및 데이터 저장 테스트

- axios 설정 파일
https://github.com/hayeooooon/next.js-emotion.js/blob/main/pages/api/apis.js
- api/suggestion/[id].js 파일
https://github.com/hayeooooon/next.js-emotion.js/blob/main/pages/api/suggestion/%5Bid%5D.js
- 메인페이지에서 api 요청하는 코드
```javascript
useEffect(()=>{
  (async () => {
    const list = await apis.getSuggestions({idx: null});
    setSuggestion(list.data.data);
  })();
},[])
```

<br><br>

### 3. Router 기능 활용
- next.js의 useRouter 기능 활용하여 페이지 라우팅 처리

```javascript

// useRouter() 사용
<button type="button" className='detailButton' onClick={()=>{
  router.push({
    pathname: `/detail/${index}`,
    query: index,
  });
}}>

//
```

<br><br>

### 그 외 스크크립트 활용 및 기본 기능 구현
#### 추천 카드 삭제 기능 구현
```javascript
<SquareButton bgColor={'gray'} icon={true} clickEvent={()=>setSuggestion((prev)=>{
  const _new = [...prev].filter((v,i)=>i !== index);
  return _new;
})}><i css={closeIcon}>싫어요</i></SquareButton>
```

<br>

#### 슬라이드 공통으로 사용 가능하도록 컴포넌트화 및 슬라이더 내비게이션 기능 구현
```javascript
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
```


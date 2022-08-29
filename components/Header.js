/** @jsxImportSource @emotion/react */
import Image from 'next/future/image';
import logo from "../public/logo.png";
import {css} from '@emotion/react';
import {useRouter} from 'next/router';
import {useState, useRef} from 'react';

export default function Header() {
	const router = useRouter();
	const [tab, setTab] = useState(0);
	const navigation = ['Glam', '주변', '피드'];
	const activeBar = useRef({
		offsetLeft: 12,
		width: 63,
	});
	return (
		<header css={{position: 'fixed', left: 0, right: 0, top: 0, background: '#fff', zIndex: 2}}>
			<nav className='inner' css={{position: 'relative'}}>
				<ul css={{
					display: 'flex',
					alignItems: 'center',
					gap: '18px'
				}}>
					{navigation.map((menu, idx) => (
						<li key={`navi${idx}`}>
							<button type="button" css={tabButton} onClick={(e)=>{
								setTab(idx);
								activeBar.current = {offsetLeft: e.target.offsetLeft, width: e.target.clientWidth};
							}} className={tab === idx ? 'isActive' : ''}>
							{idx === 0 ? (
								<Image src={logo} width="63" height="29" css={{display: 'inline-block', maxWidth: '100%', verticalAlign: 'middle', marginTop: '-2px'}}/>
							) : (
								menu
							)}
							</button>
						</li>
					))}
				</ul>
				<span css={activeBarCss} style={{left: `${activeBar.current.offsetLeft}px`, width: `${activeBar.current.width}px`}}></span>
			</nav>
		</header>
	);
}

const tabButton = css`
	display: block;
	font-size: 20px;
	font-weight: 700;
	line-height: 45px;
	opacity: .2;
	padding: 0;
	&.isActive{
		position: relative;
		opacity: 1;
	}
`
const activeBarCss = css`
	display: 'inline-block';
	position: absolute;
	left: 0;
	bottom: 0;
	height: 2px;
	background-color: #000;
	transition: ease-out 250ms;
`
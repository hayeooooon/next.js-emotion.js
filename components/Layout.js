/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { reset } from '../styles/reset';

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

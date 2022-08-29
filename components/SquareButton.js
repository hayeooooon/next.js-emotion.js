/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

export default function SquareButton({children, bgColor = 'blue', width, icon = false, clickEvent}) {
  return <button type="button" onClick={clickEvent} css={{
    width: width === 'auto' ? 'auto' : width === 'full' ? '100%' : '42px',
    height: '42px',
    backgroundColor: bgColor === 'gray' ? '#666' : '#609AF8',
    fontSize: icon ? '0px' : '13px',
    fontWeight: 500,
    color: '#fff',
    textAlign: 'center',
    borderRadius: '4px',
    flexShrink: width ? 1 : 0,
  }}>{children}</button>
}
import styled from 'styled-components';
import { memo, VFC } from 'react';

type props = {
  label: string;
  isLoading?: boolean;
  onClick: () => void;
};

export const Button: VFC<props> = memo((props) => {
  const { label, isLoading, onClick } = props;
  return (
    <SButton onClick={onClick} className={isLoading ? 'isLoading' : ''}>
      {isLoading ? 'ローディング中' : label}
    </SButton>
  );
});

const SButton = styled.button`
  width: 200px;
  padding: 12px;
  font-size: 14px;
  color: #fff;
  background: teal;
  border-radius: 8px;
  border: solid 1px transparent;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  &:hover {
    color: teal;
    background: #fff;
    border: solid 1px teal;
  }
  &.isLoading {
    color: teal;
    border: solid 1px teal;
    background-color: #fff;
    background-image: url('data:image/gif;base64,R0lGODlhyADIAMQfAHze6/f9/Q7G2wCXqOD3+rDr8o3i7kXQ4wCsw2/L1qXp8cvy913X56Xi6rnt9Kfb4Ve7xtL0+FbI1x21yiW4zCfM3yOltDDO4BihsIPg7K7k6wuwxsDv9n7f6////////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAzIDc5LjE2NDUyNywgMjAyMC8xMC8xNS0xNzo0ODozMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMjhlZDNkMC05ZGM4LTQwMDEtOWNiNi00ZTk0MDIzY2M2NTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjE2RkZERkEzQUEzMTFFQkI2NDM4NUUzNDIxNkQwM0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjE2RkZERjkzQUEzMTFFQkI2NDM4NUUzNDIxNkQwM0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplMjhlZDNkMC05ZGM4LTQwMDEtOWNiNi00ZTk0MDIzY2M2NTQiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2Jl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');
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
    text-indent: 200%;
    white-space: nowrap;
    overflow: hidden;
  }
`;
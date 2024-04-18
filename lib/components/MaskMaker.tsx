import {twMerge} from 'tailwind-merge';

import type {FC} from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
  position?: `${'bottom' | 'top' | 'middle'}-${'left' | 'right'}`;
  color?: string;
  className?: string;
};

const MaskMaker: FC<Props> = ({width, height, position, color, className}) => {
  return (
    <div 
      className={
        twMerge(
          `absolute ${color}__gradient`,
          `${position?.split('-')[0]==='bottom' && (position.split('-')[1]==='left'?'left-0 bottom-0':'right-0 bottom-0')}`,
          `${position?.split('-')[0]==='top' && (position.split('-')[1]==='left'?'left-0 top-0 -translate-y-[60%]':'right-0 top-0')}`,
          `${position?.split('-')[0]==='middle' && (position.split('-')[1]==='left'?'left-0 top-[50%] -translate-y-[50%]':'right-0 top-[50%] -translate-y-[50%]')}`,
          className,
        )
      } 
      style={{width: width, height: height}}
    >
    </div>
  );
};

export default MaskMaker;
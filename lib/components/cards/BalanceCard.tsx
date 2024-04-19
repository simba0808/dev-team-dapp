import MaskMaker from '../MaskMaker';

import type {FC} from 'react';

type Props = {
  token?: boolean;
  type: string;
  amount: number;
  color?: string;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'middle-left' | 'middle-right' | undefined;
  size?: 'small' | 'normal' | 'large' | string;
}

const BalanceCard: FC<Props> = ({token=true, type, amount, color='blue', position='top-left', size='small'}) => {
  return (
    <>
      <div className='relative flex-1 flex flex-col justify-center py-4 xs:py-8 lg:py-20 text-center border border-gray-500 rounded-2xl bg-black/20 backdrop-blur-xl shadow-2xl uppercase overflow-clip'>
        <p className='text-[12px] xs:text-[20px] lg:text-[26px] font-bold mb-0'>{type}</p>
        <p className={`${size==='large'?'text-[24px]':'text-[18px]'} xs:text-lg lg:text-[36px] font-bold ${color==='blue'?'text-shadow-blue':'text-shadow-light-green'}`}>{`${!token?'$':''}${amount}`}</p>
        <MaskMaker width={size==='large'?300:'60%'} height={size==='large'?300:'60%'} position={position} color={color} />

      </div>
    </>
  );
};

export default BalanceCard;
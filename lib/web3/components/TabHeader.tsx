import type {FC} from 'react';

type Props = {
  tabs: string[];
  active: string;
  onClick: (type: string) => void;
};

const TabHeader: FC<Props> = ({tabs, active, onClick}) => {
  return (
    <ul className='flex text-white'>
      {
        tabs.map(tab => {
          return (
            <li 
              key={tab}
              onClick={() => onClick(tab)}
              className={`p-[1px] bg-gradient-to-r ${active===tab?'from-[#071A11] to-dark-green':'from-[#071A28] via-[#0C463B] to-[#0B1D2B]' } font-semibold rounded-t-xl shadow-xl hover:cursor-pointer`}
            >
              <span className={`flex w-full px-4 md:px-20 py-3 text-sm md:text-md font-light ${active===tab?'bg-[#071A28]':'bg-[#061520]'} rounded-t-xl`}>
                {tab}
              </span>
            </li>
          );
        })
      }
    </ul>
  );
};

export default TabHeader;
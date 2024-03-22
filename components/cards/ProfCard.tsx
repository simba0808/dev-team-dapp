import { twMerge } from "tailwind-merge";
type ProfCardType = {
  partner?: Number;
  earnL?: Number;
  earnR?: Number;
};

const ProfCard: React.FC<ProfCardType> = ({
  partner,
  earnL,
  earnR
}) => {
  return (
    <div className='overflow-hidden relative w-full px-10 py-8 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-2 border border-white rounded-2xl text-5xl text-center text-cyan font-semibold'>
      {/* <div className={twMerge(
          'absolute h-full w-[50%] left-[50%] -translate-x-[50%] top-0',
          'bg-[radial-gradient(ellipse_at_center_0px,_var(--tw-gradient-stops))]',
          'from-transparent via-teal-300/20 to-transparent to-[67%]',
          )}>
      </div> */}
      <div  className="absolute left-[50%] -translate-x-[50%] -top-[95%] w-[30%] h-full blue__gradient">

      </div>
      <div>
        <p className='text-2xl sm:text-xl lg:text-4xl mb-4'><span className='text-3xl lg:text-5xl'>R</span>EFERRAL <span className='text-3xl lg:text-5xl'>P</span>ARTNERS</p>
        <span>{`${partner}`}</span>
      </div>
      <div>
        <p className='text-2xl sm:text-xl lg:text-4xl mb-4'><span className='text-3xl lg:text-5xl'>PROF</span> <span className='text-3xl lg:text-5xl'>E</span>ARNED</p>
        <span>{`${earnL}`}</span>
      </div>
      <div>
        <p className='text-2xl sm:text-xl lg:text-4xl mb-4'><span className='text-3xl lg:text-5xl'>PROF</span> <span className='text-3xl lg:text-5xl'>E</span>ARNED</p>
        <span>{`${earnR}`}</span>
      </div>
    </div>
  );
};

export default ProfCard;
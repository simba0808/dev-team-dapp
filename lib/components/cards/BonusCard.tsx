const BonusCard = ({level, degree, bonus}) => {
  return (
    <div className='box-border !rounded-2xl p-[1px]'>
      <div className='bg-dark-blue rounded-2xl'>
        <div className=' flex flex-col items-center justify-center py-4 lg:py-8 rounded-2xl bg-gradient-to-tr from-green-400/30 to-transparent'>
          <h2 className='text-[18px] lg:text-[48px] text-[#00FF85] text-shadow-green font-bold leading-[100%] uppercase'>{level} Level</h2>
          <p className='text-landing-content font-bold'>{degree}</p>
          <p className='text-[14px] lg:text-[32px] text-shadow-light-green text-[#00FFE0] font-bold'>{bonus}%</p>
        </div>
      </div>
    </div>
  );
};

export default BonusCard;
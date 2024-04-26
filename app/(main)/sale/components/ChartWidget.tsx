import LineChart from './LineChart';

const ChartWidget = () => {
  return (
    <div className='common-border flex flex-col p-2 lg:p-16 bg-black/20 backdrop-blur-md overflow-x-clip'>
      <div className='p-4 lg:p-0'>
        <p className='text-landing-title lg:text-[40px]'><span>RFT</span> token price graph</p>
        <div className='my-2 lg:my-4 h-[1px] bg-slate-50/20'></div>
        <p className='text-[10px] lg:text-[24px] uppercase'>Income for the period amounted to XX$</p>

      </div>
      <div className='relative w-full h-[200px] md:h-[300px] lg:h-full lg:min-h-[400px] mt-4 lg:mt-8'>
        <div className='-z-10 place-center text-[64px] xs:text-[120px] lg:text-[260px] text-gray-700/10 font-bold'>
          2024
        </div>
        <LineChart />
      </div>
    </div>
  );
};

export default ChartWidget;
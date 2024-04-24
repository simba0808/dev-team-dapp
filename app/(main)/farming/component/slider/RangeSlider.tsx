import './slider.scss';

const RangeSlider = ({
  minVal, maxVal, curVal, setCurVal
}: {
  minVal: number; 
  maxVal: number;
  curVal: number;
  setCurVal: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <input
        type='range'
        className='w-full'
        min={minVal}
        max={maxVal}
        value={curVal}
        onChange={(e) => {
          setCurVal(parseInt(e.target.value));
        }}
      />
    </>
  );
};

export default RangeSlider;
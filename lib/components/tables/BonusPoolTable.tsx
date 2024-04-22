const BonusPoolTable = () => {
  const TableCell = ({children}) => {
    return (
      <div className='w-full h-full flex items-center justify-center px-4 xl:px-8 py-2 text-[10px] lg:text-[18px] text-center border border-white/20 rounded-md bg-gradient-to-r from-sky-700/30 to-emerald-700/5 backdrop-blur-xl'>
        {children}
      </div>
    );
  };
  return (
    <div className='min-w-[800px] grid grid-rows-5 grid-cols-15 gap-1'>
      <div className='col-span-3 row-span-1'>
        <TableCell>
          <span className='w-full'></span>
        </TableCell>
      </div>
      <div className='col-span-2'>
        <TableCell><span>1 Bonus pool.<br/>0.5% Yield</span></TableCell>
      </div>
      <div className='col-span-2'>
        <TableCell><span>2 Bonus pool.<br/>0.6% Yield</span></TableCell>
      </div>
      <div className='col-span-2'>
        <TableCell><span>3 Bonus pool.<br/>0.7% Yield</span></TableCell>
      </div>
      <div className='col-span-2'>
        <TableCell><span>4 Bonus pool.<br/>0.8% Yield</span></TableCell>
      </div>
      <div className='col-span-2'>
        <TableCell><span>5 Bonus pool.<br/>0.9% Yield</span></TableCell>
      </div>
      <div className='col-span-2'>
        <TableCell><span>6 Bonus pool.<br/>1% Yield</span></TableCell>
      </div>
      <div className='col-span-3 row-start-2'>
        <TableCell>
          <span>Number of new registrations in the structure</span>
        </TableCell>
      </div>
      <div className='row-start-2 col-start-4 row-span-4 relative grid col-span-12 border border-white/20 rounded-md bg-gradient-to-r from-teal-300/40 to-emerald-700/5'>
        <div className='grid grid-rows-4 text-[8px] lg:text-[14px]'>
          <div className='table-gradient-row-border'>
            <div>10</div>
            <div>20</div>
            <div>30</div>
            <div>40</div>
            <div>50</div>
            <div>60</div>
          </div>
          <div className='table-gradient-row-border'>
            <div>3</div>
            <div>6</div>
            <div>9</div>
            <div>12</div>
            <div>15</div>
            <div>60</div>
          </div>
          <div className='table-gradient-row-border'>
            <div>5.000$</div>
            <div>10.000$</div>
            <div>20.000$</div>
            <div>30.000$</div>
            <div>40.000$</div>
            <div>50.000$</div>
          </div>
          <div className='table-gradient-row-border uppercase'>
            <div>Junior</div>
            <div>Senior</div>
            <div>Distributor</div>
            <div>Supervisor</div>
            <div>Master</div>
            <div>Pro</div>
          </div>
        </div>
        <div className='-z-10 absolute w-full h-full grid grid-cols-6'>
          <div className='table-gradient-column-border'>

          </div>
          <div className='table-gradient-column-border'>
            
          </div>
          <div className='table-gradient-column-border'>
            
          </div>
          <div className='table-gradient-column-border'>
            
          </div>
          <div className='table-gradient-column-border'>
            
          </div>
          <div className='table-gradient-column-border'>
            
          </div>
        </div>
      </div>
      <div className='col-span-3 row-start-3'>
        <TableCell>
          <span>The number of new registrations to the first line</span>
        </TableCell>
      </div>
      <div className='col-span-3 row-start-4'>
        <TableCell>
          <span>Total turnover in $ </span>
        </TableCell>
      </div>
      <div className='col-span-3 row-start-5'>
        <TableCell>
          <span>Rank Status</span>
        </TableCell>
      </div>
    </div>
  );
};

export default BonusPoolTable;
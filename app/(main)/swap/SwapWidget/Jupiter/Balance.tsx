import {useAccount, useBalance} from 'wagmi';

export const Balance = ({
  token
}: {
  token: any | null | undefined;
}) => {
  const{address} = useAccount();
  const {data, isError, isLoading} = useBalance({
    address: address,
    token: token.tokenAddress
  });

  return (
    <div className="flex flex-row items-center mr-1">
      <span>Balance:</span>
      <span className='ml-1'>
        {
          data ? `${Number(data?.formatted).toLocaleString(undefined, {minimumFractionDigits: 3})} ${data?.symbol}`
          : 0
        }
      </span>
    </div>
  );
};

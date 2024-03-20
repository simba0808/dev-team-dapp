import {twMerge} from 'tailwind-merge';

type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'normal' | 'large',
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  size = 'small',
  disabled,
  loading,
  onClick
}) => {
  return (
    <button
      className={
        twMerge(
          'rounded-xl text-center text-white font-bold bg-light-blue cursor-pointer disabled:pointer-events-none',
          size === 'large' && 'px-6 py-4 text-lg',
          size === 'normal' && 'px-3 py-2 text-md',
          size === 'small' && 'px-6 py-1 text-md font-normal rounded-full'
        )
      }
      disabled={disabled || loading}
      onClick={onClick}
    >
      <span>
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;
import React from 'react';
import {twMerge} from 'tailwind-merge';

import Spinner from '../spinnner/Spinner';

export type ButtonProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'regular' | 'gradient' | 'gray' | 'transparent';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  className,
  size = 'small',
  variant = 'regular',
  disabled,
  loading,
  icon,
  onClick,
  children
}) => {
  return (
    <button
      type="button"
      className={
        twMerge(
          'group relative font-bold text-center bg-dark-magenta text-sm cursor-pointer disabled:pointer-events-none',
          size === 'small' && 'py-2 px-3 rounded-sm lg:rounded-lg text-xs font-semibold',
          size === 'medium' && 'py-3 px-3 rounded-md lg:rounded-xl text-sm font-semibold',
          size === 'large' && 'py-4 px-8 rounded-md lg:rounded-xl text-xl font-semibold',
          variant === 'gradient' && 'bg-gradient-to-r from-yellow to-pale-magenta text-dark-magenta',
          variant === 'gray' && 'bg-white/80 text-slate-500',
          variant === 'transparent' && 'bg-light-blue text-white',
          !!icon && 'pr-1',
          className,
        )
      }
      disabled={disabled || loading}
      data-loading={loading}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center select-none whitespace-nowrap text-ellipsis group-disabled:opacity-[.32] group-data-[loading=true]:opacity-0">
        {children}
        {icon}
      </div>

      {
        loading &&
        <div className="flex absolute inset-0 justify-center items-center">
          <Spinner size={size === 'large' ? 'medium' : 'small'}/>
        </div>
      }
    </button>
  );
};

export default Button;
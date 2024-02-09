import { DivProps  } from 'react-html-props';
import { twMerge } from 'tailwind-merge';

export default function Paragraph({ className, children, ...restProps }: DivProps) {
  return (
    <p {...restProps} className={twMerge(`text-[15px] font-normal font-outfit text-grayishBlue`, className)}>
      {children}
    </p>
  );
}
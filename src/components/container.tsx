import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('mx-auto max-w-[120rem] px-6 md:px-0', className)}>
      {children}
    </div>
  );
};

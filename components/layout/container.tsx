import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-3xl w-full mx-auto px-5 sm:px-8 overflow-hidden", className)}>
      {children}
    </div>
  );
};

export default Container;

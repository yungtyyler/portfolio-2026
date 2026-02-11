import { ContainerProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn("max-w-300 mx-auto px-6 sm:px-8", className)}>{children}</div>;
};

export default Container;

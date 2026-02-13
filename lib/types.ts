import { cva, VariantProps } from "class-variance-authority";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  year: string;
  tech: string[];
  role: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: { title: string; description: string }[];
  link?: string;
  github?: string;
  comingSoon?: boolean;
}

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        outline: "border border-border bg-background hover:bg-surface hover:text-foreground",
        ghost: "hover:bg-surface hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

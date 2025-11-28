import Image from "next/image";
import logoSrc from "./logo.svg"; // O Next entende isso como objeto da imagem

export const LogoIcon = ({ className, ...props }: React.ComponentProps<typeof Image>) => (
  <Image 
    src={logoSrc} 
    alt="Logo" 
    className={className}
    {...props} 
  />
);
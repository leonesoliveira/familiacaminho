export const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // IMPORTANTE: Copie o viewBox do seu arquivo logo.svg original e cole abaixo
    viewBox="0 0 100 100" 
    // Isso permite que você passe className, fill, width, etc. via props
    {...props} 
  >
    {/* --- COLE O CONTEÚDO DO SEU LOGO.SVG AQUI ABAIXO --- */}
    {/* Exemplo: <path d="M10 10 H 90 V 90 H 10 L 10 10" fill="currentColor" /> */}
    
  </svg>
);
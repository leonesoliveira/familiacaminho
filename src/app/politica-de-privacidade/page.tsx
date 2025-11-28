import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80">
          <h1 className="font-headline text-4xl font-bold text-primary">Política de Privacidade</h1>

          <h2 className="font-headline text-2xl font-bold">Introdução</h2>
          <p>Bem-vindo à Política de Privacidade do site Família Caminho. Valorizamos a sua privacidade e estamos comprometidos em proteger as suas informações pessoais. Esta política descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais que você nos fornece.</p>

          <h2 className="font-headline text-2xl font-bold">INFORMAÇÕES GERAIS</h2>
          <p>Esta Política de Privacidade contém informações sobre a coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do site Família Caminho, demonstrando transparência quanto ao assunto e esclarecendo os tipos de dados coletados, os motivos da coleta e como os usuários podem gerenciar ou excluir suas informações pessoais.</p>
          <p>Este documento está em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18) e o Marco Civil da Internet (Lei 12.965/14). A política poderá ser atualizada periodicamente conforme alterações normativas.</p>

          <h2 className="font-headline text-2xl font-bold">INFORMAÇÕES COLETADAS</h2>
          <p>Os dados pessoais podem ser coletados de diversas maneiras:</p>
          <ul>
            <li><strong>Formulário de contato:</strong> Nome, e-mail, telefone e assunto do contato.</li>
            <li><strong>Interações no site:</strong> Dados de navegação, como endereço IP, tipo de dispositivo e tempo de visita.</li>
            <li><strong>Cookies:</strong> Pequenos arquivos que ajudam a melhorar a experiência do usuário e otimizam o funcionamento do site.</li>
          </ul>
          <p>Não coletamos dados sensíveis nem compartilhamos informações com terceiros.</p>

          <h2 className="font-headline text-2xl font-bold">USO DAS INFORMAÇÕES</h2>
          <p>As informações coletadas são utilizadas para:</p>
          <ul>
            <li>Responder aos contatos enviados pelo formulário;</li>
            <li>Melhorar a navegação e a experiência do usuário no site;</li>
            <li>Garantir a segurança e prevenir fraudes;</li>
            <li>Cumprir com obrigações legais e normativas.</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold">COOKIES E TECNOLOGIAS SEMELHANTES</h2>
          <p>Utilizamos cookies para:</p>
          <ul>
            <li>Melhorar a experiência de navegação;</li>
            <li>Analisar o tráfego e o desempenho do site;</li>
            <li>Personalizar conteúdos exibidos.</li>
          </ul>
          <p>O usuário pode desativar os cookies nas configurações do navegador.</p>

          <h2 className="font-headline text-2xl font-bold">ARMAZENAMENTO E SEGURANÇA DOS DADOS</h2>
          <p>Os dados coletados são armazenados de forma segura e pelo tempo necessário para cumprir as finalidades mencionadas nesta política. Implementamos medidas de segurança para proteger as informações contra acessos não autorizados, alterações ou destruição.</p>
          <p>O usuário pode solicitar a exclusão de seus dados a qualquer momento, salvo quando houver obrigação legal de conservação.</p>

          <h2 className="font-headline text-2xl font-bold">LINKS PARA SITES TERCEIROS</h2>
          <p>Nosso site pode conter links para sites externos. Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas de qualquer site de terceiros. O acesso a esses sites é de responsabilidade do usuário.</p>

          <h2 className="font-headline text-2xl font-bold">ALTERAÇÕES NESTA POLÍTICA</h2>
          <p>Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que os usuários revisem regularmente para estar cientes de quaisquer alterações.</p>

          <h2 className="font-headline text-2xl font-bold">CONTATO</h2>
          <p>Para qualquer dúvida sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:contato@familiacaminho.com">contato@familiacaminho.com</a>.</p>

          <h2 className="font-headline text-2xl font-bold">JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS</h2>
          <p>Esta Política de Privacidade é regida pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes da cidade de João Pessoa/PB.</p>

          <h2 className="font-headline text-2xl font-bold">DATA DE ENTRADA EM VIGOR</h2>
          <p>Esta Política de Privacidade é efetiva a partir de 25/02/2025.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

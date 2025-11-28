import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80">
            <h1 className="font-headline text-4xl font-bold text-primary">Termos e Condições de Uso</h1>

            <h2 className="font-headline text-2xl font-bold">ACEITAÇÃO DOS TERMOS</h2>
            <p>Ao acessar e utilizar o site da Igreja Família Caminho, você concorda integralmente com os Termos e Condições de Uso aqui apresentados. Caso discorde de qualquer disposição, solicitamos que não prossiga com o uso do site.</p>

            <h2 className="font-headline text-2xl font-bold">ALTERAÇÕES NOS TERMOS DE SERVIÇO</h2>
            <p>A Igreja Família Caminho se reserva o direito de modificar estes Termos e Condições de Uso a qualquer momento, mediante aviso prévio no site. Ao continuar utilizando o site após tais modificações, você concorda com os Termos atualizados. Recomendamos que revise periodicamente esta seção para estar ciente de eventuais alterações.</p>

            <h2 className="font-headline text-2xl font-bold">USO DO SITE E CONCESSÃO DE LICENÇA</h2>
            <p>Ao concordar com estes Termos, você recebe uma permissão limitada para acessar e utilizar o site da Igreja Família Caminho. Essa permissão não inclui qualquer direito de transferência de propriedade intelectual. Você se compromete a utilizar o site apenas para fins legais e respeitando todas as normas vigentes.</p>

            <h2 className="font-headline text-2xl font-bold">PROPRIEDADE INTELECTUAL</h2>
            <p>Todo o conteúdo do site, incluindo textos, imagens, logotipos, álbuns de fotos e materiais disponíveis para download, é protegido por leis de direitos autorais e propriedade intelectual. Nenhum material pode ser copiado, reproduzido ou distribuído sem autorização expressa.</p>

            <h2 className="font-headline text-2xl font-bold">INFORMAÇÕES PESSOAIS E POLÍTICA DE PRIVACIDADE</h2>
            <p>O tratamento de informações pessoais coletadas no site está sujeito à nossa Política de Privacidade, que pode ser acessada no link correspondente dentro do site.</p>

            <h2 className="font-headline text-2xl font-bold">CONDUTA DO USUÁRIO</h2>
            <p>Ao utilizar o site, você concorda em não realizar atividades como:</p>
            <ul>
                <li>a) Publicar ou compartilhar conteúdo difamatório, obsceno, ofensivo ou que viole direitos de terceiros;</li>
                <li>b) Tentar acessar áreas restritas do site sem autorização;</li>
                <li>c) Utilizar o site para qualquer finalidade ilícita.</li>
            </ul>

            <h2 className="font-headline text-2xl font-bold">LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p>A Igreja Família Caminho busca oferecer informações corretas e atualizadas, mas não se responsabiliza por erros, omissões ou eventuais danos resultantes do uso do site.</p>

            <h2 className="font-headline text-2xl font-bold">LINKS PARA SITES TERCEIROS</h2>
            <p>Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou pelas políticas de privacidade dessas páginas. O acesso a sites de terceiros é de inteira responsabilidade do usuário.</p>

            <h2 className="font-headline text-2xl font-bold">DIREITOS DO USUÁRIO</h2>
            <p>Ao enviar conteúdo para o site, como mensagens via formulário de contato, você nos concede uma licença mundial, não exclusiva e gratuita para utilizar essas informações apenas no contexto do atendimento e comunicação da igreja.</p>

            <h2 className="font-headline text-2xl font-bold">LEI APLICÁVEL E JURISDIÇÃO</h2>
            <p>Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes da cidade de João Pessoa/PB.</p>

            <h2 className="font-headline text-2xl font-bold">RESPONSABILIDADE DO SITE</h2>
            <p>Nosso compromisso é fornecer informações precisas e seguras. No entanto, não garantimos que o site esteja livre de erros ou interrupções.</p>

            <h2 className="font-headline text-2xl font-bold">CONTATO</h2>
            <p>Para qualquer dúvida sobre estes Termos de Uso, entre em contato pelo e-mail: <a href="mailto:contato@familiacaminho.com">contato@familiacaminho.com</a>.</p>

            <p>Data de entrada em vigor: 25/02/2025.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

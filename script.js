const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
            enunciado: "Quais qualidades você mais valoriza em si mesmo?",
        alternativas: [
            {
                texto: "Introvertido, racional, perspicaz, agitado, analista, criativo, independente, decidido, solitário, sincero, senso de humor sarcástico.",
                afirmacao: "Altamente independente, você quer se libertar das expectativas de outras pessoas e abraçar suas próprias ideias."
            },
            {
                texto: "Introvertido, Realista, emocional, explorador, flexível, mente aberta, bondosos por natureza, acredita em segunda chance, se moldam de acordo com quem conversam.",
                afirmacao: "quer estar em um mundo onde você, e todos os outros, tenham a liberdade de viver de acordo com suas vontades, sem serem julgados."
            }
        ]
    },
    {
        enunciado: "Qual frase mais se encaixa no seu modo de pensar ? ",
        alternativas: [
            {
                texto: "O pensamento constitui a grandeza do homem. O homem não passa de um caniço, o mais fraco da natureza, mas é um caniço pensante.",
                afirmacao: "Não aprende coisas novas apenas para impressionar os outros, você realmente se deleita ao ampliar os horizontes do conhecimento."
            },
            {
                texto: "Muda ao longo do dia. Acorda e é uma pessoa, e quando vai dormir sabe, com certeza, que é alguém diferente.",
                afirmacao: "A menos que reserve um tempo para si, corre o risco de se sentir perdido na correria da vida cotidiana, reagindo constantemente às circunstâncias externas em vez de seguir seu próprio rumo."
            }
        ]
    },
    {
        enunciado: "Numa situação onde você marcou uma viagem única para seu lugar dos sonhos, porém ao chegar no dia, te ligam dando a notícia que o compromisso foi cancelado, sem tempo determinado para remarcar, nesse momento você…",
        alternativas: [
            {
                texto: "Isto faz com que se sinta tão exausto, fica com o desfile interminável de pensamentos nas sua mente, que o pode impedir de fazer o que quer que seja.",
                afirmacao: "Guiado pela estratégia ao invés da sorte,analisa atentamente os pontos fortes e fracos de cada situação. Além disso, nunca deixa de acreditar que, com a dose certa de  perspicácia, podem encontrar uma maneira de vencer, independentemente dos desafios que possam surgir ao longo do caminho."
            },
            {
                texto: "Respira fundo, liga para um amigo próximo, sai de casa para relaxar e se divertir evitando pensar nas frustrações nas quais você não pode mudar",
                afirmacao: "Em vez de se concentrarem em como as coisas poderiam ser diferentes, você têm uma capacidade incrível de apreciar o lado positivo da vida como ela é."
            }
        ]
    },
    {
        enunciado: "Um grande amigo seu, ( seu Pet não conta) de um dia para o outro, começa a te evitar, e ser mais seco, sem nenhum motivo aparente, ao questionar, ele responde que está normal e logo sai. Você…",
        alternativas: [
            {
                texto: "gosta de dar apoio emocional aos amigos e entes queridos, mas nem sempre sabe como. E, por não conseguir decidir qual a melhor forma de dar esse apoio, pode não chegar a fazer ou a dizer nada.
 ",
                afirmacao: "Quer compreender tudo o que faz parte do universo, mas há uma área que costuma intrigá-lo particularmente: a natureza humana."
            },
            {
                texto: "dificilmente deixa que uma amizade acabe por falta de esforço. Em vez disso, se dedica para conversar e entender seu amigo, não se limitando a enviar apenas uma mensagem de "tudo bem?"",
                afirmacao: "Seu senso de lealdade é intenso,mas a intensidade do seu compromisso e desejo de servir tem suas desvantagens. Há quem possa se aproveitar da natureza prestativa e trabalhadora, levando-o a se sentir exausto e sobrecarregado."
            }
        ]
    },
    {
        enunciado: "Baseado no seu estilo, quais cores você escolheria para sua palheta de cores ? ",
        alternativas: [
            {
                texto: "cores escuras, como Preto, Cinza, Roxo, Bordo. Porém gosto de cores como Amarelo, Verde, Branco.",
                afirmacao: " Bem-Vindo, little novo Robin, sua personalidade combina com as características do BATMAN!"
            },
            {
                texto: "Gosto de Azul,Vermelho, Amarelo, Marrom, Laranja.",
                afirmacao: "Parabéns, seria você um filho perdido de kripton? Sua personalidade combina com a do SUPERMAN!"
            }
        ]
    },
];

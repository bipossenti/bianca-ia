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
                    texto: "Introvertido, racional, perspicaz, agitado, analista, criativo, independente, decidido, solitário, sincero, senso de humor sarcástico!",
                afirmacao: "afirmação"
            },
            {
                texto: "Introvertido, Realista, emocional, explorador, flexível, mente aberta, bondosos por natureza, acredita em segunda chance, se moldam de acordo com quem conversam!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual frase mais se encaixa no seu modo de pensar ? ",
        alternativas: [
            {
                texto: "O pensamento constitui a grandeza do homem. O homem não passa de um caniço, o mais fraco da natureza, mas é um caniço pensante.",
                afirmacao: "afirmação"
            },
            {
                texto: "Muda ao longo do dia. Acorda e é uma pessoa, e quando vai dormir sabe, com certeza, que é alguém diferente.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Numa situação onde você marcou uma viagem única para seu lugar dos sonhos, porém ao chegar no dia, te ligam dando a notícia que o compromisso foi cancelado, sem tempo determinado para remarcar, nesse momento você…",
        alternativas: [
            {
                texto: "Isto faz com que se sinta tão exausto, fica com o desfile interminável de pensamentos nas sua mente, que o pode impedir de fazer o que quer que seja.",
                afirmacao: "afirmação"
            },
            {
                texto: "Respira fundo, liga para um amigo próximo, sai de casa para relaxar e se divertir evitando pensar nas frustrações nas quais você não pode mudar",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Um grande amigo seu, ( seu Pet não conta) de um dia para o outro, começa a te evitar, e ser mais seco, sem nenhum motivo aparente, ao questionar, ele responde que está normal e logo sai. Você…",
        alternativas: [
            {
                texto: "gosta de dar apoio emocional aos amigos e entes queridos, mas nem sempre sabe como. E, por não conseguir decidir qual a melhor forma de dar esse apoio, pode não chegar a fazer ou a dizer nada.
 ",
                afirmacao: "afirmação"
            },
            {
                texto: "dificilmente deixa que uma amizade acabe por falta de esforço. Em vez disso, se dedica para conversar e entender seu amigo, não se limitando a enviar apenas uma mensagem de "tudo bem?"",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Baseado no seu estilo, quais cores você escolheria para sua palheta de cores ? ",
        alternativas: [
            {
                texto: "cores escuras, como Preto, Cinza, Roxo, Bordo. Porém gosto de cores como Amarelo, Verde, Branco.",
                afirmacao: "afirmação"
            },
            {
                texto: "Gosto de Azul,Vermelho, Amarelo, Marrom, Laranja.",
                afirmarcao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
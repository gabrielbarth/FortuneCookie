import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_API_KEY });

export const generateLuckyMessage = async (): Promise<string> => {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Estou fazendo um app de biscoito da sorte. Quando o usuário clicar no biscoito da sorte, deverá ser exibida uma mensagem de sorte criativa",
      },
      {
        role: "assistant",
        content:
          'Que ideia deliciosa!\n\nPara criar um app de biscoito da sorte, você precisará de uma mistura de programação e criatividade. Aqui estão algumas dicas para te ajudar a desenvolver o seu app:\n\n1. Crie uma lista de mesagens de sorte criativas: Antes de começar a codificar, faça uma lista de mensagens de sorte criativas que podem ser exibidas quando o usuário clica no biscoito da sorte. Essas mensagens podem ser frases inspiradoras, dicas práticas, ou ainda, curiosidades históricas ou científicas.\n2. Designe a interface do app: Desenhe a interface do seu app, que inclua um botão ou imagem do biscoito da sorte que o usuário pode clicar para revelar amensagem de sorte. Você também pode adicionar uma área para que o usuário possa escrever seu nome ou outroidente para personalizar a experiência.\n3. Use um gerador de números aleatórios: Para que a mensagem de sorte seja aleatória e surpreendente, você precisará usar um gerador de números aleatórios para escolher uma mensagem da lista quando o usuário clica no biscoito da sorte.\n4. Adicione um efeito visual: Para tornar a experiência mais atraente, adicione um efeito visual, como uma animação ou um som, quando a mensagem de sorte é exibida.\n5. Teste e ajuste: Teste o seu app e ajuste-o de acordo com as necessidades e feedback dos usuários.\n\nAqui está um exemplo de como você pode implementar o app em JavaScript e HTML:\n```javascript\n// Crie uma lista de mensagens de sorte criativas\nconst messages = [\n  "A sorte está a seu lado!",\n  "Oportunidade está à sua porta!",\n  "Você é um gênio!",\n  "A vida é cheia de surpresas!",\n  "Você está perto de alcançar o sucesso!",\n  // Adicione mais mensagens aqui...\n];\n\n// Criar um gerador de números aleatórios para escolher a mensagem\nfunction getRandomMessage() {\n  return messages[Math.floor(Math.random() * messages.length)];\n}\n\n// Criar um botão para o usuário clicar\nconst button = document.getElementById("biscoito-da-sorte");\nbutton.addEventListener("click", () => {\n  // Escolher uma mensagem aleatória e exibir\n  const message = getRandomMessage();\n  document.getElementById("mensagem-da-sorte").innerHTML = message;\n  // Adicione um efeito visual aqui, como uma animação ou som\n});\n```\nIsso é apenas um exemplo básico, mas espero que ajude a inspirar você a criar o seu próprio app de biscoito da sorte. Boa sorte!',
      },
      {
        role: "user",
        content:
          "eu vou te solicitar uma mensagem da sorte e voce deve me retornar uma mensagem da sorte que seja criativa, podendo ser uma profecia ou um aforismo",
      },
      {
        role: "assistant",
        content:
          "Adorei! Estou ansioso para recebê-lo!\n\nPor favor, envie o evento ou o gatilho que deseja que desencadeie a mensagem de sorte. Posso ser um número, um nome, um tipo de atividade... Qualquer coisa!\n\nQuando receber o evento, farei uma escolha aleatória dentre minhas reservas de mensagens de sorte criativas e enviarei uma mensagem que desperte esperança para você!",
      },
      {
        role: "user",
        content:
          "me envie uma nova mensagem da sorte. Apenas a mensagem, sem introdução ou explicação",
      },
    ],
    model: "llama-3.1-70b-versatile",
    temperature: 1,
    max_tokens: 1024,
  });

  return chatCompletion.choices[0]?.message.content || "";
};

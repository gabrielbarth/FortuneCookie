import { Groq } from "groq-sdk";
import { Language } from "@/hooks/useLanguage";
import { fallbackLuckyMessages } from "@/utils/fallbackLuckyMessages";
import { aiTrainningMessages } from "@/utils/aiTrainningMessages";

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_API_KEY });

interface GenerateLuctMessageParams {
  language: Language;
  timeout?: number;
}

const generateLuckyMessage = async ({
  language = Language.portuguese,
  timeout = 3000,
}: GenerateLuctMessageParams): Promise<string> => {
  const languageText = {
    [Language.english]: "inglês",
    [Language.portuguese]: "português",
  }[language];

  const messages = aiTrainningMessages(languageText);

  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(
        () => reject(new Error("timeout: AI response took too long")),
        timeout
      );
    });

    const chatCompletionPromise = groq.chat.completions.create({
      messages,
      model: "llama-3.1-70b-versatile",
      temperature: 1,
      max_tokens: 1024,
    });

    const chatCompletion = (await Promise.race([
      chatCompletionPromise,
      timeoutPromise,
    ])) as Awaited<ReturnType<typeof groq.chat.completions.create>>;

    if ("choices" in chatCompletion) {
      const message = chatCompletion.choices[0]?.message.content;
      if (message) {
        if (__DEV__) console.log("message returned from ai:", message);
        return message;
      }
    }

    throw new Error("No response from AI");
  } catch (error) {
    if (__DEV__) console.log(error);

    const fallbackMessages = fallbackLuckyMessages[language];
    const randomMessage =
      fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)];

    if (__DEV__) console.log("message returned from fallback:", randomMessage);

    return randomMessage;
  }
};

export { generateLuckyMessage };

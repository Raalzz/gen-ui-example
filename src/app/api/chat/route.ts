import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { tools } from "@/ai/tools";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: `You are a helpful assistant that can answer questions and help with tasks.
              You can provide weather information for different locations.`,
    messages,
    tools
  });

  return result.toDataStreamResponse();
}

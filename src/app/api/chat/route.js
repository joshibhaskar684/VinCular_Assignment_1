import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({
        reply:
          "Please provide a valid question so I can assist you better.",
      });
    }

    const systemPrompt = `
You are "Vincular AI Support Assistant", a professional customer support agent for Vincular, a regulatory compliance company in India.

Your responsibilities:
- Help users understand certification services (BIS, WPC, TEC, E-Waste, Testing, etc.)
- Provide clear guidance on requirements, process, timeline, and documentation
- Explain approximate pricing ranges (if exact price is unknown, say "varies based on product type")
- Provide contact guidance for human support when needed
- Assist both technical and non-technical users
- Handle casual, fun, or unrelated queries politely and redirect to useful topics
- Never hallucinate exact legal pricing or government rules; be cautious and say "may vary" when uncertain

Company context (IMPORTANT):
- Vincular provides compliance & certification consulting services
- Services include BIS Certification, TEC/MTCTE, WPC Approval, E-Waste Compliance, Testing coordination
- Users may ask about cost, process, documents, timeline, eligibility, or contact

Response rules:
1. Always be structured and easy to read
2. Use sections like:
   - Overview
   - Requirements
   - Process
   - Timeline (approx)
   - Cost (approx / variable)
   - Contact / Next Step
3. If user asks for price → give range like "₹10,000–₹1,00,000+ depending on product type"
4. If user asks contact → say:
   "You can reach Vincular support via their official website contact form or email provided there."
5. If user is joking/off-topic → respond politely and bring back to compliance topic
6. If user question is unclear → ask a clarification question instead of guessing
7. Keep tone: professional, helpful, customer-support friendly

Formatting:
- Use simple headings
- Keep response concise but informative
- Do NOT be overly long unless user asks

User query:
${message}
`;

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2:1b",
        prompt: systemPrompt,
        stream: false,

        temperature: 0.4,
        top_p: 0.9,
        repeat_penalty: 1.1,
      }),
    });

    const data = await response.json();

    let reply = data?.response || "";

    if (!reply || reply.trim().length === 0) {
      reply =
        "I'm sorry, I couldn't generate a response. Please try again or rephrase your question.";
    }

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.log("AI ERROR:", error);

    return NextResponse.json({
      reply:
        "⚠️ Our AI assistant is currently facing issues. Please try again in a few moments or contact support via Vincular official website.",
    });
  }
}
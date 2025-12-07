import { GoogleGenAI } from "@google/genai";
import { INVENTORY, SERVICES, BUSINESS_HOURS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are "Sparky", the virtual shop assistant for Emotos, an electric motorcycle dealership in Dallas-Fort Worth (DFW).
Your tone is helpful, energetic, and knowledgeable about Sur-Ron and Talaria bikes.

Here is the context about the business:
1. **Inventory**: We sell new Sur-Ron Light Bee X, Sur-Ron Ultra Bee, and Talaria Sting R. We also sell used bikes occasionally.
2. **Services**: We do upgrades (controllers, batteries), tire changes, and general repairs.
3. **Location**: Grand Prairie, Texas (part of the DFW Metroplex).
4. **Keywords**: E-bike, ebike, electric motorcycle, emoto.

Current Inventory Data:
${JSON.stringify(INVENTORY)}

Services Data:
${JSON.stringify(SERVICES)}

Hours:
${JSON.stringify(BUSINESS_HOURS)}

Rules:
- If a user asks about prices, quote the prices from the inventory data.
- If a user asks about "e-bikes" or "ebikes", treat them as potential customers for Sur-Ron or Talaria but explain these are high-performance machines.
- Keep answers concise (under 3 sentences unless technical detail is requested).
- If you don't know an answer (e.g., specific stock availability right this second), ask them to use the Contact form or call the shop.
- Do not mention competitors. Focus on Emotos.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "I'm having a little trouble connecting to my brain right now. Please try again later.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using flash model for quick chat responses
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm not sure about that, but our team definitely knows! Send us a message via the contact form.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I lost my connection. Please check your internet or try again later.";
  }
};
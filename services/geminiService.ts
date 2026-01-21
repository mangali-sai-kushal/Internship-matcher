
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Internship, ChatMessage, User } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getInternshipMatches = async (user: User): Promise<Internship[]> => {
  const prompt = `Based on the following student profile, recommend 5 realistic internship opportunities suitable for a student from a Tier 2/Tier 3 college. Focus on roles that value skills and projects. 
  
  Student Profile:
  - Name: ${user.name}
  - Skills: ${user.skills?.join(", ")}
  - Education: ${user.education}
  - Resume Info: ${user.resume}
  
  Return the response as a JSON array of objects.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            companyName: { type: Type.STRING },
            role: { type: Type.STRING },
            location: { type: Type.STRING },
            stipend: { type: Type.STRING },
            description: { type: Type.STRING },
            applyLink: { type: Type.STRING },
          },
          required: ["id", "companyName", "role", "location", "stipend", "description", "applyLink"],
        },
      },
    },
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Failed to parse internship matches", e);
    return [];
  }
};

export const chatWithAssistant = async (history: ChatMessage[], message: string): Promise<string> => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are a helpful career assistant for Tier 2 and Tier 3 college students in India. You provide advice on resumes, internships, skill building, and interview preparation. Be encouraging and practical.",
    },
  });

  // Simple history formatting for simulation
  const response = await chat.sendMessage({ message });
  return response.text || "I'm sorry, I couldn't process that.";
};

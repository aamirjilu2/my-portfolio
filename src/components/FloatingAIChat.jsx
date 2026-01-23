import { useState, useRef, useEffect } from "react";
import { resumeContext } from "../ai/resumeContext";

/* -------------------- INTELLIGENT NLP ENGINE -------------------- */

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

const intents = [
  {
    name: "profile",
    keywords: ["who", "about", "introduce", "profile"],
    answer:
      "Mohammed Aamir is an AI Programmer and Software Engineer with experience in web, mobile, and AI-powered applications."
  },
  {
    name: "skills",
    keywords: ["skill", "skills", "tech", "technology", "stack", "expertise"],
    answer: () =>
      resumeContext.match(/Core Skills:[\s\S]*?Professional Experience:/)?.[0]
        ?.replace("Core Skills:", "")
        ?.trim() || "Skills information not available."
  },
  {
    name: "experience",
    keywords: ["experience", "work", "worked", "job", "career"],
    answer: () =>
      resumeContext.match(/Professional Experience:[\s\S]*?Key Projects:/)?.[0]
        ?.replace("Professional Experience:", "")
        ?.trim() || "Experience information not available."
  },
  {
    name: "projects",
    keywords: ["project", "projects", "built", "developed", "application"],
    answer: () =>
      resumeContext.match(/Key Projects:[\s\S]*?Career Interests:/)?.[0]
        ?.replace("Key Projects:", "")
        ?.trim() || "Projects information not available."
  },
  {
    name: "github",
    keywords: ["github", "git hub", "githb", "repo", "repository", "code"],
    answer:
      "Yes ✅ Mohammed Aamir is active on GitHub: https://github.com/aamirjilu2"
  },
  {
    name: "linkedin",
    keywords: ["linkedin", "linked in", "professional profile"],
    answer:
      "Yes ✅ Mohammed Aamir is on LinkedIn: https://www.linkedin.com/in/mohammedaamirjeelani"
  },
  {
    name: "contact",
    keywords: ["contact", "email", "reach", "connect"],
    answer:
      "You can contact Mohammed Aamir via email at aamirirfu@gmail.com."
  },
  {
    name: "phone",
    keywords: ["phone", "mobile", "number", "call"],
    answer:
      "You can reach Mohammed Aamir at +91-915067609 or via the contact section."
  }
];

function getAIAnswer(question) {
  const q = normalize(question);

  let bestMatch = null;
  let bestScore = 0;

  intents.forEach(intent => {
    let score = 0;
    intent.keywords.forEach(keyword => {
      if (q.includes(keyword)) score++;
    });

    if (score > bestScore) {
      bestScore = score;
      bestMatch = intent;
    }
  });

  if (bestMatch) {
    return typeof bestMatch.answer === "function"
      ? bestMatch.answer()
      : bestMatch.answer;
  }

  return "I can answer questions about Mohammed Aamir’s profile, skills, experience, projects, and contact details.";
}

/* -------------------- SUGGESTED QUESTIONS -------------------- */

const suggestedQuestions = [
  "Who is Mohammed Aamir?",
  "What skills do you have?",
  "Tell me about your projects",
  "What is your experience?",
  "Does he have GitHub?",
  "How can I contact you?"
];

/* -------------------- COMPONENT -------------------- */

export default function FloatingAIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "👋 Hi! Ask me anything about Mohammed Aamir." }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);

  /* ✅ AUTO-SCROLL FIX */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text) => {
    const question = text || input;
    if (!question.trim()) return;

    setMessages(prev => [...prev, { from: "user", text: question }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const answer = getAIAnswer(question);
      setMessages(prev => [...prev, { from: "ai", text: answer }]);
      setTyping(false);
    }, 800);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-6 z-[9999] bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg"
      >
        🤖 Ask My AI Assistant
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-40 right-6 z-[9999] w-80 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl flex flex-col">

          {/* HEADER */}
          <div className="p-3 font-semibold border-b dark:border-gray-700 flex justify-between">
            AI Assistant
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* MESSAGES (FIXED HEIGHT + SCROLL) */}
          <div className="h-64 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg w-fit ${
                  m.from === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                }`}
              >
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="text-xs italic text-gray-500">
                AI is typing…
              </div>
            )}

            {/* AUTO SCROLL ANCHOR */}
            <div ref={messagesEndRef} />
          </div>

          {/* SUGGESTED QUESTIONS */}
          <div className="px-3 pb-2 flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded hover:bg-blue-500 hover:text-white transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-2 flex gap-2 border-t dark:border-gray-700">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              className="flex-1 border rounded px-2 py-1 text-sm dark:bg-black"
            />
            <button
              onClick={() => sendMessage()}
              className="bg-blue-600 text-white px-3 rounded"
            >
              Ask
            </button>
          </div>

        </div>
      )}
    </>
  );
}

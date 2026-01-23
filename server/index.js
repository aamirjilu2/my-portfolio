import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 Preloaded AI Knowledge Base
const aiAnswers = [
  {
    keywords: ["who", "mohammed", "aamir"],
    answer:
      "Mohammed Aamir is an AI Programmer and Software Developer with experience in web, mobile, and AI-based applications. He has worked on real-world projects including booking systems, AI apps, and dashboards."
  },
  {
    keywords: ["skills", "technologies", "tech stack"],
    answer:
      "Mohammed Aamir’s skills include Python, React, HTML, CSS, JavaScript, PHP, Flutter, Firebase, TensorFlow, AWS, and Git."
  },
  {
    keywords: ["projects"],
    answer:
      "His projects include a Skin Disease Detection AI app, Venue Booking System, Student Leave Management System, and company websites built using modern web technologies."
  },
  {
    keywords: ["experience"],
    answer:
      "Mohammed Aamir has experience as a Founder & Web Developer at MDA Royal Technologies and has also worked as a contract-based web developer on multiple projects."
  },
  {
    keywords: ["contact", "email", "reach"],
    answer:
      "You can contact Mohammed Aamir via email at aamirirfu@gmail.com or connect on LinkedIn and GitHub through his portfolio."
  }
];

app.post("/api/ask-ai", (req, res) => {
  const { question } = req.body;
  const q = question.toLowerCase();

  const match = aiAnswers.find(item =>
    item.keywords.some(keyword => q.includes(keyword))
  );

  if (match) {
    return res.json({ answer: match.answer });
  }

  res.json({
    answer:
      "I'm sorry, I can answer questions related to Mohammed Aamir’s profile, skills, projects, and experience."
  });
});

app.listen(5000, () => {
  console.log("🤖 Preloaded AI running on http://localhost:5000");
});

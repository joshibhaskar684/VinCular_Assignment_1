```markdown
# 📘 Vincular AI Assistant

An AI-powered customer support assistant built for **Vincular**, designed to help users understand regulatory compliance services such as **BIS, WPC, TEC, and E-Waste certification** in India.

Built using **Next.js**, **Ollama (LLM)**, and a modern responsive UI.

---

## 🚀 Live Features

- 🤖 AI-powered compliance assistant  
- 📄 Answers questions about BIS, WPC, TEC, E-Waste, Testing  
- 💰 Provides approximate pricing guidance (range-based)  
- 📋 Explains requirements, process, and timelines  
- 🧑‍💼 Acts as first-level customer support system  
- ⚡ Fast local LLM inference using Ollama  
- 📱 Fully responsive chat UI (mobile + desktop)  

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router)  
- **Styling:** Tailwind CSS  
- **AI Model:** Ollama (LLaMA 3.2 / Mistral)  
- **API Layer:** Next.js API Routes  
- **HTTP Client:** Fetch API  
- **UI Components:** Custom React UI  

---

## 📁 Project Structure

---

/app
/api/chat/route.js     → AI backend (Ollama integration)
/page.jsx              → Main UI page

/components
AiModal.jsx            → Chat UI modal (AI assistant)

/styles
globals.css

---
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone :contentReference[oaicite:0]{index=0}
cd vincular-ai-assistant
````

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup Ollama (Local AI Model)

Install Ollama:
[Ollama Official Website](https://ollama.com?utm_source=chatgpt.com)

Run a model:

```bash
ollama run llama3.2:1b
```

Make sure Ollama server is running on:

```
http://localhost:11434
```

---

### 4️⃣ Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 💡 How It Works

1. User enters a question in chat UI
2. Frontend sends request to `/api/chat`
3. Backend formats a structured prompt for Vincular AI Assistant
4. Ollama processes the request locally
5. Response is formatted and returned to UI
6. Chat displays structured answer (Overview, Process, Cost, etc.)

---

## 🧠 AI Behavior Design

The assistant is designed to behave like a **professional compliance support agent**:

### It:

* Provides structured answers
* Explains certification processes clearly
* Gives estimated cost ranges (not exact pricing)
* Guides users to official contact channels
* Handles off-topic or casual questions politely

### It does NOT:

* Guess exact government fees
* Provide legally inaccurate information
* Respond unprofessionally or informally

---

## 💬 Example Queries

* “What is BIS certification?”
* “How much does WPC approval cost?”
* “Documents required for TEC certification”
* “How long does E-Waste compliance take?”
* “How can I contact Vincular?”

---

## 📸 UI Preview
<img width="1832" height="914" alt="image" src="https://github.com/user-attachments/assets/804d8e4b-07f7-48d4-b402-0a68e702923f" />

<img width="1833" height="899" alt="image" src="https://github.com/user-attachments/assets/7f3b81ee-56da-4cc5-b9f9-2e59827e9f16" />
<img width="832" height="801" alt="image" src="https://github.com/user-attachments/assets/0538d4a6-bdb2-4621-8fc6-c8fcf33d4ca3" />

<img width="837" height="796" alt="image" src="https://github.com/user-attachments/assets/606de252-cfee-4e34-8c37-6165c4cbabf9" />
<img width="358" height="786" alt="image" src="https://github.com/user-attachments/assets/9ef46b33-22d2-43f4-8164-d5b8f92a88f9" />

---

## 🔒 Safety & Reliability Features

* Input sanitization
* Prompt injection protection
* API error handling
* Response fallback system
* Execution time logging
* Controlled AI hallucination prevention

---

## 📈 Future Improvements

* 🔹 Streaming AI responses (ChatGPT-like typing)
* 🔹 Chat history persistence
* 🔹 RAG-based document search (PDF compliance data)
* 🔹 Multi-language support
* 🔹 Admin dashboard for query analytics
* 🔹 Voice-based assistant

---

## 👨‍💻 Author

**Developed as Internship Assignment Project for Vincular AI Assistant**

---

## 📄 License

This project is for educational and internship evaluation purposes

```
```

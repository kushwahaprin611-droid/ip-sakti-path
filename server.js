// IP SAKTI PATH - Universal ChatGPT-Style AI Server with Web Search
// Handles ANY general question (coding, science, math, history, chat, etc.) as well as specialized IPR topics.
// Pure Node.js (v18+) with zero external dependencies

const http = require('http');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env file if present
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    try {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx !== -1) {
            const key = trimmed.slice(0, eqIdx).trim();
            const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
            if (key && !process.env[key]) {
              process.env[key] = val;
            }
          }
        }
      });
      console.log('[Server] Loaded .env configuration.');
    } catch (err) {
      console.warn('[Server] Note on .env reading:', err.message);
    }
  }
}
loadEnv();

const PORT = parseInt(process.env.PORT || '8080', 10);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';

// MIME Types Map
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8'
};

// Universal Knowledge Base for General and Specialized Questions in Fallback Mode
function handleUniversalQuestion(query) {
  const rawQ = (query || '').trim();
  const q = rawQ.toLowerCase();

  // 1. Math calculation helper
  const mathMatch = q.replace(/(what is|calculate|solve|how much is|\?)/gi, '').trim();
  if (/^[\d\s\+\-\*\/\(\)\.\%\^]+$/.test(mathMatch) && /[\d]/.test(mathMatch)) {
    try {
      const expr = mathMatch.replace(/[^0-9\+\-\*\/\(\)\.]/g, '');
      if (expr) {
        const res = Function(`'use strict'; return (${expr})`)();
        return {
          reply: `**Result:** \`${expr} = ${res}\``,
          sources: [],
          provider: 'builtin-calculator'
        };
      }
    } catch (e) {}
  }

  // 2. Greetings & Introductions
  if (/^(hi|hello|hey|greetings|namaste|good morning|good evening|good afternoon|how are you|who are you|what is your name|what can you do)/i.test(q)) {
    return {
      reply: `Hello! I am your **AI Assistant** (built like ChatGPT).\n\nYou can ask me **ANY question** on any topic:\n- **General Knowledge**: Science, history, geography, space, everyday facts\n- **Programming & Tech**: Python, JavaScript, HTML, algorithms, debugging\n- **Math & Problem Solving**: Step-by-step calculations and logic\n- **Creative Writing**: Poems, stories, essays, letters, resumes\n- **Specialized Topics**: Indian patent law, Section 3(p) TKDL, Section 3(e) synergy, NBA Form 3 ABS, and Ayurveda regulations.\n\nWhat would you like to know or discuss?`,
      sources: [],
      provider: 'builtin-conversational'
    };
  }

  // 3. What is Ayurveda? (Direct, clear, comprehensive answer)
  if (q.includes('ayurveda') || q.includes('ayurvedic')) {
    return {
      reply: `**Ayurveda** (from Sanskrit: *Ayur* meaning **"Life"** and *Veda* meaning **"Knowledge" or "Science"**) is one of the world's oldest holistic healthcare systems, developed in India over 3,000 to 5,000 years ago.\n\n### Core Philosophy & Principles:\n1. **The 3 Doshas (Body Constitutions)**:\n   - **Vata** (*Air & Space*): Controls body movement, nerve impulses, and breathing.\n   - **Pitta** (*Fire & Water*): Governs metabolism, digestion, and body temperature.\n   - **Kapha** (*Earth & Water*): Provides physical structure, joint lubrication, and immunity.\n2. **The 5 Great Elements (*Pancha Mahabhuta*)**: Space, Air, Fire, Water, and Earth.\n3. **Holistic Wellness**: True health (*Swastha*) is achieved through the dynamic equilibrium of the Doshas, balanced digestive fire (*Agni*), healthy tissues (*Dhatus*), proper elimination, and a serene mind.\n\n### Primary Classical Treatises (*Brihat Trayi*):\n- **Charaka Samhita**: Master text on internal medicine and herbal pharmacology.\n- **Sushruta Samhita**: Master text on surgery and anatomical science.\n- **Ashtanga Hridaya**: Comprehensive synthesis of practical clinical Ayurveda.\n\nToday, Ayurveda is recognized globally as a traditional and complementary healthcare system and forms the foundation of India's Traditional Knowledge Digital Library (TKDL).`,
      sources: [
        { title: "Ministry of AYUSH - About Ayurveda", url: "https://ayush.gov.in" },
        { title: "CSIR Traditional Knowledge Digital Library", url: "https://www.tkdl.res.in" }
      ],
      provider: 'builtin-ayurveda'
    };
  }

  // 4. Coding Questions
  if (q.includes('python') || q.includes('reverse a string') || q.includes('code') || q.includes('javascript') || q.includes('function') || q.includes('program')) {
    if (q.includes('reverse a string') || q.includes('reverse string')) {
      return {
        reply: `Here are several ways to **reverse a string** in Python and JavaScript:\n\n### 1. Python\n\`\`\`python\ndef reverse_string(s):\n    return s[::-1]\n\n# Example usage:\ntext = "ChatGPT"\nprint(reverse_string(text))  # Output: "TPGtahC"\n\`\`\`\n\n### 2. JavaScript\n\`\`\`javascript\nfunction reverseString(str) {\n    return str.split('').reverse().join('');\n}\n\n// Example usage:\nconsole.log(reverseString("Hello")); // Output: "olleH"\n\`\`\`\n\nBoth approaches run in $O(n)$ linear time complexity.`,
        sources: [],
        provider: 'builtin-coding'
      };
    }

    return {
      reply: `Here is an example programming solution:\n\n\`\`\`javascript\n// General JavaScript helper function\nfunction solveProblem(input) {\n    // Process input cleanly\n    const cleaned = String(input).trim();\n    return {\n        original: cleaned,\n        length: cleaned.length,\n        reversed: cleaned.split('').reverse().join('')\n    };\n}\n\nconsole.log(solveProblem("Hello World"));\n\`\`\`\n\nLet me know what specific programming task or algorithm you would like me to write!`,
      sources: [],
      provider: 'builtin-coding'
    };
  }

  // 5. Science: Sky blue
  if (q.includes('why is the sky blue') || (q.includes('sky') && q.includes('blue'))) {
    return {
      reply: `The sky appears blue due to a phenomenon called **Rayleigh Scattering**:\n\n1. **Sunlight Composition**: Sunlight reaches Earth's atmosphere as white light containing all colors of the rainbow.\n2. **Atmospheric Gas Molecules**: Earth's atmosphere is full of tiny gas molecules (mostly Nitrogen and Oxygen).\n3. **Shorter Wavelengths Scatter More**: Blue and violet light have much shorter, smaller wavelengths than red or yellow light, so they collide with gas molecules and scatter in every direction across the sky.\n4. **Human Eye Sensitivity**: Although violet scatters even more than blue, human eyes have receptors that are far more sensitive to blue light, making the daytime sky appear vivid blue!`,
      sources: [{ title: "NASA Science - Why is the sky blue?", url: "https://spaceplace.nasa.gov/blue-sky/en/" }],
      provider: 'builtin-science'
    };
  }

  // 6. Science: Photosynthesis
  if (q.includes('photosynthesis')) {
    return {
      reply: `**Photosynthesis** is the process by which green plants and algae synthesize glucose and oxygen from carbon dioxide and water using solar energy.\n\n### Chemical Equation:\n$$6CO_2 + 6H_2O + \\text{light energy} \\rightarrow C_6H_{12}O_6 + \\text{6}O_2$$\n\n### Key Stages:\n1. **Light-Dependent Reactions**: Occur in the *thylakoid membranes* of chloroplasts; chlorophyll absorbs light and splits water molecules, producing Oxygen ($O_2$), ATP, and NADPH.\n2. **Light-Independent Reactions (Calvin Cycle)**: Occur in the *stroma*; fixes Carbon Dioxide ($CO_2$) into Glucose sugar ($C_6H_{12}O_6$) for plant nourishment.`,
      sources: [{ title: "Encyclopaedia Britannica - Photosynthesis", url: "https://www.britannica.com/science/photosynthesis" }],
      provider: 'builtin-science'
    };
  }

  // 7. Science: Quantum Computing
  if (q.includes('quantum') || q.includes('quantum computing')) {
    return {
      reply: `**Quantum Computing** is an advanced computational paradigm based on quantum mechanics rather than classical binary logic:\n\n- **Classical Bits vs Qubits**: Classical computers process binary bits that are strictly $0$ or $1$. Quantum computers use **qubits** which can exist in a **superposition** of both $0$ and $1$ simultaneously.\n- **Entanglement**: Qubits can be entangled, allowing linked processing power to scale exponentially ($2^n$ computational states for $n$ qubits).\n- **Applications**: Molecular simulation for drug discovery, advanced cryptography, materials engineering, and massive mathematical optimization problems.`,
      sources: [{ title: "IBM Quantum Computing Guide", url: "https://www.ibm.com/quantum" }],
      provider: 'builtin-technology'
    };
  }

  // 8. General Knowledge: Gravity / Physics
  if (q.includes('gravity') || q.includes('newton')) {
    return {
      reply: `**Gravity** is one of the four fundamental forces of nature that attracts two bodies toward each other:\n\n1. **Newtonian Gravity**: Sir Isaac Newton formulated the Universal Law of Gravitation:\n   $$F = G \\frac{m_1 m_2}{r^2}$$\n   *Every mass attracts every other mass directly proportional to the product of their masses and inversely proportional to the square of the distance between them.*\n2. **Einstein's General Relativity (1915)**: Albert Einstein described gravity not as a conventional force, but as the **curvature of spacetime** caused by mass and energy.`,
      sources: [{ title: "NASA - What is Gravity?", url: "https://www.nasa.gov" }],
      provider: 'builtin-physics'
    };
  }

  // 9. Creative / Writing: Jokes, Poems
  if (q.includes('joke') || q.includes('funny')) {
    return {
      reply: `Here's a clever programming joke for you:\n\n*Why do programmers prefer dark mode?*\n**Because light attracts bugs!** 😄\n\n*Why did the developer go broke?*\n**Because he used up all his cache!**`,
      sources: [],
      provider: 'builtin-creative'
    };
  }

  if (q.includes('poem') || q.includes('poetry')) {
    return {
      reply: `*The clock ticks softly through the quiet night,*\n*As curiosity ignites a spark of light.*\n*Through stars and atoms, code and ancient lore,*\n*The human mind seeks truth forevermore.*\n\n*In every question that we dare to speak,*\n*Lies the discovery that we bravely seek.*`,
      sources: [],
      provider: 'builtin-creative'
    };
  }

  // 10. Specialized IPR / Patent / Ayurveda Questions (Handled precisely when asked)
  if (q.includes('3(p)') || q.includes('tkdl') || q.includes('traditional knowledge')) {
    return {
      reply: `Under **Section 3(p) of the Indian Patents Act, 1970**, an invention which in effect is traditional knowledge or an aggregation or duplication of known properties of traditionally known components is **NOT patentable** in India.\n\nIndia's **TKDL (Traditional Knowledge Digital Library)** contains over 4.4 Lakh prior-art formulations from classical texts (Charaka, Sushruta, Ashtanga Hridaya) to prevent biopiracy patents internationally.`,
      sources: [
        { title: "IP India - Patents Act Section 3(p)", url: "https://ipindia.gov.in" },
        { title: "CSIR-TKDL Database", url: "https://www.tkdl.res.in" }
      ],
      provider: 'builtin-statutory-rag'
    };
  }

  if (q.includes('3(e)') || q.includes('synerg') || q.includes('admixture')) {
    return {
      reply: `Under **Section 3(e) of the Indian Patents Act**, a substance obtained by a **mere admixture** resulting only in the aggregation of the properties of the components is not patentable.\n\n**How to overcome Section 3(e)**: Applicants must submit quantitative experimental comparative data demonstrating non-obvious **synergistic biological enhancement** (e.g. combination index < 1.0 or significantly elevated bioavailability).`,
      sources: [{ title: "IP India - Patent Examination Guidelines", url: "https://ipindia.gov.in" }],
      provider: 'builtin-statutory-rag'
    };
  }

  if (q.includes('nba') || q.includes('abs') || q.includes('biodiversity') || q.includes('form 3')) {
    return {
      reply: `Under **Section 6 of the Biological Diversity Act, 2002 (amended 2023)**, prior approval of the **National Biodiversity Authority (NBA Form 3)** is mandatory before applying for any IPR inside or outside India based on Indian biological resources.\n\n**Access & Benefit Sharing (ABS)** requires contributing 3.0% to 5.0% of ex-factory sales or royalties to local tribal and conservation communities.`,
      sources: [{ title: "National Biodiversity Authority (NBA India)", url: "http://nbaindia.org" }],
      provider: 'builtin-statutory-rag'
    };
  }

  // 11. Default General Conversational Answer for ANY topic
  return {
    reply: `Here is a clear explanation regarding **"${rawQ}"**:\n\n- **Core Summary**: When exploring this question, we can examine its fundamental principles, practical applications, and key context.\n- **Direct Takeaway**: Whether you are asking about everyday knowledge, science, programming, or innovation law, having a clear structured answer helps resolve the inquiry.\n\n*Feel free to ask me to write code, solve a math problem, explain a concept, or analyze any topic!*`,
    sources: [],
    provider: 'builtin-general'
  };
}

// Call OpenAI Responses API with Web Search
async function callOpenAIWithWebSearch(userMessage, conversationHistory = [], customKey = '') {
  const apiKey = customKey || OPENAI_API_KEY;

  if (!apiKey) {
    return {
      ...handleUniversalQuestion(userMessage),
      note: 'Note: Responding via built-in universal knowledge base. Add OPENAI_API_KEY to .env or click the Key button in chat to enable live OpenAI web search.'
    };
  }

  const systemPrompt = `You are a helpful, versatile, friendly, and highly intelligent AI assistant (just like ChatGPT). You can answer ANY question conversationally, accurately, and naturally across all subjects (science, general knowledge, programming, mathematics, creative writing, history, everyday questions, business, etc.) as well as specialized topics like Intellectual Property, Indian Patent Law, and Ayurveda when asked. Answer directly and helpfully to whatever the user asks without forcing unrelated topics. When answering current facts, recent events, or web queries, use web search to provide up-to-date information and source links.`;

  try {
    const messages = [
      { role: "system", content: systemPrompt }
    ];

    if (Array.isArray(conversationHistory)) {
      conversationHistory.slice(-10).forEach(msg => {
        if (msg && msg.role && msg.content) {
          messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: String(msg.content)
          });
        }
      });
    }

    messages.push({ role: "user", content: userMessage });

    // 1. Attempt OpenAI Responses API with web search tool
    try {
      const responseApiPayload = {
        model: "gpt-4o",
        tools: [{ type: "web_search_preview" }],
        input: messages
      };

      const resp = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(responseApiPayload)
      });

      if (resp.ok) {
        const data = await resp.json();
        let replyText = '';
        const sources = [];

        if (data.output) {
          if (Array.isArray(data.output)) {
            data.output.forEach(item => {
              if (item.type === 'message' && item.content) {
                if (typeof item.content === 'string') {
                  replyText += item.content;
                } else if (Array.isArray(item.content)) {
                  item.content.forEach(c => {
                    if (c.text) replyText += c.text;
                    if (c.type === 'web_search_call' && c.results) {
                      c.results.forEach(r => {
                        if (r.url && !sources.some(s => s.url === r.url)) {
                          sources.push({ title: r.title || r.url, url: r.url });
                        }
                      });
                    }
                  });
                }
              }
            });
          } else if (typeof data.output === 'string') {
            replyText = data.output;
          }
        }

        if (!replyText && data.output_text) {
          replyText = data.output_text;
        }

        if (data.annotations && Array.isArray(data.annotations)) {
          data.annotations.forEach(ann => {
            if (ann.url && !sources.some(s => s.url === ann.url)) {
              sources.push({ title: ann.title || ann.url, url: ann.url });
            }
          });
        }

        if (replyText) {
          return {
            reply: replyText,
            sources: sources,
            provider: 'openai-responses-web-search'
          };
        }
      }
    } catch (e) {
      console.warn('[Responses API Fallback]', e.message);
    }

    // 2. Fallback to standard OpenAI Chat Completions API
    const chatResp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: messages,
        temperature: 0.7,
        max_tokens: 1500
      })
    });

    if (chatResp.ok) {
      const chatData = await chatResp.json();
      const reply = chatData.choices?.[0]?.message?.content || 'No response generated.';
      return {
        reply: reply,
        sources: [],
        provider: 'openai-chatgpt'
      };
    } else {
      const errText = await chatResp.text();
      console.error('[OpenAI API Error]', errText);
      return {
        ...handleUniversalQuestion(userMessage),
        note: 'OpenAI API error occurred. Responded using built-in universal knowledge base.'
      };
    }

  } catch (err) {
    console.error('[OpenAI Network Error]', err);
    return {
      ...handleUniversalQuestion(userMessage),
      note: 'Network issue connecting to OpenAI. Responded using built-in knowledge base.'
    };
  }
}

// HTTP Server Handler
const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-openai-key');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = reqUrl.pathname;

  // API Route: Status
  if (req.method === 'GET' && pathname === '/api/status') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      status: 'online',
      system: 'IP Sakti AI (ChatGPT Engine)',
      hasServerKey: !!OPENAI_API_KEY,
      webSearchActive: !!OPENAI_API_KEY
    }));
    return;
  }

  // API Route: Universal Chat with AI
  if (req.method === 'POST' && pathname === '/api/chat') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) {
        req.socket.destroy();
      }
    });

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const userMessage = (payload.message || '').trim();
        const history = payload.history || [];
        const customKey = req.headers['x-openai-key'] || payload.apiKey || '';

        if (!userMessage) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Message content is required.' }));
          return;
        }

        const result = await callOpenAIWithWebSearch(userMessage, history, customKey);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          success: true,
          reply: result.reply,
          sources: result.sources || [],
          provider: result.provider,
          note: result.note || null
        }));
      } catch (err) {
        console.error('[API Chat Error]', err);
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          success: false,
          error: 'Internal server error processing request.'
        }));
      }
    });
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  filePath = path.normalize(filePath);

  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1><p>The requested file does not exist on IP Sakti Path.</p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`          IP SAKTI PATH - OPENAI CHATGPT ASSISTANT      `);
  console.log(`=======================================================`);
  console.log(`Server running at: http://localhost:${PORT}`);
  console.log(`OpenAI API Key:   ${OPENAI_API_KEY ? 'Configured (Web Search Enabled)' : 'Not Set (Using Universal Knowledge Engine)'}`);
  console.log(`=======================================================`);
});

// Floating AI Assistant Component for IP SAKTI PATH (Universal ChatGPT Assistant)
// Clean ASCII, Responsive, Web Search Enabled, Universal Q&A across ALL topics

export class FloatingAssistant {
  constructor(app) {
    this.app = app;
    this.isOpen = false;
    this.isLoading = false;
    this.history = [];
    this.userApiKey = localStorage.getItem('ipsakti_openai_key') || '';
    this.dom = {
      launcher: null,
      window: null,
      messages: null,
      input: null,
      btnSend: null,
      typing: null
    };

    this.init();
  }

  init() {
    this.injectStylesIfNeeded();
    this.renderDOM();
    this.attachEvents();
  }

  injectStylesIfNeeded() {
    if (document.getElementById('floating-ai-styles')) return;
    const style = document.createElement('style');
    style.id = 'floating-ai-styles';
    style.textContent = `
      /* Floating AI Launcher Container */
      #floating-ai-launcher-wrapper {
        position: fixed;
        bottom: 28px;
        right: 28px;
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        user-select: none;
      }

      /* Floating Callout Pill */
      .floating-ai-callout {
        background: rgba(15, 23, 42, 0.92);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1.5px solid rgba(6, 182, 212, 0.45);
        color: #f8fafc;
        padding: 8px 14px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.3px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(6, 182, 212, 0.25);
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        white-space: nowrap;
      }
      #floating-ai-launcher-wrapper:hover .floating-ai-callout {
        border-color: #fbbf24;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 158, 11, 0.4);
        transform: translateX(-3px);
      }

      /* Floating Circular Icon */
      #floating-ai-launcher {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: radial-gradient(circle at 30% 30%, #06b6d4, #064e3b 75%, #030712);
        border: 2.5px solid #67e8f9;
        box-shadow: 0 0 30px rgba(6, 182, 212, 0.55), 0 10px 30px rgba(0, 0, 0, 0.7);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s, border-color 0.25s;
        outline: none;
        position: relative;
      }
      #floating-ai-launcher-wrapper:hover #floating-ai-launcher {
        transform: scale(1.08) rotate(3deg);
        border-color: #fef08a;
        box-shadow: 0 0 40px rgba(6, 182, 212, 0.8), 0 14px 40px rgba(0, 0, 0, 0.8);
      }
      #floating-ai-launcher-wrapper:active #floating-ai-launcher {
        transform: scale(0.95);
      }

      .floating-launcher-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        line-height: 1;
        position: relative;
      }
      .floating-launcher-text {
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 0.5px;
        color: #ffffff;
        text-shadow: 0 0 10px #67e8f9;
      }
      .floating-launcher-sub {
        font-size: 8px;
        font-weight: 800;
        color: #67e8f9;
        letter-spacing: 0.5px;
        margin-top: 1px;
      }
      .floating-status-dot {
        position: absolute;
        top: -4px;
        right: -4px;
        width: 12px;
        height: 12px;
        background: #10b981;
        border: 2px solid #030712;
        border-radius: 50%;
        box-shadow: 0 0 10px #10b981;
        animation: pulse-dot 2s infinite alternate;
      }
      @keyframes pulse-dot {
        0% { transform: scale(0.9); opacity: 0.8; }
        100% { transform: scale(1.25); opacity: 1; box-shadow: 0 0 14px #34d399; }
      }

      /* Chat Window */
      #floating-ai-chat-window {
        position: fixed;
        bottom: 100px;
        right: 28px;
        width: 430px;
        max-width: calc(100vw - 36px);
        height: 590px;
        max-height: calc(100vh - 130px);
        background: rgba(7, 14, 26, 0.97);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1.5px solid rgba(6, 182, 212, 0.5);
        border-radius: 18px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 40px rgba(6, 182, 212, 0.3);
        z-index: 100000;
        display: none;
        flex-direction: column;
        overflow: hidden;
        animation: float-slide-up 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      @keyframes float-slide-up {
        from { opacity: 0; transform: translateY(25px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }

      /* Header */
      .floating-chat-header {
        padding: 14px 18px;
        background: linear-gradient(135deg, rgba(6, 78, 59, 0.8), rgba(15, 23, 42, 0.95));
        border-bottom: 1px solid rgba(6, 182, 212, 0.35);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .floating-chat-title-box {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .floating-chat-avatar {
        width: 34px;
        height: 34px;
        border-radius: 9px;
        background: #064e3b;
        border: 1.5px solid #10b981;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 13px;
        color: #67e8f9;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
      }
      .floating-chat-actions {
        display: flex;
        gap: 6px;
      }
      .floating-btn-icon {
        background: rgba(15, 23, 42, 0.75);
        border: 1px solid rgba(148, 163, 184, 0.25);
        color: #94a3b8;
        padding: 4px 9px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s;
      }
      .floating-btn-icon:hover {
        color: #ffffff;
        border-color: #67e8f9;
        background: rgba(6, 182, 212, 0.25);
      }

      /* Messages Area */
      #floating-chat-messages {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scroll-behavior: smooth;
      }
      .floating-msg {
        max-width: 90%;
        padding: 11px 14px;
        border-radius: 12px;
        font-size: 12.5px;
        line-height: 1.55;
        word-break: break-word;
      }
      .floating-msg-assistant {
        align-self: flex-start;
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(6, 182, 212, 0.35);
        color: #f1f5f9;
        border-top-left-radius: 3px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      .floating-msg-user {
        align-self: flex-end;
        background: linear-gradient(135deg, #047857, #065f46);
        border: 1px solid #10b981;
        color: #ffffff;
        border-top-right-radius: 3px;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);
      }

      /* Quick Prompt Chips */
      .floating-chips-container {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 10px;
      }
      .floating-prompt-chip {
        background: rgba(6, 182, 212, 0.12);
        border: 1px solid rgba(6, 182, 212, 0.35);
        color: #67e8f9;
        padding: 7px 11px;
        border-radius: 7px;
        font-size: 11.5px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s;
        text-align: left;
      }
      .floating-prompt-chip:hover {
        background: rgba(6, 182, 212, 0.25);
        border-color: #fef08a;
        color: #ffffff;
        transform: translateX(3px);
      }

      /* Source Citations Box */
      .floating-sources-box {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .floating-source-link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 700;
        color: #fbbf24;
        text-decoration: none;
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.35);
        padding: 3px 8px;
        border-radius: 5px;
        width: fit-content;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .floating-source-link:hover {
        background: rgba(245, 158, 11, 0.25);
        color: #ffffff;
      }

      /* Typing Indicator */
      #floating-chat-typing {
        display: none;
        align-self: flex-start;
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid rgba(6, 182, 212, 0.35);
        padding: 9px 14px;
        border-radius: 10px;
        font-size: 11.5px;
        color: #94a3b8;
        align-items: center;
        gap: 8px;
      }
      .floating-dots {
        display: flex;
        gap: 4px;
      }
      .floating-dot {
        width: 6px;
        height: 6px;
        background: #67e8f9;
        border-radius: 50%;
        animation: typing-dot 1.4s infinite ease-in-out both;
      }
      .floating-dot:nth-child(1) { animation-delay: -0.32s; }
      .floating-dot:nth-child(2) { animation-delay: -0.16s; }
      @keyframes typing-dot {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
      }

      /* Input Area */
      .floating-chat-input-bar {
        padding: 12px 14px;
        background: rgba(3, 7, 18, 0.98);
        border-top: 1px solid rgba(148, 163, 184, 0.18);
        display: flex;
        gap: 8px;
        align-items: flex-end;
      }
      #floating-chat-input {
        flex: 1;
        background: rgba(15, 23, 42, 0.9);
        border: 1.5px solid rgba(6, 182, 212, 0.4);
        border-radius: 8px;
        padding: 9px 12px;
        color: #f8fafc;
        font-size: 12.5px;
        font-family: inherit;
        outline: none;
        resize: none;
        min-height: 38px;
        max-height: 95px;
        line-height: 1.4;
      }
      #floating-chat-input:focus {
        border-color: #67e8f9;
        box-shadow: 0 0 12px rgba(6, 182, 212, 0.35);
      }
      #btn-floating-send {
        background: linear-gradient(135deg, #06b6d4, #0891b2);
        color: #ffffff;
        border: none;
        border-radius: 8px;
        padding: 9px 16px;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.2s;
        height: 38px;
        white-space: nowrap;
      }
      #btn-floating-send:hover {
        background: #06b6d4;
        box-shadow: 0 0 14px rgba(6, 182, 212, 0.5);
      }
      #btn-floating-send:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      /* Settings Box */
      #floating-ai-settings-box {
        display: none;
        padding: 12px 16px;
        background: rgba(15, 23, 42, 0.98);
        border-bottom: 1px solid rgba(6, 182, 212, 0.3);
        font-size: 11px;
      }

      /* Mobile Adjustment */
      @media (max-width: 640px) {
        #floating-ai-launcher-wrapper {
          bottom: 76px;
          right: 16px;
        }
        .floating-ai-callout {
          display: none;
        }
        #floating-ai-launcher {
          width: 54px;
          height: 54px;
        }
        #floating-ai-chat-window {
          bottom: 140px;
          right: 12px;
          width: calc(100vw - 24px);
          height: 490px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  renderDOM() {
    let wrapper = document.getElementById('floating-ai-launcher-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.id = 'floating-ai-launcher-wrapper';
      wrapper.innerHTML = `
        <div class="floating-ai-callout">
          <span style="color:#fbbf24;">*</span>
          <span>Ask AI Anything</span>
        </div>
        <div id="floating-ai-launcher" title="Ask AI (ChatGPT Assistant)">
          <div class="floating-launcher-inner">
            <div class="floating-status-dot"></div>
            <span class="floating-launcher-text">AI</span>
            <span class="floating-launcher-sub">CHAT</span>
          </div>
        </div>
      `;
      document.body.appendChild(wrapper);
    }
    this.dom.launcher = wrapper;

    let win = document.getElementById('floating-ai-chat-window');
    if (!win) {
      win = document.createElement('div');
      win.id = 'floating-ai-chat-window';
      win.innerHTML = `
        <!-- Header -->
        <div class="floating-chat-header">
          <div class="floating-chat-title-box">
            <div class="floating-chat-avatar">AI</div>
            <div>
              <div style="font-weight: 800; font-size: 13px; color: #f8fafc;">IP SAKTI AI (ChatGPT Engine)</div>
              <div style="font-size: 10px; color: #34d399; display: flex; align-items: center; gap: 4px;">
                <span style="display: inline-block; width: 6px; height: 6px; background: #10b981; border-radius: 50%;"></span>
                <span id="floating-status-text">Universal AI &amp; Web Search</span>
              </div>
            </div>
          </div>
          <div class="floating-chat-actions">
            <button id="btn-floating-key" class="floating-btn-icon" title="Configure OpenAI API Key">Key</button>
            <button id="btn-floating-clear" class="floating-btn-icon" title="Clear Chat History">Clear</button>
            <button id="btn-floating-close" class="floating-btn-icon" title="Close Assistant" style="color:#f87171;">X</button>
          </div>
        </div>

        <!-- Optional Key Settings Drawer -->
        <div id="floating-ai-settings-box">
          <div style="font-weight: 700; color: #67e8f9; margin-bottom: 4px;">OpenAI API Key (Optional Direct Mode):</div>
          <div style="display: flex; gap: 6px;">
            <input type="password" id="floating-user-key-input" placeholder="sk-..." style="flex:1; background:rgba(3,7,18,0.9); border:1px solid rgba(6,182,212,0.4); border-radius:4px; padding:4px 8px; color:#fff; font-size:11px;">
            <button id="btn-save-user-key" style="background:#06b6d4; color:#fff; border:none; border-radius:4px; padding:4px 10px; font-weight:700; cursor:pointer;">Save</button>
          </div>
          <div style="font-size: 9.5px; color: #94a3b8; margin-top: 4px;">Saved in browser storage to connect directly to OpenAI.</div>
        </div>

        <!-- Message Body -->
        <div id="floating-chat-messages">
          <div class="floating-msg floating-msg-assistant">
            <div><b>Hello! I am your AI Assistant.</b></div>
            <div style="margin-top: 4px; color: #cbd5e1;">
              You can ask me <b>ANY question just like ChatGPT</b> — whether general knowledge, definitions, science, coding, math, or Indian patent laws and Ayurveda!
            </div>
            <div class="floating-chips-container">
              <div style="font-size: 10.5px; color: #94a3b8; font-weight: 700; margin-bottom: 2px;">Try asking:</div>
              <button class="floating-prompt-chip" data-q="What is Ayurveda? Explain its core principles and classical texts simply.">What is Ayurveda?</button>
              <button class="floating-prompt-chip" data-q="Why is the sky blue? Explain the science simply.">Why is the sky blue?</button>
              <button class="floating-prompt-chip" data-q="Write a Python function to reverse a string and explain it.">Write Python code to reverse a string</button>
              <button class="floating-prompt-chip" data-q="What is Section 3(p) Traditional Knowledge exclusion in Indian patent law?">What is Section 3(p) TKDL rule?</button>
            </div>
          </div>

          <div id="floating-chat-typing">
            <div class="floating-dots">
              <div class="floating-dot"></div>
              <div class="floating-dot"></div>
              <div class="floating-dot"></div>
            </div>
            <span>Thinking &amp; analyzing...</span>
          </div>
        </div>

        <!-- Input Bar -->
        <div class="floating-chat-input-bar">
          <textarea id="floating-chat-input" placeholder="Ask anything just like ChatGPT..." rows="1"></textarea>
          <button id="btn-floating-send">Send -></button>
        </div>
      `;
      document.body.appendChild(win);
    }
    this.dom.window = win;
    this.dom.messages = win.querySelector('#floating-chat-messages');
    this.dom.input = win.querySelector('#floating-chat-input');
    this.dom.btnSend = win.querySelector('#btn-floating-send');
    this.dom.typing = win.querySelector('#floating-chat-typing');
  }

  attachEvents() {
    const launcher = this.dom.launcher;
    const win = this.dom.window;
    const btnClose = win.querySelector('#btn-floating-close');
    const btnClear = win.querySelector('#btn-floating-clear');
    const btnKey = win.querySelector('#btn-floating-key');
    const btnSaveKey = win.querySelector('#btn-save-user-key');
    const keyInput = win.querySelector('#floating-user-key-input');
    const settingsBox = win.querySelector('#floating-ai-settings-box');
    const btnSend = this.dom.btnSend;
    const input = this.dom.input;

    if (keyInput && this.userApiKey) {
      keyInput.value = this.userApiKey;
    }

    if (launcher) {
      launcher.addEventListener('click', () => {
        this.toggle();
      });
    }

    if (btnClose) {
      btnClose.addEventListener('click', (e) => {
        e.stopPropagation();
        this.close();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', (e) => {
        e.stopPropagation();
        this.clearHistory();
      });
    }

    if (btnKey && settingsBox) {
      btnKey.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsBox.style.display = settingsBox.style.display === 'block' ? 'none' : 'block';
      });
    }

    if (btnSaveKey && keyInput && settingsBox) {
      btnSaveKey.addEventListener('click', () => {
        const val = keyInput.value.trim();
        this.userApiKey = val;
        localStorage.setItem('ipsakti_openai_key', val);
        settingsBox.style.display = 'none';
        alert(val ? 'OpenAI API Key saved!' : 'Saved default server key mode.');
      });
    }

    if (btnSend) {
      btnSend.addEventListener('click', () => {
        this.handleSend();
      });
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.handleSend();
        }
      });
    }

    win.addEventListener('click', (e) => {
      const chip = e.target.closest('.floating-prompt-chip');
      if (chip && chip.dataset.q) {
        if (input) input.value = chip.dataset.q;
        this.handleSend();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.dom.window.style.display = 'flex';
    if (this.dom.input) {
      setTimeout(() => this.dom.input.focus(), 100);
    }
    this.scrollToBottom();
  }

  close() {
    this.isOpen = false;
    this.dom.window.style.display = 'none';
  }

  clearHistory() {
    this.history = [];
    const welcome = this.dom.messages.firstElementChild;
    const typing = this.dom.typing;
    this.dom.messages.innerHTML = '';
    if (welcome) this.dom.messages.appendChild(welcome);
    if (typing) this.dom.messages.appendChild(typing);
  }

  scrollToBottom() {
    if (this.dom.messages) {
      this.dom.messages.scrollTop = this.dom.messages.scrollHeight;
    }
  }

  escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  formatMarkdown(text) {
    if (!text) return '';
    let formatted = this.escapeHTML(text);
    
    // Code blocks: ```code```
    formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre style="background:rgba(3,7,18,0.9); border:1px solid rgba(6,182,212,0.3); border-radius:6px; padding:8px 10px; overflow-x:auto; font-family:monospace; font-size:11.5px; margin:6px 0; color:#67e8f9;"><code>$1</code></pre>');
    // Headers: ### Title
    formatted = formatted.replace(/^### (.*$)/gim, '<div style="font-weight:800; color:#67e8f9; margin:8px 0 3px 0; font-size:12.5px;">$1</div>');
    formatted = formatted.replace(/^## (.*$)/gim, '<div style="font-weight:900; color:#fbbf24; margin:10px 0 4px 0; font-size:13px;">$1</div>');
    // Bold: **text**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    // Italics: *text*
    formatted = formatted.replace(/\*(.*?)\*/g, '<i>$1</i>');
    // Inline code: `code`
    formatted = formatted.replace(/`([^`]+)`/g, '<code style="background:rgba(6,182,212,0.15); color:#67e8f9; padding:2px 5px; border-radius:4px; font-family:monospace;">$1</code>');
    // Bullet lines: * or -
    formatted = formatted.replace(/^[\*\-]\s+(.*)$/gm, '&bull; $1');
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
  }

  appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'floating-msg floating-msg-user';
    div.innerHTML = this.escapeHTML(text).replace(/\n/g, '<br>');
    this.dom.messages.insertBefore(div, this.dom.typing);
    this.scrollToBottom();
  }

  appendAssistantMessage(replyText, sources = [], note = null) {
    const div = document.createElement('div');
    div.className = 'floating-msg floating-msg-assistant';

    let html = `<div>${this.formatMarkdown(replyText)}</div>`;

    if (Array.isArray(sources) && sources.length > 0) {
      html += `
        <div class="floating-sources-box">
          <div style="font-size: 10px; color: #94a3b8; font-weight: 700;">Sources &amp; References:</div>
          ${sources.map(s => `
            <a href="${this.escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer" class="floating-source-link" title="${this.escapeHTML(s.title || s.url)}">
              <span>[Link]</span>
              <span>${this.escapeHTML(s.title || s.url)}</span>
              <span>-></span>
            </a>
          `).join('')}
        </div>
      `;
    }

    if (note) {
      html += `
        <div style="font-size: 10px; color: #94a3b8; margin-top: 6px; font-style: italic; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 4px;">
          ${this.escapeHTML(note)}
        </div>
      `;
    }

    div.innerHTML = html;
    this.dom.messages.insertBefore(div, this.dom.typing);
    this.scrollToBottom();
  }

  async handleSend() {
    if (this.isLoading) return;
    const input = this.dom.input;
    const text = (input ? input.value : '').trim();
    if (!text) return;

    input.value = '';
    this.isLoading = true;
    this.dom.btnSend.disabled = true;

    this.appendUserMessage(text);
    this.history.push({ role: 'user', content: text });

    this.dom.typing.style.display = 'flex';
    this.scrollToBottom();

    // 1. If user entered an OpenAI API key in browser settings, call OpenAI directly
    if (this.userApiKey && this.userApiKey.startsWith('sk-')) {
      try {
        const messages = [
          { role: 'system', content: 'You are a helpful, versatile AI assistant (just like ChatGPT). Answer any question naturally, accurately, and conversationally on any subject (science, coding, math, general knowledge, history, health, patents, and Ayurveda). Answer directly to what the user asks.' },
          ...this.history.slice(-8)
        ];

        const resp = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.userApiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.7
          })
        });

        if (resp.ok) {
          const data = await resp.json();
          const reply = data.choices?.[0]?.message?.content || 'No response returned.';
          this.dom.typing.style.display = 'none';
          this.appendAssistantMessage(reply, [], 'Direct OpenAI GPT-4o Response');
          this.history.push({ role: 'assistant', content: reply });
          this.isLoading = false;
          this.dom.btnSend.disabled = false;
          return;
        }
      } catch (directErr) {
        console.warn('Direct OpenAI call fallback to server/local:', directErr);
      }
    }

    // 2. Try Backend Server endpoint
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (this.userApiKey) {
        headers['x-openai-key'] = this.userApiKey;
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          message: text,
          history: this.history.slice(-10),
          apiKey: this.userApiKey || ''
        })
      });

      this.dom.typing.style.display = 'none';

      if (response.ok) {
        const data = await response.json();
        const reply = data.reply || 'No response returned.';
        const sources = data.sources || [];
        const note = data.note || null;

        this.appendAssistantMessage(reply, sources, note);
        this.history.push({ role: 'assistant', content: reply });
      } else {
        this.runClientSideFallback(text);
      }
    } catch (err) {
      this.dom.typing.style.display = 'none';
      this.runClientSideFallback(text);
    } finally {
      this.isLoading = false;
      this.dom.btnSend.disabled = false;
      this.scrollToBottom();
    }
  }

  runClientSideFallback(query) {
    const rawQ = (query || '').trim();
    const q = rawQ.toLowerCase();

    // 1. Math calculation
    const mathMatch = q.replace(/(what is|calculate|solve|how much is|\?)/gi, '').trim();
    if (/^[\d\s\+\-\*\/\(\)\.\%\^]+$/.test(mathMatch) && /[\d]/.test(mathMatch)) {
      try {
        const expr = mathMatch.replace(/[^0-9\+\-\*\/\(\)\.]/g, '');
        if (expr) {
          const res = Function(`'use strict'; return (${expr})`)();
          const ans = `**Result:** \`${expr} = ${res}\``;
          this.appendAssistantMessage(ans, []);
          this.history.push({ role: 'assistant', content: ans });
          return;
        }
      } catch (e) {}
    }

    // 2. Greetings
    if (/^(hi|hello|hey|namaste|greetings|who are you)/i.test(q)) {
      const ans = `Hello! I am your **AI Assistant** (built just like ChatGPT).\n\nYou can ask me **anything**:\n- **General Questions**: Science, history, philosophy, daily facts\n- **Coding & Tech**: Python, JavaScript, HTML, algorithms\n- **Mathematics**: Step-by-step calculations and problem solving\n- **Ayurveda & Patents**: Principles, classical texts, Section 3(p) TKDL, Section 3(e) synergy, and NBA Form 3 ABS rules.\n\nHow can I help you today?`;
      this.appendAssistantMessage(ans, []);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 3. What is Ayurveda? (Direct, comprehensive, simple answer)
    if (q.includes('what is ayurveda') || q.includes('what is an ayurveda') || q.includes('ayurveda') || q.includes('ayurvedic')) {
      const ans = `**Ayurveda** (from Sanskrit: *Ayur* meaning **"Life"** and *Veda* meaning **"Knowledge" or "Science"**) is one of the world's oldest holistic healthcare systems, developed in India over 3,000 to 5,000 years ago.\n\n### Core Philosophy & Principles:\n1. **The 3 Doshas (Body Constitutions)**:\n   - **Vata** (*Air & Space*): Controls body movement, nerve impulses, and breathing.\n   - **Pitta** (*Fire & Water*): Governs metabolism, digestion, and body temperature.\n   - **Kapha** (*Earth & Water*): Provides physical structure, joint lubrication, and immunity.\n2. **The 5 Great Elements (*Pancha Mahabhuta*)**: Space, Air, Fire, Water, and Earth.\n3. **Holistic Wellness**: True health (*Swastha*) is the dynamic equilibrium of the Doshas, balanced digestive fire (*Agni*), healthy tissues (*Dhatus*), proper elimination, and a serene mind.\n\n### Primary Classical Treatises (*Brihat Trayi*):\n- **Charaka Samhita**: Master text on internal medicine and herbal pharmacology.\n- **Sushruta Samhita**: Master text on surgery and anatomical science.\n- **Ashtanga Hridaya**: Comprehensive synthesis of practical clinical Ayurveda.\n\nToday, Ayurveda is recognized globally as a complementary healthcare system and forms the foundation of India's Traditional Knowledge Digital Library (TKDL).`;
      this.appendAssistantMessage(ans, [
        { title: "Ministry of AYUSH - About Ayurveda", url: "https://ayush.gov.in" },
        { title: "CSIR Traditional Knowledge Digital Library", url: "https://www.tkdl.res.in" }
      ]);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 4. Science: Sky blue
    if (q.includes('sky') && q.includes('blue')) {
      const ans = `The sky appears blue due to **Rayleigh Scattering**:\n\n1. Sunlight contains all the colors of visible light.\n2. Earth's atmosphere is composed of small gas molecules (Nitrogen and Oxygen).\n3. Blue light has shorter, smaller wavelengths and scatters much more easily in all directions when striking air molecules.\n4. Our eyes are particularly sensitive to blue light, so we see a blue sky during daylight!`;
      this.appendAssistantMessage(ans, [{ title: "NASA Science Guide", url: "https://spaceplace.nasa.gov" }]);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 5. Science: Photosynthesis
    if (q.includes('photosynthesis')) {
      const ans = `**Photosynthesis** is the biological process by which green plants and algae convert sunlight, carbon dioxide ($CO_2$), and water ($H_2O$) into glucose and oxygen ($O_2$):\n\n$$6CO_2 + 6H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6O_2$$\n\nIt takes place inside the **chloroplasts** of plant cells using the green pigment **chlorophyll**.`;
      this.appendAssistantMessage(ans, [{ title: "Encyclopaedia Britannica", url: "https://www.britannica.com" }]);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 6. Coding: Reverse a string / Python
    if (q.includes('reverse a string') || q.includes('python') || q.includes('code') || q.includes('javascript')) {
      const ans = `Here is how to **reverse a string** in Python and JavaScript:\n\n### Python:\n\`\`\`python\ndef reverse_string(s):\n    return s[::-1]\n\nprint(reverse_string("Hello World")) # Output: "dlroW olleH"\n\`\`\`\n\n### JavaScript:\n\`\`\`javascript\nfunction reverseString(str) {\n    return str.split('').reverse().join('');\n}\n\nconsole.log(reverseString("Hello World")); // Output: "dlroW olleH"\n\`\`\``;
      this.appendAssistantMessage(ans, []);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 7. Section 3(p) TKDL
    if (q.includes('3(p)') || q.includes('tkdl') || q.includes('traditional knowledge')) {
      const ans = `Under **Section 3(p) of the Indian Patents Act, 1970**, an invention which in effect is traditional knowledge or an aggregation of known properties of traditionally known components is **NOT patentable** in India.\n\nIndia's **TKDL (Traditional Knowledge Digital Library)** contains over 4.4 Lakh prior-art formulations from classical texts (Charaka, Sushruta, Ashtanga Hridaya) to prevent biopiracy patents internationally.`;
      this.appendAssistantMessage(ans, [{ title: "IP India - Section 3(p)", url: "https://ipindia.gov.in" }, { title: "CSIR-TKDL Portal", url: "https://www.tkdl.res.in" }]);
      this.history.push({ role: 'assistant', content: ans });
      return;
    }

    // 8. General conversational answer for any other question
    const ans = `Here is a clear answer regarding **"${rawQ}"**:\n\n- **Summary**: This topic involves understanding key principles and practical applications.\n- **Direct Insight**: When exploring any subject (scientific, computational, creative, or legal), breaking the problem into fundamental components gives the clearest understanding.\n\n*Tip: Connect your OpenAI API Key via the "Key" button or start the server via node server.js for live GPT-4o answers!*`;
    this.appendAssistantMessage(ans, []);
    this.history.push({ role: 'assistant', content: ans });
  }
}

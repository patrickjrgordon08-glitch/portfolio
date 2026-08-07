'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';

import { getFaqResponse, suggestedPrompts } from '@/libs/chatbotFaq';
import { portfolioProfile } from '@/libs/portfolioProfile';

type Message = {
  id: string;
  role: 'bot' | 'user';
  text: string;
};

const initialMessages: Message[] = [
  {
    id: 'welcome',
    role: 'bot',
    text: `Hi, I'm ${portfolioProfile.firstName}'s assistant. Ask me about his work, tech stack, or how to get in touch.`,
  },
];

/** Floating FAQ chatbot: rule-based, no external API or cost. */
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: Message = { id: crypto.randomUUID(), role: 'user', text: trimmed };
    const botMessage: Message = {
      id: crypto.randomUUID(),
      role: 'bot',
      text: getFaqResponse(trimmed),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className='fixed right-6 bottom-6 z-50'>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='mb-4 flex h-[min(28rem,70vh)] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl'
          >
            <div className='flex items-center justify-between border-b border-black/10 bg-black px-4 py-3 text-white'>
              <div>
                <p className='text-sm font-semibold'>{portfolioProfile.fullName}</p>
                <p className='text-xs text-white/60'>Usually replies within a day</p>
              </div>
              <button
                type='button'
                aria-label='Close chat'
                onClick={() => setOpen(false)}
                className='rounded-full p-1 text-white/70 transition-colors hover:bg-white/10 hover:text-white'
              >
                <X className='h-5 w-5' />
              </button>
            </div>

            <div ref={listRef} className='flex-1 space-y-3 overflow-y-auto px-4 py-4'>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-black text-white'
                        : 'bg-[#f6f4ef] text-neutral-800'
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}

              {messages.length === 1 && (
                <div className='flex flex-wrap gap-2 pt-1'>
                  {suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type='button'
                      onClick={() => sendMessage(prompt)}
                      className='rounded-full border border-black/15 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-transparent hover:bg-[var(--accent)] hover:text-white'
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className='flex items-center gap-2 border-t border-black/10 p-3'
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Ask a question...'
                aria-label='Chat message'
                className='flex-1 rounded-full border border-black/15 px-4 py-2 text-base text-neutral-900 outline-none focus:border-black'
              />
              <button
                type='submit'
                aria-label='Send message'
                className='btn-icon h-9 w-9 shrink-0 disabled:opacity-40'
                disabled={!input.trim()}
              >
                <Send className='h-4 w-4' />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type='button'
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.95 }}
        className='btn-icon h-14 w-14 shadow-xl'
      >
        {open ? <X className='h-6 w-6' /> : <MessageCircle className='h-6 w-6' />}
      </motion.button>
    </div>
  );
}

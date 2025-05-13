'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const suggestions = [
  "Looking for long battery life? Check out the *Falcon Pro*.",
  "Need cinematic shots? Try the *SkyBlade X1* with 4K gimbal.",
  "Just starting? *AeroZoom V2* is perfect for beginners!",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (open && messages.length === 0) {
      // Fake delay to mimic assistant typing
      setTimeout(() => {
        setMessages([suggestions[0]]);
        setTimeout(() => {
          setMessages((prev) => [...prev, suggestions[1]]);
          setTimeout(() => {
            setMessages((prev) => [...prev, suggestions[2]]);
          }, 2000);
        }, 2000);
      }, 800);
    }
  }, [open]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary text-white rounded-full p-3 shadow-lg hover:scale-105 transition"
        >
          {open ? <X /> : <MessageCircle />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-6 w-80 bg-background border border-muted/30 rounded-xl shadow-lg p-4 z-40"
          >
            <h4 className="text-lg font-semibold mb-3">Hey! Need help?</h4>
            <div className="flex flex-col gap-2 text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-muted px-3 py-2 rounded-md text-foreground"
                >
                  {msg}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

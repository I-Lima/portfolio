import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Github, 
  Linkedin, 
  Sparkles, 
  ExternalLink,
  BookOpen,
  Loader2,
  AlertCircle,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

const getDefaultSubject = (lang: Language) => 
  lang === 'pt' 
    ? 'Oportunidade de Projeto / Contratação' 
    : 'Project / Hiring Opportunity';

const getDefaultMessage = (lang: Language) =>
  lang === 'pt'
    ? 'Olá, gostaria de conversar sobre uma oportunidade profissional / desenvolvimento de projeto com você. Fico no aguardo do seu contato para alinharmos os detalhes!'
    : 'Hi, I would like to discuss a professional opportunity / project development with you. Looking forward to connecting with you!';

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'emailjs' | 'mailto'>('emailjs');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSentData, setLastSentData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    mailtoUrl: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: getDefaultSubject(currentLang),
    message: getDefaultMessage(currentLang)
  });

  // Track if user has manually edited subject or message
  const [isSubjectCustomized, setIsSubjectCustomized] = useState(false);
  const [isMessageCustomized, setIsMessageCustomized] = useState(false);

  // Synchronize defaults if language switches and user hasn't typed custom values yet
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      subject: isSubjectCustomized ? prev.subject : getDefaultSubject(currentLang),
      message: isMessageCustomized ? prev.message : getDefaultMessage(currentLang)
    }));
  }, [currentLang, isSubjectCustomized, isMessageCustomized]);

  // Listen for custom preset requests from consultancy and methodology sections
  useEffect(() => {
    const handleCustomPreset = (e: Event) => {
      const customEvent = e as CustomEvent<{ subject?: string; message?: string }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          subject: customEvent.detail.subject ?? prev.subject,
          message: customEvent.detail.message ?? prev.message
        }));
        if (customEvent.detail.subject) setIsSubjectCustomized(true);
        if (customEvent.detail.message) setIsMessageCustomized(true);
      }
    };

    window.addEventListener('setContactPreset', handleCustomPreset);
    return () => window.removeEventListener('setContactPreset', handleCustomPreset);
  }, []);

  const handleResetToDefaults = () => {
    setFormData((prev) => ({
      ...prev,
      subject: getDefaultSubject(currentLang),
      message: getDefaultMessage(currentLang)
    }));
    setIsSubjectCustomized(false);
    setIsMessageCustomized(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyMessage = () => {
    if (!lastSentData) return;
    const fullText = `De: ${lastSentData.name} <${lastSentData.email}>\nAssunto: ${lastSentData.subject}\n\n${lastSentData.message}`;
    navigator.clipboard.writeText(fullText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const generateMailtoUrl = (data: typeof formData) => {
    const defaultSubject = currentLang === 'pt' 
      ? `Contato Portfólio: ${data.name || 'Nova Mensagem'}`
      : `Portfolio Inquiry: ${data.name || 'New Message'}`;

    const resolvedSubject = data.subject.trim() || defaultSubject;
    const bodyContent = currentLang === 'pt'
      ? `Olá,\n\nNome: ${data.name}\nE-mail para resposta: ${data.email}\nAssunto: ${resolvedSubject}\n\nMensagem:\n${data.message}\n\n---\nEnviado através do formulário oficial em il-studio.dev`
      : `Hello,\n\nName: ${data.name}\nReply Email: ${data.email}\nSubject: ${resolvedSubject}\n\nMessage:\n${data.message}\n\n---\nSent via official contact form on il-studio.dev`;

    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(resolvedSubject)}&body=${encodeURIComponent(bodyContent)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage(
        currentLang === 'pt' 
          ? 'Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).'
          : 'Please fill in all required fields (Name, Email, and Message).'
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage(
        currentLang === 'pt'
          ? 'Por favor, informe um endereço de e-mail válido.'
          : 'Please enter a valid email address.'
      );
      return;
    }

    setIsSubmitting(true);

    const resolvedSubject = formData.subject.trim() || (currentLang === 'pt' ? 'Contato via Portfólio' : 'Portfolio Contact');

    const mailtoUrl = generateMailtoUrl({
      ...formData,
      name: trimmedName,
      email: trimmedEmail,
      subject: resolvedSubject,
      message: trimmedMessage
    });

    const sentData = {
      name: trimmedName,
      email: trimmedEmail,
      subject: resolvedSubject,
      message: trimmedMessage,
      mailtoUrl
    };
    setLastSentData(sentData);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    let sentViaEmailJs = false;

    if (serviceId && templateId && publicKey) {
      try {
        const mailTitle = (currentLang === 'pt' ? `Contato via Portfólio de ${trimmedName}` : `Portfolio Contact from ${trimmedName}`);
        
        const formattedMessage = currentLang === 'pt'
          ? `Nome: ${trimmedName}\nE-mail: ${trimmedEmail}\nAssunto: ${resolvedSubject}\n\nMensagem:\n${trimmedMessage}`
          : `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${resolvedSubject}\n\nMessage:\n${trimmedMessage}`;

        const templateParams = {
          title: mailTitle,
          message: formattedMessage,
          subject: mailTitle,
          from_name: trimmedName,
          from_email: trimmedEmail,
          reply_to: trimmedEmail,
          name: trimmedName,
          email: trimmedEmail,
          to_name: PERSONAL_INFO.shortName,
          to_email: PERSONAL_INFO.email,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        sentViaEmailJs = true;
      } catch (err) {
        console.warn('EmailJS send error, falling back to mailto client:', err);
      }
    }

    if (!sentViaEmailJs) {
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.warn('Could not trigger automatic mailto', err);
      }
    }

    setDeliveryMethod(sentViaEmailJs ? 'emailjs' : 'mailto');
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  const subjectPresets = [
    { pt: 'Desenvolvimento de Software / Projeto', en: 'Software Development / Project' },
    { pt: 'Consultoria QA / Testes ISTQB', en: 'QA / ISTQB Testing Advisory' },
    { pt: 'Desenvolvimento Mobile / React Native', en: 'Mobile / React Native Development' },
    { pt: 'Oportunidade Full Stack', en: 'Full Stack Opportunity' }
  ];

  const handleApplyPreset = (preset: { pt: string; en: string }) => {
    const text = preset[currentLang];
    setFormData((prev) => ({
      ...prev,
      subject: text
    }));
    setIsSubjectCustomized(true);
    if (errorMessage) setErrorMessage(null);
  };

  return (
    <section id="contato" className="py-20 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#09C8FF]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{currentLang === 'pt' ? 'Vamos Conversar' : 'Get In Touch'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {currentLang === 'pt' ? 'Inicie uma Conexão' : 'Start a Conversation'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {currentLang === 'pt'
              ? 'Disponível para novos desafios profissionais, desenvolvimento de aplicações web/mobile escaláveis e consultoria em qualidade de software.'
              : 'Available for full-time engineering roles, scalable web & mobile developments, and quality engineering consulting.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            
            <motion.div 
              whileHover={{ scale: 1.015, x: 2 }}
              className="p-5 rounded-2xl bg-[#0c0e14] border border-white/[0.07] flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#09C8FF]/10 text-[#09C8FF] flex items-center justify-center border border-[#09C8FF]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    {currentLang === 'pt' ? 'E-mail Principal' : 'Direct Email'}
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-[#09C8FF] transition-colors font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PERSONAL_INFO.email)}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer active:scale-95"
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#09C8FF]" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.015, x: 2 }}
              className="p-5 rounded-2xl bg-[#0c0e14] border border-white/[0.07] flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#09C8FF]/10 text-[#09C8FF] flex items-center justify-center border border-[#09C8FF]/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    {currentLang === 'pt' ? 'Rede Profissional' : 'Professional Network'}
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#09C8FF] transition-colors font-mono"
                  >
                    linkedin.com/in/ingridlima-js
                  </a>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#09C8FF] text-[#041a24] font-bold hover:bg-[#4cd7ff] transition-colors active:scale-95"
                title="Abrir LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.015, x: 2 }}
              className="p-5 rounded-2xl bg-[#0c0e14] border border-white/[0.07] space-y-3 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 text-zinc-400 flex items-center justify-center border border-white/[0.05]">
                  <MapPin className="w-5 h-5 text-[#09C8FF]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                    {currentLang === 'pt' ? 'Localização' : 'Location'}
                  </span>
                  <span className="text-sm font-semibold text-white font-mono">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 pt-1 border-t border-white/[0.05]">
                {currentLang === 'pt'
                  ? 'Atuação remota (Home Office)'
                  : 'Open to full remote (Home Office)'}
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] hover:border-[#09C8FF]/40 text-zinc-300 hover:text-white transition-all group"
              >
                <Github className="w-5 h-5 mb-1 group-hover:text-[#09C8FF] transition-colors" />
                <span className="text-xs font-mono">GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] hover:border-[#09C8FF]/40 text-zinc-300 hover:text-white transition-all group"
              >
                <Linkedin className="w-5 h-5 mb-1 group-hover:text-[#09C8FF] transition-colors" />
                <span className="text-xs font-mono">LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={PERSONAL_INFO.medium}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.06] hover:border-[#09C8FF]/40 text-zinc-300 hover:text-white transition-all group"
              >
                <BookOpen className="w-5 h-5 mb-1 group-hover:text-[#09C8FF] transition-colors" />
                <span className="text-xs font-mono">Medium</span>
              </motion.a>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0c0e14] border border-white/[0.08] shadow-xl"
          >
            <AnimatePresence mode="wait">
              {formSubmitted && lastSentData ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 space-y-6"
                >
                  <div className="text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-[#09C8FF]/20 text-[#09C8FF] border border-[#09C8FF]/40 flex items-center justify-center mx-auto">
                      {deliveryMethod === 'emailjs' ? (
                        <CheckCircle2 className="w-7 h-7" />
                      ) : (
                        <Check className="w-7 h-7" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {deliveryMethod === 'emailjs'
                        ? (currentLang === 'pt' ? 'Mensagem Enviada com Sucesso!' : 'Message Sent Successfully!')
                        : (currentLang === 'pt' ? 'Pronto para o Envio!' : 'Ready to Send!')}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                      {deliveryMethod === 'emailjs'
                        ? (currentLang === 'pt'
                            ? `Sua mensagem foi transmitida diretamente para ${PERSONAL_INFO.email} via e-mail. Obrigada pelo contato, responderei em breve!`
                            : `Your message has been directly sent to ${PERSONAL_INFO.email} via email. Thank you for reaching out, I will reply soon!`)
                        : (currentLang === 'pt'
                            ? `Seu cliente de e-mail padrão foi acionado para enviar a mensagem diretamente para ${PERSONAL_INFO.email}. Se ele não abriu automaticamente, utilize os botões abaixo:`
                            : `Your default email app was triggered to deliver your message to ${PERSONAL_INFO.email}. If it did not launch automatically, use the options below:`)}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/[0.06] space-y-2 text-left font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <span className="text-zinc-400">{currentLang === 'pt' ? 'Destinatário:' : 'Recipient:'}</span>
                      <span className="text-[#09C8FF] font-semibold">{PERSONAL_INFO.email}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <span className="text-zinc-400">{currentLang === 'pt' ? 'Remetente:' : 'From:'}</span>
                      <span className="text-white">{lastSentData.name} ({lastSentData.email})</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <span className="text-zinc-400">{currentLang === 'pt' ? 'Assunto:' : 'Subject:'}</span>
                      <span className="text-zinc-200">{lastSentData.subject}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-zinc-400 block mb-1">{currentLang === 'pt' ? 'Prévia da Mensagem:' : 'Message Preview:'}</span>
                      <p className="text-zinc-300 whitespace-pre-wrap font-sans text-xs bg-black/40 p-3 rounded-lg border border-white/[0.04]">
                        {lastSentData.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={lastSentData.mailtoUrl}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#09C8FF]/20 cursor-pointer active:scale-95"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{currentLang === 'pt' ? 'Abrir no Aplicativo de E-mail' : 'Open in Email App'}</span>
                    </a>

                    <button
                      onClick={handleCopyMessage}
                      className="py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors cursor-pointer active:scale-95"
                    >
                      {copiedMessage ? <Check className="w-4 h-4 text-[#09C8FF]" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedMessage ? (currentLang === 'pt' ? 'Copiado!' : 'Copied!') : (currentLang === 'pt' ? 'Copiar Mensagem' : 'Copy Message')}</span>
                    </button>
                  </div>

                  <div className="pt-2 text-center border-t border-white/[0.06]">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ 
                          name: '', 
                          email: '', 
                          subject: getDefaultSubject(currentLang), 
                          message: getDefaultMessage(currentLang) 
                        });
                        setIsSubjectCustomized(false);
                        setIsMessageCustomized(false);
                        setLastSentData(null);
                      }}
                      className="text-xs text-zinc-400 hover:text-[#09C8FF] transition-colors cursor-pointer underline underline-offset-4"
                    >
                      {currentLang === 'pt' ? '← Escrever outra mensagem' : '← Write another message'}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {currentLang === 'pt' ? 'Envie uma Mensagem Direta' : 'Send a Direct Message'}
                    </h3>
                    <div className="flex items-center gap-2">
                      {(isSubjectCustomized || isMessageCustomized) && (
                        <button
                          type="button"
                          onClick={handleResetToDefaults}
                          className="text-[11px] text-zinc-400 hover:text-[#09C8FF] flex items-center gap-1 transition-colors cursor-pointer"
                          title={currentLang === 'pt' ? 'Restaurar textos padrão' : 'Restore default texts'}
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>{currentLang === 'pt' ? 'Restaurar padrão' : 'Reset defaults'}</span>
                        </button>
                      )}
                      <span className="text-[11px] font-mono text-zinc-400">
                        {currentLang === 'pt' ? 'Resposta rápida' : 'Fast reply'}
                      </span>
                    </div>
                  </div>

                  {/* Quick Preset Buttons for interaction */}
                  <div className="space-y-1.5 pb-1">
                    <span className="text-[11px] font-mono text-zinc-400 block">
                      {currentLang === 'pt' ? 'Tópicos rápidos sugeridos:' : 'Suggested quick topics:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {subjectPresets.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleApplyPreset(preset)}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                            formData.subject === preset[currentLang]
                              ? 'bg-[#09C8FF]/15 border-[#09C8FF] text-[#09C8FF] font-semibold'
                              : 'bg-zinc-900 border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/20'
                          }`}
                        >
                          {preset[currentLang]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400">
                        {currentLang === 'pt' ? 'Seu Nome' : 'Your Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder={currentLang === 'pt' ? 'Ex: Ana Silva' : 'e.g. Alex Smith'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#09C8FF] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-400">
                        {currentLang === 'pt' ? 'Seu E-mail' : 'Your Email'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="email@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#09C8FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono text-zinc-400">
                        {currentLang === 'pt' ? 'Assunto / Oportunidade' : 'Subject / Opportunity'}
                      </label>
                      {isSubjectCustomized && (
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, subject: getDefaultSubject(currentLang) }));
                            setIsSubjectCustomized(false);
                          }}
                          className="text-[10px] text-zinc-500 hover:text-[#09C8FF] transition-colors cursor-pointer"
                        >
                          {currentLang === 'pt' ? 'Usar padrão' : 'Use default'}
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        setIsSubjectCustomized(true);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder={currentLang === 'pt' ? 'Ex: Oportunidade Full Stack / React Native' : 'e.g. Full Stack / Mobile Opportunity'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#09C8FF] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono text-zinc-400">
                        {currentLang === 'pt' ? 'Mensagem' : 'Message'} *
                      </label>
                      {isMessageCustomized && (
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, message: getDefaultMessage(currentLang) }));
                            setIsMessageCustomized(false);
                          }}
                          className="text-[10px] text-zinc-500 hover:text-[#09C8FF] transition-colors cursor-pointer"
                        >
                          {currentLang === 'pt' ? 'Usar padrão' : 'Use default'}
                        </button>
                      )}
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        setIsMessageCustomized(true);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder={currentLang === 'pt' ? 'Conte sobre seu projeto, time ou proposta...' : 'Share details about your team, project, or role...'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-[#09C8FF] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#09C8FF] hover:bg-[#4cd7ff] text-[#041a24] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#09C8FF]/20 disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{currentLang === 'pt' ? 'Preparando Envio...' : 'Preparing Message...'}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{currentLang === 'pt' ? 'Enviar Mensagem' : 'Send Message'}</span>
                      </>
                    )}
                  </motion.button>

                  <div className="pt-2 text-center">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-[11px] text-zinc-400 hover:text-[#09C8FF] transition-colors font-mono"
                    >
                      {currentLang === 'pt'
                        ? `Prefere usar seu cliente diretamente? Clique aqui para escrever para ${PERSONAL_INFO.email}`
                        : `Prefer to use your client directly? Click here to write to ${PERSONAL_INFO.email}`}
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/components/language-context';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Message sent successfully');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      className="relative min-h-screen py-20 md:py-32 px-6 md:px-8 lg:px-16"
      style={{
        backgroundImage: 'url(/AI.png)',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f8fafc',
      }}
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/85 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="h1 gradient-text mb-6">{t('contact.title')}</h1>
          <p className="text-xl dark:text-gray-400 text-slate-700 font-medium">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Mail, label: t('contact.email'), value: 'aurbano535@gmail.com' },
            { icon: Phone, label: t('contact.phone'), value: '+57 (314) 432-0725' },
            { icon: MapPin, label: t('contact.location'), value: 'Colombia' },
          ].map(({ icon: Icon, label, value }, idx) => (
            <div key={idx} className="card-hover">
              <div className="card text-center">
                <div className="icon-box inline-block mb-4"><Icon size={32} className="text-cyan-400" /></div>
                <h3 className="dark:text-white text-slate-900 font-bold mb-2">{label}</h3>
                <p className="dark:text-gray-400 text-slate-600 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 dark:text-gray-300 text-slate-700">{t('contact.name')}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-300 dark:text-white text-slate-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder={t('contact.name.placeholder')} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 dark:text-gray-300 text-slate-700">{t('contact.email')}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-300 dark:text-white text-slate-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder={t('contact.email.placeholder')} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 dark:text-gray-300 text-slate-700">{t('contact.subject')}</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                className="w-full px-4 py-3 rounded-lg dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-300 dark:text-white text-slate-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder={t('contact.subject.placeholder')} />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 dark:text-gray-300 text-slate-700">{t('contact.message')}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                className="w-full px-4 py-3 rounded-lg dark:bg-slate-800 bg-slate-100 border dark:border-slate-700 border-slate-300 dark:text-white text-slate-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder={t('contact.message.placeholder')} />
            </div>
            <button type="submit" disabled={isSubmitting}
              className="button-primary w-full flex items-center justify-center gap-2 disabled:opacity-50">
              <Send size={18} />
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="h4 mb-4 text-cyan-500 dark:text-cyan-400">{t('contact.response.title')}</h3>
            <p className="dark:text-gray-300 text-slate-700 font-medium">{t('contact.response.text')}</p>
          </div>
          <div>
            <h3 className="h4 mb-4 text-cyan-500 dark:text-cyan-400">{t('contact.availability.title')}</h3>
            <p className="dark:text-gray-300 text-slate-700 font-medium">{t('contact.availability.text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
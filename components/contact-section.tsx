"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle
} from "lucide-react";
import emailjs from '@emailjs/browser';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration using environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';
      const toEmail = process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'miguelalvaarezz@gmail.com';
      
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: toEmail,
        },
        publicKey
      );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // You could add error state handling here
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "miguelalvaarezz@gmail.com",
      href: "mailto:miguelalvaarezz@gmail.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 695 537 321",
      href: "tel:+34695537321",
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      value: "+34 695 537 321",
      href: "https://wa.me/34695537321",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Lanzarote, España",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <section id="contacto" ref={ref} className="py-10 bg-gray-50 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.span 
              className="gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              <span className="text-black">Decide el futuro de tu club</span> <span className="text-blue-600">HOY</span>.
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <span className="font-bold">Agenda una demo gratuita</span> y descubre cómo transformar tu club con una web moderna, atractiva y lista <span className="font-bold">en menos de 4 semanas.</span>
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
            transition={{ 
              duration: 1.0, 
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Contact Details */}
            <motion.div 
              className="space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                Información de Contacto
              </motion.h3>
              {contactInfo.map((info, index) => {
                const InfoIcon = info.icon;
                const isWhatsApp = info.title === "WhatsApp";
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl bg-white hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.6 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className={`w-10 h-10 md:w-12 md:h-12 ${isWhatsApp ? 'bg-green-100 group-hover:bg-green-600' : 'bg-blue-100 group-hover:bg-blue-600'} rounded-lg flex items-center justify-center transition-colors duration-300`}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.8 + index * 0.1,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                    >
                      <InfoIcon className={`w-5 h-5 md:w-6 md:h-6 ${isWhatsApp ? 'text-green-600 group-hover:text-white' : 'text-blue-600 group-hover:text-white'} transition-colors duration-300`} />
                    </motion.div>
                    <div>
                      <motion.p 
                        className="font-semibold text-gray-900 text-sm md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 2.0 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {info.title}
                      </motion.p>
                      <motion.p 
                        className="text-gray-600 text-sm md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 2.2 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {info.value}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
            transition={{ 
              duration: 1.0, 
              delay: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 px-8 py-8">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-blue-600">Cuéntame tu idea</span>
                    </div>
                  </div>
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600 font-medium">Available for work</span>
                  </motion.div>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 py-8">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-gray-600">
                      Gracias por contactarme. Te responderé pronto.
                    </p>
                  </motion.div>
                ) : (
                  <form id="contacto-form" onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Nombre Completo *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="h-14 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-2xl text-lg transition-all duration-300 hover:border-blue-300"
                          placeholder="Tu nombre completo"
                        />
                      </motion.div>
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-14 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-2xl text-lg transition-all duration-300 hover:border-blue-300"
                          placeholder="tu@email.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label htmlFor="subject" className="text-sm font-semibold text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Asunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="h-14 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-2xl text-lg transition-all duration-300 hover:border-blue-300"
                        placeholder="¿En qué puedo ayudarte?"
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none rounded-2xl text-lg transition-all duration-300 hover:border-blue-300"
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                            Enviar Mensaje
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 md:mt-20 p-8 md:p-12 bg-gradient-to-r from-gray-900 to-black rounded-2xl md:rounded-3xl text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ 
            duration: 1.2, 
            delay: 2.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Background decoration */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
            transition={{ 
              duration: 1.0, 
              delay: 2.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.div 
              className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-12 h-12 md:w-16 md:h-16 bg-purple-500 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-cyan-500 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </motion.div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.0, 
                delay: 2.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Tu club merece destacar.
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.0, 
                delay: 3.0,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Diseñemos juntos una experiencia digital que eleve su imagen, atraiga más jugadores y simplifique la gestión.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.0, 
                delay: 3.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Button
                onClick={() => {
                  const formElement = document.getElementById('contacto');
                  if (formElement) {
                    formElement.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'center' 
                    });
                  }
                }}
                size="lg"
                data-cursor-magnetic
                className="bg-white text-gray-900 hover:bg-gray-100 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
                Enviar Email
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/34695537321', '_blank')}
                size="lg"
                data-cursor-magnetic
                className="bg-green-600 hover:bg-green-700 text-white h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-300" />
                Enviar WhatsApp
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

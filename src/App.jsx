import React, { useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ChevronRight,
  Calculator,
  FileText,
  Users,
  Menu,
  X,
  User,
  Shield,
  Monitor,
  Languages,
  Award,
  Eye,
  Clock,
  BadgeCheck,
  DollarSign,
  ChevronDown,
  AlertTriangle,
  TrendingDown,
  HelpCircle,
  Shuffle,
  MessageCircleOff,
  EyeOff,
  UserCheck,
  Building2,
  ShieldCheck,
  ClipboardCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

// Translation context
const LanguageContext = React.createContext();

const translations = {
  de: {
    // Navigation
    nav: {
      home: "Startseite",
      about: "Über mich",
      services: "Leistungen",
      contact: "Kontakt",
      contactCta: "Kontakt aufnehmen"
    },
    // Hero
    hero: {
      titleLine1: "Digitale Finanz- und Steuerbetreuung",
      titleLine2: "für Ihre GmbH",
      subtitle: "– persönlich, präzise und aus einer Hand.",
      cta: "Erstgespräch vereinbaren",
      badge1: "Geprüfte Steuerberaterin",
      badge2: "KWT-Mitglied",
      badge3: "Digitale Prozesse"
    },
    // Feature Highlights
    features: {
      personal: {
        title: "Persönliche Betreuung",
        description: "Alle Prozesse – Buchhaltung, Lohnverrechnung und Jahresabschluss – werden persönlich von Elena betreut. Keine Mitarbeiter, kein Qualitätsverlust."
      },
      secure: {
        title: "Ihr sicherer Finanzpartner",
        description: "Buchhaltung, Lohnverrechnung und steuerliche Betreuung für österreichische GmbHs – effizient, sicher und digital organisiert."
      },
      digital: {
        title: "Digitale, klare Abläufe",
        description: "Volldigitale Zusammenarbeit mit klaren Prozessen – effizient, sicher und ideal für Geschäftsführer mit wenig Zeit."
      }
    },
    // Challenges Section
    challenges: {
      title: "Warum professionelle und rechtssichere Betreuung für Ihre GmbH entscheidend ist.",
      subtitle: "Diese Herausforderungen kennen viele Unternehmer – und sie können Ihr Unternehmen gefährden.",
      items: {
        unqualified: {
          title: "Unqualifizierte Berater",
          description: "Viele Anbieter ohne Berufsberechtigung – das führt zu Problemen bei Betriebsprüfungen und rechtlichen Risiken."
        },
        errors: {
          title: "Fehlerhafte Buchhaltung",
          description: "Fehler werden oft zu spät erkannt und erfordern kostspielige Korrekturen und Nachzahlungen."
        },
        advice: {
          title: "Fehlende Beratung",
          description: "Klienten handeln erst und fragen später – das führt zu teuren Fehlentscheidungen."
        },
        processes: {
          title: "Unklare Prozesse",
          description: "Wechselnde Ansprechpartner und keine einheitliche Betreuung sorgen für Verwirrung und Verzögerungen."
        },
        language: {
          title: "Sprachliche Missverständnisse",
          description: "Wichtige Dokumente und steuerliche Fragen werden nicht richtig verstanden – ein Risiko für Ihr Unternehmen."
        },
        costs: {
          title: "Intransparente Kosten",
          description: "Viele Kanzleien rechnen nach Aufwand ab – Zusatzkosten kommen überraschend und machen Planung unmöglich."
        }
      }
    },
    // Die Lösung
    solution: {
      badge: "Die Lösung",
      title: "Eine kompetente Partnerin für Ihre GmbH – mit klaren Prozessen und persönlicher Betreuung.",
      items: {
        personal: {
          title: "Persönliche Betreuung",
          description: "Elena macht alles selbst – keine Mitarbeiter, keine wechselnden Ansprechpartner. Sie sind immer in besten Händen."
        },
        errors: {
          title: "Frühzeitige Fehlererkennung",
          description: "Weil Buchhaltung UND Jahresabschluss aus einer Hand kommen, werden Fehler früh erkannt und kostspielige Korrekturen vermieden."
        },
        digital: {
          title: "Digitale Zusammenarbeit",
          description: "Keine unnötigen Termine – alles läuft effizient per E-Mail und Zoom. Modern, flexibel und zeitsparend."
        },
        transparency: {
          title: "Volle Transparenz",
          description: "Klare Prozesse und sichere Abläufe. Sie wissen immer, wo Sie stehen – ohne Überraschungen."
        },
        certified: {
          title: "Berufsberechtigt & prüfbar",
          description: "Als geprüfte Steuerberaterin und KWT-Mitglied garantiere ich Ihnen höchste Qualität und rechtliche Sicherheit."
        },
        pricing: {
          title: "Klare Preise",
          description: "Bei uns gibt es keine Überraschungen: transparente Preisgestaltung von Anfang an."
        }
      }
    },
    // Services
    services: {
      badge: "Leistungen",
      title: "Alles aus einer Hand – für Ihre GmbH.",
      subtitle: "Ganzheitliche Betreuung, die auf Ihre Bedürfnisse zugeschnitten ist.",
      tax: {
        title: "Steuerberatung für GmbH",
        description: "Umfassende steuerliche Betreuung für Ihr Unternehmen – von der Strategie bis zur Optimierung.",
        points: [
          "Jahresabschlüsse und Bilanzen",
          "Steuererklärungen",
          "Steueroptimierung",
          "Strategische Beratung"
        ]
      },
      accounting: {
        title: "Digitale Buchhaltung",
        description: "Moderne, effiziente Buchhaltung mit digitalen Tools – transparent und strukturiert.",
        points: [
          "Monatlich oder quartalsweise",
          "Sichere, strukturierte Prozesse",
          "Transparente Datenübersicht",
          "Moderne digitale Tools"
        ]
      },
      payroll: {
        title: "Lohnverrechnung",
        description: "Präzise und termintreue Abwicklung Ihrer Personalverrechnung – im Rahmen eines Gesamtpakets.",
        points: [
          "Nur im Gesamtpaket verfügbar",
          "Präzise Abwicklung",
          "Betreuung von Dienstnehmern",
          "Integration in die Buchhaltung"
        ],
        note: "Lohnverrechnung wird nur im Paket mit Buchhaltung/Steuerberatung angeboten."
      },
      learnMore: "Mehr erfahren"
    },
    // About Me
    about: {
      badge: "Über mich",
      title: "Ihre Steuerberaterin – persönlich, erfahren, digital.",
      description: "Als Geschäftsführerin der EH Tax Consulting Steuerberatungs GmbH betreue ich österreichische GmbHs mit voller Berufsberechtigung. Mein Vorteil: Da ich sowohl die Buchhaltung als auch den Jahresabschluss selbst erstelle, erkenne ich Fehler frühzeitig und kann sie korrigieren, bevor sie teuer werden.",
      certified: "Zertifiziert",
      kwtMember: "KWT-Mitglied",
      qualifications: {
        expertise: {
          title: "Geprüfte Expertise",
          description: "Mag. (FH), Geschäftsführerin der EH Tax Consulting Steuerberatungs GmbH"
        },
        personal: {
          title: "Persönliche Betreuung",
          description: "Arbeitet ohne Mitarbeiter – Ihre Betreuung ist garantiert persönlich"
        },
        digital: {
          title: "Digital organisiert",
          description: "Kein Parteiverkehr, moderne Zusammenarbeit per Zoom & E-Mail"
        },
        bilingual: {
          title: "Zweisprachig",
          description: "Beratung auf Deutsch und Russisch verfügbar"
        }
      }
    },
    // Qualifikation & Sicherheit
    qualification: {
      badge: "Qualifikation & Sicherheit",
      title: "Ihre Sicherheit ist meine Priorität.",
      subtitle: "Vertrauen Sie auf geprüfte Expertise und rechtssichere Betreuung.",
      items: {
        license: {
          title: "Berufsberechtigung",
          description: "Geprüfte Steuerberaterin mit vollständiger Berufsberechtigung nach österreichischem Recht."
        },
        chamber: {
          title: "Kammer-Mitglied",
          description: "Mitglied der Kammer der Steuerberater und Wirtschaftsprüfer (KWT) – jederzeit überprüfbar."
        },
        legal: {
          title: "Rechtssicherheit",
          description: "Keine 'Fake-Berater' ohne Berechtigung – Ihre Unterlagen sind in sicheren Händen."
        },
        transparent: {
          title: "Transparente Prozesse",
          description: "Klare Abläufe und vollständige digitale Dokumentation für maximale Nachvollziehbarkeit."
        }
      },
      memberOf: "Mitglied der",
      kwtName: "KWT",
      kwtFull: "Kammer der Steuerberater und Wirtschaftsprüfer"
    },
    // CTA
    cta: {
      title: "Bereit für eine verlässliche Zusammenarbeit?",
      description: "Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, wie ich Ihre GmbH professionell und persönlich betreuen kann.",
      button: "Kontakt aufnehmen"
    },
    // Contact
    contact: {
      email: "E-Mail",
      phone: "Telefon",
      address: "Adresse",
      form: {
        name: "Name *",
        emailLabel: "E-Mail *",
        phoneLabel: "Telefon (optional)",
        message: "Ihre Nachricht *",
        submit: "Nachricht senden",
        privacy: "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer",
        privacyLink: "Datenschutzerklärung",
        privacyEnd: "zu."
      }
    },
    // Footer
    footer: {
      description: "Ihre Partnerin für digitale Finanz- und Steuerbetreuung österreichischer GmbHs.",
      contactTitle: "Kontakt",
      legalTitle: "Rechtliches",
      imprint: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB",
      copyright: "Alle Rechte vorbehalten."
    },
    // Statistics
    statistics: {
      years: "Jahre Erfahrung in der Steuerberatung",
      projects: "Erfolgreich abgeschlossene Projekte",
      retention: "Kundenbindungsrate",
      personal: "Garantie für persönlichen Service"
    }
  },
  ru: {
    // Navigation
    nav: {
      home: "Главная",
      about: "Обо мне",
      services: "Услуги",
      contact: "Контакт",
      contactCta: "Связаться"
    },
    // Hero
    hero: {
      titleLine1: "Цифровое финансовое и налоговое сопровождение",
      titleLine2: "для вашей GmbH",
      subtitle: "– лично, точно и из одних рук.",
      cta: "Записаться на консультацию",
      badge1: "Сертифицированный налоговый консультант",
      badge2: "Член KWT",
      badge3: "Цифровые процессы"
    },
    // Feature Highlights
    features: {
      personal: {
        title: "Персональное обслуживание",
        description: "Все процессы – бухгалтерия, расчёт заработной платы и годовая отчётность – ведутся лично Еленой. Никаких сотрудников, никакой потери качества."
      },
      secure: {
        title: "Ваш надёжный финансовый партнёр",
        description: "Бухгалтерия, расчёт заработной платы и налоговое сопровождение для австрийских GmbH – эффективно, безопасно и организованно в цифровом формате."
      },
      digital: {
        title: "Цифровые, чёткие процессы",
        description: "Полностью цифровое сотрудничество с понятными процессами – эффективно, безопасно и идеально для руководителей с ограниченным временем."
      }
    },
    // Challenges Section
    challenges: {
      title: "Почему профессиональное и юридически безопасное сопровождение для вашей GmbH имеет решающее значение.",
      subtitle: "Эти проблемы знакомы многим предпринимателям – и они могут поставить под угрозу вашу компанию.",
      items: {
        unqualified: {
          title: "Неквалифицированные консультанты",
          description: "Многие поставщики без профессиональной лицензии – это приводит к проблемам при налоговых проверках и правовым рискам."
        },
        errors: {
          title: "Ошибки в бухгалтерии",
          description: "Ошибки часто обнаруживаются слишком поздно и требуют дорогостоящих исправлений и доплат."
        },
        advice: {
          title: "Отсутствие консультирования",
          description: "Клиенты сначала действуют, а потом спрашивают – это приводит к дорогостоящим ошибочным решениям."
        },
        processes: {
          title: "Непонятные процессы",
          description: "Меняющиеся контактные лица и отсутствие единого обслуживания создают путаницу и задержки."
        },
        language: {
          title: "Языковые недоразумения",
          description: "Важные документы и налоговые вопросы неправильно понимаются – риск для вашей компании."
        },
        costs: {
          title: "Непрозрачные расходы",
          description: "Многие фирмы выставляют счета по затраченному времени – дополнительные расходы возникают неожиданно и делают планирование невозможным."
        }
      }
    },
    // Die Lösung
    solution: {
      badge: "Решение",
      title: "Компетентный партнёр для вашей GmbH – с чёткими процессами и персональным обслуживанием.",
      items: {
        personal: {
          title: "Персональное обслуживание",
          description: "Елена делает всё сама – никаких сотрудников, никаких меняющихся контактных лиц. Вы всегда в надёжных руках."
        },
        errors: {
          title: "Раннее выявление ошибок",
          description: "Поскольку бухгалтерия И годовая отчётность ведутся из одних рук, ошибки выявляются рано, а дорогостоящие исправления избегаются."
        },
        digital: {
          title: "Цифровое сотрудничество",
          description: "Никаких лишних встреч – всё эффективно проходит по электронной почте и Zoom. Современно, гибко и экономит время."
        },
        transparency: {
          title: "Полная прозрачность",
          description: "Чёткие процессы и безопасные рабочие процедуры. Вы всегда знаете, где находитесь – без сюрпризов."
        },
        certified: {
          title: "Лицензированный и проверяемый",
          description: "Как сертифицированный налоговый консультант и член KWT, я гарантирую вам высочайшее качество и правовую безопасность."
        },
        pricing: {
          title: "Понятные цены",
          description: "У нас нет сюрпризов: прозрачное ценообразование с самого начала."
        }
      }
    },
    // Services
    services: {
      badge: "Услуги",
      title: "Всё из одних рук – для вашей GmbH.",
      subtitle: "Комплексное обслуживание, адаптированное под ваши потребности.",
      tax: {
        title: "Налоговое консультирование для GmbH",
        description: "Комплексное налоговое сопровождение вашей компании – от стратегии до оптимизации.",
        points: [
          "Годовые отчёты и балансы",
          "Налоговые декларации",
          "Налоговая оптимизация",
          "Стратегическое консультирование"
        ]
      },
      accounting: {
        title: "Цифровая бухгалтерия",
        description: "Современная, эффективная бухгалтерия с цифровыми инструментами – прозрачно и структурированно.",
        points: [
          "Ежемесячно или ежеквартально",
          "Безопасные, структурированные процессы",
          "Прозрачный обзор данных",
          "Современные цифровые инструменты"
        ]
      },
      payroll: {
        title: "Расчёт заработной платы",
        description: "Точное и своевременное ведение расчёта заработной платы – в рамках комплексного пакета.",
        points: [
          "Только в комплексном пакете",
          "Точное ведение",
          "Обслуживание сотрудников",
          "Интеграция в бухгалтерию"
        ],
        note: "Расчёт заработной платы предлагается только в пакете с бухгалтерией/налоговым консультированием."
      },
      learnMore: "Узнать больше"
    },
    // About Me
    about: {
      badge: "Обо мне",
      title: "Ваш налоговый консультант – лично, опытно, цифрово.",
      description: "Как управляющий директор EH Tax Consulting Steuerberatungs GmbH, я обслуживаю австрийские GmbH с полной профессиональной лицензией. Моё преимущество: поскольку я сама веду как бухгалтерию, так и годовую отчётность, я рано выявляю ошибки и могу их исправить, прежде чем они станут дорогостоящими.",
      certified: "Сертифицирован",
      kwtMember: "Член KWT",
      qualifications: {
        expertise: {
          title: "Проверенная экспертиза",
          description: "Mag. (FH), управляющий директор EH Tax Consulting Steuerberatungs GmbH"
        },
        personal: {
          title: "Персональное обслуживание",
          description: "Работает без сотрудников – ваше обслуживание гарантированно персональное"
        },
        digital: {
          title: "Организовано цифрово",
          description: "Без приёма посетителей, современное сотрудничество через Zoom и E-Mail"
        },
        bilingual: {
          title: "Двуязычный",
          description: "Консультации доступны на немецком и русском языках"
        }
      }
    },
    // Qualifikation & Sicherheit
    qualification: {
      badge: "Квалификация и безопасность",
      title: "Ваша безопасность – мой приоритет.",
      subtitle: "Доверьтесь проверенной экспертизе и юридически надёжному обслуживанию.",
      items: {
        license: {
          title: "Профессиональная лицензия",
          description: "Сертифицированный налоговый консультант с полной профессиональной лицензией по австрийскому праву."
        },
        chamber: {
          title: "Член палаты",
          description: "Член Палаты налоговых консультантов и аудиторов (KWT) – проверяемо в любое время."
        },
        legal: {
          title: "Правовая безопасность",
          description: "Никаких 'фейковых консультантов' без лицензии – ваши документы в надёжных руках."
        },
        transparent: {
          title: "Прозрачные процессы",
          description: "Чёткие процедуры и полная цифровая документация для максимальной прозрачности."
        }
      },
      memberOf: "Член",
      kwtName: "KWT",
      kwtFull: "Палата налоговых консультантов и аудиторов"
    },
    // CTA
    cta: {
      title: "Готовы к надёжному сотрудничеству?",
      description: "Запишитесь на бесплатную первичную консультацию и узнайте, как я могу профессионально и лично обслуживать вашу GmbH.",
      button: "Связаться"
    },
    // Contact
    contact: {
      email: "Эл. почта",
      phone: "Телефон",
      address: "Адрес",
      form: {
        name: "Имя *",
        emailLabel: "Эл. почта *",
        phoneLabel: "Телефон (необязательно)",
        message: "Ваше сообщение *",
        submit: "Отправить сообщение",
        privacy: "Отправляя форму, вы соглашаетесь с обработкой ваших данных согласно нашей",
        privacyLink: "Политике конфиденциальности",
        privacyEnd: "."
      }
    },
    // Footer
    footer: {
      description: "Ваш партнёр по цифровому финансовому и налоговому сопровождению австрийских GmbH.",
      contactTitle: "Контакт",
      legalTitle: "Правовая информация",
      imprint: "Импрессум",
      privacy: "Конфиденциальность",
      terms: "Условия",
      copyright: "Все права защищены."
    },
    // Statistics
    statistics: {
      years: "Лет опыта в налоговом консультировании",
      projects: "Успешно завершённых проектов",
      retention: "Показатель удержания клиентов",
      personal: "Гарантия персонального обслуживания"
    }
  }
};

const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState('de');
  const t = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src="/images/eh-logo.webp" 
              alt="EH Tax Consulting Logo" 
              className="h-10 w-auto transition-all duration-300"
            />
            <div className="font-semibold text-xl tracking-tight text-[#1a1a1a]">EH Tax Consulting</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#1a1a1a]/80 hover:text-[#1e3a5f] text-sm font-medium transition-colors">{t.nav.home}</a>
            <a href="#uber-mich" className="text-[#1a1a1a]/80 hover:text-[#1e3a5f] text-sm font-medium transition-colors">{t.nav.about}</a>
            <a href="#leistungen" className="text-[#1a1a1a]/80 hover:text-[#1e3a5f] text-sm font-medium transition-colors">{t.nav.services}</a>
            <a href="#kontakt" className="text-[#1a1a1a]/80 hover:text-[#1e3a5f] text-sm font-medium transition-colors">{t.nav.contact}</a>
            
            {/* Language selector dropdown */}
            <div className="relative ml-4">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-4 py-2 border border-gray-300 text-[#1a1a1a] hover:bg-gray-50 transition-all text-sm font-medium"
              >
                <span>{language.toUpperCase()}</span>
                <ChevronDown size={14} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-xl overflow-hidden min-w-[120px]">
                  <button 
                    onClick={() => handleLanguageChange('de')}
                    className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 ${language === 'de' ? 'bg-[#1e3a5f]/5 text-[#1e3a5f]' : 'text-[#1a1a1a]'}`}
                  >
                    <span className="text-lg">🇩🇪</span> Deutsch
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('ru')}
                    className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 ${language === 'ru' ? 'bg-[#1e3a5f]/5 text-[#1e3a5f]' : 'text-[#1a1a1a]'}`}
                  >
                    <span className="text-lg">🇷🇺</span> Русский
                  </button>
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <a 
              href="#kontakt" 
              className="ml-6 bg-[#1e3a5f] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#2a4d7a] shadow-lg shadow-[#1e3a5f]/20 inline-block"
            >
              {t.nav.contactCta}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-[#1a1a1a] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-50">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="relative mx-4 mt-20 bg-white border border-gray-200 shadow-2xl overflow-hidden rounded-lg">
            <div className="bg-gray-50 px-5 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img 
                    src="/images/eh-logo.webp" 
                    alt="EH Tax Consulting Logo" 
                    className="h-8 w-auto"
                  />
                  <div className="text-[#1a1a1a] font-semibold text-lg">EH Tax Consulting</div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[#1a1a1a] hover:bg-gray-100 transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
            </div>
            
            <div className="px-5 py-4 space-y-1">
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1a1a1a] border-b border-gray-100 hover:bg-gray-50">{t.nav.home}</a>
              <a href="#uber-mich" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1a1a1a] border-b border-gray-100 hover:bg-gray-50">{t.nav.about}</a>
              <a href="#leistungen" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1a1a1a] border-b border-gray-100 hover:bg-gray-50">{t.nav.services}</a>
              <a href="#kontakt" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1a1a1a] border-b border-gray-100 hover:bg-gray-50">{t.nav.contact}</a>
              
              <div className="flex items-center justify-center space-x-4 py-3">
                <button 
                  onClick={() => handleLanguageChange('de')}
                  className={`font-semibold text-sm ${language === 'de' ? 'text-[#1e3a5f] underline' : 'text-gray-500'}`}
                >
                  🇩🇪 DE
                </button>
                <span className="text-gray-300">/</span>
                <button 
                  onClick={() => handleLanguageChange('ru')}
                  className={`font-semibold text-sm ${language === 'ru' ? 'text-[#1e3a5f] underline' : 'text-gray-500'}`}
                >
                  🇷🇺 RU
                </button>
              </div>
              
              <div className="pt-2 pb-1">
                <a 
                  href="#kontakt" 
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3.5 font-semibold text-white bg-[#1e3a5f] hover:bg-[#2a4d7a] transition-all"
                >
                  {t.nav.contactCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  const heroImageRef = useRef(null);
  const heroCtaRef = useRef(null);
  
  // #region agent log
  useEffect(() => {
    const logData = {
      location: 'App.jsx:Hero:useEffect',
      message: 'Hero component mounted',
      data: {
        imageSrc: '/images/hero-bg.webp',
        ctaText: t.hero.cta,
        ctaClassName: 'bg-[#1e3a5f] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#2a4d7a] shadow-lg shadow-[#1e3a5f]/20 mb-12 md:mb-16'
      },
      timestamp: Date.now(),
      sessionId: 'debug-session',
      runId: 'run1',
      hypothesisId: 'A'
    };
    fetch('http://127.0.0.1:7243/ingest/c1ccd82c-6bf2-4a29-a196-33a023b05a59',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(()=>{});
  }, [t.hero.cta]);
  // #endregion
  
  // #region agent log
  useEffect(() => {
    if (heroImageRef.current) {
      const img = heroImageRef.current;
      const logImageLoad = (event, status) => {
        const logData = {
          location: 'App.jsx:Hero:imageLoad',
          message: `Hero image ${status}`,
          data: {
            imageSrc: img.src,
            imageComplete: img.complete,
            imageNaturalWidth: img.naturalWidth,
            imageNaturalHeight: img.naturalHeight,
            imageClientWidth: img.clientWidth,
            imageClientHeight: img.clientHeight,
            imageCurrentSrc: img.currentSrc || img.src
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'run1',
          hypothesisId: 'A'
        };
        fetch('http://127.0.0.1:7243/ingest/c1ccd82c-6bf2-4a29-a196-33a023b05a59',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(()=>{});
      };
      img.addEventListener('load', () => logImageLoad('loaded', 'loaded'));
      img.addEventListener('error', () => logImageLoad('error', 'failed'));
      if (img.complete) logImageLoad('already', 'already loaded');
      return () => {
        img.removeEventListener('load', logImageLoad);
        img.removeEventListener('error', logImageLoad);
      };
    }
  }, []);
  // #endregion
  
  // #region agent log
  useEffect(() => {
    const checkButtonStyles = () => {
      const heroCta = heroCtaRef.current;
      const headerCta = Array.from(document.querySelectorAll('nav a[href="#kontakt"]')).find(el => 
                         el.classList.contains('bg-[#1e3a5f]') || el.classList.contains('ml-6')
                       );
      
      const logRefs = {
        location: 'App.jsx:Hero:buttonStyles:refs',
        message: 'Checking button availability',
        data: {
          heroCtaRefExists: !!heroCta,
          headerCtaFound: !!headerCta,
          heroCtaText: heroCta?.textContent?.trim(),
          headerCtaText: headerCta?.textContent?.trim()
        },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'run1',
        hypothesisId: 'B'
      };
      fetch('http://127.0.0.1:7243/ingest/c1ccd82c-6bf2-4a29-a196-33a023b05a59',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logRefs)}).catch(()=>{});
      
      if (heroCta && headerCta) {
        const heroStyles = window.getComputedStyle(heroCta);
        const headerStyles = window.getComputedStyle(headerCta);
        const logData = {
          location: 'App.jsx:Hero:buttonStyles',
          message: 'CTA button computed styles comparison',
          data: {
            heroButton: {
              width: heroCta.offsetWidth,
              height: heroCta.offsetHeight,
              paddingLeft: heroStyles.paddingLeft,
              paddingRight: heroStyles.paddingRight,
              paddingTop: heroStyles.paddingTop,
              paddingBottom: heroStyles.paddingBottom,
              fontSize: heroStyles.fontSize,
              display: heroStyles.display,
              text: heroCta.textContent?.trim(),
              className: heroCta.className
            },
            headerButton: {
              width: headerCta.offsetWidth,
              height: headerCta.offsetHeight,
              paddingLeft: headerStyles.paddingLeft,
              paddingRight: headerStyles.paddingRight,
              paddingTop: headerStyles.paddingTop,
              paddingBottom: headerStyles.paddingBottom,
              fontSize: headerStyles.fontSize,
              display: headerStyles.display,
              text: headerCta.textContent?.trim(),
              className: headerCta.className
            }
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'run1',
          hypothesisId: 'B'
        };
        fetch('http://127.0.0.1:7243/ingest/c1ccd82c-6bf2-4a29-a196-33a023b05a59',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(()=>{});
      } else {
        const logMissing = {
          location: 'App.jsx:Hero:buttonStyles:missing',
          message: 'Buttons not found',
          data: {
            heroCtaRefExists: !!heroCta,
            headerCtaFound: !!headerCta
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'run1',
          hypothesisId: 'B'
        };
        fetch('http://127.0.0.1:7243/ingest/c1ccd82c-6bf2-4a29-a196-33a023b05a59',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logMissing)}).catch(()=>{});
      }
    };
    const timeout1 = setTimeout(checkButtonStyles, 500);
    const timeout2 = setTimeout(checkButtonStyles, 1500);
    const timeout3 = setTimeout(checkButtonStyles, 3000);
    window.addEventListener('resize', checkButtonStyles);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      window.removeEventListener('resize', checkButtonStyles);
    };
  }, [t.nav.contactCta]);
  // #endregion
  
  const features = [
    {
      icon: User,
      title: t.features.personal.title,
      description: t.features.personal.description
    },
    {
      icon: Shield,
      title: t.features.secure.title,
      description: t.features.secure.description
    },
    {
      icon: Monitor,
      title: t.features.digital.title,
      description: t.features.digital.description
    }
  ];
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={heroImageRef}
          src="/images/hero-bg.webp" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16 md:pb-24 flex-grow flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center flex-grow flex flex-col items-center justify-center"
        >
          <h1 className="font-semibold leading-tight mb-6 md:mb-8 text-[#1a1a1a] text-center">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2">{t.hero.titleLine1}</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{t.hero.titleLine2}</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[#4a4a4a] leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto px-4">
            {t.hero.subtitle}
          </p>
          
          <div className="w-full flex justify-center mb-12 md:mb-16">
            <a 
              ref={heroCtaRef}
              href="#kontakt" 
              className="bg-[#1e3a5f] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#2a4d7a] shadow-lg shadow-[#1e3a5f]/20 inline-block"
            >
              {t.nav.contactCta}
            </a>
          </div>
        </motion.div>
        
        {/* Feature boxes - positioned at bottom */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto w-full mt-8 md:mt-12">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-gray-200/50 shadow-md text-left"
            >
              <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center mb-3">
                <feature.icon size={20} className="text-[#1e3a5f]" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2 text-[#1a1a1a]">{feature.title}</h3>
              <p className="text-xs md:text-sm text-[#4a4a4a] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Statistics Section (like Apex Arc)
const Statistics = () => {
  const { t } = useLanguage();
  
  const stats = [
    { number: "25+", label: t.statistics.years },
    { number: "500+", label: t.statistics.projects },
    { number: "98%", label: t.statistics.retention },
    { number: "100%", label: t.statistics.personal }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${
                i % 2 === 0 ? 'text-[#1e3a5f]' : 'text-[#185615]'
              }`}>{stat.number}</div>
              <div className="text-sm md:text-base text-[#4a4a4a]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Challenges = () => {
  const { t } = useLanguage();
  
  const challenges = [
    {
      icon: AlertTriangle,
      title: t.challenges.items.unqualified.title,
      description: t.challenges.items.unqualified.description
    },
    {
      icon: TrendingDown,
      title: t.challenges.items.errors.title,
      description: t.challenges.items.errors.description
    },
    {
      icon: HelpCircle,
      title: t.challenges.items.advice.title,
      description: t.challenges.items.advice.description
    },
    {
      icon: Shuffle,
      title: t.challenges.items.processes.title,
      description: t.challenges.items.processes.description
    },
    {
      icon: MessageCircleOff,
      title: t.challenges.items.language.title,
      description: t.challenges.items.language.description
    },
    {
      icon: EyeOff,
      title: t.challenges.items.costs.title,
      description: t.challenges.items.costs.description
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1a] mb-4 md:mb-6">
            {t.challenges.title}
          </h2>
          <p className="text-base md:text-lg text-[#4a4a4a] max-w-3xl mx-auto">
            {t.challenges.subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {challenges.map((challenge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 border border-gray-200 hover:border-[#1e3a5f]/40 transition-all relative overflow-hidden group shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a5f] to-[#185615] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6 ${
                i % 3 === 0 ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]' : 
                i % 3 === 1 ? 'bg-[#185615]/10 text-[#185615]' : 
                'bg-[#1e3a5f]/10 text-[#1e3a5f]'
              }`}>
                <challenge.icon size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#1a1a1a]">{challenge.title}</h3>
              <p className="text-sm md:text-base text-[#4a4a4a]">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DieLoesung = () => {
  const { t } = useLanguage();
  
  const solutions = [
    {
      icon: User,
      title: t.solution.items.personal.title,
      description: t.solution.items.personal.description
    },
    {
      icon: Eye,
      title: t.solution.items.errors.title,
      description: t.solution.items.errors.description
    },
    {
      icon: Monitor,
      title: t.solution.items.digital.title,
      description: t.solution.items.digital.description
    },
    {
      icon: Clock,
      title: t.solution.items.transparency.title,
      description: t.solution.items.transparency.description
    },
    {
      icon: BadgeCheck,
      title: t.solution.items.certified.title,
      description: t.solution.items.certified.description
    },
    {
      icon: DollarSign,
      title: t.solution.items.pricing.title,
      description: t.solution.items.pricing.description
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1a] mb-4 md:mb-6">
            {t.solution.title}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 md:p-8 border border-gray-200 hover:border-[#185615]/40 transition-all relative overflow-hidden group shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#185615] to-[#1e3a5f] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6 ${
                i % 3 === 0 ? 'bg-[#185615]/10 text-[#185615]' : 
                i % 3 === 1 ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]' : 
                'bg-[#185615]/10 text-[#185615]'
              }`}>
                <solution.icon size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#1a1a1a]">{solution.title}</h3>
              <p className="text-sm md:text-base text-[#4a4a4a]">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ number, icon: Icon, title, description, points, note, learnMore }) => {
  return (
    <div className="bg-white border border-gray-200 transition-all duration-300 hover:border-[#1e3a5f]/40 group h-full flex flex-col relative overflow-hidden shadow-sm hover:shadow-md">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a5f] via-[#185615] to-[#1e3a5f] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        {/* Number badge */}
        <div className="absolute top-4 left-4 bg-[#185615] text-white px-3 py-1 text-sm font-semibold">{number}</div>
        
        {/* Icon at top */}
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6 mt-2 ${
          number === '03' ? 'bg-[#185615]/10 text-[#185615]' : 'bg-[#1e3a5f]/10 text-[#1e3a5f]'
        }`}>
          <Icon size={24} />
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#1a1a1a]">{title}</h3>
        <p className="text-sm md:text-base text-[#4a4a4a] mb-4 md:mb-6">{description}</p>
        {points && (
          <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-[#4a4a4a]">
                <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${number === '03' ? 'text-[#185615]' : 'text-[#1e3a5f]'}`} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {note && (
          <p className="text-xs md:text-sm text-[#4a4a4a] italic mb-4 md:mb-6 bg-gray-50 p-3 border border-gray-100">{note}</p>
        )}
        <div className="flex-grow"></div>
        
        {/* CTA Button */}
        {learnMore && (
          <a 
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white text-sm md:text-base font-semibold transition-all hover:bg-[#2a4d7a] mt-4"
          >
            {learnMore}
            <ArrowRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section id="leistungen" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1a] mb-4">
            {t.services.title}
          </h2>
          <p className="text-base md:text-lg text-[#4a4a4a] max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard 
            number="01"
            icon={Calculator}
            title={t.services.tax.title}
            description={t.services.tax.description}
            points={t.services.tax.points}
            learnMore={t.services.learnMore}
          />
          <FeatureCard 
            number="02"
            icon={FileText}
            title={t.services.accounting.title}
            description={t.services.accounting.description}
            points={t.services.accounting.points}
            learnMore={t.services.learnMore}
          />
          <FeatureCard 
            number="03"
            icon={Users}
            title={t.services.payroll.title}
            description={t.services.payroll.description}
            points={t.services.payroll.points}
            note={t.services.payroll.note}
            learnMore={t.services.learnMore}
          />
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  const { t } = useLanguage();
  
  const qualifications = [
    {
      icon: Award,
      title: t.about.qualifications.expertise.title,
      description: t.about.qualifications.expertise.description
    },
    {
      icon: User,
      title: t.about.qualifications.personal.title,
      description: t.about.qualifications.personal.description
    },
    {
      icon: Monitor,
      title: t.about.qualifications.digital.title,
      description: t.about.qualifications.digital.description
    },
    {
      icon: Languages,
      title: t.about.qualifications.bilingual.title,
      description: t.about.qualifications.bilingual.description
    }
  ];

  return (
    <section id="uber-mich" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#1a1a1a]">
              {t.about.title}
            </h2>
            
            <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed mb-8">
              {t.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualifications.map((qual, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    i % 2 === 0 ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]' : 'bg-[#185615]/10 text-[#185615]'
                  }`}>
                    <qual.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a] mb-1 text-base">{qual.title}</h4>
                    <p className="text-sm text-[#4a4a4a]">{qual.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img 
                src="/images/articleimg.webp" 
                alt="Elena - Ihre Steuerberaterin" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Qualification = () => {
  const { t } = useLanguage();
  
  const items = [
    {
      icon: UserCheck,
      title: t.qualification.items.license.title,
      description: t.qualification.items.license.description
    },
    {
      icon: Building2,
      title: t.qualification.items.chamber.title,
      description: t.qualification.items.chamber.description
    },
    {
      icon: ShieldCheck,
      title: t.qualification.items.legal.title,
      description: t.qualification.items.legal.description
    },
    {
      icon: ClipboardCheck,
      title: t.qualification.items.transparent.title,
      description: t.qualification.items.transparent.description
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1a] mb-4 md:mb-6">
            {t.qualification.title}
          </h2>
          <p className="text-base md:text-lg text-[#4a4a4a] max-w-3xl mx-auto">
            {t.qualification.subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 md:p-8 border border-gray-200 hover:border-[#1e3a5f]/40 transition-all relative overflow-hidden group shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a5f] to-[#185615] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-4 md:mb-6 ${
                i % 2 === 0 ? 'bg-[#1e3a5f]/10 text-[#1e3a5f]' : 'bg-[#185615]/10 text-[#185615]'
              }`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* KWT Badge */}
        <div className="text-center">
          <p className="text-[#4a4a4a] text-sm mb-4">{t.qualification.memberOf}</p>
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 border border-[#1e3a5f]/30 shadow-sm">
            <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
              <Building2 size={20} className="text-[#1e3a5f]" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-[#1a1a1a]">{t.qualification.kwtName}</div>
              <div className="text-sm text-[#4a4a4a]">{t.qualification.kwtFull}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 md:p-16 text-center relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/5 via-transparent to-[#185615]/5"></div>
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#1a1a1a]">
              {t.cta.title}
            </h2>
            <p className="text-base md:text-lg text-[#4a4a4a] mb-10">
              {t.cta.description}
            </p>
            <a 
              href="#kontakt" 
              className="inline-block bg-[#1e3a5f] text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold transition-all hover:bg-[#2a4d7a] shadow-lg shadow-[#1e3a5f]/20"
            >
              {t.cta.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col">
            <div className="space-y-6 md:space-y-8">
              <a href="mailto:office@taxconsulting.co.at" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#1e3a5f]/10 border border-[#1e3a5f]/30 flex items-center justify-center text-[#1e3a5f] group-hover:bg-[#1e3a5f]/20 transition-all flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[#4a4a4a] uppercase font-semibold mb-1">{t.contact.email}</p>
                  <p className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#1e3a5f] transition-colors truncate">
                    office@taxconsulting.co.at
                  </p>
                </div>
              </a>
              
              <a href="tel:+4369910485332" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#185615]/10 border border-[#185615]/30 flex items-center justify-center text-[#185615] group-hover:bg-[#185615]/20 transition-all flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-[#4a4a4a] uppercase font-semibold mb-1">{t.contact.phone}</p>
                  <p className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#185615] transition-colors">
                    +43 699 104 85 332
                  </p>
                </div>
              </a>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-[#1e3a5f]/10 border border-[#1e3a5f]/30 flex items-center justify-center text-[#1e3a5f] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-[#4a4a4a] uppercase font-semibold mb-1">{t.contact.address}</p>
                  <p className="text-xl font-semibold text-[#1a1a1a]">Beheimgasse 11/4, 1170 Wien</p>
                </div>
              </div>
            </div>
            
            {/* Vienna Building Image */}
            <div className="mt-8 md:mt-12 flex-grow hidden lg:block">
              <div className="overflow-hidden h-full min-h-[280px] border border-gray-200 shadow-sm">
                <img 
                  src="/images/vienna-contact.webp" 
                  alt="Wien Architektur" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-sm">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1a1a1a]">{t.contact.form.name}</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a1a] focus:border-[#1e3a5f] focus:outline-none transition-all text-sm" placeholder="" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1a1a1a]">{t.contact.form.emailLabel}</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a1a] focus:border-[#1e3a5f] focus:outline-none transition-all text-sm" placeholder="" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1a1a1a]">{t.contact.form.phoneLabel}</label>
                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a1a] focus:border-[#1e3a5f] focus:outline-none transition-all text-sm" placeholder="" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#1a1a1a]">{t.contact.form.message}</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a1a] focus:border-[#1e3a5f] focus:outline-none transition-all text-sm" placeholder=""></textarea>
              </div>
              
              <button 
                className="w-full py-4 bg-[#1e3a5f] text-white text-base font-semibold transition-all hover:bg-[#2a4d7a] shadow-lg shadow-[#1e3a5f]/20"
              >
                {t.contact.form.submit}
              </button>
              
              <p className="text-xs text-[#4a4a4a] text-center">
                {t.contact.form.privacy} <a href="#" className="underline text-[#1e3a5f]">{t.contact.form.privacyLink}</a> {t.contact.form.privacyEnd}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <footer className="bg-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="sm:col-span-2">
            <div className="text-xl font-semibold mb-4 text-[#1a1a1a]">EH Tax Consulting</div>
            <p className="text-[#4a4a4a] max-w-sm mb-6 text-sm">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => setLanguage('de')}
                className={`text-sm font-semibold transition-colors ${language === 'de' ? 'text-[#1e3a5f] underline' : 'text-[#4a4a4a] hover:text-[#1e3a5f]'}`}
              >
                🇩🇪 DE
              </button>
              <span className="text-gray-300">/</span>
              <button 
                onClick={() => setLanguage('ru')}
                className={`text-sm font-semibold transition-colors ${language === 'ru' ? 'text-[#1e3a5f] underline' : 'text-[#4a4a4a] hover:text-[#1e3a5f]'}`}
              >
                🇷🇺 RU
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4 text-[#1a1a1a]">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-[#4a4a4a] text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#1e3a5f] mt-0.5 flex-shrink-0" />
                <span className="break-all">office@taxconsulting.co.at</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#185615] flex-shrink-0" />
                +43 699 104 85 332
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#1e3a5f] mt-0.5 flex-shrink-0" />
                Beheimgasse 11/4, 1170 Wien
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4 text-[#1a1a1a]">{t.footer.legalTitle}</h4>
            <ul className="space-y-3 text-[#4a4a4a] text-sm">
              <li><a href="#" className="hover:text-[#1e3a5f] transition-colors">{t.footer.imprint}</a></li>
              <li><a href="#" className="hover:text-[#1e3a5f] transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-[#1e3a5f] transition-colors">{t.footer.terms}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-gray-200 text-center text-xs text-[#4a4a4a]">
          © {new Date().getFullYear()} EH Tax Consulting. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Challenges />
        <DieLoesung />
        <Services />
        <AboutMe />
        <Qualification />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

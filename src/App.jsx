import React from 'react';
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
      home: "Home",
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
        ? 'bg-white shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            <img 
              src="/images/eh-logo.webp" 
              alt="EH Tax Consulting Logo" 
              className="h-9 sm:h-10 w-auto transition-all duration-300"
            />
            <div className={`transition-colors duration-300 ${scrolled ? 'text-[#1A2433]' : 'text-white'}`}>
              <div className="font-bold text-sm sm:text-base">EH Tax Consulting</div>
              <div className={`text-[10px] sm:text-xs ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>Steuerberatungs GmbH</div>
            </div>
          </div>
          
          {/* Desktop Navigation - Glassmorphism pill */}
          <div className="hidden md:flex items-center">
            <div className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
              scrolled 
                ? 'bg-gray-100' 
                : 'bg-white/10 backdrop-blur-xl border border-white/20'
            }`}>
              <a href="#home" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled 
                  ? 'text-[#1A2433] hover:bg-white hover:shadow-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}>{t.nav.home}</a>
              <a href="#uber-mich" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled 
                  ? 'text-[#1A2433] hover:bg-white hover:shadow-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}>{t.nav.about}</a>
              <a href="#leistungen" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled 
                  ? 'text-[#1A2433] hover:bg-white hover:shadow-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}>{t.nav.services}</a>
              <a href="#kontakt" className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled 
                  ? 'text-[#1A2433] hover:bg-white hover:shadow-sm' 
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}>{t.nav.contact}</a>
              
              {/* Language selector dropdown */}
              <div className="relative ml-2">
                <button 
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full border transition-all duration-300 ${
                    scrolled 
                      ? 'border-gray-200 text-[#1A2433] hover:bg-gray-50' 
                      : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  <ChevronDown size={14} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {langDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[120px]">
                    <button 
                      onClick={() => handleLanguageChange('de')}
                      className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 ${language === 'de' ? 'bg-[#19215f]/5 text-[#19215f]' : 'text-gray-700'}`}
                    >
                      <span className="text-lg">🇩🇪</span> Deutsch
                    </button>
                    <button 
                      onClick={() => handleLanguageChange('ru')}
                      className={`w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 ${language === 'ru' ? 'bg-[#19215f]/5 text-[#19215f]' : 'text-gray-700'}`}
                    >
                      <span className="text-lg">🇷🇺</span> Русский
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* CTA Button */}
            <a 
              href="#kontakt" 
              className={`ml-6 relative group px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-500 overflow-hidden ${
                scrolled 
                  ? 'bg-[#19215f] text-white hover:bg-[#2C3E50] shadow-lg hover:shadow-xl' 
                  : 'bg-white/10 backdrop-blur-xl border border-white/30 text-white hover:bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
              }`}
            >
              <span className="relative z-10">{t.nav.contactCta}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-full transition-colors ${
                scrolled ? 'text-[#19215f]' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 z-50">
          {/* Blurred background overlay */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu container with glassmorphism */}
          <div className="relative mx-4 mt-20 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Header area with logo */}
            <div className="bg-[#1A2433] px-5 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img 
                    src="/images/eh-logo.webp" 
                    alt="EH Tax Consulting Logo" 
                    className="h-9 w-auto"
                  />
                  <div className="text-white">
                    <div className="font-bold text-sm">EH Tax Consulting</div>
                    <div className="text-xs text-white/70">Steuerberatungs GmbH</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
            </div>
            
            {/* Menu items */}
            <div className="px-5 py-4 space-y-1">
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1A2433] border-b border-gray-100 hover:bg-gray-50 rounded-lg">{t.nav.home}</a>
              <a href="#uber-mich" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1A2433] border-b border-gray-100 hover:bg-gray-50 rounded-lg">{t.nav.about}</a>
              <a href="#leistungen" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1A2433] border-b border-gray-100 hover:bg-gray-50 rounded-lg">{t.nav.services}</a>
              <a href="#kontakt" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-[#1A2433] border-b border-gray-100 hover:bg-gray-50 rounded-lg">{t.nav.contact}</a>
              
              <div className="flex items-center justify-center space-x-4 py-3">
                <button 
                  onClick={() => handleLanguageChange('de')}
                  className={`font-semibold text-sm ${language === 'de' ? 'text-[#19215f] underline' : 'text-gray-400'}`}
                >
                  🇩🇪 DE
                </button>
                <span className="text-gray-300">/</span>
                <button 
                  onClick={() => handleLanguageChange('ru')}
                  className={`font-semibold text-sm ${language === 'ru' ? 'text-[#19215f] underline' : 'text-gray-400'}`}
                >
                  🇷🇺 RU
                </button>
              </div>
              
              <div className="pt-2 pb-1">
                <a 
                  href="#kontakt" 
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3.5 rounded-full font-semibold text-white
                    bg-gradient-to-r from-[#19215f] via-[#2C3E50] to-[#19215f] bg-[length:200%_100%]
                    shadow-[0_10px_30px_rgba(25,33,95,0.3)]
                    hover:shadow-[0_15px_40px_rgba(25,33,95,0.4)]
                    transition-all duration-300"
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
          src="/images/hero-bg.webp" 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        {/* Warm copper/rose gold tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#19215f]/10 via-transparent to-rose-900/5"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 text-center flex-grow flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="font-bold leading-[1.1] mb-6 md:mb-8 text-white drop-shadow-2xl italic text-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{t.hero.titleLine1}</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] mt-1 md:mt-2">{t.hero.titleLine2}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl text-white/90 leading-relaxed mb-8 md:mb-12 italic drop-shadow-lg px-4 sm:px-0 text-center">
            {t.hero.subtitle}
          </p>
          
          <a 
            href="#kontakt" 
            className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg transition-all duration-500 overflow-hidden
              bg-white/10 backdrop-blur-xl
              border border-white/25 
              shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
              hover:shadow-[0_25px_70px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
              hover:bg-white/20 hover:-translate-y-1 text-white"
          >
            <Phone size={18} className="relative z-10" />
            <span className="relative z-10 tracking-wide">{t.hero.cta}</span>
          </a>
          
          {/* Feature boxes - moved from FeatureHighlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-white/10 text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/10 border border-white/20 flex-shrink-0">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-sm text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Trust badges - positioned at bottom of hero */}
      <div className="relative z-10 py-6 md:py-10 px-4">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#185615]"></div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-white/90">{t.hero.badge1}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#185615]"></div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-white/90">{t.hero.badge2}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#185615]"></div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-white/90">{t.hero.badge3}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// FeatureHighlights moved into Hero section

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
    <section className="py-12 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#19215f] mb-4 md:mb-6 px-4 sm:px-0">
            {t.challenges.title}
          </h2>
          <p className="text-base md:text-lg text-[#333333]/70 max-w-3xl mx-auto px-4 sm:px-0">
            {t.challenges.subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {challenges.map((challenge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#19215f]/10 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-red-500 mb-4 md:mb-6 border border-[#19215f]/10 shadow-lg shadow-[#19215f]/20">
                <challenge.icon size={20} className="md:hidden" />
                <challenge.icon size={24} className="hidden md:block" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#1A2433]">{challenge.title}</h3>
              <p className="text-sm md:text-base text-[#333333]/70">{challenge.description}</p>
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
    <section className="py-12 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block bg-[#19215f]/10 backdrop-blur-sm text-[#19215f] px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-[#19215f]/20 shadow-sm">
            {t.solution.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#19215f] px-4 sm:px-0">
            {t.solution.title}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {solutions.map((solution, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#19215f]/80 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 shadow-lg shadow-[#19215f]/20 border border-[#19215f]/30">
                <solution.icon size={20} className="md:hidden" />
                <solution.icon size={24} className="hidden md:block" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#1A2433]">{solution.title}</h3>
              <p className="text-sm md:text-base text-[#333333]/70">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, points, note, learnMore }) => {
  return (
    <div className="bg-white p-5 md:p-8 rounded-xl shadow-sm border border-[#F5F5F5] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group h-full flex flex-col">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#19215f]/80 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#19215f]/20 border border-[#19215f]/30 text-white">
        <Icon size={24} className="md:hidden" />
        <Icon size={28} className="hidden md:block" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#1A2433]">{title}</h3>
      <p className="text-sm md:text-base text-[#333333]/70 mb-4 md:mb-6">{description}</p>
      <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-[#333333]/80">
            <ChevronRight size={14} className="text-[#185615] mt-0.5 flex-shrink-0 md:hidden" />
            <ChevronRight size={16} className="text-[#185615] mt-0.5 flex-shrink-0 hidden md:block" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {note && (
        <p className="text-xs md:text-sm text-[#333333]/60 italic mb-4 md:mb-6 bg-[#F5F5F5] p-2 md:p-3 rounded-lg">{note}</p>
      )}
      {/* Spacer to push button to bottom */}
      <div className="flex-grow"></div>
      <a 
        href="#kontakt"
        className="relative inline-flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 overflow-hidden
        bg-gradient-to-r from-[#19215f]/5 to-[#19215f]/10 backdrop-blur-sm
        border border-[#19215f]/20 
        shadow-[0_4px_15px_rgba(25,33,95,0.1),inset_0_1px_0_rgba(255,255,255,0.5)]
        hover:shadow-[0_8px_25px_rgba(25,33,95,0.15),inset_0_1px_0_rgba(255,255,255,0.6)]
        hover:-translate-y-0.5 text-[#19215f] group-hover:bg-[#19215f]/15 mt-auto w-full sm:w-auto"
      >
        <span className="relative z-10">{learnMore}</span>
        <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform md:hidden" />
        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform hidden md:block" />
      </a>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section id="leistungen" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block bg-[#19215f]/10 backdrop-blur-sm text-[#19215f] px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-[#19215f]/20 shadow-sm">
            {t.services.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#19215f] mb-4 md:mb-6 italic px-4 sm:px-0">
            {t.services.title}
          </h2>
          <p className="text-base md:text-lg text-[#333333]/70 max-w-3xl mx-auto px-4 sm:px-0">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
          <FeatureCard 
            icon={Calculator}
            title={t.services.tax.title}
            description={t.services.tax.description}
            points={t.services.tax.points}
            learnMore={t.services.learnMore}
          />
          <FeatureCard 
            icon={FileText}
            title={t.services.accounting.title}
            description={t.services.accounting.description}
            points={t.services.accounting.points}
            learnMore={t.services.learnMore}
          />
          <FeatureCard 
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
    <section id="uber-mich" className="py-12 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border-4 md:border-8 border-white">
              <img 
                src="/images/articleimg.webp" 
                alt="Elena - Ihre Steuerberaterin" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Certification badge */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl border border-[#F5F5F5] flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#19215f]/80 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#19215f]/20 border border-[#19215f]/30">
                <Award size={16} className="md:hidden" />
                <Award size={20} className="hidden md:block" />
              </div>
              <div>
                <div className="font-bold text-[#1A2433] text-xs md:text-base">{t.about.certified}</div>
                <div className="text-xs md:text-sm text-gray-500">{t.about.kwtMember}</div>
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-[#19215f]/10 backdrop-blur-sm text-[#19215f] px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-[#19215f]/20 shadow-sm">
              {t.about.badge}
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#19215f]">
              {t.about.title}
            </h2>
            
            <p className="text-sm md:text-lg text-[#333333]/80 leading-relaxed mb-6 md:mb-10">
              {t.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {qualifications.map((qual, i) => (
                <div key={i} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#19215f]/80 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#19215f]/20 border border-[#19215f]/30">
                    <qual.icon size={16} className="md:hidden" />
                    <qual.icon size={20} className="hidden md:block" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A2433] mb-0.5 md:mb-1 text-sm md:text-base">{qual.title}</h4>
                    <p className="text-xs md:text-sm text-[#333333]/70">{qual.description}</p>
                  </div>
                </div>
              ))}
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
    <section className="py-12 md:py-24 bg-gradient-to-br from-[#19215f] via-[#1A2433] to-[#185615]/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="80%" x2="30%" y2="60%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="30%" y1="60%" x2="50%" y2="70%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="50%" y1="70%" x2="70%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <line x1="70%" y1="50%" x2="90%" y2="65%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <circle cx="30%" cy="60%" r="4" fill="rgba(255,255,255,0.2)" />
          <circle cx="50%" cy="70%" r="4" fill="rgba(255,255,255,0.2)" />
          <circle cx="70%" cy="50%" r="4" fill="rgba(255,255,255,0.2)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 border border-white/20">
            {t.qualification.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 italic px-4 sm:px-0">
            {t.qualification.title}
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto px-4 sm:px-0">
            {t.qualification.subtitle}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 border border-white/20">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* KWT Badge */}
        <div className="text-center">
          <p className="text-white/50 text-sm mb-4">{t.qualification.memberOf}</p>
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
              <Building2 size={20} className="text-white" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">{t.qualification.kwtName}</div>
              <div className="text-sm text-white/70">{t.qualification.kwtFull}</div>
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
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A2433] rounded-2xl md:rounded-[40px] p-6 sm:p-8 md:p-16 text-center relative overflow-hidden shadow-xl md:shadow-2xl">
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-[#185615]/20 rounded-full blur-[50px] md:blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-[#19215f]/30 rounded-full blur-[50px] md:blur-[100px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white">
              {t.cta.title}
            </h2>
            <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-10">
              {t.cta.description}
            </p>
            <a 
              href="#kontakt" 
              className="group relative inline-flex items-center gap-2 md:gap-3 px-6 sm:px-8 md:px-10 py-3 md:py-5 rounded-full font-semibold text-sm md:text-lg transition-all duration-500 overflow-hidden
                bg-gradient-to-br from-white/95 via-white/90 to-gray-100/95 backdrop-blur-xl
                border border-white/50 
                shadow-[0_20px_60px_rgba(0,0,0,0.15),0_8px_25px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.05)]
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.2),0_12px_35px_rgba(0,0,0,0.15),inset_0_2px_0_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.05)]
                hover:-translate-y-1 text-[#19215f]"
            >
              <span className="relative z-10 tracking-wide">{t.cta.button}</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
    <section id="kontakt" className="py-12 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col">
            <div className="space-y-4 md:space-y-8">
              <a href="mailto:office@taxconsulting.co.at" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#19215f]/80 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#19215f]/20 border border-[#19215f]/30 group-hover:bg-[#19215f] group-hover:scale-105 transition-all flex-shrink-0">
                  <Mail size={20} className="md:hidden" />
                  <Mail size={24} className="hidden md:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-[#333333]/50 uppercase font-bold">{t.contact.email}</p>
                  <p className="text-base md:text-xl font-semibold text-[#1A2433] group-hover:text-[#19215f] transition-colors truncate">
                    office@taxconsulting.co.at
                  </p>
                </div>
              </a>
              
              <a href="tel:+4369910485332" className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#19215f]/80 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#19215f]/20 border border-[#19215f]/30 group-hover:bg-[#19215f] group-hover:scale-105 transition-all flex-shrink-0">
                  <Phone size={20} className="md:hidden" />
                  <Phone size={24} className="hidden md:block" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#333333]/50 uppercase font-bold">{t.contact.phone}</p>
                  <p className="text-base md:text-xl font-semibold text-[#1A2433] group-hover:text-[#19215f] transition-colors">
                    +43 699 104 85 332
                  </p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#19215f]/80 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#19215f]/20 border border-[#19215f]/30 flex-shrink-0">
                  <MapPin size={20} className="md:hidden" />
                  <MapPin size={24} className="hidden md:block" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#333333]/50 uppercase font-bold">{t.contact.address}</p>
                  <p className="text-base md:text-xl font-semibold text-[#1A2433]">Beheimgasse 11/4, 1170 Wien</p>
                </div>
              </div>
            </div>
            
            {/* Vienna Building Image */}
            <div className="mt-8 md:mt-12 flex-grow hidden lg:block">
              <div className="rounded-2xl md:rounded-[32px] overflow-hidden shadow-xl h-full min-h-[280px]">
                <img 
                  src="/images/vienna-contact.webp" 
                  alt="Wien Architektur" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[32px] shadow-xl md:shadow-2xl border border-[#F5F5F5]">
            <form className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-[#1A2433]">{t.contact.form.name}</label>
                  <input type="text" className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-200 focus:border-[#19215f] focus:ring-2 focus:ring-[#19215f]/20 outline-none transition-all text-[#1A2433] text-sm md:text-base" placeholder="" />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-[#1A2433]">{t.contact.form.emailLabel}</label>
                  <input type="email" className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-200 focus:border-[#19215f] focus:ring-2 focus:ring-[#19215f]/20 outline-none transition-all text-[#1A2433] text-sm md:text-base" placeholder="" />
                </div>
              </div>
              
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-[#1A2433]">{t.contact.form.phoneLabel}</label>
                <input type="tel" className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-200 focus:border-[#19215f] focus:ring-2 focus:ring-[#19215f]/20 outline-none transition-all text-[#1A2433] text-sm md:text-base" placeholder="" />
              </div>
              
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-[#1A2433]">{t.contact.form.message}</label>
                <textarea rows="3" className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-gray-200 focus:border-[#19215f] focus:ring-2 focus:ring-[#19215f]/20 outline-none transition-all text-[#1A2433] text-sm md:text-base md:rows-4" placeholder=""></textarea>
              </div>
              
              <button 
                className="group relative w-full py-3.5 md:py-5 rounded-full text-sm md:text-lg font-semibold transition-all duration-500 overflow-hidden
                  bg-gradient-to-r from-[#19215f] via-[#2C3E50] to-[#19215f] bg-[length:200%_100%] bg-left
                  backdrop-blur-xl border border-white/10
                  shadow-[0_15px_50px_rgba(25,33,95,0.35),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.2)]
                  hover:shadow-[0_20px_60px_rgba(25,33,95,0.45),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)]
                  hover:bg-right hover:-translate-y-0.5 text-white flex items-center justify-center gap-2"
              >
                <span className="relative z-10 tracking-wide">{t.contact.form.submit}</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <p className="text-[10px] md:text-xs text-[#333333]/50 text-center">
                {t.contact.form.privacy} <a href="#" className="underline">{t.contact.form.privacyLink}</a> {t.contact.form.privacyEnd}
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
    <footer className="bg-[#1A2433] text-white pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <img 
                src="/images/eh-logo.webp" 
                alt="EH Tax Consulting" 
                className="h-10 md:h-12 w-auto"
              />
              <div>
                <div className="font-bold text-sm md:text-base">EH Tax Consulting</div>
                <div className="text-xs text-gray-400">Steuerberatungs GmbH</div>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 md:mb-8 text-sm md:text-base">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => setLanguage('de')}
                className={`text-sm font-semibold transition-colors ${language === 'de' ? 'text-white underline' : 'text-gray-500 hover:text-white'}`}
              >
                🇩🇪 DE
              </button>
              <span className="text-gray-500">/</span>
              <button 
                onClick={() => setLanguage('ru')}
                className={`text-sm font-semibold transition-colors ${language === 'ru' ? 'text-white underline' : 'text-gray-500 hover:text-white'}`}
              >
                🇷🇺 RU
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#185615] mt-0.5 flex-shrink-0" />
                <span className="break-all">office@taxconsulting.co.at</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#185615] flex-shrink-0" />
                +43 699 104 85 332
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#185615] mt-0.5 flex-shrink-0" />
                Beheimgasse 11/4, 1170 Wien
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">{t.footer.legalTitle}</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.imprint}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-white/10 text-center text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} EH Tax Consulting. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAFAFA] font-['Montserrat',_sans-serif]">
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

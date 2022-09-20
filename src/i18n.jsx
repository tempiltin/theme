import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    General: "General",
                    Dashboards: "Dashboards",
                    Widgets: "Widgets",
                    Dashboard: "Dashboard",
                    Default: "Default",
                    Ecommerce: "Ecommerce",
                    Chart: "Chart",
                    Applications: "Applications",
                    ReadytouseApps: "Ready to use Apps"
                }
            },
            uz: {
                translations: {
                    General: "General",
                    Dashboards: "Boshqaruv panellari",
                    Widgets: "Vidjetlar",
                    Dashboard: "Boshqaruv paneli",
                    Default: "Standart",
                    Ecommerce: "Elektron tijorat",
                    Chart: "Diagramma",
                    Applications: "Ilovalar",
                    ReadytouseApps: "Foydalanishga tayyor ilovalar"
                }
            },
            cn: {
                translations: {
                    General: "一般",
                    Dashboards: "小部件",
                    Widgets: "小部件",
                    Dashboard: "仪表板",
                    Default: "默认",
                    Ecommerce: "电子商务",
                    Chart: "图表",
                    Applications: "应用领域",
                    ReadytouseApps: "准备使用的应用程序"
                }
            },
            ae: {
                translations: {
                    General: "جنرال لواء",
                    Dashboards: "الحاجيات",
                    Widgets: "لوحات القيادة ",
                    Dashboard: "لوحة القيادة",
                    Default: "إفتراضي",
                    Ecommerce: "التجارة الإلكترونية",
                    Chart: "مخطط",
                    Applications: "التطبيقات",
                    ReadytouseApps: "جاهز لاستخدام التطبيقات"
                }
            },
            du: {
                translations: {
                    General: "Algemeen",
                    Dashboards: "Dashboards",
                    Widgets: " widgets",
                    Dashboard: "Dashboard",
                    Default: "Standaard",
                    Ecommerce: "E-commerce",
                    Chart: "Grafiek",
                    Applications: "Toepassingen",
                    ReadytouseApps: "Klaar om apps te gebruiken"
                }
            },
            es: {
                translations: {
                    General: "General",
                    Dashboards: "Cuadros de mando",
                    Widgets: " widgets",
                    Dashboard: "Tablero",
                    Default: "Defecto",
                    Ecommerce: "Comercio electrónico",
                    Chart: "Gráfico",
                    Applications: "Aplicaciones",
                    ReadytouseApps: "Gereed om programme te gebruik"
                }
            },
            fr: {
                translations: {
                    General: "Générale",
                    Dashboards: "Tableaux de bord",
                    Widgets: " widgets",
                    Dashboard: "Tableau de bord",
                    Default: "Défaut",
                    Ecommerce: "Commerce électronique",
                    Chart: "Graphique",
                    Applications: "Applications",
                    ReadytouseApps: "Applications prêtes à l'emploi"
                }
            },
            pt: {
                translations: {
                    General: "Geral",
                    Dashboards: "Painéis",
                    Widgets: " Widgets",
                    Dashboard: "painel de controle",
                    Default: "Padrão",
                    Ecommerce: "Comércio eletrônico",
                    Chart: "Gráfico",
                    Applications: "Formulários",
                    ReadytouseApps: "Aplicativos prontos para usar"
                }
            }
        },
        fallbackLng: "en",
        debug: false,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

const translations = {
    en: {
        home: "Home",
        fleet: "Our Fleet",
        services: "Services",
        about: "About",
        contact: "Contact",
        book: "Book a car",
        heroTitle: "Drive Morocco with confidence.",
        heroText: "Reliable, premium car rental with a modern fleet and transparent pricing.",
        explore: "Explore the fleet",
        talk: "Talk to us"
    },

    fr: {
        home: "Accueil",
        fleet: "Nos voitures",
        services: "Services",
        about: "À propos",
        contact: "Contact",
        book: "Réserver une voiture",
        heroTitle: "Découvrez le Maroc en toute confiance.",
        heroText: "Location de voitures premium avec une flotte moderne et des prix transparents.",
        explore: "Découvrir nos voitures",
        talk: "Nous contacter"
    },

    ar: {
        home: "الرئيسية",
        fleet: "سياراتنا",
        services: "خدماتنا",
        about: "من نحن",
        contact: "اتصل بنا",
        book: "احجز سيارة",
        heroTitle: "اكتشف المغرب بثقة.",
        heroText: "تأجير سيارات مميز مع أسطول حديث وأسعار واضحة وشفافة.",
        explore: "اكتشف سياراتنا",
        talk: "تواصل معنا"
    }
};

function setLanguage(lang) {
    const data = translations[lang] || translations.en;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (data[key]) {
            element.textContent = data[key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );
    });

    localStorage.setItem("drivus-language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    const savedLanguage =
        localStorage.getItem("drivus-language") || "en";

    setLanguage(savedLanguage);
});

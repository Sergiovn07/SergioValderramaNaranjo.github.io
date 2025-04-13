// Spanish content
const contentEs = {
    HEADER_TITLE: "SVA",
    FOOTER_NOTE: "Sergio Valderrama Naranjo",
    
    NAVIGATION: ["inicio", "sobre-mi", "experiencia", "formacion", "proyectos", "habilidades", "contacto"],
    
    INICIO_TITLE: "Ingeniero Sergio Valderrama Naranjo",
    INICIO_IMAGE: "images/grados.JPG",
    INICIO_DESCRIPTION: "Aquí compartiré quién soy, proyectos y recursos.",
    
    SOBRE_MI_TITLE: "Sobre mí",
    SOBRE_MI_DETAILS: `
    👋 ¡Hola! Soy un apasionado ingeniero en Desarrollo Robótico en el laboratorio de investigación 🧪 LISPEN de la escuela de ingeniería ENSAM Lille, en Francia. En febrero de 2025, obtuve mi 🎓 doble titulación como Ingeniero Mecatrónico de la Universidad EIA de Medellín, Colombia, y como Ingeniero con maestría en sistemas mecatrónicos para la innovación industrial por ENSAM Lille.
    <br><br>
    🧠 Me especializo en 🤖 robótica, 🖥️ programación, electrónica y control de sistemas, campos en los que he trabajado con entusiasmo tanto a nivel académico como profesional.
    <br><br>
    🚀 Durante mi formación, he liderado proyectos emocionantes como:
    <div class=sobre_mi_list><ul>
        <li>
            El desarrollo de una IA para la producción de pinturas recicladas 🎨🧠
        </li>
        <li>
            La creación de un robot diferencial para el transporte de cargas pesadas 🤖📦
        </li>
        <li>
            Y la construcción de un aerodeslizador teledirigido para terrenos difíciles 🌬️🛰️
        </li>
    </ul></div><br>
    📊 En el ámbito profesional, tengo experiencia en análisis de datos, y domino lenguajes como Python, C#, C++ y Java. También soy usuario avanzado de herramientas como Excel avanzado, MATLAB, Autodesk Inventor y ROS2 (en Python y C++). 🛠️💻
    <br><br>
    🌍 Hablo con fluidez español, inglés y francés, lo que me permite colaborar eficazmente en equipos multiculturales y adaptarme con facilidad a entornos internacionales.
    <br><br>
    💪 Me defino como una persona ética, disciplinada y con gran sentido de la responsabilidad. Soy naturalmente curioso, amante del aprendizaje continuo 📚 y siempre estoy en busca de nuevos desafíos que me permitan crecer y contribuir a proyectos innovadores. ✨
    `,
    EXPERIENCIA_TITLE: "Experiencia",
    EXPERIENCIA_ITEMS: [
        {
            logo: "/images/lispen_logo.jpg",
            title: "Ingeniero en Desarrollo Robótico",
            description: `🏢Laboratoire d'Ingénierie des Systèmes Physiques et Numériques - LISPEN.
            <br>
            📆 Octubre 2024 - Hoy
            <br>
            📍 Lille, Nord, Francia`
        },
        {
            logo: "/images/innodura_logo.png",
            title: "Practicante Ingeniero R&D Vision y Robótica",
            description: `🏢 Innodura - Tecnologies & Banc de Test.
            <br>
            📆 Febrero 2024 - Julio 2024
            <br>
            📍 Villeurbanne, Auvergne-Rhône-Alpes, Francia`
        },
        {
            logo: "/images/cadena_logo.png",
            title: "Practicante Analista Mejora de Procesos",
            description: `🏢 Cadena S.A.
            <br>
            📆 Enero 2022 - Julio 2022
            <br>
            📍 La Estrella, Antioquia, Colombia`
        },
        {
            logo: "/images/eia_logo.jpg",
            title: "Tutor Ecuaciones Diferenciales",
            description: `🏢 Universidad EIA.
            <br>
            📆 Agosto 2019 - Diciembre 2021
            <br>
            📍 Medellín, Antioquia, Colombia`
        }
    ],
    
    FORMACION_TITLE: "Formación",
    FORMACION_ITEMS: [
        {
            logo: "images/ensam_logo.png",
            title: "École nationale supérieure d'Arts et Métiers",
            description: `
            Ingeniería Generalista.
            <br>
            Master Robótica.`
        },
        {
            logo:"images/eia_logo.jpg",
            title: "Universidad EIA Escuela de Ingeniería",
            description: "Ingeniería Mecatónica."
        }
    ],
    
    PROYECTOS_TITLE: "Proyectos",
    PROYECTOS_ITEMS: [
        {
            title: "Calibración Híbrida de Brazo Robótico",
            description: "Sistema de calibración automática para robots FANUC serie M usando Gausian Process Regression."
        },
        {
            title: "Predicción de Mezclas de Pintura mediante IA",
            description: "Sistema automatizado de mezcla de pinturas usando aprendizaje automático."
        }
    ],
    
    HABILIDADES_TITLE: "Habilidades",
    HABILIDADES_ITEMS: [
        "Robotics",
        "Robotic Systems",
        "Python",
        "Robot Operative System (ROS)",
        "Artificial Ingelligence",
        "Computer vision",
        "3D Vision",
        "Robot Process Automation (RPA)",
        "Aprendizaje Automático",
        "JavaScript",
    ],
    
    CONTACTO_TITLE: "Contacto",
    CONTACTO_EMAIL: "sergio.valderraman@gmail.com",
    CONTACTO_SOCIAL: {
        LINKEDIN: "https://www.linkedin.com/in/sergio-valderraman/",
        GITHUB: "https://github.com/Sergiovn07",
        TWITTER: "https://twitter.com/sergiovn0707"
    }
};


// English content
const contentEn = {
    HEADER_TITLE: "SVA",
    FOOTER_NOTE: "Sergio Valderrama Naranjo",
    
    NAVIGATION: ["Home", "About Me", "Experience", "Education", "Projects", "Skills", "Contact"],
    
    INICIO_TITLE: "Engineer Sergio Valderrama Naranjo",
    INICIO_IMAGE: "images/grados.JPG",
    INICIO_DESCRIPTION: "Here I will share who I am, projects, and resources.",
    
    SOBRE_MI_TITLE: "About Me",
    SOBRE_MI_DETAILS: `
    👋 Hello! I’m a passionate engineer in Robotic Development at the 🧪 LISPEN research laboratory of the engineering school ENSAM Lille, in France. In February 2025, I earned my 🎓 double degree as a Mechatronics Engineer from Universidad EIA in Medellín, Colombia, and as an Engineer with a master's in mechatronic systems for industrial innovation from ENSAM Lille.
    <br><br>
    🧠 I specialize in 🤖 robotics, 🖥️ programming, electronics, and control systems—fields in which I’ve worked enthusiastically both academically and professionally.
    <br><br>
    🚀 Throughout my studies, I’ve led exciting projects such as:
    <div class=sobre_mi_list><ul>
        <li>
            The development of an AI system for the production of recycled paints 🎨🧠
        </li>
        <li>
            The creation of a differential robot for transporting heavy loads 🤖📦
        </li>
        <li>
            And the construction of a remote-controlled hovercraft for rough terrains 🌬️🛰️
        </li>
    </ul></div><br>
    📊 Professionally, I have experience in data analysis and am proficient in Python, C#, C++, and Java. I am also an advanced user of tools such as advanced Excel, MATLAB, Autodesk Inventor, and ROS2 (in Python and C++). 🛠️💻
    <br><br>
    🌍 I’m fluent in Spanish, English, and French, which allows me to collaborate effectively in multicultural teams and adapt easily to international environments.
    <br><br>
    💪 I define myself as an ethical, disciplined person with a strong sense of responsibility. I am naturally curious, passionate about continuous learning 📚, and always seeking new challenges to grow and contribute to innovative projects. ✨
    `,
    EXPERIENCIA_TITLE: "Experience",
    EXPERIENCIA_ITEMS: [
        {
            logo: "/images/lispen_logo.jpg",
            title: "Robotic Development Engineer",
            description: `🏢 Laboratoire d'Ingénierie des Systèmes Physiques et Numériques - LISPEN.
            <br>
            📆 October 2024 - Present
            <br>
            📍 Lille, Nord, France`
        },
        {
            logo: "/images/innodura_logo.png",
            title: "R&D Vision and Robotics Engineering Intern",
            description: `🏢 Innodura - Technologies & Test Bench.
            <br>
            📆 February 2024 - July 2024
            <br>
            📍 Villeurbanne, Auvergne-Rhône-Alpes, France`
        },
        {
            logo: "/images/cadena_logo.png",
            title: "Process Improvement Analyst Intern",
            description: `🏢 Cadena S.A.
            <br>
            📆 January 2022 - July 2022
            <br>
            📍 La Estrella, Antioquia, Colombia`
        },
        {
            logo: "/images/eia_logo.jpg",
            title: "Differential Equations Tutor",
            description: `🏢 Universidad EIA.
            <br>
            📆 August 2019 - December 2021
            <br>
            📍 Medellín, Antioquia, Colombia`
        }
    ],
    
    FORMACION_TITLE: "Education",
    FORMACION_ITEMS: [
        {
            logo: "images/ensam_logo.png",
            title: "École nationale supérieure d'Arts et Métiers",
            description: `
            General Engineering.
            <br>
            Master's in Robotics.`
        },
        {
            logo:"images/eia_logo.jpg",
            title: "Universidad EIA School of Engineering",
            description: "Mechatronics Engineering."
        }
    ],
    
    PROYECTOS_TITLE: "Projects",
    PROYECTOS_ITEMS: [
        {
            title: "Hybrid Calibration of Robotic Arm",
            description: "Automatic calibration system for FANUC M-series robots using Gaussian Process Regression."
        },
        {
            title: "AI-Based Paint Mixing Prediction",
            description: "Automated paint mixing system using machine learning."
        }
    ],
    
    HABILIDADES_TITLE: "Skills",
    HABILIDADES_ITEMS: [
        "Robotics",
        "Robotic Systems",
        "Python",
        "Robot Operating System (ROS)",
        "Artificial Intelligence",
        "Computer Vision",
        "3D Vision",
        "Robot Process Automation (RPA)",
        "Machine Learning",
        "JavaScript",
    ],
    
    CONTACTO_TITLE: "Contact",
    CONTACTO_EMAIL: "sergio.valderraman@gmail.com",
    CONTACTO_SOCIAL: {
        LINKEDIN: "https://www.linkedin.com/in/sergio-valderraman/",
        GITHUB: "https://github.com/Sergiovn07",
        TWITTER: "https://twitter.com/sergiovn0707"
    }
};

//FRENCH content
const contentFr = {
    HEADER_TITLE: "SVA",
    FOOTER_NOTE: "Sergio Valderrama Naranjo",
    
    NAVIGATION: ["Accueil", "À propos", "Expérience", "Formation", "Projets", "Compétences", "Contact"],
    
    INICIO_TITLE: "Ingénieur Sergio Valderrama Naranjo",
    INICIO_IMAGE: "images/grados.JPG",
    INICIO_DESCRIPTION: "Ici, je partagerai qui je suis, mes projets et ressources.",
    
    SOBRE_MI_TITLE: "À propos de moi",
    SOBRE_MI_DETAILS: `
    👋 Bonjour ! Je suis un ingénieur passionné en Développement Robotique au laboratoire de recherche 🧪 LISPEN de l'école d'ingénierie ENSAM Lille, en France. En février 2025, j’ai obtenu mon 🎓 double diplôme en tant qu’Ingénieur Mécatronique de l’Université EIA de Medellín, Colombie, et en tant qu’Ingénieur avec un master en systèmes mécatroniques pour l’innovation industrielle de l’ENSAM Lille.
    <br><br>
    🧠 Je me spécialise en 🤖 robotique, 🖥️ programmation, électronique et systèmes de contrôle — des domaines dans lesquels j’ai travaillé avec enthousiasme aussi bien sur le plan académique que professionnel.
    <br><br>
    🚀 Au cours de ma formation, j’ai dirigé des projets passionnants tels que :
    <div class=sobre_mi_list><ul>
        <li>
            Le développement d'une IA pour la production de peintures recyclées 🎨🧠
        </li>
        <li>
            La création d'un robot différentiel pour le transport de charges lourdes 🤖📦
        </li>
        <li>
            Et la construction d’un aéroglisseur télécommandé pour des terrains difficiles 🌬️🛰️
        </li>
    </ul></div><br>
    📊 Sur le plan professionnel, j’ai de l’expérience en analyse de données et je maîtrise des langages comme Python, C#, C++ et Java. J’utilise également de manière avancée des outils comme Excel avancé, MATLAB, Autodesk Inventor et ROS2 (en Python et C++). 🛠️💻
    <br><br>
    🌍 Je parle couramment l'espagnol, l’anglais et le français, ce qui me permet de collaborer efficacement dans des équipes multiculturelles et de m’adapter facilement à des environnements internationaux.
    <br><br>
    💪 Je me décris comme une personne éthique, disciplinée et dotée d’un grand sens des responsabilités. Curieux par nature, passionné par l’apprentissage continu 📚, je suis toujours à la recherche de nouveaux défis pour évoluer et contribuer à des projets innovants. ✨
    `,
    EXPERIENCIA_TITLE: "Expérience",
    EXPERIENCIA_ITEMS: [
        {
            logo: "/images/lispen_logo.jpg",
            title: "Ingénieur en Développement Robotique",
            description: `🏢 Laboratoire d'Ingénierie des Systèmes Physiques et Numériques - LISPEN.
            <br>
            📆 Octobre 2024 - Aujourd’hui
            <br>
            📍 Lille, Nord, France`
        },
        {
            logo: "/images/innodura_logo.png",
            title: "Stagiaire Ingénieur R&D Vision et Robotique",
            description: `🏢 Innodura - Technologies & Banc de Test.
            <br>
            📆 Février 2024 - Juillet 2024
            <br>
            📍 Villeurbanne, Auvergne-Rhône-Alpes, France`
        },
        {
            logo: "/images/cadena_logo.png",
            title: "Stagiaire Analyste Amélioration de Processus",
            description: `🏢 Cadena S.A.
            <br>
            📆 Janvier 2022 - Juillet 2022
            <br>
            📍 La Estrella, Antioquia, Colombie`
        },
        {
            logo: "/images/eia_logo.jpg",
            title: "Tuteur Équations Différentielles",
            description: `🏢 Universidad EIA.
            <br>
            📆 Août 2019 - Décembre 2021
            <br>
            📍 Medellín, Antioquia, Colombie`
        }
    ],
    
    FORMACION_TITLE: "Formation",
    FORMACION_ITEMS: [
        {
            logo: "images/ensam_logo.png",
            title: "École nationale supérieure d'Arts et Métiers",
            description: `
            Ingénierie généraliste.
            <br>
            Master en Robotique.`
        },
        {
            logo:"images/eia_logo.jpg",
            title: "Université EIA École d’Ingénierie",
            description: "Ingénierie Mécatronique."
        }
    ],
    
    PROYECTOS_TITLE: "Projets",
    PROYECTOS_ITEMS: [
        {
            title: "Calibration Hybride de Bras Robotique",
            description: "Système de calibration automatique pour les robots FANUC série M utilisant la Régression par Processus Gaussien."
        },
        {
            title: "Prédiction de Mélanges de Peintures via IA",
            description: "Système automatisé de mélange de peintures basé sur l'apprentissage automatique."
        }
    ],
    
    HABILIDADES_TITLE: "Compétences",
    HABILIDADES_ITEMS: [
        "Robotique",
        "Systèmes Robotiques",
        "Python",
        "Système d’Exploitation Robotique (ROS)",
        "Intelligence Artificielle",
        "Vision par Ordinateur",
        "Vision 3D",
        "Automatisation des Processus Robotisés (RPA)",
        "Apprentissage Automatique",
        "JavaScript",
    ],
    
    CONTACTO_TITLE: "Contact",
    CONTACTO_EMAIL: "sergio.valderraman@gmail.com",
    CONTACTO_SOCIAL: {
        LINKEDIN: "https://www.linkedin.com/in/sergio-valderraman/",
        GITHUB: "https://github.com/Sergiovn07",
        TWITTER: "https://twitter.com/sergiovn0707"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Datos de ejemplo (reemplaza con tu propia información)
    const bibliografiaData = [
        {
            titulo: "Libro Interesante 1",
            autor: "Autor A",
            año: 2023,
            resumen: "Un libro fascinante sobre..."
        },
        {
            titulo: "Artículo Científico 1",
            autor: "Autor B y Colaboradores",
            año: 2024,
            revista: "Revista X"
        }
    ];

    const proyectosData = [
        {
            nombre: "Proyecto Web Personal",
            descripcion: "Desarrollo de mi propio sitio web...",
            tecnologias: ["HTML", "CSS", "JavaScript"]
        },
        {
            nombre: "Aplicación Móvil Y",
            descripcion: "Una aplicación para...",
            lenguajes: ["React Native"]
        }
    ];

    const informacionData = [
        {
            titulo: "Sobre mí",
            contenido: "Soy un apasionado de... y me interesa..."
        },
        {
            titulo: "Mis Habilidades",
            contenido: "Tengo experiencia en... y estoy aprendiendo..."
        }
    ];

    // Función para mostrar la bibliografía
    function mostrarBibliografia() {
        const bibliografiaContent = document.getElementById('bibliografia-content');
        bibliografiaData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('bibliografia-item');
            let html = `<h3>${item.titulo}</h3>`;
            if (item.autor) html += `<p>Autor: ${item.autor}</p>`;
            if (item.año) html += `<p>Año: ${item.año}</p>`;
            if (item.revista) html += `<p>Revista: ${item.revista}</p>`;
            if (item.resumen) html += `<p>Resumen: ${item.resumen}</p>`;
            div.innerHTML = html;
            bibliografiaContent.appendChild(div);
        });
    }

    // Función para mostrar los proyectos
    function mostrarProyectos() {
        const proyectosContent = document.getElementById('proyectos-content');
        proyectosData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('proyecto-item');
            let html = `<h3>${item.nombre}</h3><p>${item.descripcion}</p>`;
            if (item.tecnologias) html += `<p>Tecnologías: ${item.tecnologias.join(', ')}</p>`;
            if (item.lenguajes) html += `<p>Lenguajes: ${item.lenguajes.join(', ')}</p>`;
            div.innerHTML = html;
            proyectosContent.appendChild(div);
        });
    }

    // Función para mostrar la información
    function mostrarInformacion() {
        const informacionContent = document.getElementById('informacion-content');
        informacionData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('informacion-item');
            div.innerHTML = `<h3>${item.titulo}</h3><p>${item.contenido}</p>`;
            informacionContent.appendChild(div);
        });
    }

    // Llamar a las funciones para cargar el contenido inicial
    mostrarBibliografia();
    mostrarProyectos();
    mostrarInformacion();
});
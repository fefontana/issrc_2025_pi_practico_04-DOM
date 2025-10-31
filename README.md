# 🧩 Proyecto Integrador I – Práctico 04: DOM  
Repositorio: [issrc_2025_pi_practico_04-DOM](https://github.com/fefontana/issrc_2025_pi_practico_04-DOM.git)

Este repositorio contiene los **10 ejercicios prácticos de manipulación del DOM en JavaScript**, desarrollados con estructura separada en **HTML, CSS y JS**, aplicando eventos, clases, creación dinámica de nodos y almacenamiento local.

---

## 🧠 Objetivo General
Aplicar los principales conceptos del **DOM (Document Object Model)** mediante ejercicios de complejidad progresiva.  
Cada ejercicio representa una funcionalidad común en interfaces web modernas: interacción, validación, modales, listas dinámicas, pestañas, y almacenamiento de estado.

---

## 📁 Estructura del repositorio
```
/
│
├── ejercicio1-cambiar-texto/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
├── ejercicio2-contador/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
├── ejercicio3-lista-tareas/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
├── ejercicio4-filtro-en-vivo/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
├── ejercicio5-modal/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
├── ejercicio6-pestanas-data/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
├── ejercicio7-acordeon-dinamico/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
├── ejercicio8-validacion-form/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
├── ejercicio9-tabla-dinamica/
│   ├── index.html
│   ├── estilo.css
│   └── script.js
│
└── ejercicio10-mini-kanban/
    ├── index.html
    ├── estilo.css
    └── script.js
```

---

## 🧩 Ejercicios y Solución Técnica

### **1. Cambiar texto y estilo**
- **Evento:** `click`
- **Acción:** Cambia el texto del título (`textContent`) y alterna una clase (`classList.toggle('resaltado')`).
- **Objetivo:** Mostrar interactividad visual simple.

### **2. Contador (+/−/Reset)**
- **Eventos:** `click` en botones.
- **Lógica:** Incrementa, decrementa (sin valores negativos) y reinicia el contador.
- **Extra:** Botón “−” se desactiva automáticamente en 0.

### **3. Lista de tareas**
- **Evento:** `submit` del formulario.
- **Lógica:** Crea tareas como nodos `<li>` y botones de “Eliminar”.
- **Acción:** Eliminar tarea usando `.remove()`.

### **4. Filtro en vivo**
- **Evento:** `input` en el campo de búsqueda.
- **Lógica:** Oculta o muestra elementos de lista según coincidencia parcial (`toLowerCase()`).
- **Estilo:** Aplica `display: none` mediante clases CSS.

### **5. Modal (ESC y clic fuera)**
- **Eventos:** `click` y `keydown`.
- **Lógica:** Muestra/oculta el modal agregando o quitando una clase `.activo`.
- **Cierre:**  
  - Botón “Cerrar”.  
  - Clic fuera del contenido (`e.target === modal`).  
  - Presionar tecla `Escape`.

### **6. Pestañas con data-***
- **Atributo:** `data-panel` para vincular pestaña con su contenido.
- **Lógica:** `tab.dataset.panel` + `classList.add/remove` para alternar visibilidad.
- **Interfaz:** Pestañas activas visualmente y panel único visible.

### **7. Acordeón dinámico**
- **Datos:** Array de objetos `{titulo, respuesta}`.
- **Lógica:** Crear estructura HTML con `createElement()` desde JS.
- **Interacción:** Clic en encabezado → `classList.toggle('activo')` para mostrar/ocultar.

### **8. Validación de formulario en vivo**
- **Eventos:** `input` y `submit`.
- **Validaciones:**  
  - Nombre ≥ 3 caracteres.  
  - Email con expresión regular.  
- **Retroalimentación:** Mensajes en `<small>` y clases `.error-input` / `.correcto`.
- **Resultado:** Mensaje global de éxito o error.

### **9. Tabla dinámica con orden**
- **Evento:** `submit` para agregar filas.  
- **Orden:** Click en `<th>` → `sort()` sobre array de objetos.  
- **Dirección:** Alterna entre ascendente/descendente.  
- **Estado visual:** Columna activa con `.activo`.

### **10. Mini Kanban (drag & drop + localStorage)**
- **Secciones:** Pendiente / En progreso / Hecho.  
- **Lógica:**  
  - Crear tareas dinámicamente.  
  - Mover entre columnas con Drag & Drop nativo (`dragstart`, `drop`).  
  - Guardar estado del tablero en `localStorage`.  
- **Persistencia:** Estado restaurado al recargar.  
- **Visual:** Columna resaltada al arrastrar (`.dragover`).

---

## 💾 Tecnologías utilizadas
- **HTML5** – Estructura semántica.  
- **CSS3** – Estilos modulares, clases dinámicas.  
- **JavaScript (ES6)** – Manipulación del DOM, eventos, arrays y almacenamiento local.  

---

## 🚀 Ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/fefontana/issrc_2025_pi_practico_04-DOM.git
   ```
2. Abrir cada carpeta de ejercicio.  
3. Ejecutar el archivo `index.html` en el navegador.

---

## 👨‍💻 Autor
**ChatGPT & F.Fontana**  
Instituto Superior Santa Rosa de Calamuchita  
Cátedra: *Proyecto Integrador I (2025)*  
Profesor: *Javier Bozzo*  

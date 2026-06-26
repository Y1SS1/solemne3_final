# Proyecto Ticketeria - Cencosud 🎫

Sistema web de gestión de incidencias. Desarrollado con **React (Vite)** para el panel visual (Frontend) y **Django REST Framework** para la base de datos (Backend).

---

##  1. Cómo ejecutar el Backend (Django)

Abre una terminal en la carpeta de tu backend y ejecuta estos comandos en orden:

1. Instalar las librerías necesarias:
`pip install django djangorestframework django-cors-headers`

2. Preparar la base de datos:
`python manage.py migrate`

3. Encender el servidor:
`python manage.py runserver`

### 🔗 URLs del Backend (API de Django)
* **Ruta General de la API:** http://127.0.0.1:8000/api/tickets/
* **Ruta Específica de la API:** http://127.0.0.1:8000/api/tickets/{id}/
* **Panel Nativo de Django:** http://127.0.0.1:8000/admin/

---

##  2. Cómo ejecutar el Frontend (React)

Abre **otra terminal nueva** en la carpeta de tu frontend y ejecuta:

1. Descargar los paquetes de Node (Solo la primera vez):
`npm install`

2. Encender la página web:
`npm run dev`

### 🔗 URLs del Frontend (Páginas Visuales)
* **Página de Inicio (Home):** http://localhost:5173/
* **Inicio de Sesión (Login):** http://localhost:5173/LoginPage
* **Formulario de Creación:** http://localhost:5173/CrearTicketPage
* **Tablero de Cajas (Ticketeria):** http://localhost:5173/tickets
* **Panel de Administrador:** http://localhost:5173/AdminPage
* **Página de Contacto:** http://localhost:5173/Contacto

---

 **IMPORTANTE:** Para que la plataforma funcione al 100% (crear, cambiar estados y eliminar tickets), **ambos servidores deben estar corriendo al mismo tiempo** en dos terminales separadas.

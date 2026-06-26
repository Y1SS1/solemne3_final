# Proyecto Ticketería - Cencosud 🎫

Sistema web de gestión de incidencias. Desarrollado con **React (Vite)** para el panel visual (Frontend) y **Django REST Framework** para la base de datos (Backend).

---

## ⚙️ 1. Cómo ejecutar el Backend (Django)

Abre una terminal en la carpeta de tu backend y ejecuta estos comandos en orden:

1. **Instalar las librerías necesarias:**
   ```bash
   ```
2. **Preparar la base de datos:**
   ```bash
   python manage.py migrate
   ```
3. **Encender el servidor:**
   ```bash
   python manage.py runserver
   ```
*(El motor de datos quedará corriendo en http://127.0.0.1:8000)*

---

## 💻 2. Cómo ejecutar el Frontend (React)

Abre **otra terminal nueva** en la carpeta de tu frontend y ejecuta:

1. **Descargar los paquetes de Node (Solo la primera vez):**
   ```bash
   npm install
   ```
2. **Encender la página web:**
   ```bash
   npm run dev
   ```
*(La plataforma quedará corriendo en http://localhost:5173)*

---

⚠️ **IMPORTANTE:** Para que la plataforma funcione al 100% (crear y eliminar tickets), **ambos servidores deben estar corriendo al mismo tiempo** en dos terminales separadas.

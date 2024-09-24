import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.get('/', (req, res) => {
  //res.json({ message: 'Hola desde tu API en Vercel!' });
  res.json({ message: '¡Hola! staging no entienfdfo un carajo' });
});

app.get('/saludo', (req, res) => {
  res.json({ message: '¡Hola! Bienvenido a tu miniproyecto!' });
});

app.get('/despedida', (req, res) => {
  res.json({ message: '¡Adiós! Gracias por usar el miniproyecto!' });
});

app.get('/pregunta', (req, res) => {
  res.json({ message: 'Hola ¿cómo estás? ¿qué tal está tu día?' });
});

// Iniciar servidor solo si no está en entorno Vercel (usado para pruebas locales)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

export default app;

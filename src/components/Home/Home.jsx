import React, { useState } from 'react';
import { motion } from 'framer-motion';

const reglasOrtograficas = [
  { 
    id: 1, 
    titulo: "Uso de B", 
    regla: "Se escribe con B antes de L y R (blanco, brazo).", 
    descripcion: "Las palabras que contienen las letras L o R después de la B deben comenzar con esta letra. Ejemplos: 'blanco' (color), 'brazo' (miembro del cuerpo)."
  },
  { 
    id: 2, 
    titulo: "Uso de V", 
    regla: "Se escribe con V después de N (invocar, enviar).", 
    descripcion: "Cuando una palabra comienza con la letra N y es seguida por una V, se debe usar la V para asegurar la correcta pronunciación. Ejemplos: 'invocar' (llamar a alguien), 'enviar' (mandar algo)."
  },
  { 
    id: 3, 
    titulo: "Uso de H", 
    regla: "Se escribe con H las palabras que empiezan por 'hie-' y 'hue-' (hielo, huevo).", 
    descripcion: "Las palabras que comienzan con las combinaciones 'hie-' y 'hue-' siempre llevan H al inicio. Ejemplos: 'hielo' (agua congelada), 'huevo' (producto de aves)."
  },
  { 
    id: 4, 
    titulo: "Uso de G", 
    regla: "Se escribe con G los verbos terminados en -ger, -gir (proteger, dirigir).", 
    descripcion: "Los verbos que terminan en las sílabas -ger o -gir deben escribirse con G. Ejemplos: 'proteger' (defender), 'dirigir' (guiar algo o a alguien)."
  },
  { 
    id: 5, 
    titulo: "Uso de J", 
    regla: "Se escribe con J las palabras terminadas en -aje, -eje (garaje, eje).", 
    descripcion: "Las palabras que terminan en -aje o -eje se escriben con J. Ejemplos: 'garaje' (lugar para estacionar vehículos), 'eje' (línea central)."
  },
  { 
    id: 6, 
    titulo: "Acentuación", 
    regla: "Las palabras agudas se acentúan cuando terminan en vocal, N o S.", 
    descripcion: "Las palabras agudas, cuya sílaba tónica es la última, requieren acento ortográfico si terminan en vocal, N o S. Ejemplos: 'café' (bebida), 'canción' (composición musical)."
  },
  { 
    id: 7, 
    titulo: "Uso de LL", 
    regla: "Se escribe con LL las palabras terminadas en -illo, -illa (sencillo, silla).", 
    descripcion: "Las palabras que terminan en -illo o -illa deben llevar LL. Ejemplos: 'sencillo' (fácil), 'silla' (mueble para sentarse)."
  },
  { 
    id: 8, 
    titulo: "Uso de M", 
    regla: "Se escribe M antes de B y P (cambio, emperador).", 
    descripcion: "La letra M se utiliza antes de las letras B y P para mantener la correcta pronunciación. Ejemplos: 'cambio' (alteración), 'emperador' (monarca)."
  },
  { 
    id: 9, 
    titulo: "Uso de R", 
    regla: "Se escribe R simple entre vocales cuando suena suave (caro, pero).", 
    descripcion: "La letra R se escribe de forma simple cuando se encuentra entre dos vocales y suena suave. Ejemplos: 'caro' (costoso), 'pero' (conjunción adversativa)."
  },
  { 
    id: 10, 
    titulo: "Uso de Z", 
    regla: "Se escribe con Z los adjetivos terminados en -az (capaz, eficaz).", 
    descripcion: "Los adjetivos que terminan en -az deben escribirse con Z. Ejemplos: 'capaz' (que puede hacer algo), 'eficaz' (que produce el efecto deseado)."
  },
  // Nuevas reglas
  { 
    id: 11, 
    titulo: "Uso de C", 
    regla: "Se escribe con C las palabras que terminan en -ción, -icidio, -icida (educación, homicidio, parásito).", 
    descripcion: "Las palabras que terminan en -ción derivan de sustantivos que terminan en -ar. Ejemplos: 'educación' (proceso de aprender), 'homicidio' (muerte de una persona a manos de otra)."
  },
  { 
    id: 12, 
    titulo: "Uso de D", 
    regla: "Se escribe con D las palabras que terminan en -dad, -tad (ciudad, amistad).", 
    descripcion: "Los sustantivos que terminan en -dad o -tad son generalmente derivados de adjetivos. Ejemplos: 'ciudad' (asentamiento humano), 'amistad' (relación entre amigos)."
  },
  { 
    id: 13, 
    titulo: "Uso de S", 
    regla: "Se escribe con S los adjetivos que terminan en -oso, -osa (hermoso, preciosa).", 
    descripcion: "Los adjetivos que terminan en -oso o -osa suelen describir cualidades. Ejemplos: 'hermoso' (bonito), 'preciosa' (valiosa)."
  },
  { 
    id: 14, 
    titulo: "Uso de Y", 
    regla: "Se escribe con Y las palabras que terminan en -iyente, -imiento (presente, conocimiento).", 
    descripcion: "Las palabras que terminan en -iyente o -imiento son formas derivadas de verbos. Ejemplos: 'presente' (en el momento actual), 'conocimiento' (información adquirida)."
  },
  { 
    id: 15, 
    titulo: "Uso de A", 
    regla: "Se escribe con A las palabras que terminan en -ado, -ada (cansado, cansada).", 
    descripcion: "Los adjetivos que terminan en -ado o -ada son generalmente participios pasados de verbos. Ejemplos: 'cansado' (fatigado), 'cansada' (fatigada)."
  },
  { 
    id: 16, 
    titulo: "Uso de E", 
    regla: "Se escribe con E las palabras que terminan en -ente, -enta (valiente, paciente).", 
    descripcion: "Los adjetivos que terminan en -ente o -enta suelen describir características. Ejemplos: 'valiente' (que no tiene miedo), 'paciente' (que soporta con calma)."
  },
  { 
    id: 17, 
    titulo: "Uso de T", 
    regla: "Se escribe con T las palabras que terminan en -tivo, -tiva (activo, creativa).", 
    descripcion: "Los adjetivos que terminan en -tivo o -tiva suelen describir propiedades. Ejemplos: 'activo' (que realiza acciones), 'creativa' (que tiene capacidad de crear)."
  },
  { 
    id: 18, 
    titulo: "Uso de N", 
    regla: "Se escribe con N las palabras que terminan en -ino, -ina (marino, cocina).", 
    descripcion: "Los adjetivos que terminan en -ino o -ina suelen indicar origen o relación. Ejemplos: 'marino' (relativo al mar), 'cocina' (lugar para preparar alimentos)."
  },
  { 
    id: 19, 
    titulo: "Uso de P", 
    regla: "Se escribe con P las palabras que terminan en -pido, -pida (rápido, pálida).", 
    descripcion: "Los adjetivos que terminan en -pido o -pida suelen describir características. Ejemplos: 'rápido' (que se mueve con velocidad), 'pálida' (de poco color)."
  },
];

const Home = () => {
  const [reglaSeleccionada, setReglaSeleccionada] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Diccionario de Reglas Ortográficas. Hecho por: Juan Pablo García Villa</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Lista de Reglas</h2>
          <ul>
            {reglasOrtograficas.map((regla) => (
              <motion.li 
                key={regla.id}
                whileHover={{ scale: 1.05 }}
                className="mb-2"
              >
                <button
                  onClick={() => setReglaSeleccionada(regla)}
                  className="text-left w-full p-2 rounded hover:bg-purple-100 transition duration-300"
                >
                  {regla.titulo}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Detalle de la Regla</h2>
          {reglaSeleccionada ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-2 text-purple-600">{reglaSeleccionada.titulo}</h3>
              <p className="text-gray-700 font-semibold">{reglaSeleccionada.regla}</p>
              <p className="text-gray-500 mt-2">{reglaSeleccionada.descripcion}</p>
            </motion.div>
          ) : (
            <p className="text-gray-500 italic">Selecciona una regla para ver los detalles</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

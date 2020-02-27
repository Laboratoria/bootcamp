# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación
web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un
texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se
necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso
(qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de
ejemplo:

* Crear claves seguras para el email.
* Encriptar/cifrar una tarjeta de crédito.
* Herramienta de mensajería interna de una organización de derechos humanos en
  una zona de conflicto.
* Mensajería secreta para parejas.

## 3. Objetivos de aprendizaje

### Habilidades técnicas

* <details id="version-control-system">
    <summary>Usar un sistema de control de versiones para registrar cambios de un programa de manera individual.</summary>
    <p>The ability to use a version control system to manage updates and diff to one's own work.</p>

  - [git-1](#git-1)
  - [github-1](#github-1)

</details>

* <details id="basic-form-creation">
    <summary>Crear un formulario básico para ingreso de data de la usuaria.</summary>
    <p>The ability to develop basic forms that collects user data, like names, numbers and text.</p>

  - [CSS-selectors-1](#CSS-selectors-1)
  - [DOM-events-1](#DOM-events-1)
  - [DOM-events-2](#DOM-events-2)
  - [DOM-manipulation-1](#DOM-manipulation-1)
  - [DOM-manipulation-2](#DOM-manipulation-2)
  - [form-html-1](#form-html-1)
  - [semantic-html-1](#semantic-html-1)
  - [semantic-html-2](#semantic-html-2)

</details>

* <details id="mathematical-problem-solving">
    <summary>Solucionar problemas matemáticos que presenta la usuaria.</summary>
    <p>The ability to resolve mathematical operations using JavaScript.</p>

  - [mathematical-operators-1](#mathematical-operators-1)
  - [mathematical-operators-2](#mathematical-operators-2)

</details>


### Micro-habilidades técnicas

#### Web

* <details id="semantic-html-2">
    <summary>Uso de etiquetas semánticas (nivel-2)</summary>

    <ul>
      <li><code>`section`</code></li>
      <li><code>`header`</code></li>
      <li><code>`main`</code></li>
      <li><code>`footer`</code></li>
      <li><code>`aside`</code></li>
      <li><code>When to use `div`s and when to use `section`s</code></li>
    </ul>

</details>

* <details id="form-html-1">
    <summary>Uso de etiquetas del formulario (nivel-1)</summary>

    <ul>
      <li><code>`form`</code></li>
      <li><code>`action`</code></li>
      <li><code>`input`</code></li>
      <li><code>`button`</code></li>
      <li><code>`submit`</code></li>
      <li><code>`textarea`</code></li>
    </ul>

</details>

* <details id="DOM-manipulation-2">
    <summary>Selección y manipulación del DOM (nivel-2)</summary>

    <ul>
      <li><code>`parentNode.querySelector`</code></li>
      <li><code>`parentNode.querySelectorAll`</code></li>
    </ul>

</details>

* <details id="DOM-events-2">
    <summary>Eventos del DOM (nivel-2)</summary>

    <ul>
      <li><code>`event.preventDefault`</code></li>
      <li><code>`event.stopPropagation`</code></li>
      <li><code>differences between the both of them</code></li>
    </ul>

</details>

* <details id="CSS-selectors-1">
    <summary>Selección de elementos con CSS (nivel-1)</summary>

    <ul>
      <li><code>by tag name</code></li>
      <li><code>by id name</code></li>
      <li><code>by classname</code></li>
      <li><code>by attribute</code></li>
    </ul>

</details>

* <details id="string-manipulation-2">
    <summary>Manipulación de `strings` (nivel-2)</summary>

    <ul>
      <li><code>`string.chartAt`</code></li>
      <li><code>strings as Array-like Objects (`'a'[0]`)</code></li>
    </ul>

</details>

* <details id="string-manipulation-3">
    <summary>Manipulación de `strings` (nivel-3)</summary>

    <ul>
      <li><code>`'text'.split`</code></li>
      <li><code>`'text'.concat`</code></li>
      <li><code>`Array.from`</code></li>
    </ul>

</details>

* <details id="objects-1">
    <summary>Objetos (nivel-1)</summary>

    <ul>
      <li><code>Object structure</code></li>
      <li><code>Object literals</code></li>
      <li><code>Objects as related data abstraction</code></li>
      <li><code>JSON vs JS objects</code></li>
    </ul>

</details>

* <details id="flow-control-2">
    <summary>Control de flujo (nivel-2)</summary>

    <ul>
      <li><code>introduction to declarative programming</code></li>
      <li><code>`function` as new words added to the language</code></li>
    </ul>

</details>

* <details id="functions-2">
    <summary>Declaración y uso de funciones (nivel-2)</summary>

    <ul>
      <li><code>return value</code></li>
      <li><code>arguments</code></li>
      <li><code>input and output</code></li>
      <li><code>scope</code></li>
    </ul>

</details>

* <details id="data-types-2">
    <summary>Tipos de datos (nivel-2)</summary>

    <ul>
      <li><code>`null`</code></li>
      <li><code>`undefined`</code></li>
      <li><code>differences between both of them</code></li>
    </ul>

</details>

* <details id="logical-operators-2">
    <summary>Operaciones lógicas (nivel-2)</summary>

    <ul>
      <li><code>Short circuit evaluation</code></li>
      <li><code>Double NOT `!!`</code></li>
      <li><code>truthiness and falsiness</code></li>
    </ul>

</details>

* <details id="mathematical-operators-1">
    <summary>Operaciones matemáticas (nivel-1)</summary>

    <ul>
      <li><code>`+`</code></li>
      <li><code>`-`</code></li>
      <li><code>`*`</code></li>
      <li><code>`/`</code></li>
      <li><code>`Math.floor`</code></li>
      <li><code>`Math.ceil`</code></li>
      <li><code>`Math.round`</code></li>
    </ul>

</details>

* <details id="mathematical-operators-2">
    <summary>Operaciones matemáticas (nivel-2)</summary>

    <ul>
      <li><code>`%` (remainder)</code></li>
      <li><code>`**` (exponentiation)</code></li>
      <li><code>`++` (increment)</code></li>
      <li><code>`--` (decrement)</code></li>
      <li><code>Unary plus and Unary negation</code></li>
      <li><code>`Math.max`</code></li>
      <li><code>`Math.min`</code></li>
      <li><code>`Math.random`</code></li>
      <li><code>`Math.pow`</code></li>
    </ul>

</details>

* <details id="unit-testing-1">
    <summary>Pruebas unitarias (nivel-1)</summary>

    <ul>
      <li><code>run already written tests</code></li>
      <li><code>import ready to test code</code></li>
      <li><code>explain what a test is</code></li>
    </ul>

</details>

* <details id="git-1">
    <summary>Git (nivel-1)</summary>

    <ul>
      <li><code>`git init`</code></li>
      <li><code>`git clone`</code></li>
      <li><code>`git commit`</code></li>
      <li><code>descriptive commit messages (more why less what)</code></li>
      <li><code>`git log`</code></li>
      <li><code>`git remote`</code></li>
      <li><code>`git push`</code></li>
    </ul>

</details>

* <details id="github-1">
    <summary>GitHub (nivel-1)</summary>

    <ul>
      <li><code>Sign up and configuration</code></li>
      <li><code>Fork</code></li>
      <li><code>GitHub pages</code></li>
    </ul>

</details>


#### ux

- TBD

## 4. Consideraciones generales

* Este proyecto se debe resolver de manera individual.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no
  te preocupes, lo aprenderás durante este proyecto.
* Tiempo para completarlo: Toma como referencia 2 semanas. Trabaja durante el
  primer Sprint (una semana) y al final, trata de fijar un estimado de cuándo lo
  terminarás.

## 5. Criterios de aceptación mínimos del proyecto

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras
minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El
boilerplate incluye algunos tests (comentados en principio) que puedes usar como
punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del
hacker edition te invitamos a explorar también esta caso por tu cuenta.

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/bootcamp/tree/master/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:

* GitHub y GitHub Pages.

Organización del Trabajo:

* [Metodologías Ágiles"](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Guía para Cifrado César](https://docs.google.com/presentation/d/e/2PACX-1vTQ7-8LZDHrT4Y6AOBN72Nkfz1eJAeseBHpcHX8BSq0aFCFoZmuMjluMeyFNgK9ISKxTz0H03yGfJiT/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.

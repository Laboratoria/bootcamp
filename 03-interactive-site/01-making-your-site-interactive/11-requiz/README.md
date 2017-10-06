# Quiz #2: _requizzing_
- Tipo: `quiz`
- Formato: `guiado`
- Duración: `30min`

## Objetivos

- Tomar un segundo quiz para asegurarnos que terminamos la unidad con un entendimiento pleno de los conceptos.


## Preguntas

### 1) El nodo `document`, es `padre` de los objetos o nodos:
#### Opciones

  1. Nodos `meta` dentro de `head`
  2. Nodos script dentro de `body`
  3. Los nodos `head` y `body`
  4. No es padre de ningún nodo

<solution style="display:none;">3</solution>

### 2) Propiedades de los nodos del DOM
#### Opciones
  1. `nodeName`
  2. `nodeClass`
  3. `nodeType`
  4. `nodeValue`
  5. `nodeID`

<solution style="display:none;">1,3,4</solution>

### 3) Para el siguiente elemento.
```html
    <p id="paragraph">Hola, soy un párrafo sensual</p>
```
### ¿Cómo puedo cambiar el color de fondo de párrafo?
#### Opciones
  1. ```javascript
        var paragraph = document.getElementById('paragraph');
        paragraph.style.background='red';
     ```
  2. ```javascript
        var paragraph = document.getElementById('paragraph');
        paragraph.style.backgroundColor='red';
     ```
  3. ```javascript
        var paragraph = document.getElementById('paragraph');
        paragraph.backgroundColor='red';
     ```

<solution style="display:none;">2</solution>


### 4) `document.getElementsByClassName('unaClase')`, me regresa un:
```javascript
    var elementos = document.getElementsByClassName('unaClase');
    console.log(elementos);
```
#### Opciones
  1. Arreglo de nodos HTML con la clase `unaClase`;
  2. Arreglo con el valor de texto contenido dentro de todos los elementos con clase `unaClase`;
  3. Todos los caracteres del string `unaClase`;
  4. Me regresa solo el primer Elemento con clase `unaClase`;


<solution style="display:none;">1</solution>

### 5) Cuando quiero acceder a todos los elementos que comparten la misma etiqueta html, utilizo:
#### Opciones
  1. `.querySelector();`
  2. `.getElementsByClassName();`
  3. `.lastChild();`
  4. `.getElementsByTagName();`

<solution style="display:none;">4</solution>

### 6) ¿Qué función utilizamos para crear animaciones con JS ?
#### Opciones
  1. `location.href`
  2. `setTimeout();`
  3. `setInterval();`
  4. `confirm();`

<solution style="display:none;">3</solution>

### 7) ¿Porque es importante el objeto screen ?
#### Opciones
  1. Conocer resoluciones más utilizadas
  2. Para identificar a un elemento del DOM
  3. Adaptar los diseños a las resoluciones más utilizadas
  4. Para almacenar  datos en las etiquetas HTML sin modificar la presentación del document

<solution style="display:none;">1,3</solution>

### 8) ¿Cómo puedo obtener la URL de la página anterior a la que estoy en este momento ?
#### Opciones
  1. `document.referrer`
  2. `document.URL`
  3. `document.title`
  4. `document.lastModified`

<solution style="display:none;">1</solution>

### 9) ¿Qué método utilizamos para agregar a `listaDeCompras`, un nuevo elemento llamado `elementoLista`?
```html
  <ul id="listaDeCompras">
    <li>Leche Deslactosada</li>
    <li>Arequipe</li>
    <li>Harina para Hotcakes</li>
    <li>Moras</li>
  </ul>
```
#### Opciones
  1. document.createTextNode(elementoLista);
  2. listaDeCompras.appendChild(elementoLista);
  3. listaDeCompras.getElementByName('elementoLista');

<solution style="display:none;">2</solution>

### 10) ¿Qué evento se desencadena al seleccionar el texto de un input o textarea ?
#### Opciones

  1. onclick
  2. onselect
  3. onmouseover
  4. ondblclick

<solution style="display:none;">2</solution>

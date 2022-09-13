git

class Libro {
    constructor (nombre,autor,genero,img) {
    this.nombre = nombre;
    this.autor = autor; 
    this.genero = genero;
    this.img = img
    }
    filtrarGenero(genero){
        const libros = libros.filter(libro => libro.genero === genero);
        return libros;
    } 
    getByName(nombre){
      const libro = libros.find(libro => libro.nombre == nombre);
      return libro;
    }
} 

const libros = []

fetch("data/libros.json")
.then(response => response.json())
.then(data => {
  for (const libro of data) {
    libros.push(new Libro(libro.nombre,libro.autor,libro.genero, libro.img));
  }
  renderLibros(libros);
})
.catch(error => console.log(error));



function renderLibros(libros){
  const librosAgregados = JSON.parse(localStorage.getItem("librosAgregados"));
  if (librosAgregados){
    for (const libro of librosAgregados){
      libros.push(new Libro(libro.nombre,libro.autor,libro.genero, libro.img));
    }
  }
  for (const libro of libros) {

    document.getElementById("card-container").innerHTML += `  
    <div class="card">
        <div class="card-body">
            <img src="${libro.img}"/>
            <h5 class="card-title">${libro.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${libro.autor}</h6>
            <p class="card-text">${libro.genero}</p>
        </div>
        </div>         
        `;  } 
} 




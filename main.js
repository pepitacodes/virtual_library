class Libro {
    constructor (titulo,autor,genero,img) {
    this.titulo = titulo;
    this.autor = autor; 
    this.genero = genero;
    this.img = img
    }
    filtrarGenero(genero){
        const libros = libros.filter(libro => libro.genero === genero);
        return libros;
    } 
    getByName(titulo){
      const libro = libros.find(libro => libro.titulo == titulo);
      return libro;
    }
} 
const libros = []
fetch("data/libros.json")
.then(response => response.json())
.then(data => {
  for (const libro of data) {
    libros.push(new Libro(libro.titulo,libro.autor,libro.genero, libro.img));
  }
  renderLibros(libros);
})
.catch(error => console.log(error));


function renderLibros(libros){
  const librosAgregados = JSON.parse(localStorage.getItem("librosAgregados"));
  if (librosAgregados){
    for (const libro of librosAgregados){
      libros.push(new Libro(libro.titulo,libro.autor,libro.genero, libro.img));
    }
  }
  libros.forEach(libro => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <div class="card-body">
        <img src="${libro.img}"/>
        <h5 class="card-title">${libro.titulo}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${libro.autor}</h6>
        <p class="card-text">${libro.genero}</p>
      </div>
    `;
    document.getElementById("card-container").appendChild(div);
  });
}






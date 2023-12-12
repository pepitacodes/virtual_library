document.getElementById("form").onsubmit = (e) => {
    e.preventDefault()
    let libro = {
        titulo : e.target.children[1].value,
        autor : e.target.children[3].value,
        genero : e.target.children[5].value,
        img : e.target.children[7].value,
    }
    const librosAgregados = JSON.parse(localStorage.getItem("librosAgregados")) || []
    librosAgregados.push(libro)
    localStorage.setItem("librosAgregados", JSON.stringify(librosAgregados))
    alert('Libro agregado!');
/*
  swal({
    title: 'Bien!',
    text: 'Libro agregado!',
    icon: 'success',
    showCancelButton: true,
    timer: 1500,
  });*/
}

document.getElementById("generos").innerHTML = `<option>`+ generos.join("</option><option>") +`</option>`

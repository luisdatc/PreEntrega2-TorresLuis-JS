//Declaro Variables
let salirDelMenu = false;
let cursos;
let precioCursos = 0;
let consulta;
let cart = [];

//Clase Constructora del Curso
class Curso {
  constructor(idCurso, nombreCurso, precioCurso, inicioCurso) {
    this.idCurso = idCurso;
    this.nombreCurso = nombreCurso;
    this.precioCurso = precioCurso;
    this.inicioCurso = inicioCurso;
  }
}

//Instanciacion de los cursos (objetos)
const curso1 = new Curso(1, "Desarrollo Web", 3000, "15/01/2023");
const curso2 = new Curso(2, "JavaScript", 3500, "20/01/2023");
const curso3 = new Curso(3, "ReactJS", 5000, "05/02/2023");
const curso4 = new Curso(4, "AngularJS", 5000, "05/02/2023");
const curso5 = new Curso(5, "SEO", 6000, "01/04/2023");
const curso6 = new Curso(6, "Programacion BackEnd", 10000, "18/02/2023");
const curso7 = new Curso(7, "JAVA", 8000, "20/04/2023");
const curso8 = new Curso(8, "Python", 6000, "20/05/2023");
const curso9 = new Curso(9, "UX/UI Basico", 4000, "01/03/2023");
const curso10 = new Curso(10, "UX/UI Avanzado", 9000, "01/06/2023");

//Creacion de array de objetos
const catalogo = [
  curso1,
  curso2,
  curso3,
  curso4,
  curso5,
  curso6,
  curso7,
  curso8,
  curso9,
  curso10,
];

//funcion para mostrar el catalogo de cursos
function mostrarCatalogo(arrayCursos) {
  console.log("Nuestros cursos disponibles son: ");
  arrayCursos.forEach((curso) => {
    console.log(
      `El curso ${curso.nombreCurso} tiene un precio de:${curso.precioCurso} con inicio de cursada del ${curso.inicioCurso}.`
    );
  });
}

//Funcion para buscar curso
function buscarCurso(buscar) {
  let cursoBuscado = prompt(`Ingrese el nombre del curso que desea buscar`);
  let cursoEncontrado = buscar.find(
    (curso) =>
      curso.nombreCurso.toLowerCase() == cursoBuscado.toLocaleLowerCase()
  );
  if (cursoEncontrado == undefined) {
    alert(
      `El curso ${cursoBuscado} no esta en nuestro catalogo por los momentos!`
    );
  } else {
    alert(`Se encontro el curso ${cursoEncontrado.nombreCurso} y puedes ver toda su informacion aca:  
    Precio: ${cursoEncontrado.precioCurso}
    Inicio de Cursada: ${cursoEncontrado.inicioCurso} `);
  }
}

//Funcion para agregar al carrito
function agregarAlCarro(producto) {
  if (cart.includes(producto.nombreCurso)) {
    alert("El curso ya ha sido agregado al carrito");
  } else {
    cart.push(producto.nombreCurso);
    precioCursos += producto.precioCurso;
    alert(`Agregaste el curso ${producto.nombreCurso} al carro de compras.
    Recorda que el inicio de cursada es el dia ${producto.inicioCurso}`);
  }
}

//funciones para ordenar el carrito por precio y por orden alfabetico
function cursoMenorMayor(curso) {
  const menMay = [].concat(curso);
  menMay.sort((curso01, curso02) => curso01.precioCurso - curso02.precioCurso);
  mostrarCatalogo(menMay);
}
function cursoMayorMenor(curso) {
  const mayMen = [].concat(curso);
  mayMen.sort((a, b) => b.precioCurso - a.precioCurso);
  mostrarCatalogo(mayMen);
}
function cursoAlfabeticoNombre(curso) {
  const cursoAlfabetico = [].concat(curso);
  cursoAlfabetico.sort((a, b) => {
    if (a.nombreCurso > b.nombreCurso) {
      return 1;
    }
    if (a.nombreCurso < b.nombreCurso) {
      return -1;
    }
    return 0;
  });
  mostrarCatalogo(cursoAlfabetico);
}

//funcion para preguntar en que ordenar
function ordenar(curso) {
  let orden = parseInt(
    prompt(`
  1 - Ordenar por Precio de menor a mayor.
  2 - Ordenar por precio de mayor a menor.
  3 - Ordenar nombre de curso alfabeticamente.`)
  );
  switch (orden) {
    case 1:
      cursoMenorMayor(curso);
      break;
    case 2:
      cursoMayorMenor(curso);
      break;
    case 3:
      cursoAlfabeticoNombre(curso);
      break;
    default:
      console.log(`${orden} no es válida para ordenar`);
      alert(
        `Opcion numero ${orden} no es correcta favor de ingresar una del 1 al 3`
      );
      break;
  }
}

//Funcion para mostrar los cursos
function seleccionarCursos() {
  let cantidadCursos = parseInt(
    prompt(`Cursos disponibles: 

    - Desarrollo WEB - JavaScript
    - ReactJS - AngularJS
    - SEO - Programacion BackEnd
    - JAVA - Python
    - UX/UI Basico - UX/UI Avanzado
    
    Cuantos deseas agregar al carro de compras?`)
  );

  for (let i = 1; i <= cantidadCursos; i++) {
    cursos = parseInt(
      prompt(`
    Selecciona el que mas te guste: 

    1 - Desarrollo WEB
    2 - JavaScript
    3 - ReactJS
    4 - AngularJS
    5 - SEO
    6 - Programacion BackEnd
    7 - JAVA
    8 - Python
    9 - UX/UI Basico
    10 - UX/UI Avanzado
            
  Escoge la opcion del 1 al 10 correspondiente al curso al cual 
  quieras inscribirte.`)
    );

    //Opciones
    switch (cursos) {
      case 1:
        agregarAlCarro(curso1);
        break;

      case 2:
        agregarAlCarro(curso2);
        break;

      case 3:
        agregarAlCarro(curso3);
        break;

      case 4:
        agregarAlCarro(curso4);
        break;

      case 5:
        agregarAlCarro(curso5);
        break;

      case 6:
        agregarAlCarro(curso6);
        break;

      case 7:
        agregarAlCarro(curso7);
        break;

      case 8:
        agregarAlCarro(curso8);
        break;

      case 9:
        agregarAlCarro(curso9);
        break;

      case 10:
        agregarAlCarro(curso10);
        break;

      //Opcion Predeterminada
      default:
        alert("Ingrese una opcion del 1 al 10");
        break;
    }
  }
}

//FUNCION PARA COMPRAR LOS CURSOS EN EL CARRO DE COMPRAS
function comprarcarroDeCompras() {
  consulta = prompt(
    `Desea comprar los cursos agregados al carro de compras? Indique si o no.`
  ).toLowerCase();

  if (consulta === "si") {
    alert(
      `¡¡FELICIDADES!! compraste ${cart} preparate para empezar a aprender y disfrutar!`
    );
    cart = [];
    precioCursos = 0;
  } else if (consulta == "no") {
    alert(
      "Esperamos que vuelvas pronto y te decidas por algunos de nuestros cursos!!"
    );
    cart = [];
    precioCursos = 0;
  } else {
    alert("Ingresa si o no");
  }
}

//Menu Principal
do {
  let consultar = parseInt(
    prompt(`Ingrese la opcion deseada: 
    
    1 - Cursos disponibles.
    2 - Informacion General de los cursos (Precio e Inicio de Cursada).
    3 - Ver carro de compras.
    4 - Buscar curso por titulo.
    5 - Ordenar cursos (Precio y Orden Alfabetico).
    0 - Salir del menu.
    `)
  );

  //Opciones
  switch (consultar) {
    case 1:
      seleccionarCursos();
      break;

    case 2:
      alert("Revisa la consola :)");
      mostrarCatalogo(catalogo);
      break;

    case 3:
      if (cart == "") {
        alert(
          "El carro de compras esta vacio, agrega los cursos que mas te gusten!."
        );
      } else {
        alert(
          `En el carro de compras agregaste ${cart} y el precio total es de: $${precioCursos}.`
        );
        comprarcarroDeCompras();
      }
      break;

    case 4:
      buscarCurso(catalogo);
      break;

    case 5:
      ordenar(catalogo);
      break;

    case 0:
      alert(
        "GRACIAS POR VISITARNOS, ESPERAMOS QUE PRONTO TENGAMOS ALGUN CURSO QUE TE ANIME A CAPACITARTE CON NOSOTROS. "
      );
      salirDelMenu = true;
      break;

    //Opcion Predeterminada
    default:
      alert("Ingrese una opcion correcta del 0 al 3.");
      break;
  }
} while (!salirDelMenu);
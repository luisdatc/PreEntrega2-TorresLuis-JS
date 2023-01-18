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
function addToCart(producto) {
  cart.push(producto);
}

//Funcion para mostrar los cursos
function seleccionarCursos() {
  alert(`
Listado de cursos disponibles: 

1 - Desarrollo WEB
2 - JavaScript
3 - ReactJS
4 - AngularJS
5 - SEO
6 - Programacion BackEnd
7 - JAVA
8 - Python
9 - UX/UI Basico
10 - UX/UI Avanzado`);

  let cantidadCursos = parseInt(
    prompt("Ingrese la cantidad de cursos a agregar")
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
        precioCursos += curso1.precioCurso;
        addToCart(curso1.nombreCurso);
        alert(`Agregaste el curso ${curso1.nombreCurso} al carro de compras.
        Recorda que el inicio de cursada es el dia 15/01/2023`);
        break;

      case 2:
        precioCursos += curso2.precioCurso;
        addToCart(curso2.nombreCurso);
        alert(`Agregaste el curso ${curso2.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 20/01/2023`);
        break;

      case 3:
        precioCursos += 5000;
        addToCart(curso3.nombreCurso);
        alert(`Agregaste el curso ${curso3.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 05/02/2023`);
        break;

      case 4:
        precioCursos += 5000;
        addToCart(curso4.nombreCurso);
        alert(`Agregaste el curso ${curso4.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 05/02/2023`);
        break;

      case 5:
        precioCursos += 6000;
        addToCart(curso5.nombreCurso);
        alert(`Agregaste el curso ${curso5.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 01/04/2023`);
        break;

      case 6:
        precioCursos += 10000;
        addToCart(curso6.nombreCurso);
        alert(`Agregaste el curso ${curso6.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 18/02/2023`);
        break;

      case 7:
        precioCursos += 8000;
        addToCart(curso7.nombreCurso);
        alert(`Agregaste el curso ${curso7.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 20/04/2023`);
        break;

      case 8:
        precioCursos += 6000;
        addToCart(curso8.nombreCurso);
        alert(`Agregaste el curso ${curso8.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 20/05/2023`);
        break;

      case 9:
        precioCursos += 4000;
        addToCart(curso9.nombreCurso);
        alert(`Agregaste el curso ${curso9.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 01/03/2023`);
        break;

      case 10:
        precioCursos += 6000;
        addToCart(curso10.nombreCurso);
        alert(`Agregaste el curso ${curso10.nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 01/06/2023`);
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
      `¡¡FELICIDADES!! compraste ${cart} preparate para empezar a aprender y disfrutar`
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
    4 - Buscar curso por titulo
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
        alert("El carro esta vacio, agrega los cursos que mas te gusten!.");
      } else {
        console.log(
          `Agregaste ${cart} al carro de compras y el precio final es: $${precioCursos}`
        );
        alert(
          `En el carro de compras agregaste ${cart} y el precio total es de: $${precioCursos}.`
        );
        comprarcarroDeCompras();
      }
      break;

    case 4:
      buscarCurso(catalogo);
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

//Declaro Variables
let salirDelMenu = false;
let cursos;
let todosLosCursos = "";
let nombreCurso = "";
let precioCursos = 0;
let consulta;
let numeroDeCursos;
let cursoTotal;
let totales = 0;
let cursosCarrito = "";

//Clase Constructora del Curso
class Curso {
  constructor(idCurso, nombreCurso, precioCurso, inicioCurso) {
    this.idCurso = idCurso;
    this.nombreCurso = nombreCurso;
    this.precioCurso = precioCurso;
    this.inicioCurso = inicioCurso;
  }
}

//Clase constructora del carrito
class Carrito {
  constructor(nombreCurso, precioCurso) {
    this.nombreCurso = nombreCurso;
    this.precioCurso = precioCurso;
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

//Funcion para mostrar los cursos
function seleccionarCursos() {
  alert(`
Estos son los cursos que tenemos para que aprendas con nosotros: 

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
    Estos son los cursos que tenemos para que aprendas con nosotros: 

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
        nombreCurso = "Desarrollo Web,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras.
        Recorda que el inicio de cursada es el dia 15/01/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 2:
        precioCursos += curso2.precioCurso;
        nombreCurso = "JavaScript,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 20/01/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 3:
        precioCursos += 5000;
        nombreCurso = "ReactJS,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 05/02/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 4:
        precioCursos += 5000;
        nombreCurso = "AngularJS,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 05/02/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 5:
        precioCursos += 6000;
        nombreCurso = "SEO,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 01/04/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 6:
        precioCursos += 10000;
        nombreCurso = "Programacion BackEnd,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 18/02/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 7:
        precioCursos += 8000;
        nombreCurso = "JAVA,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 20/04/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 8:
        precioCursos += 6000;
        nombreCurso = "Python,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 20/05/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 9:
        precioCursos += 4000;
        nombreCurso = "UX/UI Basico,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 01/03/2023`);
        todosLosCursos += nombreCurso;
        break;

      case 10:
        precioCursos += 6000;
        nombreCurso = "UX/UI Avanzado,";
        alert(`Agregaste el curso ${nombreCurso} al carro de compras
        Recorda que el inicio de cursada es el dia 01/06/2023`);
        todosLosCursos += nombreCurso;
        break;

      //Opcion Predeterminada
      default:
        alert("Ingrese una opcion del 1 al 10");
        break;
    }
    let carrito = new Carrito(nombreCurso, precioCursos);

    totales = +precioCursos;

    cursosCarrito += `Curso ${i}: ${carrito.nombreCurso} con un precio de: $${precioCursos} - `;
  }
}

//FUNCION PARA COMPRAR LOS CURSOS EN EL CARRO DE COMPRAS
function carroDeCompras() {
  consulta = prompt(
    `Desea comprar los cursos agregados al carro de compras? Indique si o no.`
  ).toLowerCase();

  if (consulta === "si") {
    alert(
      `¡¡FELICIDADES!! compraste ${todosLosCursos} preparate para empezar a aprender y disfrutar`
    );
    todosLosCursos = "";
    precioCursos = 0;
  } else if (consulta == "no") {
    alert(
      "Esperamos que vuelvas pronto y te decidas por algunos de nuestros cursos."
    );
    todosLosCursos = "";
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
      console.log(cursosCarrito);
      console.log(`Quedando en el total del carrito: ${totales}`);
      if (todosLosCursos == "") {
        alert("El carro esta vacio, agrega los cursos que mas te gusten!.");
      } else {
        alert(
          `En el carro de compras agregaste ${todosLosCursos} y el precio total es de: $${precioCursos}.`
        );
        carroDeCompras();
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

// let cantidadCursos = parseInt(
//   prompt("Ingrese la cantidad de cursos a agregar")
// );

// let cursosCarrito = "";
// for (let i = 1; i < cantidadCursos; i++) {
//   let carrito = new Carrito (nombreCurso, precioCursos)

// cursosCarrito += `curso ${i}: ${carrito.nombreCurso} ${precioCurso} `
// }
// alert(cursosCarrito)

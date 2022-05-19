class Propietario{
  Nombre = '';
  Direccion='';
  Telefono='';

  constructor(Nombre,Direccion,Telefono){
    this.Nombre = Nombre;
    this.Direccion = Direccion;
    this.Telefono = Telefono;
  }
  datosPropietario(){
    return `El nombre del dueño es: ${this.Nombre}. El domicilio es: ${this.Direccion}, y el numero telefonico de contacto: ${this.Telefono}`;
  }
}//fin Propietario

class Animal extends Propietario{
  Tipo = '';
  constructor(Nombre,Direccion,Telefono,Tipo){
    super(Nombre,Direccion,Telefono);
    this.Tipo = Tipo;
  }

  get tipo(){
    return this.Tipo;
  }
  set tipo(Tipo){
    this.Tipo = Tipo;
  }

}//fin Animal

class Mascota extends Animal{
  NombreMascota = '';
  Enfermedad = '';
  constructor(Nombre,Direccion,Telefono,Tipo, NombreMascota,Enfermedad){
    super(Nombre,Direccion,Telefono,Tipo);
    this.NombreMascota = NombreMascota;
    this.Enfermedad = Enfermedad;
  }

  get nombreMascota(){
    return this.NombreMascota;
  }
  set nombreMascota(NombreMascota){
    this.NombreMascota = NombreMascota;
  }

  get enfermedad(){
    return this.Enfermedad;
  }

  set enfermedad(Enfermedad){
    this.Enfermedad = Enfermedad;
  }

  datosMascota(){
    return `<br>El tipo de animal es: ${this.Tipo}, mientras que el nombre de la mascota es: ${this.NombreMascota}, y la enfermedad es: ${this.Enfermedad}`;
  }

}//fin Mascota

function registrando(){
  let elPropietario = document.getElementById('propietario').value;
  let elTelefono = document.getElementById('telefono').value;
  let laDireccion = document.getElementById('direccion').value;
  let elNombreMascota = document.getElementById('nombreMascota').value;
  let tipoMascota = document.getElementById('tipo').value;
  let laEnfermedad = document.getElementById('enfermedad').value;

  var laMascota ;
  switch(tipoMascota){
    case 'perro':
          var Perro = new Mascota(elPropietario,laDireccion, elTelefono, tipoMascota, elNombreMascota, laEnfermedad);
          console.log(Perro);
          laMascota = Perro;
          break;
    case 'gato':
          var Gato = new Mascota(elPropietario,laDireccion, elTelefono, tipoMascota, elNombreMascota, laEnfermedad);
          console.log(Gato);
          laMascota = Gato;
          break;
    case 'conejo':
          var Conejo = new Mascota(elPropietario,laDireccion, elTelefono, tipoMascota, elNombreMascota, laEnfermedad);
          console.log(Conejo);
          laMascota = Conejo;
          break;
    default:
          console.log('Error de Seleccion');

  }

  // var laMascota = new Mascota(elPropietario,laDireccion, elTelefono, tipoMascota, elNombreMascota, laEnfermedad);
  return laMascota;
}


var elFormulario = document.getElementById('formularioRegistro');
elFormulario.addEventListener('submit', observando);

function observando(event){
  event.preventDefault();
  console.log('Hizo click en submit');
  const mascotaData = registrando();

  let resultadoTotal = mascotaData.datosPropietario().concat( mascotaData.datosMascota() );

  let elResultado = document.getElementById('resultado');
  elResultado.innerHTML = resultadoTotal;


}

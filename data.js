module.exports = function () {
  var data = {
  clientez:
  [
    {
      id:10001,
      name: "Luis Rodriguez",
      age: 28,
      nickname: "L_rodri",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "luisa@gmail.com",
      enfermedadesExistenciales: true,
      enfermedades:"Diabetes II",
      talla: 1.84 ,
      peso: 114,
      tiempoDisponible: "mañana",
      condicion: "sobrePeso",
      idSuscribcion: 40001,
      metaPrincipal: "bajar peso",
      idRutina: 50001
      },
      {
      id:10002,
      name: "Luisa Driguez",
      age: 25,
      nickname: "L_DriW",
      sexo: "femenino",
      UsuarioPremium: false,
      email: "luisRo@gmail.com",
      enfermedadesExistenciales: true,
      enfermedades:"Diabetes III",
      talla: 1.64 ,
      peso: 64,
      tiempoDisponible: "tarde",
      condicion: "PesoIdeal",
      idSuscribcion: 40002,
      metaPrincipal: "aumentar masa",
      idRutina: 50002
      },
      {
      id:10003,
      name: "Liz Roncoz",
      age: 25,
      nickname: "Liz_ronz",
      sexo: "femenino",
      UsuarioPremium: false,
      email: "lizRonz@gmail.com",
      enfermedadesExistenciales: false,
      enfermedades: "",
      talla: 1.92 ,
      peso: 75,
      tiempoDisponible: "tarde",
      condicion: "bajo peso",
      idSuscribcion: 40003,
      metaPrincipal: "aumentar masa",
      idRutina: 50003
      },


  ],
/*

*/
  trainers:
  [
    {
      id:20001,
      name: "Peter Parker",
      age: 22,
      nickname: "P_Parker",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "pparker@gmail.com",
      horario: 1,
      idCalificacion: 70001
    },
    {
      id:20002,
      name: "PEdro García",
      age: 22,
      nickname: "P_García",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "pGarcía@gmail.com",
      horario: 1,
      idCalificacion: 70002
    },
    {
      id:20003,
      name: "FErnando Parker",
      age: 22,
      nickname: "F_Parker",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "fparker@gmail.com",
      horario: 1,
      idCalificacion: 70003
    },
    {
      id:20004,
      name: "Esquivel Lour",
      age: 22,
      nickname: "E_Per",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "E_Lour@gmail.com",
      horario: 1,
      idCalificacion: 70004
    }
  ],

clientes: [{
  id:10001,
  nombre: "Luis ",
  apellido: "Rodriguez",
  fechanacimiento: "01-04-2000",
  edad: 22,
  username: "L_rodri",
  password: "12345678",
  sexo: "masculino",
  email: "luisa@gmail.com",
  disponibilidad: "mañana",
  //Dis: "nn",
  Suscripcion_id: 900004,
  existEnfermedades: true,
  ListaEnfermedades:"Diabetes II",
  talla: 1.84 ,
  peso: 114,
  Condicion_fisica: "sobrePeso",
  Objetivo_fisico: "bajar peso",
  Rutina_id: 50001

},
{
  id:10001,
  nombre: "Luisa ",
  apellido: "Geniz",
  fechanacimiento: "01-04-2002",
  edad: 22,
  username: "L_genys",
  password: "12345678",
  sexo: "femenino",
  email: "luisaG@gmail.com",
  disponibilidad: "tarde",
  //Dis: "nn",
  Suscripcion_id: 900005,
  existEnfermedades: false,
  ListaEnfermedades:"",
  talla: 1.84 ,
  peso: 80,
  Condicion_fisica: "peso ideal",
  Objetivo_fisico: "aumentar masa",
  Rutina_id: 50002

},
{
  id:10001,
  nombre: "Fred ",
  apellido: "Derses",
  fechanacimiento: "01-04-1998",
  edad: 25,
  username: "F_dersrs",
  password: "12345678",
  sexo: "masculino",
  email: "fredDersesa@gmail.com",
  disponibilidad: "noche",
  //Dis: "nn",
  Suscripcion_id: 900005,
  existEnfermedades: false,
  ListaEnfermedades:"",
  talla: 1.74 ,
  peso: 94,
  Condicion_fisica: "sobrePeso",
  Objetivo_fisico: "bajar peso",
  Rutina_id: 50005

}
,
{
  id:10001,
  nombre: "Denilson",
  apellido: "Vasquez",
  fechanacimiento: "01-04-1999",
  edad: 22,
  username: "D_Vasquez",
  password: "12345678",
  sexo: "masculino",
  email: "d_vasquez@gmail.com",
  disponibilidad: "noche",
  //Dis: "nn",
  Suscripcion_id: 900004,
  existEnfermedades: true,
  ListaEnfermedades:"Diabetes I",
  talla: 1.84 ,
  peso: 90,
  Condicion_fisica: "Obesidad",
  Objetivo_fisico: "bajar peso",
  Rutina_id: 50005

},
{
  id:10001,
  nombre: "Esmeralda ",
  apellido: "Rodriguez",
  fechanacimiento: "01-04-2002",
  edad: 20,
  username: "E_rodri",
  password: "12345678",
  sexo: "femenino",
  email: "e_rodri@gmail.com",
  disponibilidad: "mañana",
  //Dis: "nn",
  Suscripcion_id: 900007,
  existEnfermedades: false,
  ListaEnfermedades:"",
  talla: 1.70 ,
  peso: 65,
  Condicion_fisica: "Bajo de peso",
  Objetivo_fisico: "Aumentar masa",
  Rutina_id: 50008

},
{
  id:10001,
  nombre: "Edgard ",
  apellido: "Perez",
  fechanacimiento: "01-04-1998",
  edad: 22,
  username: "E_perez",
  password: "12345678",
  sexo: "masculino",
  email: "EPerez@gmail.com",
  disponibilidad: "mañana",
  //Dis: "nn",
  Suscripcion_id: 900009,
  existEnfermedades: true,
  ListaEnfermedades:"Diabetes II",
  talla: 1.84 ,
  peso: 84,
  Condicion_fisica: "Peso ideal",
  Objetivo_fisico: "marcar cuerpo",
  Rutina_id: 50006

},
{
  id:10001,
  nombre: "Roger ",
  apellido: "Rodriguez",
  fechanacimiento: "01-04-2000",
  edad: 22,
  username: "R_rodri",
  password: "12345678",
  sexo: "masculino",
  email: "RRodri@gmail.com",
  disponibilidad: "mañana",
  //Dis: "nn",
  Suscripcion_id: 900004,
  existEnfermedades: true,
  ListaEnfermedades:"Diabetes II",
  talla: 1.94 ,
  peso: 107,
  Condicion_fisica: "sobrePeso",
  Objetivo_fisico: "bajar peso",
  Rutina_id: 5007

}]
,

rutinas: [{
  id:10001,
  Trainer_id:111222,
  Tren_superior:"pecho",
  Tren_inferior:"Espalda",
  Tiempo: 20

}]


}
//// esto va ultimo////
return data
}

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
      {
      id:10004,
      name: "Bruce Wane",
      age: 34,
      nickname: "BWane",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "Bwane@gmail.com",
      enfermedadesExistenciales: false,
      enfermedades:"",
      talla: 1.97 ,
      peso: 108,
      tiempoDisponible: "mañana",
      condicion: "peso ideal",
      idSuscribcion: 40004,
      metaPrincipal: "aumentar masa",
      idRutina: 50004
      },
    {
    id:10005,
      name: "Peter Parker",
      age: 22,
      nickname: "P_Parker",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "pparker@gmail.com",
      enfermedadesExistenciales: false,
      enfermedades:"",
      talla: 1.74 ,
      peso: 78,
      tiempoDisponible: "noche",
      condicion: "sobrePeso",
      idSuscribcion: 40005,
      metaPrincipañ: "bajar peso",
      idRutina: 50005
    }


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
  nombre: "Luis Rodriguez",
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

}],

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

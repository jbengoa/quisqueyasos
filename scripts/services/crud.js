'use strict';

/**
 * @ngdoc service
 * @name appApp.crud
 * @description
 * # crud
 * Service in the appApp.
 */
var _server = 'http://45.55.77.156:8080';

angular.module('appApp')
.factory('TareasResourse', function ($resource) {
  var factory = {

   iniciar: $resource('_server'+'/login',{},{
      sesion: {method: 'POST', params:{
        username:'@username',
        password:'@password'}
      }
    }),
    getAlert: $resource(_server+'/api/getAlert',{},{
      all: {method: 'GET',isArray:true}
    }),
    getPendientes: $resource(_server+'/api/getPendientes',{},{
      all: {method: 'GET',isArray:true}
    }),
    getDeclinados: $resource(_server+'/api/getDeclinados',{},{
      all: {method: 'GET',isArray:true}
    }),
    getRegistrados: $resource(_server+'/api/getRegistrados',{},{
      all: {method: 'GET',isArray:true}
    }),
    getTipos: $resource(_server+'/api/getTiposAlert',{},{
      all: {method: 'GET',isArray:true}
    }),
    addCliente: $resource(_server+'/addUser',{},{
      nuevoCliente: {method: 'POST', params:{
        nombres:'@nombres',
        apellidos:'@apellidos',
        username:'@username',
        password:'@password',
        telefono:'@telefono',
        direccion:'@direccion',
        cedula:'@cedula',
        idtipouser:'@idtipouser',
        email:'@email'}
      }
    }),
    membresia: $resource(_server+'/api/membresia',{},{
      add: {method: 'POST', params:{
        username:'@username',
        tiempo:'@tiempo',
        vence:'@vence'}
      }
    }),
    getEstados: $resource(_server+'/api/getEstados',{},{
      all: {method: 'GET',isArray:true}
    }),
    Estado: $resource(_server+'/api/editEstado',{},{
      editar: {method: 'POST', params:{
        idestado:'@idestado',
        nombre:'@nombre',
        Descripcion:'@Descripcion'}
      }
    }),
    addEstado: $resource(_server+'/api/addEstado',{},{
      new: {method: 'POST', params:{
        nombre:'@nombre',
        Descripcion:'@Descripcion'}
      }
    }),
    deleteEstado: $resource(_server+'/api/deleteEstado',{},{
      dl: {method: 'POST', params:{
        idestado:'@idestado'}
      }
    }),
    getMembresias: $resource(_server+'/api/getMembresia',{},{
      all: {method: 'GET',isArray:true}
    }),
    editMembresia: $resource(_server+'/api/editMembresia',{},{
      editar: {method: 'POST', params:{
        idmebresia:'@idmebresia',
        nombre:'@nombre',
        dias:'@dias'}
      }
    }),
    addMembresia: $resource(_server+'/api/addMembresia',{},{
      new: {method: 'POST', params:{
        nombre:'@nombre',
        dias:'@dias'}
      }
    }),
    deleteMembresia: $resource(_server+'/api/deleteMembresia',{},{
      dl: {method: 'POST', params:{
        idmebresia:'@idmebresia'}
      }
    }),
    declinar: $resource(_server+'/api/declinarUsuario',{},{
      usuario: {method: 'POST', params:{
        username:'@username'
      }
      }
    })
      ,
    eliminarVehiculo: $resource(_server+'/api/eliminarVehiculo',{},{
      eliminar: {method: 'POST', params:{idvehiculo:'@idvehiculo'}
      }
    }),


    editar: $resource(_server+'/api/editUser',{},{
      cliente: {method: 'POST', params:{
        nombres:'@nombres',
        apellidos:'@apellidos',
        username:'@username',
        password:'@password',
        telefono:'@telefono',
        direccion:'@direccion',
        cedula:'@cedula',
        idtipouser:'@idtipouser',
        email:'@email'
      }
      }
    }),
     e: $resource(_server+'/api/editAlert',{},{
      a: {method: 'POST', params:{
        idalerta:'@idalerta',
        estado:'@estado',
        comentario:'@comentario'
      }
      }
    }),
     vehiculo: $resource(_server+'/api/newVehiculo',{},{
      add: {method: 'POST', params:{
        color: '@color',
        placa: '@placa',
        chasis: '@chasis',
        idusuario: '@idusuario',
        marca: '@marca',
        modelo: '@modelo',
        fecha: '@fecha'
      }
      }
    }),

  };
  return factory;

});

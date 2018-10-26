
Modulos
	- Memos
	- Oficios
	- Administración
		- Departamentos
		- Jefe departamento
		- Usuarios
			- Nombre de Usuario
			- Nombre Completo
			- Apellido Paterno
			- Apellido Materno
			- Password
	- Correspondencia
	- Consultas
	- Configuración


Modulo Administración
  - Tabla Usuarios
  	- usr_id
  	- usr_nombre_usuario
  	- usr_nombre_completo
  	- usr_apellido_materno
  	- usr_apellido_paterno
  	- usr_password
  	- usr_tipo
  	- usr_fecha_creacion

  - Tabla Departamentos
  	- dep_id
  	- dep_nombre
  	- dep_fecha_creacion

  - Tabla Jefe_departamentos
  	- jef_id
  	- jef_dep_id_fk
  	- jef_usr_id_fk

- Pantallas Administracion
	- Login
	- Pantalla Bienvenido (Logo Empresa)
	- Menu
		- Administración
		- Memos
		- Oficios
		- Correspondencia
		- Consultas




Local End-Point --> http://localhost/fer/api/public/get/usuarios

CORRESPONDENCIA
- Referencia es un valor abierto
- Agregar sus propias dependencias
- Agregar dependecias durante el registro de la correspondencia


Usuario
Departamentos
 - Contabilidad
 - Sistemas

Dirigido
 - Nombre de Usuario a quien va dirigido

Checkbox de Limite de respuesta (Num de Dias) Calendario

Si esta checado, tiene una fecha limite para contestar

Semaforo
Verde (No Hay pex)
3 dias Amarillo
1 dia Rojo


Oficio (Mas oficial)
	Va turnado a la dependencia que me contesto

Pueden contestar con memos o oficios

Turnado A --> Dependencia (A quien va dirigido)
IMMS manda una carta dice que le conteste cuantas gentes tienes inscrita en tu empresa


Este relacionado el departamento con los trabajadores

http://clubmate.fi/git-removing-files-from-the-staging-area-and-the-tree/

---------------------------------------------------------------------------------------
TODOS
==========================
* Modificar el campo en la DB de dirigado a de Correspondencias
* Agregar el User ID de quien crea registros (Correspondencia, Memos, Oficios)
* Validar en Backend si se dejo fecha abierta
* Si al registrar usuario no se pone jefe, agregarlo al departamento (No-departamento)
==========================


- Mostrar el nombre de Usuario al logearse

[Correspondencia]
OK - Registrar otra dependencia (Otro)
OK - Limite de respuesta (Fecha), si no esta palomeado, es libre
OK - Dirigido a (Nombre de Usuario a quien va dirigido)

[Usuarios]
OK - Agregar funcionalidad de agregar departamento en caso de que no este registrado, si esta registrado, seleccionarlo.

[Oficios] [Memos]
Pueden contestar con Memos o Oficios, el Oficio es mas oficial.
Turnado a: --> Dependencia (A quien va dirigido, puede ser una persona o dependencia)
Asunto: Contestacion de la referencia 124
Observaciones: Libre
 
Que este relacionado departamento con los trabajores

Area departamento
Jefe departamento

1:N Departamento:Jefes

[Consultas]
- Fitro por fecha, memos, correspondencia, oficios, todo.
- Campo Solicitante (Memos y Oficios) los solicitan los usuarios del sistema (Los que trabajan)
- Guardar el usuario quien creo el memo u oficio
- Solicitantes saldran en Memos y oficios
- Correspondencia (Dirigo a:) al reves (Nadie lo solicita)
- Departamento Dirigido: Dep del Solicitante (Solicitante, Fer mando un memo, Dep sistemas)


3 Roles (OK)
-----------------------------------
1) - Admin (Todo)
2) - Todos menos Usuarios
3) - Memos, Oficios, Consultas

Notificaciones:
- Notificar correspondencia

Exporta Excel/PDF las consultas

------------------------------------------------------------------------------------

Memos/Correspondencia/Oficios


Fecha Creación	(Fecha en que se creo el registro)
Folio			(O#N, M#, C#)
Dirigido A:	    Correspondencia only
Asunto			Memo/Oficio Only
Solicitante		(Yo, tobola (Usuarios del sistema)) (Memo/Oficio), Correspondencia -->Blanco
Depto Dirigido	--> Departamento del solicitante
Fecha Limite    --> Correspondencia only


Memos/Oficios

memo_id
memo_tipo_turnado_a 	(correspondencia,usuario_sistema, abierto)
memo_turnado_a_id_fk    (id_correpondencia, id_usuario, -1 "abierto")
memo_anio			 	(Corriente, Pasado)
memo_asunto
memo_observaciones
memo_creador_id_fk
memo_fecha_creacion
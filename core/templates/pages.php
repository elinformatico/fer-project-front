<?php
    $pages = [
        [
            "name"              => "login",             # URL Name
            "menuLabel"         => "Login",             # Name in the Menu
            "angularController" => "noController",      # Name Angular Controller
            "nameSection"       => "Iniciar Sesion",    # Tab Name (Title Pagle)
            "showInMenu"        => "no",                # Show in menu
            "permissions"       => [
                "admin",
                "user",
                "basic",
                "school-admin",
            ]
        ],
         [
            "name"              => "logout",
            "menuLabel"         => "Logout",
            "angularController" => "noController",
            "nameSection"       => "Cerrar Session",
            "showInMenu"        => "no",
            "permissions"       => [
                "admin",
                "user",
                "basic",
                "school-admin",
            ]
        ],
        [
            "name"              => "inicio",
            "menuLabel"         => "Inicio",
            "angularController" => "noController",
            "nameSection"       => "Panel Principal",
            "showInMenu"        => "yes",
            "permissions"       => [
                "admin",
                "user",
                "basic",
                "school-admin",
            ]
        ],
        [
            "name"              => "gasolina",
            "menuLabel"         => "Gasolina",
            "angularController" => "registroGasolinaCtrl",
            "nameSection"       => "Registrar Gasolina",
            "showInMenu"        => "yes",
            "permissions"       => [
                #"user",
                "admin",
            ]
        ],
        [
            "name"              => "financial-log",
            "menuLabel"         => "Log Financiero",
            "angularController" => "financialLogCtrl",
            "nameSection"       => "Registro de Gastos / Ingresos",
            "showInMenu"        => "yes",
            "permissions"       => [
                "admin",
            ]
        ],
        [
            "name"              => "memos",
            "menuLabel"         => "Memos",
            "angularController" => "memosCtrl",
            "nameSection"       => "Administrar Memos",
            "showInMenu"        => "yes",
            "permissions"       => [
                "admin",
                "user",
                "basic",
            ]
        ],
        [
            "name"              => "oficios",
            "menuLabel"         => "Oficios",
            "angularController" => "oficiosCtrl",
            "nameSection"       => "Administrar Oficios",
            "showInMenu"        => "yes",
            "permissions"       => [
                "admin",
                "user",
                "basic",
            ]
        ],
        [
            "name"              => "correspondencia",
            "menuLabel"         => "Correspondencia",
            "angularController" => "correspondenciaCtrl",
            "nameSection"       => "Administrar Correspondencia",
            "showInMenu"        => "yes",
            "permissions"       => [
                "user",
                "admin",
            ]
        ],
        [
            "name"              => "usuarios",
            "menuLabel"         => "Usuarios",
            "angularController" => "usuariosCtrl",
            "nameSection"       => "Administrar Usuarios",
            "showInMenu"        => "yes",
            "permissions"       => [
                "admin",
                "school-admin",
            ]
        ],
        [
            "name"              => "consultas",
            "menuLabel"         => "Consultas",
            "angularController" => "consultasCtrl",
            "nameSection"       => "Consultas",
            "showInMenu"        => "yes",
            "permissions"       => [
                "admin",
                "user",
                "basic",
            ]
        ],
        [
            "name"              => "404",
            "menuLabel"         => "",
            "angularController" => "noController",
            "nameSection"       => "No se encontro la Pagina",
            "showInMenu"        => "no",
            "permissions"       => [
                "admin",
                "user",
                "basic",
            ]
        ],
        [
            "name"              => "restringido",
            "menuLabel"         => "",
            "angularController" => "noController",
            "nameSection"       => "Acceso Restringido",
            "showInMenu"        => "no",
            "permissions"       => [
                "user",
                "basic",
                "school-admin",
            ]
        ],
        
        # Secciones del Menu
        [
            "name"              => "asistente-captura-personal",    # URL Name
            "menuLabel"         => "Asistente de Captura de Personal",    # Name in the Menu
            "angularController" => "asistenteCapturaPersonalCtrl",  # Name Angular Controller 
            "nameSection"       => "Asistente Captura Personal",    # Tab Name (Title Pagle)
            "showInMenu"        => "yes",                           # Show in menu
            "permissions"       => [
                "school-admin",
            ]    
        ],
        [
            "name"              => "personal",                      # URL Name
            "menuLabel"         => "Registro Personal",             # Name in the Menu
            "angularController" => "registroPersonalCtrl",          # Name Angular Controller 
            "nameSection"       => "Personal / Datos Generales",    # Tab Name (Title Pagle)
            "showInMenu"        => "yes",                           # Show in menu
            "permissions"       => [
                "school-admin",
            ]    
        ],
    ];
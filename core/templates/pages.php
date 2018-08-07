<?php
    $pages = [
        [
            "name"              => "login",
            "menuLabel"         => "Login",
            "angularController" => "noController",
            "nameSection"       => "Iniciar Sesion",
            "showInMenu"        => "no",
            "permissions"       => [
                "user",
                "admin",
            ]
        ],
         [
            "name"              => "logout",
            "menuLabel"         => "Logout",
            "angularController" => "noController",
            "nameSection"       => "Cerrar Session",
            "showInMenu"        => "no",
            "permissions"       => [
                "user",
                "admin",
            ]
        ],
        [
            "name"              => "inicio",
            "menuLabel"         => "Inicio",
            "angularController" => "noController",
            "nameSection"       => "Panel Principal",
            "showInMenu"        => "yes",
            "permissions"       => [
                "user",
                "admin",
            ]
        ],
        [
            "name"              => "gasolina",
            "menuLabel"         => "Gasolina",
            "angularController" => "registroGasolinaCtrl",
            "nameSection"       => "Ejemplo Funcional",
            "showInMenu"        => "no",
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
            "showInMenu"        => "no",
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
                "user",
                "admin",
            ]
        ],
        [
            "name"              => "oficios",
            "menuLabel"         => "Oficios",
            "angularController" => "oficiosCtrl",
            "nameSection"       => "Administrar Oficios",
            "showInMenu"        => "yes",
            "permissions"       => [
                "user",
                "admin",
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
                "admin"
            ]
        ],
        [
            "name"              => "consultas",
            "menuLabel"         => "Consultas",
            "angularController" => "consultasCtrl",
            "nameSection"       => "Consultas",
            "showInMenu"        => "yes",
            "permissions"       => [
                "admin"
            ]
        ],
        [
            "name"              => "404",
            "menuLabel"         => "",
            "angularController" => "noController",
            "nameSection"       => "No se encontro la Pagina",
            "showInMenu"        => "no",
            "permissions"       => [
                "user",
                "admin",
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
            ]
        ]
    ];
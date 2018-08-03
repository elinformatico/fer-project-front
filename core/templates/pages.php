<?php
    $pages = [
        [
            "name"              => "gasolina",
            "menuLabel"         => "Gasolina",
            "angularController" => "registroGasolinaCtrl",
            "nameSection"       => "Ejemplo Funcional",
            "showInMenu"        => "yes",
            "permissions"       => [
                "user",
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
            "name"              => "administrarUsuarios",
            "menuLabel"         => "Usuarios",
            "angularController" => "administrarUsuariosCtrl",
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
            "menuLabel"         => "Not Found Page",
            "angularController" => "404NotFoundCtrl",
            "nameSection"       => "No se encontro la Pagina",
            "showInMenu"        => "no",
            "permissions"       => [
                "user",
                "admin",
            ]
        ]
    ];
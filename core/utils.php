<?php
    function loadPageData($pagesArray, $name) 
    {
        $pageData = [];
        foreach ($pagesArray as $value) 
        {   
            if($value['name'] == $name) 
            {
                return $pageData = [
                    "name"              => $value['name'],
                    "menuLabel"         => $value['menuLabel'],
                    "angularController" => $value['angularController'],
                    "nameSection"       => $value['nameSection'],
                    "showInMenu"        => $value['showInMenu'],
                    "permissions"       => $value['permissions'],
                ];
            }
        }
        return [];
    }

    function e($array) {
        echo "<pre>";
            print_r($array);
        echo "</pre>";
    }

    function exitsPage($pagesArray, $page) 
    {
        $exits = false;
        foreach ($pagesArray as $value) 
        {   
            if($value['name'] == $page) {
                $exits = true;
                break;
            }
        }
        return $exits;
    }

    function generateMenu($pagesArray, $name) 
    {   
        foreach ($pagesArray as $value) 
        {   
            if($value['showInMenu'] == "yes")
            {
                if($value['name'] == $name) 
                {
                    echo "<li class='active'><a href='{$value['name']}'>{$value['menuLabel']}</a></li>";
                } else {
                    echo "<li><a href='{$value['name']}'>{$value['menuLabel']}</a></li>";
                }
            }
        }
    }

    function loadPage($pageData) 
    {
        include_once "core/templates/common/header.php";
        include_once "core/templates/views/{$pageData['name']}.php";
        include_once "core/templates/common/footer.php";

        # safe exit
        exit;
    }


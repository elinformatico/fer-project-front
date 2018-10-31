<?php
     function loadPageData($pagesArray, $name) {

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

    function exitsPage($pagesArray, $page) {

        $exits = false;
        foreach ($pagesArray as $value) 
        {   
            if($value['name'] == $page) {
            # if(strstr($page, $value['name'])) {
                $exits = true;
                break;
            }
        }
        return $exits;
    }

    function generateMenu($pagesArray, $name) {   

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
        global $pages;
        include_once "core/templates/common/header.php";
        if(isSessionActive()) {

            # Permission for this Page
            $currentPageData = loadPageData($pages, $pageData['name']);
    
            # Check if the current user have permission to see the page
            # if not, a restricted page will be displayed
            if(in_array($_SESSION['role'], $currentPageData['permissions'])){
                include_once "core/templates/views/{$pageData['name']}.php";
            } else {
                include_once "core/templates/views/restringido.php";
            }

        } else {
            include_once "core/templates/views/login.php";
        }
        include_once "core/templates/common/footer.php";

        # safe exit
        exit;
    }

    function callApi($server, $rootApplication, $endPoint) 
    {
        $endPoint = "{$server}{$rootApplication}/$endPoint";
        $responseData = [];
        try
        {   
            # Get cURL resource
            $curl = curl_init();

            # Set some options 
            curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => $endPoint,
                CURLOPT_HTTPHEADER => ['Accept:application/json']
            ));
            # Send the request & save response to $response
            $response = curl_exec($curl);

            // Check HTTP status code
            if (!curl_errno($curl)) {
                switch ($http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE)) {
                    case 200:  # OK
                        $responseData = json_decode($response);
                        break;
                    default:
                        # echo 'Unexpected HTTP code: ', $http_code, "\n";
                        # echo $response;
                        $responseData = json_decode($response);
                }
            }
            
            // Close request to clear up some resources
            curl_close($curl);


        } catch (Exception $ex) {
            printf("Error while sending request, reason: %s\n",$ex->getMessage());

        }
        return $responseData;
    }

    function getAuthUserData($token) {

        $splitData = explode("|", $token);
        $returnDataUser = [
            "userId"        => base64_decode($splitData[0]),
            "userName"      => base64_decode($splitData[1]),
            "fullName"      => base64_decode($splitData[2]),
            "role"          => base64_decode($splitData[3]),
            "dateExpired"   => base64_decode($splitData[4]),
        ];
        return $returnDataUser;
    }

    function closeSession() {
        session_unset();
        session_destroy(); 
    }

    function isExpiredSession($dateExpired) {
        $currentTime = date("Y-m-d G:i:s"); 
        return strtotime($currentTime) > strtotime($dateExpired);
    }

    function loadSession() {
        
        # Getting the Global Server Data
        global $server;

        if(!isSessionActive()) {
            if(isset($_REQUEST['formSubmited'])) 
            {   
                $userName = $_REQUEST["username"];
                $password = $_REQUEST["password"];

                $endPoint = "api/public/get/usuario/{$userName}/" . md5($password);
                $response = callApi($server["server"], $server["root"], $endPoint);

                if(isset($response->status) && $response->status == "success") 
                {
                    $dataUser = getAuthUserData($response->token);

                    $_SESSION["userId"]         = $dataUser["userId"];
                    $_SESSION["userName"]       = $dataUser["userName"];
                    $_SESSION["fullName"]       = $dataUser["fullName"];
                    $_SESSION["role"]           = $dataUser["role"];
                    $_SESSION["dateExpired"]    = $dataUser["dateExpired"];
                    $_SESSION["sessionLoaded"]  = "true";

                    header("Location: inicio");

                } else {
                    $_REQUEST['error'] = $response->msg;
                    closeSession();
                }
            }
        } else {
            if(isSessionActive()) {
                header("Location: inicio");
            }
        }
    }

    function getSessionUserId() 
    {  
        $seek = "Fer$#@!2018!..";
        if(isset($_SESSION["userId"])) {
            return base64_encode($seek . "|" . $_SESSION["userId"]);
        } else {
            return 0;
        }
    }

    function isSessionActive() 
    {
        return (isset($_SESSION["sessionLoaded"]) && 
            $_SESSION["sessionLoaded"] == "true" && 
            count($_SESSION) > 0);
    }

    function productionRedirect() 
    {
        if(strstr($_SERVER['HTTP_HOST'], PRODUCTION_DOMAIN)) 
        {
            if(!isset($_SERVER['REDIRECT_URL'])){
                header("Location: section/login");
            }
        }
    }
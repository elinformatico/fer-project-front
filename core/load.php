<?php
    
    # If is production, try to redirect to the section/login page
    productionRedirect();

    $app_base = strstr($_SERVER['HTTP_HOST'], 'localhost') ? 

    DEVELOPMENT_SERVER . ROOT_DEVELOPMENT :     # DEVELOPMENT
    PRODUCTION_SERVER  . ROOT_PRODUCTION;       # PRODUCTION
    
    $server['app_base'] = $app_base;
    $server['server'] = strstr($_SERVER['HTTP_HOST'], 'localhost') ? DEVELOPMENT_SERVER : PRODUCTION_SERVER;
    $server['root'] = strstr($_SERVER['HTTP_HOST'], 'localhost') ? ROOT_DEVELOPMENT : ROOT_PRODUCTION;;

    $section  = str_replace($server['root'] . "/section/", "", $_SERVER['REDIRECT_URL']);

    # This section load the corresponding Page
    if(exitsPage($pages, $section)) 
    {
        # Load Page Data including Server
        $pageData =  loadPageData($pages, $section);
        $pageData['pages'] = $pages;
        $pageData += $server;

        loadPage($pageData);

    } else {
        $pageData = loadPageData($pages, "404");
        $pageData['pages'] = $pages;
        $pageData += $server;

        loadPage($pageData);
    }
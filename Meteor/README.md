



<!DOCTYPE html>
<html lang="en" class=" is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-c07e6f4b02b556d1d85052fb3853caf84c80e6b23dcdb1ae1b00f051da1115a2.css" integrity="sha256-wH5vSwK1VtHYUFL7OFPK+EyA5rI9zbGuGwDwUdoRFaI=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-09e1c38d593bf8fc6e4c4f1b526d0184e27c433d64963942c1e8c361589f8125.css" integrity="sha256-CeHDjVk7+PxuTE8bUm0BhOJ8Qz1kljlCwejDYVifgSU=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>kubernetes/README.md at master · kubernetes/kubernetes</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/13629408?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="kubernetes/kubernetes" name="twitter:title" /><meta content="kubernetes - Production-Grade Container Scheduling and Management" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/13629408?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="kubernetes/kubernetes" property="og:title" /><meta content="https://github.com/kubernetes/kubernetes" property="og:url" /><meta content="kubernetes - Production-Grade Container Scheduling and Management" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTQwMjI4MDA4OjIyOGU4MWMxNDkyODlkMGE5NjA2MDVkZDU2YmY4ZDZhNDhkNzVhMWFhYmY1YTQwN2YzNmRlZjRlNjVhN2NlZjc=--9ed834f8111bab8cc386a0c2d66b901599a2f6cd">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="E00D:2009:1E6BFC3:31C9557:588630D4" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="E00D:2009:1E6BFC3:31C9557:588630D4" name="octolytics-dimension-request_id" /><meta content="5580025" name="octolytics-actor-id" /><meta content="AlbertoSimioni" name="octolytics-actor-login" /><meta content="80066a9dcf6dec9856d629872c5dd4327fb9f4c4b40376b02e3ce81ff4e46049" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="AlbertoSimioni">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="Mjg3ZjJjNmRmZWVkMTIyNDlmZTA5NGEyOTJjM2E4NDU4ODU3OGQwMTM3NzUzZDhjZTY3MmY2NzY1NjNiYTM0N3x7InJlbW90ZV9hZGRyZXNzIjoiOTMuMzIuNjYuMTgzIiwicmVxdWVzdF9pZCI6IkUwMEQ6MjAwOToxRTZCRkMzOjMxQzk1NTc6NTg4NjMwRDQiLCJ0aW1lc3RhbXAiOjE0ODUxODkzMzYsImhvc3QiOiJnaXRodWIuY29tIn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="544c2fbef39ff30f542a2446219ec9cf9d35b510">

    <meta http-equiv="x-pjax-version" content="7d887a4a7e9afaef47434b8286514583">
    

      
  <meta name="description" content="kubernetes - Production-Grade Container Scheduling and Management">
  <meta name="go-import" content="github.com/kubernetes/kubernetes git https://github.com/kubernetes/kubernetes.git">

  <meta content="13629408" name="octolytics-dimension-user_id" /><meta content="kubernetes" name="octolytics-dimension-user_login" /><meta content="20580498" name="octolytics-dimension-repository_id" /><meta content="kubernetes/kubernetes" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="20580498" name="octolytics-dimension-repository_network_root_id" /><meta content="kubernetes/kubernetes" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/kubernetes/kubernetes/commits/master.atom" rel="alternate" title="Recent Commits to kubernetes:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/kubernetes/kubernetes/blob/master/examples/meteor/README.md" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/kubernetes/kubernetes/search" class="js-site-search-form" data-scoped-search-url="/kubernetes/kubernetes/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:5580025" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="kubernetes/kubernetes">This repository</span>
  </div>
    <a class="dropdown-item" href="/kubernetes/kubernetes/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/AlbertoSimioni"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@AlbertoSimioni" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/5580025?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">AlbertoSimioni</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/AlbertoSimioni" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/AlbertoSimioni?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="3fF8C6X6Zu+JQo1wDYMiL7Mul9qWnaZlQ0X8ct1mbseqaCxwWk6VKc3dcA9sxg/Ydzx4bf1bD/QBy0xP5qS9Hw==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5kFC29R/XZbK00f/JKeFx3t5Sz+/1Vf8KFA8G0NFfXJA1PeAYLgcP/r4m+KXQSkUWN5I3qn69qRvCdbB2J2IOw==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="20580498" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/kubernetes/kubernetes/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/kubernetes/kubernetes/watchers"
            aria-label="1588 users are watching this repository">
            1,588
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/kubernetes/kubernetes/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="o+FCxzkQvDUY1bjBOqWagaJ+X/BPgrr7u+9Xl+ZUdZ1FZVSLUd6oKQVRtZ79Zmws3u1vM0aV1DjFBeUPCGI4Jw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar kubernetes/kubernetes"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/kubernetes/kubernetes/stargazers"
           aria-label="20089 users starred this repository">
          20,089
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/kubernetes/kubernetes/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1H2HV5FjkToPbnm5rj+RaLGYOeE8kux6KY/ENvLHqQd6Egqdd/i//hw9hnWheZM6FzDt2hj8WD+TE/TtqEhyPg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star kubernetes/kubernetes"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/kubernetes/kubernetes/stargazers"
           aria-label="20089 users starred this repository">
          20,089
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of kubernetes/kubernetes to your account"
              aria-label="Fork your own copy of kubernetes/kubernetes to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/kubernetes/kubernetes/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/kubernetes/kubernetes/network" class="social-count"
       aria-label="6808 users forked this repository">
      6,808
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/kubernetes" class="url fn" rel="author">kubernetes</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/kubernetes/kubernetes" data-pjax="#js-repo-pjax-container">kubernetes</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/kubernetes/kubernetes" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /kubernetes/kubernetes" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/kubernetes/kubernetes/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /kubernetes/kubernetes/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">4,925</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/kubernetes/kubernetes/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /kubernetes/kubernetes/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">598</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/kubernetes/kubernetes/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /kubernetes/kubernetes/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">8</span>
</a>
    <a href="/kubernetes/kubernetes/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /kubernetes/kubernetes/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/kubernetes/kubernetes/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /kubernetes/kubernetes/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/kubernetes/kubernetes/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /kubernetes/kubernetes/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/kubernetes/kubernetes/blob/071844e35f954b493de5846d7cc797cb25ca3a11/examples/meteor/README.md" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:1b95f6064991d97a55a9777386c3d10a -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/gh-pages/examples/meteor/README.md"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/kubernetes/kubernetes/blob/master/examples/meteor/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.4/examples/meteor/README.md"
               data-name="release-0.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.5/examples/meteor/README.md"
               data-name="release-0.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.6/examples/meteor/README.md"
               data-name="release-0.6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.7/examples/meteor/README.md"
               data-name="release-0.7"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.8/examples/meteor/README.md"
               data-name="release-0.8"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.9/examples/meteor/README.md"
               data-name="release-0.9"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.10/examples/meteor/README.md"
               data-name="release-0.10"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.12/examples/meteor/README.md"
               data-name="release-0.12"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.13/examples/meteor/README.md"
               data-name="release-0.13"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.14/examples/meteor/README.md"
               data-name="release-0.14"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.15/examples/meteor/README.md"
               data-name="release-0.15"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.16/examples/meteor/README.md"
               data-name="release-0.16"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.17/examples/meteor/README.md"
               data-name="release-0.17"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.18/examples/meteor/README.md"
               data-name="release-0.18"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.19/examples/meteor/README.md"
               data-name="release-0.19"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.20/examples/meteor/README.md"
               data-name="release-0.20"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-0.21/examples/meteor/README.md"
               data-name="release-0.21"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-0.21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-1.0/examples/meteor/README.md"
               data-name="release-1.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-1.1/examples/meteor/README.md"
               data-name="release-1.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-1.2/examples/meteor/README.md"
               data-name="release-1.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-1.3/examples/meteor/README.md"
               data-name="release-1.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-1.4/examples/meteor/README.md"
               data-name="release-1.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/release-1.5/examples/meteor/README.md"
               data-name="release-1.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/kubernetes/kubernetes/blob/revert-40134-remove-conversion/examples/meteor/README.md"
               data-name="revert-40134-remove-conversion"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                revert-40134-remove-conversion
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.6.0-alpha.0/examples/meteor/README.md"
              data-name="v1.6.0-alpha.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.0-alpha.0">
                v1.6.0-alpha.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.3-beta.0/examples/meteor/README.md"
              data-name="v1.5.3-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.3-beta.0">
                v1.5.3-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.2/examples/meteor/README.md"
              data-name="v1.5.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.2">
                v1.5.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.2-beta.0/examples/meteor/README.md"
              data-name="v1.5.2-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.2-beta.0">
                v1.5.2-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.1/examples/meteor/README.md"
              data-name="v1.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.1">
                v1.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.1-beta.0/examples/meteor/README.md"
              data-name="v1.5.1-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.1-beta.0">
                v1.5.1-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.0/examples/meteor/README.md"
              data-name="v1.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0">
                v1.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.0-beta.3/examples/meteor/README.md"
              data-name="v1.5.0-beta.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-beta.3">
                v1.5.0-beta.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.0-beta.2/examples/meteor/README.md"
              data-name="v1.5.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-beta.2">
                v1.5.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.0-beta.1/examples/meteor/README.md"
              data-name="v1.5.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-beta.1">
                v1.5.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.0-beta.0/examples/meteor/README.md"
              data-name="v1.5.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-beta.0">
                v1.5.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.0-alpha.2/examples/meteor/README.md"
              data-name="v1.5.0-alpha.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-alpha.2">
                v1.5.0-alpha.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.0-alpha.1/examples/meteor/README.md"
              data-name="v1.5.0-alpha.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-alpha.1">
                v1.5.0-alpha.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.5.0-alpha.0/examples/meteor/README.md"
              data-name="v1.5.0-alpha.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.5.0-alpha.0">
                v1.5.0-alpha.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.9-beta.0/examples/meteor/README.md"
              data-name="v1.4.9-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.9-beta.0">
                v1.4.9-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.8/examples/meteor/README.md"
              data-name="v1.4.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.8">
                v1.4.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.8-beta.0/examples/meteor/README.md"
              data-name="v1.4.8-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.8-beta.0">
                v1.4.8-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.7/examples/meteor/README.md"
              data-name="v1.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.7">
                v1.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.7-beta.0/examples/meteor/README.md"
              data-name="v1.4.7-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.7-beta.0">
                v1.4.7-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.6/examples/meteor/README.md"
              data-name="v1.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.6">
                v1.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.6-beta.0/examples/meteor/README.md"
              data-name="v1.4.6-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.6-beta.0">
                v1.4.6-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.5/examples/meteor/README.md"
              data-name="v1.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.5">
                v1.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.5-beta.0/examples/meteor/README.md"
              data-name="v1.4.5-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.5-beta.0">
                v1.4.5-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.4/examples/meteor/README.md"
              data-name="v1.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.4">
                v1.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.4-beta.0/examples/meteor/README.md"
              data-name="v1.4.4-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.4-beta.0">
                v1.4.4-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.3/examples/meteor/README.md"
              data-name="v1.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.3">
                v1.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.3-beta.0/examples/meteor/README.md"
              data-name="v1.4.3-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.3-beta.0">
                v1.4.3-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.2/examples/meteor/README.md"
              data-name="v1.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.2">
                v1.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.2-beta.1/examples/meteor/README.md"
              data-name="v1.4.2-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.2-beta.1">
                v1.4.2-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.2-beta.0/examples/meteor/README.md"
              data-name="v1.4.2-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.2-beta.0">
                v1.4.2-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.1/examples/meteor/README.md"
              data-name="v1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.1">
                v1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.1-beta.2/examples/meteor/README.md"
              data-name="v1.4.1-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.1-beta.2">
                v1.4.1-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.1-beta.1/examples/meteor/README.md"
              data-name="v1.4.1-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.1-beta.1">
                v1.4.1-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.1-beta.0/examples/meteor/README.md"
              data-name="v1.4.1-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.1-beta.0">
                v1.4.1-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0/examples/meteor/README.md"
              data-name="v1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0">
                v1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.11/examples/meteor/README.md"
              data-name="v1.4.0-beta.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.11">
                v1.4.0-beta.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.10/examples/meteor/README.md"
              data-name="v1.4.0-beta.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.10">
                v1.4.0-beta.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.9/examples/meteor/README.md"
              data-name="v1.4.0-beta.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.9">
                v1.4.0-beta.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.8/examples/meteor/README.md"
              data-name="v1.4.0-beta.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.8">
                v1.4.0-beta.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.7/examples/meteor/README.md"
              data-name="v1.4.0-beta.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.7">
                v1.4.0-beta.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.6/examples/meteor/README.md"
              data-name="v1.4.0-beta.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.6">
                v1.4.0-beta.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.5/examples/meteor/README.md"
              data-name="v1.4.0-beta.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.5">
                v1.4.0-beta.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.4/examples/meteor/README.md"
              data-name="v1.4.0-beta.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.4">
                v1.4.0-beta.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.3/examples/meteor/README.md"
              data-name="v1.4.0-beta.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.3">
                v1.4.0-beta.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.2/examples/meteor/README.md"
              data-name="v1.4.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.2">
                v1.4.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.1/examples/meteor/README.md"
              data-name="v1.4.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.1">
                v1.4.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-beta.0/examples/meteor/README.md"
              data-name="v1.4.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-beta.0">
                v1.4.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-alpha.3/examples/meteor/README.md"
              data-name="v1.4.0-alpha.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-alpha.3">
                v1.4.0-alpha.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-alpha.2/examples/meteor/README.md"
              data-name="v1.4.0-alpha.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-alpha.2">
                v1.4.0-alpha.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-alpha.1/examples/meteor/README.md"
              data-name="v1.4.0-alpha.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-alpha.1">
                v1.4.0-alpha.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.4.0-alpha.0/examples/meteor/README.md"
              data-name="v1.4.0-alpha.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0-alpha.0">
                v1.4.0-alpha.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.11-beta.0/examples/meteor/README.md"
              data-name="v1.3.11-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.11-beta.0">
                v1.3.11-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.10/examples/meteor/README.md"
              data-name="v1.3.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.10">
                v1.3.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.10-beta.0/examples/meteor/README.md"
              data-name="v1.3.10-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.10-beta.0">
                v1.3.10-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.9/examples/meteor/README.md"
              data-name="v1.3.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.9">
                v1.3.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.9-beta.0/examples/meteor/README.md"
              data-name="v1.3.9-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.9-beta.0">
                v1.3.9-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.8/examples/meteor/README.md"
              data-name="v1.3.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.8">
                v1.3.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.8-beta.0/examples/meteor/README.md"
              data-name="v1.3.8-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.8-beta.0">
                v1.3.8-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.7/examples/meteor/README.md"
              data-name="v1.3.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.7">
                v1.3.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.7-beta.0/examples/meteor/README.md"
              data-name="v1.3.7-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.7-beta.0">
                v1.3.7-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.6/examples/meteor/README.md"
              data-name="v1.3.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.6">
                v1.3.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.6-beta.0/examples/meteor/README.md"
              data-name="v1.3.6-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.6-beta.0">
                v1.3.6-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.5/examples/meteor/README.md"
              data-name="v1.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.5">
                v1.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.5-beta.0/examples/meteor/README.md"
              data-name="v1.3.5-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.5-beta.0">
                v1.3.5-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.4/examples/meteor/README.md"
              data-name="v1.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.4">
                v1.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.4-beta.0/examples/meteor/README.md"
              data-name="v1.3.4-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.4-beta.0">
                v1.3.4-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.3/examples/meteor/README.md"
              data-name="v1.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.3">
                v1.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.3-beta.0/examples/meteor/README.md"
              data-name="v1.3.3-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.3-beta.0">
                v1.3.3-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.2/examples/meteor/README.md"
              data-name="v1.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.2">
                v1.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.2-beta.0/examples/meteor/README.md"
              data-name="v1.3.2-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.2-beta.0">
                v1.3.2-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.1/examples/meteor/README.md"
              data-name="v1.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.1">
                v1.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.1-beta.1/examples/meteor/README.md"
              data-name="v1.3.1-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.1-beta.1">
                v1.3.1-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.1-beta.0/examples/meteor/README.md"
              data-name="v1.3.1-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.1-beta.0">
                v1.3.1-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0/examples/meteor/README.md"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-beta.3/examples/meteor/README.md"
              data-name="v1.3.0-beta.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.3">
                v1.3.0-beta.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-beta.2/examples/meteor/README.md"
              data-name="v1.3.0-beta.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.2">
                v1.3.0-beta.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-beta.1/examples/meteor/README.md"
              data-name="v1.3.0-beta.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.1">
                v1.3.0-beta.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-beta.0/examples/meteor/README.md"
              data-name="v1.3.0-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-beta.0">
                v1.3.0-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-alpha.5/examples/meteor/README.md"
              data-name="v1.3.0-alpha.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-alpha.5">
                v1.3.0-alpha.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-alpha.4/examples/meteor/README.md"
              data-name="v1.3.0-alpha.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-alpha.4">
                v1.3.0-alpha.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-alpha.3/examples/meteor/README.md"
              data-name="v1.3.0-alpha.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-alpha.3">
                v1.3.0-alpha.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-alpha.2/examples/meteor/README.md"
              data-name="v1.3.0-alpha.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-alpha.2">
                v1.3.0-alpha.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-alpha.1/examples/meteor/README.md"
              data-name="v1.3.0-alpha.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-alpha.1">
                v1.3.0-alpha.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.3.0-alpha.0/examples/meteor/README.md"
              data-name="v1.3.0-alpha.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0-alpha.0">
                v1.3.0-alpha.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.8-beta.0/examples/meteor/README.md"
              data-name="v1.2.8-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.8-beta.0">
                v1.2.8-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.7/examples/meteor/README.md"
              data-name="v1.2.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.7">
                v1.2.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.7-beta.0/examples/meteor/README.md"
              data-name="v1.2.7-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.7-beta.0">
                v1.2.7-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.6/examples/meteor/README.md"
              data-name="v1.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.6">
                v1.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.6-beta.0/examples/meteor/README.md"
              data-name="v1.2.6-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.6-beta.0">
                v1.2.6-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.5/examples/meteor/README.md"
              data-name="v1.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.5">
                v1.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.5-beta.0/examples/meteor/README.md"
              data-name="v1.2.5-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.5-beta.0">
                v1.2.5-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.4/examples/meteor/README.md"
              data-name="v1.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.4">
                v1.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.4-beta.0/examples/meteor/README.md"
              data-name="v1.2.4-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.4-beta.0">
                v1.2.4-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.3/examples/meteor/README.md"
              data-name="v1.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.3">
                v1.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.3-beta.0/examples/meteor/README.md"
              data-name="v1.2.3-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.3-beta.0">
                v1.2.3-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.2/examples/meteor/README.md"
              data-name="v1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2">
                v1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.2-beta.0/examples/meteor/README.md"
              data-name="v1.2.2-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.2-beta.0">
                v1.2.2-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.1/examples/meteor/README.md"
              data-name="v1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1">
                v1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.1-beta.0/examples/meteor/README.md"
              data-name="v1.2.1-beta.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.1-beta.0">
                v1.2.1-beta.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/kubernetes/kubernetes/tree/v1.2.0/examples/meteor/README.md"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/kubernetes/kubernetes/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/kubernetes/kubernetes"><span>kubernetes</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/kubernetes/kubernetes/tree/master/examples"><span>examples</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/kubernetes/kubernetes/tree/master/examples/meteor"><span>meteor</span></a></span><span class="separator">/</span><strong class="final-path">README.md</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/kubernetes/kubernetes/commit/b0fa2056a6e71ecb027c8d025d11c7d324e09914" data-pjax>
          b0fa205
        </a>
        <relative-time datetime="2016-10-25T22:06:59Z">Oct 26, 2016</relative-time>
      </span>
      <div>
        <img alt="@thockin" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/5595220?v=3&amp;s=40" width="20" />
        <a href="/thockin" class="user-mention" rel="contributor">thockin</a>
          <a href="/kubernetes/kubernetes/commit/b0fa2056a6e71ecb027c8d025d11c7d324e09914" class="message" data-pjax="true" title="Remove &#39;this is HEAD&#39; warning on docs">Remove 'this is HEAD' warning on docs</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>19</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="thockin" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=thockin"><img alt="@thockin" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/5595220?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="david-mcmahon" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=david-mcmahon"><img alt="@david-mcmahon" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/15622407?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="caesarxuchao" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=caesarxuchao"><img alt="@caesarxuchao" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2823529?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jeffmendoza" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=jeffmendoza"><img alt="@jeffmendoza" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/771387?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mikedanese" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=mikedanese"><img alt="@mikedanese" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1787169?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joe2far" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=joe2far"><img alt="@joe2far" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1777210?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lavalamp" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=lavalamp"><img alt="@lavalamp" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/647318?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="timstclair" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=timstclair"><img alt="@timstclair" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/3272040?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="RichieEscarez" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=RichieEscarez"><img alt="@RichieEscarez" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/11762685?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pmorie" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=pmorie"><img alt="@pmorie" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/366488?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="chees" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=chees"><img alt="@chees" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/482721?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="skonzem" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=skonzem"><img alt="@skonzem" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/11252754?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jlowdermilk" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=jlowdermilk"><img alt="@jlowdermilk" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2101035?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="epc" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=epc"><img alt="@epc" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/85881?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="duglin" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=duglin"><img alt="@duglin" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1944671?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dchen1107" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=dchen1107"><img alt="@dchen1107" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/7740897?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="brendandburns" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=brendandburns"><img alt="@brendandburns" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/5751682?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jessfraz" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=jessfraz"><img alt="@jessfraz" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1445228?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ArtfulCoder" href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md?author=ArtfulCoder"><img alt="@ArtfulCoder" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1220660?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@thockin" height="24" src="https://avatars1.githubusercontent.com/u/5595220?v=3&amp;s=48" width="24" />
            <a href="/thockin">thockin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@david-mcmahon" height="24" src="https://avatars3.githubusercontent.com/u/15622407?v=3&amp;s=48" width="24" />
            <a href="/david-mcmahon">david-mcmahon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@caesarxuchao" height="24" src="https://avatars1.githubusercontent.com/u/2823529?v=3&amp;s=48" width="24" />
            <a href="/caesarxuchao">caesarxuchao</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jeffmendoza" height="24" src="https://avatars1.githubusercontent.com/u/771387?v=3&amp;s=48" width="24" />
            <a href="/jeffmendoza">jeffmendoza</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mikedanese" height="24" src="https://avatars2.githubusercontent.com/u/1787169?v=3&amp;s=48" width="24" />
            <a href="/mikedanese">mikedanese</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@joe2far" height="24" src="https://avatars1.githubusercontent.com/u/1777210?v=3&amp;s=48" width="24" />
            <a href="/joe2far">joe2far</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lavalamp" height="24" src="https://avatars3.githubusercontent.com/u/647318?v=3&amp;s=48" width="24" />
            <a href="/lavalamp">lavalamp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@timstclair" height="24" src="https://avatars3.githubusercontent.com/u/3272040?v=3&amp;s=48" width="24" />
            <a href="/timstclair">timstclair</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@RichieEscarez" height="24" src="https://avatars0.githubusercontent.com/u/11762685?v=3&amp;s=48" width="24" />
            <a href="/RichieEscarez">RichieEscarez</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pmorie" height="24" src="https://avatars2.githubusercontent.com/u/366488?v=3&amp;s=48" width="24" />
            <a href="/pmorie">pmorie</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@chees" height="24" src="https://avatars0.githubusercontent.com/u/482721?v=3&amp;s=48" width="24" />
            <a href="/chees">chees</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@skonzem" height="24" src="https://avatars2.githubusercontent.com/u/11252754?v=3&amp;s=48" width="24" />
            <a href="/skonzem">skonzem</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jlowdermilk" height="24" src="https://avatars2.githubusercontent.com/u/2101035?v=3&amp;s=48" width="24" />
            <a href="/jlowdermilk">jlowdermilk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@epc" height="24" src="https://avatars0.githubusercontent.com/u/85881?v=3&amp;s=48" width="24" />
            <a href="/epc">epc</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@duglin" height="24" src="https://avatars3.githubusercontent.com/u/1944671?v=3&amp;s=48" width="24" />
            <a href="/duglin">duglin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dchen1107" height="24" src="https://avatars3.githubusercontent.com/u/7740897?v=3&amp;s=48" width="24" />
            <a href="/dchen1107">dchen1107</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@brendandburns" height="24" src="https://avatars1.githubusercontent.com/u/5751682?v=3&amp;s=48" width="24" />
            <a href="/brendandburns">brendandburns</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jessfraz" height="24" src="https://avatars1.githubusercontent.com/u/1445228?v=3&amp;s=48" width="24" />
            <a href="/jessfraz">jessfraz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ArtfulCoder" height="24" src="https://avatars3.githubusercontent.com/u/1220660?v=3&amp;s=48" width="24" />
            <a href="/ArtfulCoder">ArtfulCoder</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/kubernetes/kubernetes/raw/master/examples/meteor/README.md" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/kubernetes/kubernetes/blame/master/examples/meteor/README.md" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/kubernetes/kubernetes/commits/master/examples/meteor/README.md" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/kubernetes/kubernetes?branch=master&amp;filepath=examples%2Fmeteor%2FREADME.md"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/kubernetes/kubernetes/edit/master/examples/meteor/README.md" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4EE5raz1yp/sQoBLCUXQl3ubUADjagnlzTiWUKZrwbr/eNaTT8LxO6FvCiDKVC61MHJgXZ+sL84j633Hi/q4NQ==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/kubernetes/kubernetes/delete/master/examples/meteor/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pe4xP18aU7ApW4a40w5BxI58P+URBTbMsy4ySud2lhH93lklwzO4yXtFRc0N2/phveQ9+lU6KOl3Lj0+e8cGBw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      216 lines (167 sloc)
      <span class="file-info-divider"></span>
    6.7 KB
  </div>
</div>

  
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-meteor-on-kubernetes" class="anchor" href="#meteor-on-kubernetes" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Meteor on Kubernetes</h1>

<p>This example shows you how to package and run a
<a href="https://www.meteor.com/">Meteor</a> app on Kubernetes.</p>

<h2><a id="user-content-get-started-on-google-compute-engine" class="anchor" href="#get-started-on-google-compute-engine" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Get started on Google Compute Engine</h2>

<p>Meteor uses MongoDB, and we will use the <code>GCEPersistentDisk</code> type of
volume for persistent storage. Therefore, this example is only
applicable to <a href="https://cloud.google.com/compute/">Google Compute
Engine</a>. Take a look at the
<a href="/kubernetes/kubernetes/blob/master/docs/user-guide/volumes.md">volumes documentation</a> for other options.</p>

<p>First, if you have not already done so:</p>

<ol>
<li><a href="https://cloud.google.com/compute/docs/quickstart">Create</a> a
<a href="https://cloud.google.com/">Google Cloud Platform</a> project.</li>
<li><a href="https://developers.google.com/console/help/new/#billing">Enable
billing</a>.</li>
<li>Install the <a href="https://cloud.google.com/sdk/">gcloud SDK</a>.</li>
</ol>

<p>Authenticate with gcloud and set the gcloud default project name to
point to the project you want to use for your Kubernetes cluster:</p>

<div class="highlight highlight-source-shell"><pre>gcloud auth login
gcloud config <span class="pl-c1">set</span> project <span class="pl-k">&lt;</span>project-name<span class="pl-k">&gt;</span></pre></div>

<p>Next, start up a Kubernetes cluster:</p>

<div class="highlight highlight-source-shell"><pre>wget -q -O - https://get.k8s.io <span class="pl-k">|</span> bash</pre></div>

<p>Please see the <a href="/kubernetes/kubernetes/blob/master/docs/getting-started-guides/gce.md">Google Compute Engine getting started
guide</a> for full
details and other options for starting a cluster.</p>

<h2><a id="user-content-build-a-container-for-your-meteor-app" class="anchor" href="#build-a-container-for-your-meteor-app" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build a container for your Meteor app</h2>

<p>To be able to run your Meteor app on Kubernetes you need to build a
Docker container for it first. To do that you need to install
<a href="https://www.docker.com">Docker</a> Once you have that you need to add 2
files to your existing Meteor project <code>Dockerfile</code> and
<code>.dockerignore</code>.</p>

<p><code>Dockerfile</code> should contain the below lines. You should replace the
<code>ROOT_URL</code> with the actual hostname of your app.</p>

<pre><code>FROM chees/meteor-kubernetes
ENV ROOT_URL http://myawesomeapp.com
</code></pre>

<p>The <code>.dockerignore</code> file should contain the below lines. This tells
Docker to ignore the files on those directories when it's building
your container.</p>

<pre><code>.meteor/local
packages/*/.build*
</code></pre>

<p>You can see an example meteor project already set up at:
<a href="https://github.com/Q42/meteor-gke-example">meteor-gke-example</a>. Feel
free to use this app for this example.</p>

<blockquote>
<p>Note: The next step will not work if you have added mobile platforms
to your meteor project. Check with <code>meteor list-platforms</code></p>
</blockquote>

<p>Now you can build your container by running this in
your Meteor project directory:</p>

<pre><code>docker build -t my-meteor .
</code></pre>

<h2><a id="user-content-pushing-to-a-registry" class="anchor" href="#pushing-to-a-registry" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pushing to a registry</h2>

<p>For the <a href="https://hub.docker.com/">Docker Hub</a>, tag your app image with
your username and push to the Hub with the below commands. Replace
<code>&lt;username&gt;</code> with your Hub username.</p>

<pre><code>docker tag my-meteor &lt;username&gt;/my-meteor
docker push &lt;username&gt;/my-meteor
</code></pre>

<p>For <a href="https://cloud.google.com/tools/container-registry/">Google Container
Registry</a>, tag
your app image with your project ID, and push to GCR. Replace
<code>&lt;project&gt;</code> with your project ID.</p>

<pre><code>docker tag my-meteor gcr.io/&lt;project&gt;/my-meteor
gcloud docker -- push gcr.io/&lt;project&gt;/my-meteor
</code></pre>

<h2><a id="user-content-running" class="anchor" href="#running" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running</h2>

<p>Now that you have containerized your Meteor app it's time to set up
your cluster. Edit <a href="/kubernetes/kubernetes/blob/master/examples/meteor/meteor-controller.json"><code>meteor-controller.json</code></a>
and make sure the <code>image:</code> points to the container you just pushed to
the Docker Hub or GCR.</p>

<p>We will need to provide MongoDB a persistent Kubernetes volume to
store its data. See the <a href="/kubernetes/kubernetes/blob/master/docs/user-guide/volumes.md">volumes documentation</a> for
options. We're going to use Google Compute Engine persistent
disks. Create the MongoDB disk by running:</p>

<pre><code>gcloud compute disks create --size=200GB mongo-disk
</code></pre>

<p>Now you can start Mongo using that disk:</p>

<pre><code>kubectl create -f examples/meteor/mongo-pod.json
kubectl create -f examples/meteor/mongo-service.json
</code></pre>

<p>Wait until Mongo is started completely and then start up your Meteor app:</p>

<pre><code>kubectl create -f examples/meteor/meteor-service.json
kubectl create -f examples/meteor/meteor-controller.json
</code></pre>

<p>Note that <a href="/kubernetes/kubernetes/blob/master/examples/meteor/meteor-service.json"><code>meteor-service.json</code></a> creates a load balancer, so
your app should be available through the IP of that load balancer once
the Meteor pods are started. We also created the service before creating the rc to
aid the scheduler in placing pods, as the scheduler ranks pod placement according to
service anti-affinity (among other things). You can find the IP of your load balancer
by running:</p>

<pre><code>kubectl get service meteor --template="{{range .status.loadBalancer.ingress}} {{.ip}} {{end}}"
</code></pre>

<p>You will have to open up port 80 if it's not open yet in your
environment. On Google Compute Engine, you may run the below command.</p>

<pre><code>gcloud compute firewall-rules create meteor-80 --allow=tcp:80 --target-tags kubernetes-node
</code></pre>

<h2><a id="user-content-what-is-going-on" class="anchor" href="#what-is-going-on" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is going on?</h2>

<p>Firstly, the <code>FROM chees/meteor-kubernetes</code> line in your <code>Dockerfile</code>
specifies the base image for your Meteor app. The code for that image
is located in the <code>dockerbase/</code> subdirectory. Open up the <code>Dockerfile</code>
to get an insight of what happens during the <code>docker build</code> step. The
image is based on the Node.js official image. It then installs Meteor
and copies in your apps' code. The last line specifies what happens
when your app container is run.</p>

<div class="highlight highlight-source-shell"><pre>ENTRYPOINT MONGO_URL=mongodb://<span class="pl-smi">$MONGO_SERVICE_HOST</span>:<span class="pl-smi">$MONGO_SERVICE_PORT</span> /usr/local/bin/node main.js</pre></div>

<p>Here we can see the MongoDB host and port information being passed
into the Meteor app. The <code>MONGO_SERVICE...</code> environment variables are
set by Kubernetes, and point to the service named <code>mongo</code> specified in
<a href="/kubernetes/kubernetes/blob/master/examples/meteor/mongo-service.json"><code>mongo-service.json</code></a>. See the <a href="/kubernetes/kubernetes/blob/master/docs/user-guide/container-environment.md">environment
documentation</a> for more details.</p>

<p>As you may know, Meteor uses long lasting connections, and requires
<em>sticky sessions</em>. With Kubernetes you can scale out your app easily
with session affinity. The
<a href="/kubernetes/kubernetes/blob/master/examples/meteor/meteor-service.json"><code>meteor-service.json</code></a> file contains
<code>"sessionAffinity": "ClientIP"</code>, which provides this for us. See the
<a href="/kubernetes/kubernetes/blob/master/docs/user-guide/services.md#virtual-ips-and-service-proxies">service
documentation</a> for
more information.</p>

<p>As mentioned above, the mongo container uses a volume which is mapped
to a persistent disk by Kubernetes. In <a href="/kubernetes/kubernetes/blob/master/examples/meteor/mongo-pod.json"><code>mongo-pod.json</code></a> the container
section specifies the volume:</p>

<div class="highlight highlight-source-json"><pre>{
        <span class="pl-s"><span class="pl-pds">"</span>volumeMounts<span class="pl-pds">"</span></span>: [
          {
            <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>mongo-disk<span class="pl-pds">"</span></span>,
            <span class="pl-s"><span class="pl-pds">"</span>mountPath<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>/data/db<span class="pl-pds">"</span></span>
          }</pre></div>

<p>The name <code>mongo-disk</code> refers to the volume specified outside the
container section:</p>

<div class="highlight highlight-source-json"><pre>{
    <span class="pl-s"><span class="pl-pds">"</span>volumes<span class="pl-pds">"</span></span>: [
      {
        <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>mongo-disk<span class="pl-pds">"</span></span>,
        <span class="pl-s"><span class="pl-pds">"</span>gcePersistentDisk<span class="pl-pds">"</span></span>: {
          <span class="pl-s"><span class="pl-pds">"</span>pdName<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>mongo-disk<span class="pl-pds">"</span></span>,
          <span class="pl-s"><span class="pl-pds">"</span>fsType<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>ext4<span class="pl-pds">"</span></span>
        }
      }
    ],</pre></div>



<p><a href="/kubernetes/kubernetes/blob/master/examples/meteor"><img src="https://camo.githubusercontent.com/fe774bc318c47f410c70f6855eed51a52dd808a2/68747470733a2f2f6b756265726e657465732d736974652e61707073706f742e636f6d2f55412d33363033373333352d31302f4769744875622f6578616d706c65732f6d6574656f722f524541444d452e6d643f706978656c" alt="Analytics" data-canonical-src="https://kubernetes-site.appspot.com/UA-36037335-10/GitHub/examples/meteor/README.md?pixel" style="max-width:100%;"></a></p>


</article>
  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.16524s from github-fe133-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-0j4y5IIRK6Xj6pvY3H5VVoARanTgAnRqyR9BpOWHWps=" src="https://assets-cdn.github.com/assets/frameworks-d23e32e482112ba5e3ea9bd8dc7e555680116a74e002746ac91f41a4e5875a9b.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-WzCjnh2dl6edSil6o/9nv1b6t0gCUkZNsbboDbqxBpA=" src="https://assets-cdn.github.com/assets/github-5b30a39e1d9d97a79d4a297aa3ff67bf56fab7480252464db1b6e80dbab10690.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>


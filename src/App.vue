<template>
    <div id="app">
        <header class="navbar navbar-default ctds-navbar navbar-static-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#ctds-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link :to="{ name: 'DocumentationHome' }" class="navbar-brand">DevelVue JS</router-link>
                </div>
                <div class="collapse navbar-collapse" id="ctds-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link :to="{ name: 'DocumentationGuidelines' }" class="nav-link">Guidelines</router-link></li>
                        <li><router-link :to="{ name: 'DocumentationComponents' }" class="nav-link">Components</router-link></li>
                        <li><router-link :to="{ name: 'DocumentationUtilities' }" class="nav-link">Utilities</router-link></li>
                        <li><router-link :to="{ name: 'DocumentationPlugins' }" class="nav-link">Plugins</router-link></li>
                    </ul>
                    <div class="navbar-form navbar-right">
                        <div class="form-group">
                            <input type="text" class="ctds-search form-control" placeholder="Search">
                        </div>
                        <button type="button" class="ctds-button btn btn-default">Search</button>
                    </div>
                </div>
            </div>
        </header>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

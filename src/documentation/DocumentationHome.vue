<template>
    <main name="home" role="main" class="masthead">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 text-center">
                    <h1>DevelVue JS Framework</h1>
                    <p class="lead">A VueJS framework. Front-End framework for the DevelVue Suite.</p>
                    <p class="lead">This documentation details the current state of the framework and is updated continuously.</p>
                    <p class="lead">
                        <a href="#"><router-link :to="{ name: 'DocumentationGuidelines' }" class="ctds-button btn btn-default btn-lg">Guidelines</router-link></a>
                        <a href="#"><router-link :to="{ name: 'DocumentationComponents' }" class="ctds-button btn btn-default btn-lg">Components</router-link></a>
                        <a href="#"><router-link :to="{ name: 'DocumentationUtilities' }" class="ctds-button btn btn-default btn-lg">Utilities</router-link></a>
                        <a href="#"><router-link :to="{ name: 'DocumentationPlugins' }" class="ctds-button btn btn-default btn-lg">Plugins</router-link></a>
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

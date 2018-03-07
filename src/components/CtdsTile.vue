<template>
    <div :id="id" class="ctds-tile">
        <header class="ctds-tile-header" @click="toggleTile()">
            <button v-if="collapsible" class="ctds-icon-button pull-right">
                <i :class="buttonStateClass"></i><span class="sr-only">{{ `${isCollapsed ? 'Open' : 'Close'} tile` }}</span>
            </button>
            <h3>{{ title }}</h3>
        </header>
        <article v-if="!isCollapsed" class="ctds-tile-body">
            <slot></slot>
        </article>
    </div>
</template>

<script>
export default {
    name: 'CtdsTile',
    props: ['id', 'title', 'collapsible', 'collapsed'],
    data () {
        return {
            isCollapsed: this.collapsed
        };
    },
    computed: {
        buttonStateClass () {
            return { fa: true, 'fa-angle-up': !this.isCollapsed, 'fa-angle-down': this.isCollapsed };
        }
    },
    methods: {
        toggleTile () {
            this.isCollapsed = !this.isCollapsed;
        }
    }
};
</script>

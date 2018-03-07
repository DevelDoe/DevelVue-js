<template>
    <div :id="id" class="ctds-tabs">
        <ul v-if="hasTabs" class="nav nav-tabs" role="tablist">
            <li v-for="(tab, index) in tabs"
                :key="tab.route"
                role="presentation"
                :class="getNavTabClasses(index, tab.disabled)"
                @click.stop.prevent="toggleTab(index, tab.disabled)">
                <a :class="getNavLinkClasses(index)" :aria-controls="tab.route" role="tab" href="#">{{ tab.title }}</a>
            </li>
        </ul>
        <div v-if="hasTabs" class="tab-content">
            <div v-for="(tab, index) in tabs"
                :key="tab.route"
                role="tabpanel"
                :class="getTabPaneClasses(index)">
                <keep-alive><slot :name="tab.route"></slot></keep-alive>
            </div>
        </div>
        <p v-if="!hasTabs">{{ labels.noTabs }}</p>
    </div>
</template>
<script>
export default {
    name: 'CtdsTabs',
    props: ['tabs', 'id'],
    data () {
        return {
            labels: {
                noTabs: 'No tabs defined.'
            },
            selectedTabIndex: this.getDefaultTabIndex()
        };
    },
    computed: {
        hasTabs () {
            return (this.tabs || []).length > 0;
        }
    },
    methods: {
        getDefaultTabIndex () {
            const defaultTabIndex = this.tabs.findIndex(tab => tab.default);
            return defaultTabIndex > -1 ? defaultTabIndex : 0;
        },
        getNavTabClasses (index, disabled = false) {
            return {
                'nav-item': true,
                active: index === this.selectedTabIndex,
                disabled
            };
        },
        getNavLinkClasses (index) {
            return {
                'nav-link': true,
                active: index === this.selectedTabIndex
            };
        },
        getTabPaneClasses (index) {
            return {
                'tab-pane': true,
                active: index === this.selectedTabIndex
            };
        },
        toggleTab (index, disabled = false) {
            if (disabled) {
                return;
            }
            this.selectedTabIndex = index;
        }
    }
};
</script>

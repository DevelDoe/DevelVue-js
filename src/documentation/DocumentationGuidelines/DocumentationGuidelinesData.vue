<template>
    <article name="documentationGuidelinesData" class="documentation-article">
        <h3>State</h3>
        <p>For Vue.js it is time to think of data in terms of state.</p>
        <dl class="dl-horizontal">
            <dt>Before</dt>
            <dd>How do I represent this data input in my GUI?</dd>
            <dt>After</dt>
            <dd>What is the state of my component or module if I change their data input?</dd>
        </dl>

        <h3>Default data-object</h3>
        <p>Vue.js requires data that has been bound in the template to exist in the data-function or computed-object. This means that a default data-object is required, even if the template is populated via the API after it is mounted. This must include all the bound nodes of the object.</p>
        <p>If the data is local, place the full object in the data-function. If the data is passed from a parent, it is possible to create a short-hand locally and then assign it to the data-object.</p>
        <p>The bound data can come from the computed-object, as well.</p>
        <p>Collections are a little more forgiving. They can be an empty array at start, and that is OK.</p>
        <pre><code>
&lt;template&gt;
    &lt;input v.model="foo.bar[0].buzz.bork"&gt;
    &lt;input v.model="kurt"&gt;
    &lt;p&gt;{{ kurtCodeString }}&lt;/p&gt;
    &lt;div v-for="item in myCollection" :key="item.id"&gt;
        {{ myCollectionItemString }}
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    props: [ 'parentData' ],
    data () {
        const kurt = this.parentData.foo.bar[0].buzz.bork;

        return {
            foo: {
                bar: [
                    {
                        buzz: {
                            bork: null
                        }
                    }
                ]
            },
            kurt,
            myCollection: []
        };
    },
    computed: {
        computedKurt () {
            return `${this.kurt} is computed data.`;
        }
    }
};
&lt;/script&gt;
        </code></pre>
        <p>This will be upgraded with <a href="https://vuex.vuejs.org/en/intro.html" target="_blank">Vuex</a> in a later version of the Framework.</p>

        <h3>Passing data</h3>
        <p>Vue.js uses one-way data binding.</p>
        <p>Parents pass data to their child components by binding to a property.</p>
        <pre><code>
&lt;template&gt;
    &lt;child-component :myProperty="foo.bar"&gt;&lt;/child-component&gt;
&lt;/template&gt;
        </code></pre>
        <pre><code>
&lt;template&gt;
    &lt;input v-model:myProperty&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    props: [ 'myProprety' ]
};
&lt;/script&gt;
        </code></pre>
        <p>Child components pass data to their parents by emitting a custom event.</p>
        <pre><code>
&lt;template&gt;
    &lt;child-component @myEvent="onMyEvent"&gt;&lt;/child-component&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    methods: {
        onMyEvent (value) {
            alert(`Stuff happened! I got a value of ${value}`);
        }
    }
};
&lt;/script&gt;
        </code></pre>
        <pre><code>
&lt;template&gt;
    &lt;input @changed="onChanged"&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    methods: {
        onChanged () {
            this.$emit('myEvent', 'bork');
        }
    }
};
&lt;/script&gt;
        </code></pre>
        <p>This is only a relationship between parent/child. If the change needs to be listened to in the child's grandparent, then the parent needs to emit an event, as well.</p>
        <p>This will be upgraded with <a href="https://vuex.vuejs.org/en/intro.html" target="_blank">Vuex</a> in a later version of the Framework.</p>

        <h3>Internationalization</h3>
        <p>At the moment, no internationalization strategy is in place. To facilitate moving them in the future, place all labels inside a labels-object in the data-function.</p>
        <pre><code>
&lt;script&gt;
export default {
    data () {
        return {
            labels: {
                ...
            }
            ...
        };
    }
};
&lt;/script&gt;
        </code></pre>
        <p>Consider specificity when nesting labels in the labels-object to make sure there are no conflicts or that general labels are deeply nested.</p>

        <h3>Fetching data from an API</h3>
        <p>The Framework uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">Fetch API</a> to communicate with the Back-End APIs. Currently, this requires the following set-up.</p>
        <pre><code>
&lt;script&gt;
export default {
    data () {
        const headerConfig = { 'Content-Type': 'application/json' };
        if (window.Workspace.isCurityEnabled) {
            headerConfig.Authorization = window.Workspace.getAssistant().getAuthHeader();
        }

        return {
            headers: new Headers(headerConfig)
        };
    },
    methods: {
        fetchConfig (method = null, body =null) {
            return {
                method,
                credentials: 'include',
                headers: this.headers,
                body
            };
        },
        getMyData () {
            fetch('/api/bb/ui/mydata', this.fetchConfig('GET'))
                .then(response => {
                    if (!response.ok) {
                        throw Error('ErrorMessage');
                    }
                    return response;
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        }
    }
};
&lt;/script&gt;
        </code></pre>
        <p>Most modules have two main communications with the Back-End APIs: Save and Load.</p>
        <p>Load in the <code>mounted</code> life-cycle hook. Save via an event hook.</p>
        <pre><code>
&lt;template&gt;
    &lt;button @click="onSaveClicked"&gt;Save&lt;/button&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data () {
        const headerConfig = { 'Content-Type': 'application/json' };
        if (window.Workspace.isCurityEnabled) {
            headerConfig.Authorization = window.Workspace.getAssistant().getAuthHeader();
        }

        return {
            myData: {},
            headers: new Headers(headerConfig)
        };
    },
    mounted () {
        fetch('/api/bb/ui/mydata', this.fetchConfig('GET'))
                .then(response => response.json())
                .then(data => {
                    this.myData = data;
                });
    },
    methods: {
        fetchConfig (method = null, body =null) {
            return {
                method,
                credentials: 'include',
                headers: this.headers,
                body
            }
        },
        onSaveClicked () {
            const payload = JSON.stringify(this.myData);
            fetch('/api/bb/ui/mydata', this.fetchConfig('PUT', payload));
        }
    }
};
&lt;/script&gt;
        </code></pre>
        <p>There is also an option to wait for the data to load. This can be used on the whole module, elements or components.</p>
        <pre><code>
&lt;template&gt;
    &lt;div name="myModule" v-if="!isLoading"&gt;...&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    data () {
        const headerConfig = { 'Content-Type': 'application/json' };
        if (window.Workspace.isCurityEnabled) {
            headerConfig.Authorization = window.Workspace.getAssistant().getAuthHeader();
        }

        return {
            isLoading: true,
            myData: {},
            headers: new Headers(headerConfig)
        };
    },
    mounted () {
        fetch('/api/bb/ui/mydata', this.fetchConfig('GET'))
                .then(response => response.json())
                .then(data => {
                    this.myData = data;
                    this.isLoading = false;
                });
    },
    methods: {
        fetchConfig (method = null, body =null) {
            return {
                method,
                credentials: 'include',
                headers: this.headers,
                body
            }
        }
    }
};
&lt;/script&gt;
        </code></pre>
    </article>
</template>
<script>
export default {
    data () {
        return {
            kurtCodeString: '{{ computedKurt }}',
            myCollectionItemString: '{{ item.bork }}'
        };
    }
};
</script>

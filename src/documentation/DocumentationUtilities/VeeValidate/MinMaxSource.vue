<template>
    <div name="MinMaxSource">
        <pre v-pre><code>
&lt;template&gt;
    &lt;div name="MinMaxDemo"&gt;
        &lt;p&gt;
            &lt;form class="form-group" &gt;
                &lt;label class="marked-as-required" for="minpassword"&gt;Min&lt;/label&gt;
                &lt;input type="password" v-validate="{min: 4}" :class="validateMinClasses" name="minpassword"  placeholder="password"&gt;
                &lt;p v-show="errors.has('minpassword')" class="ctds-error-msg"&gt;{{ errors.first('minpassword') }}&lt;/p&gt;
                &lt;label class="marked-as-required" for="maxpassword"&gt;Max&lt;/label&gt;
                &lt;input type="password" v-validate="{max: 4}" :class="validateMaxClasses" name="maxpassword"  placeholder="password"&gt;
                &lt;p v-show="errors.has('maxpassword')" class="ctds-error-msg"&gt;{{ errors.first('maxpassword') }}&lt;/p&gt;
            &lt;/form&gt;
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    name: 'minmax-example',
    computed: {
        validateMinClasses () {
            return {
                'form-control': true,
                'ctds-control-error': this.errors.has('minpassword')
            };
        },
        validateMaxClasses () {
            return {
                'form-control': true,
                'ctds-control-error': this.errors.has('maxpassword')
            };
        }
    }
};
&lt;/script&gt;
        </code> </pre>
        </div>
</template>

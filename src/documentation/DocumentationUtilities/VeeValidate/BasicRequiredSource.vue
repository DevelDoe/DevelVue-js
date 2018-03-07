<template>
    <div name="MinMaxSource">
        <pre v-pre> <code>
&lt;template&gt;
    &lt;div name="BasicRequiredDemo"&gt;
        &lt;form class="form-group" &gt;
            &lt;label class="marked-as-required" for="email"&gt;Email&lt;/label&gt;
            &lt;input type="email" v-validate="{required: true, email: true}" :class="validateEmailClasses" name="email"  placeholder="Email"&gt;
            &lt;p v-show="errors.has('email')" class="ctds-error-msg"&gt;{{ errors.first('email') }}&lt;/p&gt;
        &lt;/form&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    name: 'basic-example',
    computed: {
        validateEmailClasses () {
            return {
                'form-control': true,
                'ctds-control-error': this.errors.has('email')
            };
        }
    }
};
&lt;/script&gt;
</code> </pre>
</div>
</template>

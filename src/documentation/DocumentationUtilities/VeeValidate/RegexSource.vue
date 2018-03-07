<template>
    <div name="RegexSource">
        <pre v-pre> <code>
&lt;template&gt;
&lt;div name="RegexDemo"&gt;
    &lt;p&gt;
        &lt;form class="form-group"&gt;
            &lt;label class="marked-as-required" for="numbers"&gt;Regex: ^([0-9]+)$&lt;/label&gt;
            &lt;input type="text" v-validate="{regex: /^([0-9]+)$/ }" :class="validateRegexClasses" name="numbers" placeholder="numbers only"&gt;
            &lt;p v-show="errors.has('numbers')" class="ctds-error-msg"&gt;{{ errors.first('numbers') }}&lt;/p&gt;
        &lt;/form&gt;
    &lt;/p&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
    name: 'regex-example',
    computed: {
        validateRegexClasses () {
            return {
                'form-control': true,
                'ctds-control-error': this.errors.has('numbers')
            };
        }
    }
};
&lt;/script&gt;
        </code> </pre>
        </div>
</template>

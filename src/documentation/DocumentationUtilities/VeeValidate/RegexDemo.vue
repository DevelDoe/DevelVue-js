<template>
<div name="RegexDemo">
    <p>
        <form class="form-group">
            <label class="marked-as-required" for="numbers">Regex: ^([0-9]+)$</label>
            <input type="text" v-validate="{regex: /^([0-9]+)$/ }" :class="validateRegexClasses" name="numbers" placeholder="numbers only">
            <p v-show="errors.has('numbers')" class="ctds-error-msg">{{ errors.first('numbers') }}</p>
        </form>
    </p>
</div>
</template>
<script>
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
</script>

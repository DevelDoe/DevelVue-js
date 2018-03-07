<template>
    <div name="BasicRequiredDemo">
        <form class="form-group" >
            <label class="marked-as-required" for="email">Email</label>
            <input type="email" v-validate="{required: true, email: true}" :class="validateEmailClasses" name="email"  placeholder="Email">
            <p v-show="errors.has('email')" class="ctds-error-msg">{{ errors.first('email') }}</p>
        </form>
    </div>
</template>
<script>
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
</script>

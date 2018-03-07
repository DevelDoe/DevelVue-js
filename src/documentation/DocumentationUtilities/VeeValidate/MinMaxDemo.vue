<template>
    <div name="MinMaxDemo">
        <p>
            <form class="form-group" >
                <label class="marked-as-required" for="minpassword">Min</label>
                <input type="password" v-validate="{min: 4}" :class="validateMinClasses" name="minpassword"  placeholder="password">
                <p v-show="errors.has('minpassword')" class="ctds-error-msg">{{ errors.first('minpassword') }}</p>
                <label class="marked-as-required" for="maxpassword">Max</label>
                <input type="password" v-validate="{max: 4}" :class="validateMaxClasses" name="maxpassword"  placeholder="password">
                <p v-show="errors.has('maxpassword')" class="ctds-error-msg">{{ errors.first('maxpassword') }}</p>
            </form>
        </p>
    </div>
</template>
<script>
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
</script>

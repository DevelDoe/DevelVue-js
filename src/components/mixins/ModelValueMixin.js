export default {
    props: {
        value: null
    },
    data () {
        return {
            modelValue: this.value
        };
    },
    watch: {
        value (newValue) {
            this.modelValue = newValue;
        }
    },
    methods: {
        updateInput () {
            this.$emit('input', this.modelValue);
        }
    }
};

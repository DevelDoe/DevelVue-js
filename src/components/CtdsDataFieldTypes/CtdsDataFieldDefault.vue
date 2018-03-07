<template>
    <div name="ctdsDataFieldDefault">
        <input
            v-if="!displayState.isReadOnly"
            class="form-control ctds-input"
            :type="inputType"
            :id="id"
            :disabled="displayState.isDisabled"
            :required="displayState.isRequired"
            v-model="modelValue"
            @input="updateInput" />
        <p :id="id" v-else>{{ formattedValue }}</p>
    </div>
</template>
<script>
import DATA_FIELD_TYPE from '../enums/CtdsDataFieldType';
import CtdsDataFieldPropsMixin from '../mixins/CtdsDataFieldPropsMixin';
import ModelValueMixin from '../mixins/ModelValueMixin';

// The default locale is Sweden, for the moment
const localeCode = 'sv-SE';

export default {
    name: 'CtdsDataFieldDefault',
    mixins: [ModelValueMixin, CtdsDataFieldPropsMixin],
    props: {
        type: {
            type: String,
            default: DATA_FIELD_TYPE.STRING
        }
    },
    computed: {
        inputType () {
            if (this.displayState.isHidden) {
                return 'hidden';
            }
            return 'text';
        },
        formattedValue () {
            if (this.type === DATA_FIELD_TYPE.NUMBER) {
                const parsedValue = this.unformatNumber(this.modelValue);
                if (parsedValue !== null) {
                    return this.formatNumber(parsedValue);
                }
            }
            return this.modelValue;
        }
    },
    methods: {
        formatNumber (value) {
            const hasInternationalization = window.Intl && typeof window.Intl === 'object';
            let [integerPart, decimalPart] = value.toString().split('.');

            const decimalPlaces = Math.floor(value) !== value && typeof decimalPart === 'string'
                ? decimalPart.length
                : 0;

            const negativeSignCharacter = hasInternationalization ? new Intl.NumberFormat(localeCode).format(-1).substring(1) : '-';

            // JavaScript's native number formatting function stops working after 3 decimal places
            let formattedNumber;
            if (hasInternationalization && decimalPlaces <= 3) {
                formattedNumber = new Intl.NumberFormat(localeCode).format(value);
            } else {
                const isNegative = parseInt(integerPart) < 0;

                // Use positive number in formatter and add negate sign later
                if (isNegative) {
                    integerPart = (parseInt(integerPart) * -1) + '';
                }

                const thousandSeparator = hasInternationalization ? new Intl.NumberFormat(localeCode).format(1111).replace(/1/g, '') : ' ';
                const reversedIntegerValue = this.reverseString(integerPart);
                const reversedIntegerValueWithSeparator = reversedIntegerValue.replace(/(.{3})/g, `$1${thousandSeparator}`);
                let integerValueWithSeparator = this.reverseString(reversedIntegerValueWithSeparator);

                if (integerValueWithSeparator.charAt(0) === thousandSeparator) {
                    integerValueWithSeparator = integerValueWithSeparator.substring(1);
                }

                // Use same sign character as Intl
                if (isNegative) {
                    integerValueWithSeparator = negativeSignCharacter + integerValueWithSeparator;
                }

                formattedNumber = decimalPlaces > 0
                    ? integerValueWithSeparator + ',' + decimalPart
                    : integerValueWithSeparator;
            }

            // Replace the whitespace as it is incorrectly encoded from the Internationalization API
            formattedNumber = formattedNumber.replace(/\s/g, ' ');
            return formattedNumber;
        },
        unformatNumber (value) {
            // Decide what the user is using as numerical separators
            // Current solution handles dot, comma and whitespace thousand-separators.
            // Also, dot and comma decimal-separators.
            const hasInternationalization = window.Intl && typeof window.Intl === 'object';
            let thousandSeparator = hasInternationalization ? new Intl.NumberFormat(localeCode).format(1111).replace(/1/g, '') : ' ';
            let decimalSeparator = hasInternationalization ? new Intl.NumberFormat(localeCode).format(1.1).replace(/1/g, '') : ',';

            let nrOfDots = (value.match(/\./g) || []).length;
            let nrOfCommas = (value.match(/,/g) || []).length;
            const nrOfWhitespaces = (value.match(/\s/g) || []).length;

            // Remove whitespace from value
            let cleanedValue = value.replace(/\s/g, '');

            // Handle ambiguous values
            if ((nrOfDots > 1 && nrOfCommas > 1) || (nrOfDots > 0 && nrOfCommas > 0 && nrOfWhitespaces > 0)) {
                cleanedValue = cleanedValue.replace(/\./g, '').replace(/,/g, '');
                nrOfDots = 0;
                nrOfCommas = 0;
            }

            // Handle an implicit comma thousand-separator
            if (thousandSeparator !== ',' && nrOfCommas > 1) {
                cleanedValue = cleanedValue.replace(/,/g, '');
                decimalSeparator = '.';
                nrOfCommas = 0;
            }

            // Handle an implicit dot thousand-separtor
            if (thousandSeparator !== '.') {
                if (nrOfDots > 1) {
                    cleanedValue = cleanedValue.replace(/\./g, '');
                    decimalSeparator = ',';
                    nrOfDots = 0;
                } else if (nrOfDots === 1 && nrOfCommas === 1) {
                    const dotPosition = value.indexOf('.');
                    const commaPosition = value.indexOf(',');

                    if (commaPosition > dotPosition) {
                        cleanedValue = cleanedValue.replace(/\./g, '');
                        decimalSeparator = ',';
                        nrOfDots = 0;
                    } else {
                        cleanedValue = cleanedValue.replace(/,/g, '');
                        decimalSeparator = '.';
                        nrOfCommas = 0;
                    }
                } else if (nrOfDots === 1 && decimalSeparator !== '.') {
                    decimalSeparator = '.';
                }
            }

            // Replace the decimal-separator from value
            cleanedValue = cleanedValue.replace(new RegExp(`\\${decimalSeparator}`, 'g'), '.');

            const parsedValue = parseFloat(cleanedValue);
            const unformattedValue = isNaN(parsedValue) ? null : parsedValue;

            return unformattedValue;
        },
        reverseString (value) {
            return value.split('').reverse().join('');
        }
    }
};
</script>

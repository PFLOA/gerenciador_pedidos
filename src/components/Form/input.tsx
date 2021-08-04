import React, {
    FormEvent,
    InputHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask?: string
    label: string
    name: string
}

const Input: React.FC<InputProps> = ({ label, name, mask = '', ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const maxLength = mask ? mask.length : undefined;

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value;
            },
            setValue: (ref, value) => {
                ref.current.value = value;
            },
            clearValue: ref => {
                ref.current.value = '';
            },
        });
    }, [fieldName, registerField]);

    const handleValidateMask = useCallback(() => {
        const inputRegs: { [key: string]: string } = {
            '9': '([0-9])',
            a: '([A-Za-z])',
            A: '([A-Z])',
            '?': '([A-Z0-9])',
            '*': '([A-Za-z0-9])',
        };
        const splitedMask = mask.split('');
        const regexMap = splitedMask.map((i: string) => {
            if (inputRegs[i]) return new RegExp(inputRegs[i]);
            return i;
        });

        return regexMap;
    }, [mask]);

    const handleKeyUp = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            if (mask) {
                const { value } = e.currentTarget;
                const testValue = value.split('');
                const regexMapped = handleValidateMask();

                const newValue = testValue.map((letter, index) => {
                    const regex = regexMapped[index];
                    if (typeof regex === 'object') {
                        return regex.test(letter)
                            ? letter.replace(regexMapped[index], '$1')
                            : '';
                    }
                    return regex;
                });

                e.currentTarget.value = newValue.join('');

                return e;
            }
        },
        [handleValidateMask, mask],
    );

    const handleKeyPress = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            if (mask) {
                const regexMapped = handleValidateMask();

                const indexNextRegex = e.currentTarget.value.length;
                if (
                    typeof regexMapped[indexNextRegex] !== 'object' &&
                    typeof regexMapped[indexNextRegex] !== 'undefined'
                ) {
                    e.currentTarget.value += regexMapped[indexNextRegex];
                }

                return e;
            }
        },
        [handleValidateMask, mask],
    );

    return (
        <Container className="form-floating mb-3 mx-0">
            <input
                className={`form-control ${error && 'is-invalid'}`}
                maxLength={maxLength}
                id={name}
                name={name}
                ref={inputRef}
                defaultValue={defaultValue}
                onKeyUp={e => handleKeyUp(e)}
                onKeyPress={e => handleKeyPress(e)}
                placeholder={label}
                {...rest}
            />
            <label htmlFor={label}> {label} </label>
        </Container>
    );
};

export default Input;
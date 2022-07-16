import { FieldHookConfig, useField } from 'formik'
import React from 'react'
import style from './formsControl.module.scss'

interface OtherProps {
    label: string;
}

export function MyTextInput({ className, label, ...props }: FieldHookConfig<string> & OtherProps) {
    const [field, meta] = useField(props)
    const hasError = meta.touched && meta.error
    return (
        <div className={`${style.formControl} ${hasError && style.error}`}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <div className={style.inputBlock}>
                <input
                    className={className}
                    {...field}
                    placeholder={props.placeholder}
                    type={props.type}
                />
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

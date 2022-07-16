import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import { MyTextInput } from '../FormikFormsBuild/FormikFormsBuild'
import style from './inputForm.module.scss'
import { useAppDispatch } from '../../hooks/redux'
import { setClient } from '../../store/orderSlice'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { getOrder } from '../../store/selectors/orderSelectors'
import { useNavigate } from 'react-router-dom'

const InputForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const order = useSelector(getOrder)

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Enter your name'),
                    email: Yup.string().email('Email is not valid').required('Enter your email'),
                    phone: Yup.string()
                        .phone('Phone number is not valid')
                        .required('Enter your phone'),
                    address: Yup.string().required('Enter your address'),
                })}
                onSubmit={(formData) => {
                    dispatch(setClient(formData))
                }}
            >
                {(formik) => (
                    <Form>
                        <div>
                            <MyTextInput
                                className={style.inputPlace}
                                name="name"
                                type="text"
                                label="Name"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <MyTextInput
                                className={style.inputPlace}
                                label="Email"
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <MyTextInput
                                className={style.inputPlace}
                                label="Phone"
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div>
                            <MyTextInput
                                className={style.inputPlace}
                                label="Address"
                                type="text"
                                name="address"
                                placeholder="Address"
                            />
                        </div>
                        <Button
                            className={style.button}
                            sx={{
                                display: 'block',
                                margin: '50px auto',
                            }}
                            onClick={
                                order.length
                                    ? () => formik.handleSubmit()
                                    : () => navigate('/products')
                            }
                            variant="contained"
                            size="large"
                        >
                            {order.length ? 'Submit' : 'Go to Stores'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default InputForm

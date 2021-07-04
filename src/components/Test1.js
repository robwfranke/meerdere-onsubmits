import React, {useState, useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import styles from "./Test1.module.css"

function Test1() {
    const {register, handleSubmit, formState: {errors}} = useForm();


    function onSubmit(data) {

        console.log("IN Test1", data)

    }


    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <fieldset className={styles["containerLeft"]}>

                <h3>Test1</h3>
                <label htmlFor="city-field">
                    Stad:
                    <input
                        defaultValue=""
                        type="text"
                        {...register("city", {required: true})}
                    />
                    {errors.city&&
                    <div>Test1, vul naam 1</div>
                    }


                </label>

                <label htmlFor="street-field">
                    Straatnaam en nummer:
                    <input
                        defaultValue=""
                        type="text"
                        {...register("street",)}
                    />

                </label>


                <button
                    type="submit"
                    className={styles["submit-button"]}
                >
                    Vastleggen
                </button>


            </fieldset>

        </form>

    )

}


export default Test1;

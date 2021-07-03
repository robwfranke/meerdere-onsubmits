import React, {useState, useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import styles from "./Profile.module.css"


function Profile() {

    // const {register, handleSubmit, formState: {errors}} = useForm();
    // const {register2, handleSubmit2, formState: {errors2}} = useForm();
    const {register, errors, handleSubmit} = useForm({
        mode: "onBlur"
    });


    const {
        register: register2,
        errors: errors2,
        handleSubmit: handleSubmit2
    } = useForm({
        mode: "onBlur"
    });

    const [errorSaveFile, setErrorSaveFile] = useState(false);
    const [errorDeleteFile, setErrorDeleteFile] = useState(false);
    const [errorGetFile, setErrorGetFile] = useState(false);/*als er tijd is dit toevoegen!*/
    const [errorUpdateFile, setErrorUpdateFile] = useState(false);/*als er tijd is dit toevoegen!*/

    const [allImages, setAllImages] = useState([]);
    const [length, setLength] = useState(0);
    const [fileUrl, setFileUrl] = useState()
    const [fileID, setFileID] = useState()
    const [showFileFromKeepName, setShowFileFromKeepName] = useState(false)
    const [fileToUpload, setFileToUpload] = useState();
    const [nameFileToUpload, setNameFileToUpload] = useState()
    const [updateFiles, setupdateFiles] = useState(false)
    const [changeProfileData, setChangeProfileData] = useState(false)
    const {errorSubmit2, setErrorSubmit2} = useState(false);


    function onSubmit1(data) {

        console.log("IN onSubmit1", data)

    }


    function onSubmit2(data) {

        console.log("IN onSubmit2", data)

    }

    return (
        <>
<div className={styles["containerLeftRight"]}>
            <div>

                <form key={1} onSubmit={handleSubmit(onSubmit1)}>

                <fieldset className={styles["containerLeft"]}>

                    <h3>onSubmit 1</h3>
                    <label htmlFor="city-field">
                        Stad:
                        <input
                            defaultValue=""
                            type="text"
                            {...register("city",)}
                        />

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
            </div>



    <div>
        <form key={2} onSubmit={handleSubmit2(onSubmit2)}>

            <fieldset className={styles["containerLeft"]}>

                <h3>onSubmit 2</h3>
                <label htmlFor="city-field">
                    Stad:
                    <input
                        defaultValue=""
                        type="text"
                        {...register("city",)}
                    />

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
    </div>







</div>
        </>
    )
}

export default Profile;

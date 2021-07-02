import React, {useState, useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import styles from "./Profile.module.css"


function Profile() {

    // const {register, handleSubmit, formState: {errors}} = useForm();
    // const {register2, handleSubmit2, formState: {errors2}} = useForm();
    const { register, errors, handleSubmit } = useForm({
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

        console.log("IN onSubmit1",data)

    }


    function onSubmit2(data) {

        console.log("IN onSubmit2",data)

    }

    return (


        <>

            <form key={1} onSubmit={handleSubmit(onSubmit1)}>
                <h1>onSubmit 1</h1>

                <div>
                    <label htmlFor="city-field">
                        Stad:
                        <input
                            defaultValue=""
                            type="text"
                            {...register("city",)}
                        />

                    </label>

                </div>

                <div>
                    <label htmlFor="street-field">
                        Straatnaam en nummer:
                        <input
                            defaultValue=""
                            type="text"
                            {...register("street",)}
                        />

                    </label>

                </div>

                <button
                    type="submit"
                    className={styles["submit-button"]}
                >
                    Inloggen
                </button>

            </form>






            <form key={2} onSubmit={handleSubmit2(onSubmit2)}>
                <h1>onSubmit 2</h1>

                <div>
                    <label htmlFor="city-field">
                        Stad:
                        <input defaultValue=""
                            type="text"
                            {...register2("city2",)}
                        />

                    </label>

                </div>

                <div>
                    <label htmlFor="street-field">
                        Straatnaam en nummer:
                        <input
                            defaultValue=""
                            type="text"
                            {...register2("street2",)}
                        />

                    </label>

                </div>

                <button
                    type="submit"
                    className={styles["submit-button"]}
                >
                    Inloggen
                </button>

            </form>











        </>

    )

}

export default Profile;

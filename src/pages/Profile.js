import React, {useState, useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useHistory} from 'react-router-dom';
import styles from "./Profile.module.css"
import Test1 from "../components/Test1";
import Test2 from "../components/Test2";


function Profile() {


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




    return (
        <>
            <div className={styles["containerLeftRight"]}>



                <div>
                    <Test1/>
                </div>


                <div>
                    <Test2/>
                </div>

            </div>
        </>
    )
}

export default Profile;

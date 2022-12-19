import { ref, uploadBytes } from "firebase/storage";
import { useState, useEffect } from "react";
import { projectStorage, storageRef } from "../firebase/config";


const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        console.log(projectStorage)
        console.log(storageRef)
        const imageRef = ref(projectStorage, `images/${file.name}`)
        uploadBytes(imageRef, file).then((snap) => {
            let percentage =  (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)

        }).catch(err => console.error(err))

        // storageRef.put(file).on('state_changed', (snap) => {
        //     let percentage =  (snap.bytesTransferred / snap.totalBytes) * 100
        //     setProgress(percentage)
        // }, (err) => {
        //     setError(err)
        // }, async () => {
        //     const url = await storageRef.getDownloadURL()
        //     setUrl(url)
        // })

    }, [file])

    return {progress, url, error}
}

export default useStorage

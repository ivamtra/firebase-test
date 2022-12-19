import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore"
import { projectStorage, db } from "../firebase/config"
import { getDownloadURL, listAll, ref } from "firebase/storage"
import "./Image.css"
const Image = () => {
    const [imageList, setImageList] = useState([])


    const imageListRef = ref(projectStorage, 'images')

    useEffect(() => {
        const imagesRef =collection(db, 'images')
        getDocs(imagesRef).then(snap => {
            console.log(snap.docs.forEach((item => console.log(item.data()))))
            getDownloadURL(snap.image).then(url =>
                console.log(url)
            ).catch(err => console.error(err))
        })


        // Get all images from storage
        listAll(imageListRef).then((res) => {
            console.log(res.items)

            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    console.log(url)
                    setImageList(prev => [...prev, url])
                })
            })
        })
    }, [])

    


    return (
        <>
            <h1>Image</h1>
            {imageList.map(item => {
                return (
                        <img className="img" src={item}/>
                )
            })}
        </>
    )

}

export default Image
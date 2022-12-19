import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
const useImage = (title) => {
    const docRef = doc(db, "images", "SF")
}
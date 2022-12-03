import {getDocs, collection } from "firebase/firestore";
import db from '../services/firebaseConfig';

export default async function getLastDocument(colecao) {
  const snapshot = await getDocs(collection(db, colecao))
	var ultimo = 0

  snapshot.docs.forEach(element => {
		let ID = element.id
		if(ID > ultimo)
			ultimo = ID
	})
	return ultimo
}
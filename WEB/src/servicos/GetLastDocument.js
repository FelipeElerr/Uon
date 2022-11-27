import { doc, getDocs, collection } from "firebase/firestore";
import db from '../config/firebase';

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
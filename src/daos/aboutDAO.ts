import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

class aboutDAO {
  collectionRef: any;
  constructor() {
    this.collectionRef = collection(db, 'about');
  }

  async getAllAboutData() {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}

export default new aboutDAO();
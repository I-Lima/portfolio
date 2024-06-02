import { collection, DocumentData, getDocs, Query } from "firebase/firestore";
import { db } from "../../firebase";

class aboutDAO {
  collectionRef: Query<unknown, DocumentData>;
  constructor() {
    this.collectionRef = collection(db, "about");
  }

  async getAllAboutData() {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  }
}

export default new aboutDAO();

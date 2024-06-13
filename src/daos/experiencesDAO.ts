import { collection, DocumentData, getDocs, Query } from "firebase/firestore";
import { db } from "../../firebase";

class experiencesDAO {
  collectionRef: Query<unknown, DocumentData>;
  constructor() {
    this.collectionRef = collection(db, "experiences");
  }

  /**
   * Retrieves all experiences data from the Firestore collection.
   *
   * @return {Promise<Experience[]>} An array of experiences, where each experience is an object
   * containing the experience ID and its data.
   */
  async getAllExperiencesData() {
    const snapshot = await getDocs(this.collectionRef);
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return data ? { id: doc.id, ...data } : null;
    });
  }
}

export default new experiencesDAO();

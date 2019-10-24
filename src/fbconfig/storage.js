import { storage } from "./fb";

export const uploadImage = (ref = undefined, file) => {
  const storageRef = storage.ref(ref);
  storageRef.put(file).then(snapshot => {
    console.log("Uploaded a blob or file!");
  });
};

export const deleteImage = (ref, file) => {
  const storageRef = storage.ref(ref);
  storageRef
    .delete()
    .then(function() {
      console.log("Deleted a blob or file!");
    })
    .catch(function(error) {
      console.log("Uh-oh, an error occurred!");
    });
};

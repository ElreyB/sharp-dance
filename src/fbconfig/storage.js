import { storage } from "./fb";
// Points to the root reference

// // Points to 'images'
// const imagesRef = storageRef.child("images");

// // Points to 'images/space.jpg'
// // Note that you can use variables to create child values
// const fileName = "space.jpg";
// const spaceRef = imagesRef.child(fileName);

// // File path is 'images/space.jpg'
// const path = spaceRef.fullPath;

// // File name is 'space.jpg'
// const name = spaceRef.name;

// // Points to 'images'
// const imagesRef = spaceRef.parent;

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

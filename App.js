import { View,Button } from "react-native";
import React, { useState } from "react";
import { Camera } from "expo-camera";

const App = () => {
  const [image, setImage] = useState(null);

  const takePicture = async () => {
    const camera = new Camera();
    const { data } = await camera.takePictureAsync();
    setImage(data);
  };

  return (
    <View>
      <Button title="Take Picture" onPress={takePicture} />
      {image && <Image source={image} />}
    </View>
  );
};

export default App;

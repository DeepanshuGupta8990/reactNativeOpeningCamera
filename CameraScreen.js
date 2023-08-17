import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: false };
      const data = await this.camera.takePictureAsync(options);
      setImageUri(data.uri);
    }
  };

  const selectImage = () => {
    ImagePicker.launchImageLibrary({}, response => {
      if (!response.didCancel && !response.error) {
        setImageUri(response.uri);
      }
    });
  };

  return (
    <View>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
      />
      <Button title="Take Picture" onPress={takePicture} />
      <Button title="Select Image" onPress={selectImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default CameraScreen;

import AsyncStorage from "@react-native-community/async-storage";

const key = "randomNumbers"
export const setItem = async (value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error saving data value
  }
}

export const getItem = async () => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return null;
  }
}


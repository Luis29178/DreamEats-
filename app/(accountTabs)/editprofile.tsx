import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Fonts } from "@/constants/Fonts";
import ProfileTextInput from "@/components/textInputs/ProfileTextInput";
import ProfileDateInput from "@/components/textInputs/ProfileDateInput";

const editprofile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerBackBtn}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={Colors.paleAqua}
          />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Profile Info</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Edit Profile</Text>
        <Text style={styles.titleInfoText}>
          Manage your personal information
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View  style={styles.inputFirstName}>
        <ProfileTextInput
          title="First Name"
          defaultText="Luis"
          showCounter={true}
          maxLength={30}
        />
        </View>
        <View  style={styles.inputLastName}>
        <ProfileTextInput
          title="Last Name"
          defaultText="Bazaldua"
          showCounter={true}
          maxLength={30}
        />
        </View>
        <View style={styles.inputDate}>
          <ProfileDateInput title="Birthday" />
        </View>
      </View>
    </View>
  );
};

export default editprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputFirstName:{
    marginBottom: 20,
    paddingHorizontal:12,
  },
  inputLastName:{
    marginBottom: 20,
    paddingHorizontal:12,
  },
  inputDate: {
    width: "50%",
     paddingHorizontal: 12,

  },
  header: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: Colors.royalBlue,
    alignItems: "center",
  },
  headerText: {
    color: Colors.paleAqua,
    fontSize: 20,
  },
  headerBackBtn: {
    height: 50,
    width: 50,
    justifyContent: "center",
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 30,
    fontFamily: Fonts.title,
    color: Colors.primary,
    marginBottom: 5,
  },
  titleInfoText: {
    fontSize: 16,
    fontFamily: Fonts.subBody,
    color: Colors.primary,
  },
  contentContainer: {},
});

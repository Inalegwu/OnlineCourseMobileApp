import {
  Text,
  View,
  ActivityIndicator,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Share,
} from "react-native";
import React, { useState, useRef, useMemo } from "react";
import tw from "twrnc";
import * as API from "../../../data/remote/userApiCalls";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NetworkContext } from "../../../Components/ContextProvider";
import BookmarkBtn from "../../../Components/BookmarkBtn";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Input from "../../../Components/Input";

interface ResponseData {
  status: boolean;
  message?: string;
  data?: object[];
}

//TODO defining a data type to be recognised by the userData variable
interface UserDataType {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  token: string;
  user_id: number;
  validity: number;
}

export default function CourseDetails({ route, navigation }: any) {
  const { data }: any = route.params;
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined>("");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "100%"], []);
  const shareData = async () => {
    try {
      await Share.share({
        message: `${data.title} is a great course provided by E-Limi-Education and C-Stemp EduTech, With Outcomes Such as ${data.outcomes}. Attend Here ${data.shareable_link}`,
      });
    } catch (error) {
      alert(error);
    }
  };

  // !read only
  const userData: UserDataType = React.useContext(NetworkContext);

  const addToCart = () => {
    if (addedToCart === true) {
      setAddedToCart(false);
      console.log(
        "Removing" +
          " " +
          data.title +
          " " +
          "at " +
          data.price +
          " " +
          "From cart..."
      );
    } else {
      setAddedToCart(true);
      console.log(
        "Adding" +
          " " +
          data.title +
          " " +
          "at " +
          data.price +
          " " +
          "To cart..."
      );
    }
  };

  const checkEnrollment = (courseData: any, userData: any) => {
    console.log("Checking Enrollment...");
    API.fetchMyCourse(userData.token)
      ?.then((data: ResponseData | any) => {
        // enrollment data is an array of objects which is the
        // list of courses that the current logged in user is subscribed to
        const enrollementData: Array<Object> = data.data;
        for (let index = 0; index < enrollementData?.length; index++) {
          const element: any = enrollementData[index];
          if ((element.id = courseData.id)) {
            console.log("matching id detected");
            setIsEnrolled(true);
          } else {
            console.log("no matching id detected");
            setIsEnrolled(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // check enrollment for the currently selected course
  const enrol = () => {
    console.log("Enrolling...");
    if (data.is_free_course == null) {
      setVisible(true);
    } else {
      API.enrol(userData.token, data.id)
        ?.then((data: ResponseData) => {
          setMessage(data.message);
          console.log(message);
          setIsEnrolled(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const closeModal = () => {
    setVisible(false);
  };

  const submitCardNumber = (number: Number) => {
    console.log(number);
  };
  const submitCVV = (nubmer: Number) => {
    console.log(nubmer);
  };
  const submitExpDate = (number: Number) => {
    console.log(number);
  };

  return (
    <NetworkContext.Provider value={userData}>
      <>
        <StatusBar barStyle={"light-content"} />
        {checkEnrollment(data, userData)}
        {/* Top View */}
        <View>
          <Image
            source={{ uri: route.params.data.thumbnail }}
            style={[
              tw`h-95 w-full`,
              {
                shadowColor: "#171717",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              },
            ]}
          />
          <BookmarkBtn
            size={20}
            onPress={addToCart}
            style={tw`p-5 bg-gray-200 w-15 top-88 left-81 rounded-full shadow-lg items-center content-center absolute z-10`}
            iconName={addedToCart === false ? "cart-outline" : "cart"}
          />
          <View
            style={tw`mt-15 ml-6 mr-6 flex absolute flex-row justify-between`}
          >
            {/* Back Btn */}
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <FontAwesome
                size={20}
                style={tw`text-red-800`}
                name="arrow-left"
              />
            </TouchableOpacity>
            {/* Share Button */}
            <TouchableOpacity onPress={shareData} style={tw`left-78 top--3`}>
              <Ionicons name="share" size={30} style={tw`text-red-800`} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={tw`p-2 mb-17`}>
          {/* Title */}
          <View style={tw` mt-3 flex flex-row justify-between m-2`}>
            <Text style={tw`text-3xl w-85 ml-2 text-black font-bold`}>
              {data.title}
            </Text>
          </View>
          {/* Quick Info */}
          <View style={tw`ml-4 mr-4`}>
            <View style={tw`flex flex-row`}>
              <View
                style={tw`bg-red-800 w-20 p-3 items-center content-center p-1 rounded-xl`}
              >
                {data.discount_flag === null ? (
                  <Text style={tw`font-bold text-white`}>Paid</Text>
                ) : (
                  <Text style={tw`font-bold text-white`}>Discounted</Text>
                )}
              </View>
            </View>
            <View style={tw`mt-3 ml-2 mr-2 flex flex-row`}>
              <Text style={tw`font-bold text-red-800 text-xl`}>
                {data.price}
              </Text>
              {/* {data.discounted_flag === null ? null : (
                <Text style={tw`text-gray-400 ml-4 mt-2`}>
                  {data.discounted_price}
                </Text>
              )} */}
            </View>
            <View
              style={tw`flex flex-row items-start content-start justify-between ml-2 mr-2 mt-3`}
            >
              {/* Info */}
              <View style={tw`flex flex-row w-20`}>
                <FontAwesome
                  name="users"
                  size={20}
                  style={tw`text-red-800 mt-1`}
                />
                <Text style={tw`text-lg ml-3 font-bold text-red-800`}>
                  {data.total_enrollment}
                </Text>
              </View>
            </View>
            {/* Tutor */}
            <View style={tw`p-2 mt-3`}>
              <Text style={tw`text-gray-600 text-xs`}>Taught By : </Text>
              <Text style={tw`font-bold text-lg text-gray-900`}>
                {data.instructor_name}
              </Text>
            </View>
            {/* Description */}
            <Text style={tw`font-bold ml-2 w-100 text-xl mt-3 text-red-800`}>
              About The Course
            </Text>
            <View style={tw`p-2`}>
              <Text style={tw`text-gray-900 font-bold text-xl`}>
                {/* {data.short_description.slice(0, 62) + "..."} */}
                {data.short_description}
              </Text>
            </View>
            <TouchableOpacity
              style={
                isEnrolled === false
                  ? tw`p-4 mt-4 mb-7 items-center content-center rounded-full bg-red-800`
                  : tw`p-4 mt-4 mb-7 items-center content-center rounded-full bg-gray-300`
              }
              onPress={enrol}
            >
              <Text style={tw`font-bold text-white text-lg`}>
                {isEnrolled === false ? `Enroll - ${data.price}` : "Enrolled"}
              </Text>
            </TouchableOpacity>
            {visible === true ? (
              <BottomSheet
                snapPoints={snapPoints}
                ref={bottomSheetRef}
                detached={false}
                style={tw`p-2 mb-30 w-full mb-10 z-100`}
              >
                <BottomSheetScrollView
                  contentContainerStyle={tw`p-3 justify-center items-center`}
                >
                  <View style={tw``}>
                    <View style={tw`w-90 flex flex-row p-4 justify-between`}>
                      <Text style={tw`font-bold text-lg mt-2`}>
                        Pay For Course
                      </Text>
                      <TouchableOpacity style={tw`p-2`} onPress={closeModal}>
                        <FontAwesome name="close" size={25} />
                      </TouchableOpacity>
                    </View>
                    <View style={tw`p-3`}>
                      <Input
                        placeholder="Card Number"
                        style={tw`p-3 bg-gray-100 rounded-lg text-red`}
                        submit={submitCardNumber}
                      />
                      <View style={tw`flex flex-row justify-between`}>
                        <Input
                          placeholder="CVV"
                          style={tw`p-3 bg-gray-100 text-center rounded-lg w-20 mt-2`}
                          submit={submitCVV}
                        />
                        <Input
                          placeholder="Expiry Date"
                          style={tw`p-3 bg-gray-100 rounded-lg w-63 mt-2`}
                          submit={submitExpDate}
                        />
                      </View>
                      <TouchableOpacity
                        style={tw`p-4 bg-red-800 rounded-lg mt-5 text-center`}
                      >
                        <Text style={tw`text-center text-white font-bold`}>
                          Pay Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </BottomSheetScrollView>
              </BottomSheet>
            ) : (
              <View></View>
            )}
          </View>
        </ScrollView>
      </>
    </NetworkContext.Provider>
  );
}
